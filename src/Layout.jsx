import "./globals.css";
import { twMerge } from "tailwind-merge";

export default function Layout({ children }) {
  return (
    <div
      className={twMerge(
        "bg-gray-900 min-w-screen text-white antialiased font-lato"
      )}
    >
      {children}
    </div>
  );
}
