import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-extension text-white rounded transition duration-300 ease-in-out transform hover:bg-yellow-500 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
