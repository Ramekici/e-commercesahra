import React from "react";
//import Menu from "./navBar";
//import "../../src/styles.css";

const Layout = ({
    title = "Title",
    className,
    children
    }) => (
    <div>
        <div className="jumbotron">
        <h2>{title}</h2>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
