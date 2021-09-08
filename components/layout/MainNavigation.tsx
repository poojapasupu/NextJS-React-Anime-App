import classes from "./MainNavigation.module.css";
import Link from "next/link";

const MainNavigation: React.FC<{}> = ()=> {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>animeExplorer</div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/rest-api">REST API</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
