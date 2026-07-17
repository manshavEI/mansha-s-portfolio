const stars = Array.from({ length: 54 }, (_, index) => ({
  id: index,
  size: (index % 3) + 1,
  left: (index * 37 + 11) % 100,
  top: (index * 61 + 7) % 100,
  delay: (index % 8) * 0.35,
  duration: 3 + (index % 5),
}));

const meteors = [
  { id: 1, left: 78, top: 8, delay: 1 },
  { id: 2, left: 45, top: 20, delay: 7 },
  { id: 3, left: 92, top: 34, delay: 13 },
];

function CosmicBackground() {
  return (
    <div className="cosmic-background" aria-hidden="true">
      <div className="cosmic-glow cosmic-glow--one" />
      <div className="cosmic-glow cosmic-glow--two" />
      {stars.map((star) => (
        <span
          className="star"
          key={star.id}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <span
          className="meteor"
          key={meteor.id}
          style={{
            left: `${meteor.left}%`,
            top: `${meteor.top}%`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default CosmicBackground;
