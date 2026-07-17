import { useEffect, useState } from "react";

function useTypewriter(words, typingSpeed = 70, deletingSpeed = 50, pause = 1200) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordComplete = text === currentWord;
    const isWordDeleted = text === "";

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (isWordComplete && !isDeleting) {
      delay = pause;
    }

    const timeout = window.setTimeout(() => {
      if (isWordComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isWordDeleted && isDeleting) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setText(
        isDeleting
          ? currentWord.slice(0, text.length - 1)
          : currentWord.slice(0, text.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deletingSpeed, isDeleting, pause, text, typingSpeed, wordIndex, words]);

  return text;
}

export default useTypewriter;
