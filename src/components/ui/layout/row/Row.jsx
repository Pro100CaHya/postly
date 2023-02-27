import React from "react";

import "./Row.css";

const Row = ({ children, variant }) => {
    const classes = ["row"];

    if (variant?.margin !== undefined) {
        classes.push(`row_margin_${variant.margin}`);
    }

    return (
        <div className={classes.join(" ")}>
            {children}
        </div>
    );
};

export default Row;