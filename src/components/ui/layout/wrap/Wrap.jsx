import React from "react";

import "./Wrap.css";

const Wrap = ({ children, mixin, variant }) => {
    const classes = ["wrap"];

    if (variant?.padding !== undefined) {
        classes.push(`wrap_padding_${variant.padding}`);
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

export default Wrap;