import React, {useEffect} from "react";
import classes from "./ServicesMini.module.css";
import bg from '../../images/icon-bg.svg'
import icon1 from "../../images/icons5/competency-20.svg"
import icon2 from "../../images/icons5/competency-21.svg"
import icon3 from "../../images/icons5/competency-22.svg"
import Aos from "aos";
const ServicesMini = ( )=> {
    useEffect(()=>{
        Aos.init();
    },[])
    return(
        <div className={classes.services}>
            <div className={classes.container}>
                <div className={classes.main}>
                    <h1 data-aos="fade-up" data-aos-duration="1400" >Наши профессиональные разработчики выполняют быстро любые задачи</h1>
                </div>
                <div className={classes.iteam1}>
                    <div data-aos="fade-up" data-aos-duration="1400" className={classes.itemHeader}>
                        <img style={{marginLeft:"-50px"}} src={bg} alt={bg}/>
                        <img style={{marginLeft:"-70px" , marginTop:"-18px"} } src={icon1} alt={icon1}/>
                        <div className={classes.IteamHeaderMain}>
                            <h1>От 1ч</h1>
                            <p style={{opacity:'0.7'}}>Настройка событий GA в интернет-магазине</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className={classes.itemHeader}>
                        <img style={{marginLeft:"-50px"}} src={bg} alt={bg}/>
                        <img style={{marginLeft:"-70px" , marginTop:"-18px"} } src={icon2} alt={icon2}/>
                        <div className={classes.IteamHeaderMain}>
                            <h1>От 20ч</h1>
                            <p style={{opacity:'0.7'}}>Разработка мобильной версии сайта</p>
                        </div>

                    </div>
                    <div data-aos="fade-up" data-aos-duration="1600" className={classes.itemHeader}>
                        <img style={{marginLeft:"-50px"}} src={bg} alt={bg}/>
                        <img style={{marginLeft:"-70px" , marginTop:"-18px"} } src={icon3} alt={icon3}/>
                        <div className={classes.IteamHeaderMain}>
                            <h1>От 8ч</h1>
                            <p style={{opacity:'0.7'}}>Интеграция модуля оплаты </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServicesMini;