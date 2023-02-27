import React from "react";

import "./Column.css";

const Column = ({ children, variant }) => {
    const classes = ["column"];

    if (variant?.margin !== undefined) {
        classes.push(`column_margin_${variant.margin}`);
    }

    if (variant?.width !== undefined) {
        classes.push(`column_width_${variant.width}`);
    }

    return (
        <div className={classes.join(" ")}>
            {children}
        </div>
    );
};

export default Column;