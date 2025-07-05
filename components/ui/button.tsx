interface ButtonProps {
  btnName?: string;
  onClick: () => void;
  variant?: 'outline' | 'default';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button = ({
  btnName = 'default',
  onClick,
  variant = 'default',
  size = 'sm',
  className = '',
}: ButtonProps) => {
  const variantStyles = {
    default: 'bg-black text-white hover:bg-gray-800 focus:ring-gray-500',
    outline:
      'bg-white text-gray-800 hover:bg-gray-100  border border-black  hover:bg-gray-50 focus:ring-gray-500',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm h-8',
    md: 'px-4 py-2 text-base h-10',
    lg: 'px-6 py-3 text-lg h-12',
  };

  const baseStyles = `w-auto p-6 h-10 rounded-md flex justify-center items-center cursor-pointer`;

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {btnName}
    </button>
  );
};

export default Button;
