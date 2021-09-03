import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import PageNavigation from "./PageNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <PageNavigation />
    </div>
  );
}

export default Layout;
