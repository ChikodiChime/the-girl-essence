import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  borderRadius?: string;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  hoverGradientFrom?: string;
  hoverGradientTo?: string;
  shadowColor?: string;
}

export const Button = ({
  children,
  onClick,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  borderRadius = "0.5rem", // Default to rounded-lg (8px)
  className = "",
  fullWidth = false,
  disabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  gradientFrom = "#c8335a",
  gradientTo = "#a02847",
  hoverGradientFrom = "#a02847",
  hoverGradientTo = "#8b1f3a",
  shadowColor = "rgba(200, 51, 90, 0.4)",
  ...props
}: ButtonProps) => {
  // Base classes
  const baseClasses = `relative overflow-hidden font-semibold text-center transition-all duration-300 flex items-center justify-center ${
    fullWidth ? "w-full" : "w-fit"
  }`;

  // Size classes
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  // Variant classes
  const variantClasses = {
    primary: `bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] text-white`,
    secondary: "bg-white text-[#c8335a] border border-[#c8335a]",
    outline:
      "bg-transparent text-[#c8335a] border border-[#c8335a] hover:bg-[#c8335a] hover:bg-opacity-10",
    ghost:
      "bg-transparent text-[#c8335a] hover:bg-[#c8335a] hover:bg-opacity-10",
  };

  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${
    variantClasses[variant]
  } ${className}`;

  // Animation variants
  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: `0 10px 30px -10px ${shadowColor}`,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  // Render as link or button
  const renderButton = () => (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || isLoading}
      style={{ borderRadius }}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover={!disabled ? "hover" : {}}
      whileTap={!disabled ? "tap" : {}}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          <span className="relative z-10">{children}</span>
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-r"
        initial={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
          opacity: 1,
        }}
        whileHover={{
          background: `linear-gradient(to right, ${hoverGradientFrom}, ${hoverGradientTo})`,
          opacity: 1,
        }}
        transition={{ duration: 0.3 }}
      /> */}
    </motion.button>
  );

  const renderLink = () => (
    <motion.a
      href={href}
      className={buttonClasses}
      style={{ borderRadius }}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span className="relative z-10">{children}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-r"
        initial={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
          opacity: 1,
        }}
        whileHover={{
          background: `linear-gradient(to right, ${hoverGradientFrom}, ${hoverGradientTo})`,
          opacity: 1,
        }}
        transition={{ duration: 0.3 }}
      /> */}
    </motion.a>
  );

  return href ? renderLink() : renderButton();
};
