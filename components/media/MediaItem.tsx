import classes from "./MediaItem.module.css";

type Props = {
  image: string;
  title: string;
  description : string| JSX.Element | JSX.Element[]
  id: number;
}

const MediaItem: React.FC<Props> = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
      </div>
    </li>
  );
};

export default MediaItem;
