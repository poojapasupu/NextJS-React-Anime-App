import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import PageNavigation from "./PageNavigation";

const Layout: React.FC<{}> = ({children}) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
      <PageNavigation />
    </div>
  );
}

export default Layout;
