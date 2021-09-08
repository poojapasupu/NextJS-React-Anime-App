import React from "react";
import Link from "next/link";

import { NUMBER_OF_PAGES } from "../../lib/properties/app-variables";

const DynamicPageNumbers: React.FC<{}> = () => {
  let numArray :number[] = [];

  for (let i = 1; i <= NUMBER_OF_PAGES; i++) {
    numArray.push(i);
  }

  return (
    <ul>
      {numArray.map((num) => {
        return (
          <li key={num}>
            {num === 1 && (
              <Link href="/">
                <a>1</a>
              </Link>
            )}
            {num !== 1 && (
              <Link href={`/page/${num}`}>
                <a>{num}</a>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default DynamicPageNumbers;
