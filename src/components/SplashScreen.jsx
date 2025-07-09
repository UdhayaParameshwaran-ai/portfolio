import React, { useEffect, useState } from "react";

const greetings = [
  "Hi.!",
  "வணக்கம்.!",
  "Hola.!",
  "Bonjour.!",
  "Hallo.!",
  "Ciao.!",
  "नमस्ते.!",
  "こんにちは.!",
  "안녕하세요.!",
  "Olá.!",
  "مرحبا.!",
];

const SplashScreen = ({ onDone }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrentGreeting((prev) => (prev + 1) % greetings.length);
        setFade(true); // fade-in
      }); // match the fade-out duration
    }, 250); // change greeting every 400ms

    const timer = setTimeout(() => {
      clearInterval(interval);
      onDone(); // after 2s
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-screen w-screen top-0 left-0 fixed flex items-center justify-center bg-gray-950">
      <p
        className={`text-4xl font-bold text-emerald-400 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {greetings[currentGreeting]}
      </p>
    </div>
  );
};

export default SplashScreen;
