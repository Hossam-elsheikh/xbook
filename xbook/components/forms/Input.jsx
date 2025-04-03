import React from "react";

const Input = ({ type, name, placeholder, id, className, required }) => {
	return (
		<input
			id={id}
			type={type}
			name={name}
			required={required}
			placeholder={placeholder}
			className={`px-3 py-2 border-b w-full outline-none text-md font-semibold ${className}`}
		/>
	);
};
export default Input;
