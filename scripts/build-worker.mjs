import { mkdir, writeFile } from "node:fs/promises";

const workerSource = `const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return response;
    }

    const indexUrl = new URL("/index.html", request.url);
    return env.ASSETS.fetch(new Request(indexUrl, request));
  },
};

export default worker;
`;

await mkdir("dist/server", { recursive: true });
await writeFile("dist/server/index.js", workerSource, "utf8");
