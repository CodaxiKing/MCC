interface WaveDividerProps {
  color: string;
  variant?: "wave1" | "wave2" | "wave3";
  flip?: boolean;
}

export default function WaveDivider({ color, variant = "wave1", flip = false }: WaveDividerProps) {
  const waves = {
    wave1: (
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
        <path
          d="M0 0L48 10C96 20 192 40 288 46.7C384 53 480 47 576 43.3C672 40 768 40 864 46.7C960 53 1056 67 1152 70C1248 73 1344 67 1392 63.3L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
          fill={color}
        />
      </svg>
    ),
    wave2: (
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
        <path
          d="M0 64L48 58.7C96 53 192 43 288 48C384 53 480 75 576 80C672 85 768 75 864 64C960 53 1056 43 1152 42.7C1248 43 1344 53 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V64Z"
          fill={color}
        />
      </svg>
    ),
    wave3: (
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
        <path
          d="M0 45L48 50C96 55 192 65 288 61.7C384 58 480 42 576 37.3C672 33 768 40 864 48.3C960 57 1056 67 1152 68.3C1248 70 1344 63 1392 59.7L1440 56V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V45Z"
          fill={color}
        />
      </svg>
    ),
  };

  return (
    <div 
      className="absolute bottom-0 left-0 right-0 w-full z-10 pointer-events-none" 
      style={{ 
        height: '80px',
        transform: flip ? 'scaleY(-1)' : 'none',
      }}
    >
      {waves[variant]}
    </div>
  );
}
