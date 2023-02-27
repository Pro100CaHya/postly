import React from "react";

import "./Container.css";

const Container = ({ children, variant }) => {
    const classes = ["container"];

    if (variant?.width !== undefined) {
        classes.push(`container_width_${variant.width}`);
    }
    
    return (
        <div className={classes.join(" ")}>
            {children}
        </div>
    );
};

export default Container;