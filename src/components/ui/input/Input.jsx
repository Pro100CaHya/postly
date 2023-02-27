import React from "react";

import "./Input.css";

const Input = ({ value, onChange, variant, type, placeholder }) => {
    const classes = ["input"];

    if (variant?.size !== undefined) {
        classes.push(`input_size_${variant.size}`);
    }

    if (variant?.style !== undefined) {
        classes.push(`input_style_${variant.style}`);
    }
    
    return (
        <input
            className={classes.join(" ")}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    );
};

export default Input;