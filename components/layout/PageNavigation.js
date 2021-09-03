import React from "react";
import classes from "./PageNavigation.module.css";
import Link from "next/link";
import DynamicPageNumbers from "./DynamicPageNumbers";

const PageNavigation = () => {
  return (
    <footer className={classes.footer}>
      <div>Pages</div>
      <nav>
        <DynamicPageNumbers />
      </nav>
    </footer>
  );
};

export default PageNavigation;
