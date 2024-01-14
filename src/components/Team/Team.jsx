import React, {useEffect} from "react";
import classes from "./Team.module.css";
import photo1 from "../../images/image6/IMG_2472_0.jpg"
import photo2 from "../../images/image6/IMG_2539_0.jpg"
import photo3 from "../../images/image6/IMG_2474_1.jpg"
import photo4 from "../../images/image6/IMG_2522_0.jpg"
import photo5 from "../../images/image6/IMG_9971_16.jpg"
import Aos from "aos";
const Team = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className={classes.main}>
            <div className={classes.text}>
                <h1 data-aos="fade-up" data-aos-duration="1400">Команда</h1>
            </div>
            <div className={classes.containerCards}>
                <div data-aos="fade-up" data-aos-duration="1500" className={classes.cards}>
                    <img src={photo1} alt={photo1}/>
                    <div className={classes.Name}>
                        <p>Сергей Синица</p>
                    </div>
                    <div className={classes.TextCard}>
                        <p style={{opacity: 0.7}}>Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1600" className={classes.cards}>
                    <img src={photo2} alt={photo2}/>
                    <div className={classes.Name}>
                        <p>Роман Агабеков</p>
                    </div>
                    <div className={classes.TextCard}>
                        <p style={{opacity: 0.7}}>Руководитель отдела DevOPS, директор </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1700" className={classes.cards}>
                    <img src={photo3} alt={photo3}/>
                    <div className={classes.Name}>
                        <p>Алексей Синица </p>
                    </div>
                    <div className={classes.TextCard}>
                        <p style={{opacity: 0.7}}>Руководитель отдела поддержки сайтов  </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1800" className={classes.cards}>
                    <img src={photo4} alt={photo4}/>
                    <div className={classes.Name}>
                        <p>Дарья Бочкарева </p>
                    </div>
                    <div className={classes.TextCard}>
                        <p style={{opacity: 0.7}}>Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов   </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1900" className={classes.cards}>
                    <img src={photo5} alt={photo5}/>
                    <div className={classes.Name}>
                        <p>Ирина Торкунова</p>
                    </div>
                    <div className={classes.TextCard}>
                        <p style={{opacity: 0.7}}>Менеджер по работе с клиентами </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className={classes.Button}>
                <button >
                    <p>Вся команда</p>
                </button>
            </div>
        </div>
    );
};
export default Team;