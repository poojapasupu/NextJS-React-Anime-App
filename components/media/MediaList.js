import React from "react";
import parse from "html-react-parser";

import MediaItem from "./MediaItem";
import classes from "./MediaList.module.css";

const MediaList = (props) => {
  return (
    <ul className={classes.list}>
      {props.media &&
        props.media.length > 0 &&
        props.media.map((image) => {
          return (
            <MediaItem
              image={image.coverImage.large}
              title={image.title.userPreferred}
              description={parse(image.description)}
              id={image.id}
              key={image.id}
            ></MediaItem>
          );
        })}
    </ul>
  );
};

export default MediaList;
