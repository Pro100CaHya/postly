import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = ({ links, mixin }) => {
    const classes = ["nav"];

    if (mixin !== undefined) {
        classes.unshift(mixin);
    }

    return (
        <nav className={classes.join(" ")}>
            <ul className="nav__list">
                {
                    links.map((link) =>
                        <li
                            key={link.id}
                            className="nav__item"
                        >
                            <Link className="nav__link" to={link.path}>
                                {link.name}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default Nav;