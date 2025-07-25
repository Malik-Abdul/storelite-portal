import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({
  ref,
  className = "",
  ...props
}: InputProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
  const baseClasses =
    "text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <input ref={ref} className={`${baseClasses} ${className}`} {...props} />
  );
};

export default Input;
