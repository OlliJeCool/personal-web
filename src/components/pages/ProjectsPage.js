import ProjectMenu from "../projects/ProjectMenu";
import Card from "../ui/Card";
import classes from "./ProjectsPage.module.css";

export default function ProjectsPage(){
    return(
        <div className={classes.content}>
            <div className={classes.section}>
                <div className={classes.sub}>
                    <div className={classes.title}>
                    Projects
                    </div>
                </div>
                <div className={classes.wrapper}>
                    <Card>
                        <div className={classes.twrapper}>
                            You can find my projects on my <a href="https://github.com/OlliJeCool" target="_blank" rel="noreferrer">GitHub profile</a>.
                        </div>
                        <div className={classes.pwrapper}>
                            <ProjectMenu />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}