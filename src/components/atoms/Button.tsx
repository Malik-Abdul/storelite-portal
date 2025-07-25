import type { FC } from "react";
import { btnVariantsClasses } from "../../data/BtnVariants";

interface ButtonProps {
  title?: string;
  clickHandler?: () => void;
  hoverHandler?: () => void;
  type?: "button" | "submit" | "reset";
  color?:
    | "default"
    | "primary"
    | "danger"
    | "pink"
    | "purple"
    | "cyan"
    | "success";
  variant?: "solid" | "outlined" | "dashed" | "filled" | "text" | "link";
}

const variantClassMap: Record<
  NonNullable<ButtonProps["variant"]>,
  Record<NonNullable<ButtonProps["color"]>, string>
> = btnVariantsClasses;

const Button: FC<ButtonProps> = ({
  title = "Click Button",
  clickHandler,
  hoverHandler,
  type = "button",
  color = "default",
  variant = "solid",
}) => {
  const base =
    "px-4 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 cursor-pointer";

  const variantClasses = variantClassMap[variant][color];

  return (
    <button
      type={type}
      onClick={clickHandler}
      onMouseEnter={hoverHandler}
      className={`${base} ${variantClasses}`}
    >
      {title}
    </button>
  );
};

export default Button;
