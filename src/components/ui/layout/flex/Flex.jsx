import React from "react";

import "./Flex.css";

const Flex = ({ children, mixin, variant }) => {
    const classes = ["flex"];

    if (variant?.alignItems !== undefined) {
        classes.push(`flex_align-items_${variant.alignItems}`);
    }

    if (variant?.flexDirection !== undefined) {
        classes.push(`flex_direction_${variant.flexDirection}`);
    }

    if (variant?.justifyContent !== undefined) {
        classes.push(`flex_justify-content_${variant.justifyContent}`);
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

export default Flex;