import Project from "./Project";
import classes from "./ProjectMenu.module.css";

export default function ProjectMenu(){
    return(
        <div className={classes.menu}>
            <Project name="Ata" link="https://github.com/ataitg" />
            <Project name="Periodic Table" link="https://github.com/OlliJeCool/PeriodicTable"/>
            <Project name="Personal Website" link="https://github.com/OlliJeCool/personal-web" />
            <Project />
            <Project />
        </div>
    );
}