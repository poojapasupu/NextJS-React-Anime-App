import React from "react";
import Link from "next/link";

import { NUMBER_OF_PAGES } from "../../lib/properties/app-variables";

const DynamicPageNumbers = () => {
  let numArray = [];

  for (let i = 1; i <= NUMBER_OF_PAGES; i++) {
    numArray.push(i);
  }

  return (
    <ul>
      {numArray.map((num) => {
        return (
          <>
            {num === 1 && (
              <li>
                <Link href="/">1</Link>
              </li>
            )}
            {num !== 1 && (
              <li>
                <Link href={`/page/${num}`}>
                  <a>{num}</a>
                </Link>
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};

export default DynamicPageNumbers;
