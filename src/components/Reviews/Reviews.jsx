import React, {useEffect} from "react";
import logo from "../../images/logo8/logo_0.png.svg"
import bg from "../../images/logo8/right-quote-sign.svg"
import right from "../../images/logo8/arrow-right.svg"
import left from "../../images/logo8/arrow-left.svg"
import classes from "./Reviews.module.css";
import Aos from "aos";
const Reviews = ()=>{
    useEffect(()=>{
        Aos.init();
    },[])
    return(
        <div className={classes.main}>
            <img src={bg} alt={bg} className={classes.MainSvg}/>
            <div data-aos="fade-up" data-aos-duration="1800" className={classes.text}>
                <h1>Отзывы</h1>
            </div>
            <div  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className={classes.cardContainer}>
                <div className={classes.card}>
                    <div  className={classes.container}>
                        <div className={classes.containerMain}>
                            <img src={logo} alt={logo} className={classes.logo}/>
                            <p>Долгий поиск единственного мастера на многострадальном сайте www.cielparfum.com который был собран крайне некомпетентным программистом ираз в месяц стабильно грозил умереть, привел меня на сайт и, как следствие, кребятам из Drupal-coder. И вот уже почти шесть месяцев не проходило ни дня, чтобыя не был удивлен и доволен своей удачей! Исправлено все, что не работало - отжелаемого, но с собственными значимыми и качественными дополнениями. Мыреализовали ряд проектов - конкурсы, тесты и т.д. И есть бесчисленное количествомелких ремонтов и улучшений! И самое главное - все качественно и быстро(несмотря на не самый "быстрый" тариф). Есть вопросы - замечательный Алексейвсегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. идея для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные Надежда и Роман исправят, сделают!Ребята доказали, что эта CMS - мощная и грамотная система управления. Я надеюсь,что наше сотрудничество продлится долго! Спасибо!!!</p>
                            <p1>С уважением, Наталья Сушкова, руководитель отдела веб-проектов группы компаний Si El Perfume <a>http://www.cielparfum.com/</a> </p1>
                        </div>
                        <div  className={classes.containerHelper}>
                            <img src={left} alt={left}/>
                            <p><span>01</span> / 08</p>
                            <img src={right} alt={right}/>
                        </div>
                    </div>
                </div>
                <div  className={classes.cardBehind}>
                </div>
                <div   className={classes.cardBehind2}>
                </div>
            </div>


        </div>
    )
}
export default Reviews;
