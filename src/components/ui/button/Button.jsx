import React, { forwardRef } from "react";

import "./Button.css";

const Button = forwardRef(({ children, onClick, mixin, variant, disabled}, ref) => {
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
            ref={ref}
            className={classes.join(" ")}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
});

export default Button;