import React from "react";

import "./Row.css";

const Row = ({ children, mixin, variant }) => {
    const classes = ["row"];

    if (variant?.margin !== undefined) {
        classes.push(`row_margin_${variant.margin}`);
    }

    if (mixin !== undefined) {
        classes.unshift(mixin);
    }

    return (
        <div className={classes.join(" ")}>
            {children}
        </div>
    );
};

export default Row;