import React from "react";

import "./Switch.css";

const Switch = ({ id, leftImg, rightImg, variant, onChange }) => {
    const classes = ["switch"];

    if (variant?.size !== undefined) {
        classes.push(`switch_size_${variant.size}`);
    }

    if (variant?.style !== undefined) {
        classes.push(`switch_style_${variant.style}`);
    }
    
    return (
        <div className={classes.join(" ")}>
            <input
                onChange={(e) => onChange(e.target.checked)}
                className="switch__checkbox"
                id={id}
                type="checkbox"
            />
            <label
                className="switch__label"
                htmlFor={id}
            >
                <div className="switch__left-img">
                    {leftImg}
                </div>
                <div className="switch__right-img">
                    {rightImg}
                </div>
                <span className={"switch__button"} />
            </label>
        </div>
    );
};

export default Switch;