import React, {useEffect, useState} from "react";
import classes from "./Faq.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { CSSTransition} from 'react-transition-group';
const Faq = ()=>{
    useEffect(()=>{
        Aos.init();
    },[])
    const [activeIndex, setActiveIndex] = useState(null)
    const faqData = [
        { question: "Кто непосредственно занимается поддержкой?", answer: "Наша команда опытных специалистов занимается предоставлением поддержки. Каждый специалист обладает высокой квалификацией в своей области." },
        { question: "Как организована работа поддержки?", answer: "Работа поддержки организована в режиме 24/7. Мы готовы ответить на ваши вопросы и решить возникающие проблемы в кратчайшие сроки." },
        { question: "Что происходит, когда отработаны все предоплаченные часы за месяц?", answer: "После отработки всех предоплаченных часов вы можете приобрести дополнительные часы поддержки или рассмотреть варианты планов поддержки с большим объемом часов." },
        { question: "Что происходит, когда не отработаны все предоплаченные часы за месяц?", answer: "Неотработанные часы не переносятся на следующий месяц. Вы можете выбрать новый план поддержки или оплатить услуги вне плана." },
        { question: "Как происходит оценка и согласование планируемого времени на выполнение заявок?", answer: "Оценка времени на выполнение заявок проводится на основе их сложности и объема. Мы согласовываем график работы с вами, чтобы обеспечить удобство и эффективность." },
        { question: "Сколько программистов выделяется на проект?", answer: "Количество программистов, выделяемых на проект, зависит от его масштаба и требований. Мы гарантируем предоставление достаточного числа специалистов для успешной реализации проекта." },
        { question: "Как подать заявку на внесение изменений на сайте?", answer: "Заявку на внесение изменений на сайт можно подать через нашу панель управления клиента или связаться с нашей службой поддержки по электронной почте или телефону." },
        { question: "Как подать заявку на добавление пользователя, изменение настроек веб-сервера и других задач по администрированию?", answer: "Вы можете подать заявку на административные задачи через нашу систему тикетов. Наши администраторы оперативно реагируют на все запросы." },
        { question: "В течение какого времени начинается работа по заявке?", answer: "Мы стараемся начать работу по заявке в кратчайшие сроки. Время начала зависит от текущей загруженности и приоритета вашего запроса." },
        { question: "В какое время работает поддержка?", answer: "Наша служба поддержки работает 24/7, готова ответить на ваши вопросы и решить возникшие проблемы в любое время дня и ночи." },
        { question: "Подходят ли услуги поддержки, если необходимо произвести обновления ядра Drupal или модулей?", answer: "Да, наши услуги поддержки включают в себя обновление ядра Drupal, модулей и других компонентов. Мы обеспечим безопасное и эффективное обновление вашего веб-приложения." },
        { question: "Можно ли пообщаться со специалистом голосом или в мессенджере?", answer: "Да, мы предоставляем различные каналы коммуникации, включая голосовую связь и мессенджеры, для обеспечения удобства в общении с нашими специалистами." },
    ];
    const handleContentClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className={classes.main}>
            <div data-aos="fade-up" data-aos-duration="1500"  className={classes.Text}>
                <h>FAQ</h>
            </div>
            <div data-aos="fade-up" data-aos-duration="1700" className={classes.Container}>
                <div className={classes.textContainer}>
                    {faqData.map((item, index) => (
                        <div  key={index} className={`${classes.contentMain} ${activeIndex === index ? classes.active : ''}`}>
                            <div
                                className={classes.number}
                                style={{ color: 'rgba(5, 12, 51, 0.5)' }}
                                onClick={() => handleContentClick(index)}
                                // onMouseEnter={() =>handleContentClick(index)}
                            >
                                {index + 1}.
                            </div>
                            <div className={classes.contentWrapper}>
                                <div
                                    className={`${classes.content} ${activeIndex === index ? classes.redText : ''}`}
                                    onClick={() => handleContentClick(index)}
                                    // onMouseEnter={() =>handleContentClick(index)}
                                >
                                    {item.question}
                                </div>
                                <CSSTransition
                                    in={activeIndex === index}
                                    timeout={800}
                                    classNames={{
                                        enter: classes.slideIn,
                                        exit: classes.slideOut,
                                    }}
                                    unmountOnExit
                                >
                                    <div className={classes.answer} style={{ color: 'rgba(5, 12, 51, 0.5)' }}>
                                        {item.answer}
                                    </div>
                                </CSSTransition>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Faq;
