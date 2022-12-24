import classes from "./LandingPage.module.css";

export default function LandingPage(){
    return(
        <div>
            <div className={classes.title}>
                <div>
                    I am
                </div>
                <div className={classes.name}>
                    Olli
                </div>
            </div>
        </div>
    );
}