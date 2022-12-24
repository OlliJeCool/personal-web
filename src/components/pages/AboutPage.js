import Card from "../ui/Card";
import classes from "./AboutPage.module.css";

export default function AboutPage(){
    return(
        <div className={classes.content}>
            <div className={classes.section}>
                <div className={classes.title}>About me</div>
                <div className={classes.wrapper}>
                <Card>
                    <ul>
                        <li>
                           Working in C# backend development in .NET Core Entity Framework for almost three years.
                        </li>
                        <li>
                            I'm a junior year student at 1.IT Gymnazium in Prague.
                        </li>
                        <li>
                            In my free time I'm always learning something new - Python, React.js etc.
                        </li>
                        <li>
                            Currently working at Logiscool Czechia, teaching programming logic basics.
                        </li>
                    </ul>
                </Card>
                </div>
            </div>
        </div>
    );
}