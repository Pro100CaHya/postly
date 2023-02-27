import React from "react";

import "./Button.css";

const Button = ({ children, onClick, mixin, variant, disabled}) => {
    const classes = ["button"];

    if (variant?.size !== undefined) {
        classes.push(`button_size_${variant.size}`);
    }

    if (variant?.style !== undefined) {
        classes.push(`button_style_${variant.style}`);
    }

    if (mixin !== undefined) {
        classes.unshift(mixin);
    }

    return (
        <button
            className={classes.join(" ")}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;