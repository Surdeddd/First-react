import React, {useEffect, useState} from "react";
import classes from "./Rates.module.css";
import bg from "../../images/icons4/D-background.svg";
import Aos from "aos";
import Slider from "../Sliider/slider";
import icon from "../../images/icons4/Vector.svg";
import CustomModal from "../UI/modal/modal";
const Rates = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={classes.Main}>
            <img src={bg} alt={bg} className={classes.MainSvg} />
            <div className={classes.Text}>
                <h1 data-aos="zoom-in" data-aos-duration="1500">Тарифы</h1>
            </div>
            <div className={classes.Swiper}>
                <Slider/>
            </div>
            <div className={classes.card}>
                <div className={classes.cardHeader}>
                    <h1>Стартовый</h1>
                    <div className={classes.CardText}>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Консультация и работа по SEO</p>
                        </div>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Услуги дизайнера</p>
                        </div>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Неиспользованные оплаченные часы не переносятся </p>
                        </div>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Предоплата от 6 000 рублей в месяц </p>
                        </div>
                        <div className={classes.ButtonCard}  onClick={openModal} >
                            <p>Свяжитесь с нами!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardHeader}>
                    <h1>Бизнес</h1>
                    <div className={classes.CardText}>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Консультация и работа по SEO</p>
                        </div>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Услуги дизайнера</p>
                        </div>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Высокое время реакции - до 2 рабочих дней </p>
                        </div>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Неиспользованные оплаченные часы не переносятся </p>
                        </div>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Предоплата от 30 000 рублей в месяц </p>
                        </div>
                        <div className={classes.ButtonCard}  onClick={openModal}>
                            <p>Свяжитесь с нами!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <div  className={classes.cardHeader}>
                    <h1>VIP</h1>
                    <div className={classes.CardText}>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Консультация и работа по SEO</p>
                        </div>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Услуги дизайнера</p>
                        </div>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Максимальное время реакции -в день обращения </p>
                        </div>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Неиспользованные оплаченные часы не переносятся </p>
                        </div>
                        <div className={classes.cardContent}>
                            <img src={icon} alt={icon}/>
                            <p style={{opacity: 0.7}}>Предоплата от 270 000 рублей в месяц </p>
                        </div>
                        <div className={classes.ButtonCard}  onClick={openModal} >
                            <p>Свяжитесь с нами!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.Info}>
                <p data-aos="zoom-in" data-aos-duration="1600" style={{opacity: 0.5}}>Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!</p>
                <button>
                    <a data-aos="zoom-in" data-aos-duration="1700">Получить индивидуальный тариф</a>
                </button>
            </div>
            <CustomModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Rates;
