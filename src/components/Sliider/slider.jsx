import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./slider.module.css";
import icon from "../../images/icons4/Vector.svg"
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {EffectCoverflow, Pagination,Navigation} from "swiper/modules";
import CustomModal from "../UI/modal/modal";
function Slider() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <Swiper
            spaceBetween={0}
            slidesPerView={3}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            initialSlide={1}
            coverflowEffect={{
                rotate:0,
                stretch:0,
                depth:100,
                modifier:2.5,
            }}

            modules={[EffectCoverflow,Pagination,Navigation]}
            className={classes.main}
        >
            <SwiperSlide >
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
                            <div className={classes.ButtonCard} onClick={openModal}>
                                <p>Свяжитесь с нами!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
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
                            <div className={classes.ButtonCard} onClick={openModal}>
                                <p>Свяжитесь с нами!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
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
                            <div className={classes.ButtonCard} onClick={openModal}>
                                <p>Свяжитесь с нами!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <div className='slider-container'>
                <div className='swiper-pagination'></div>
            </div>
        </Swiper>
            <CustomModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}

export default Slider;
