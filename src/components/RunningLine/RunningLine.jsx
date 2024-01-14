import React, {useEffect} from "react";
import classes from "./RunningLine.module.css";
import Aos from "aos";
import logo1 from "../../images/logo9/image 1.svg"
import logo2 from "../../images/logo9/image 5.svg"
import logo3 from "../../images/logo9/image 10.svg"
import logo4 from "../../images/logo9/image 11.svg"

const RunningLine = () =>{
    useEffect(()=>{
        Aos.init();
    },[])
    return(
        <div className={classes.main}>
            <div className={classes.Text}>
                <h  data-aos="zoom-in" data-aos-duration="1800">С нами работают</h>
                <p  data-aos="zoom-in" data-aos-duration="1900">Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.</p>
            </div>
            <div className={classes.LogosContainer}>
                <div className={classes.Logos}>
                    <span>
                    <div className={classes.card}>
                        <img src={logo1} alt={logo1} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo2} alt={logo2} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo3} alt={logo3} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo4} alt={logo4} />
                    </div>
                    </span>
                    <span>
                    <div className={classes.card}>
                        <img src={logo1} alt={logo1} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo2} alt={logo2} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo3} alt={logo3} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo4} alt={logo4} />
                    </div>
                    </span>
                </div>
            </div>
            <div className={classes.LogosContainer}>
                <div className={classes.Logos2}>
                    <span>
                    <div className={classes.card}>
                        <img src={logo1} alt={logo1} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo2} alt={logo2} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo3} alt={logo3} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo4} alt={logo4} />
                    </div>
                    </span>
                    <span>
                    <div className={classes.card}>
                        <img src={logo1} alt={logo1} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo2} alt={logo2} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo3} alt={logo3} />
                    </div>
                    <div className={classes.card}>
                        <img src={logo4} alt={logo4} />
                    </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default  RunningLine;