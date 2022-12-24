import classes from "./Project.module.css";

export default function Project(props){
    return(
        <a href={props.link} className={classes.project} target="_blank" rel="noreferrer">{props.name}</a>
    );
}