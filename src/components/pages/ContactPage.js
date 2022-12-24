import classes from "./ContactPage.module.css";

export default function ContactPage(){
    return(
        <div className={classes.content}>
            <div className={classes.section}>
                <div className={classes.title}>
                    Contact me
                </div>
                <div className={classes.card}>
                    <ul>
                        <li>Twitter: OlliJmenoMe</li>
                        <li>GitHub: OlliJeCool</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}