import React, {useEffect} from "react";
import classes from "./Cases.module.css";
import Aos from 'aos'
import photo1 from "../../images/images7/image 9.2.svg"
import photo2 from "../../images/images7/image 11.1.svg"
import photo3 from "../../images/images7/image 8.3.svg"
import photo4 from "../../images/images7/image 7.3.svg"
import photo5 from "../../images/images7/image 6.2.svg"


const Cases = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return(
        <div className={classes.main}>
            <div className={classes.Text}>
                <h1  data-aos="fade-up" data-aos-duration="1400" >Последние кейсы</h1>
            </div>
            <div className={classes.containerCards1}>
                <div  data-aos="fade-up" data-aos-duration="1900"  className={classes.iteam1}>
                    <img src={photo1} alt={photo1}/>
                    <div className={classes.iteam1Header}>
                        <h>Настройка кэширования данных. Апдгрейд сервера. Ускорение работы сайта в 30 раз!</h>
                        <p style={{opacity: 0.5}}>04.05.2020</p>
                        <p2 style={{opacity: 0.7}}>Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс ускорения... </p2>
                    </div>
                </div>
                <div  data-aos="fade-up" data-aos-duration="2000"  className={classes.iteam2}>
                    <img src={photo2} alt={photo2}/>
                    <h>Использование отчетов Ecommerce в Яндекс.Метрике</h>
                </div>
                <div  data-aos="fade-up" data-aos-duration="2100"  className={classes.iteam21}>
                    <img src={photo3} alt={photo3}/>
                    <h>Повышение конверсии страницы с формой заявки с применением AB-тестирования</h>
                    <p style={{opacity: 0.5}}>24.01.2020</p>
                </div>
                <div  data-aos="fade-up" data-aos-duration="2200"  className={classes.iteam21}>
                    <img src={photo4} alt={photo4}/>
                    <h>Druopal 7: ускорение времени генерации страниц интернет-магазина на 32% </h>
                    <p style={{opacity: 0.5}}>23.09.2019</p>
                </div>
                <div  data-aos="fade-up" data-aos-duration="2300"  className={classes.iteam1}>
                    <img src={photo5} alt={photo5}/>
                    <div className={classes.iteam1Header}>
                        <h>Обмен товарами и заказами интернет-магазинов на Drupal 7 c 1С:Предприятие, МойСклад, Класс365</h>
                        <p style={{opacity: 0.5}}>22.08.2019</p>
                        <p2 style={{opacity: 0.7}}>опубликован <span>релиз модуля...</span></p2>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cases;
