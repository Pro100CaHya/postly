import React from "react";

import "./Select.css";

const Select = ({ defaultValue, value, onChange, options, variant }) => {
    const classes = ["select"];

    if (variant?.size !== undefined) {
        classes.push(`select_size_${variant.size}`);
    }

    if (variant?.style !== undefined) {
        classes.push(`select_style_${variant.style}`);
    }

    return (
        <select
            className={classes.join(" ")}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="" disabled>{defaultValue}</option>
            {
                options.map((option) =>
                    <option
                        key={option.id}
                        value={option.value}
                    >
                        {option.name}
                    </option>
                )
            }
        </select>
    );
};

export default Select;