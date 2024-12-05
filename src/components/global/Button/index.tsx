import React from "react";
import Image from "next/image";
import { ButtonProps } from "../../../types/ButtonProps";
// import Icons from "@/components/icons"; // Adjust the import path as needed

// interface ButtonProps {
// 	text?: string;
// 	type?: "button" | "submit" | "reset";
// 	className?: string;
// 	onClick?: () => void;
// 	disabled?: boolean;
// 	image?: string;
// 	icon?: JSX.Element | string;
// }

const Button: React.FC<ButtonProps> = ({
	text,
	type = "button",
	className = "",
	onClick,
	disabled = false,
	image,
	icon,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			type={type}
			className={`bg-primary text-black rounded-[6px] px-4 py-3 flex items-center justify-center space-x-2 ${className} ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			}`}>
			{image && <Image src={image} alt='button icon' width={24} height={24} />}
			{text && <span>{text}</span>}
			{icon && <span>{icon}</span>}
		</button>
	);
};

export default Button;
