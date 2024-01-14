import React from 'react';
import './styles/App.css';
import './styles/reset.css';
import Header from './components/UI/Header/Header';
import Services from "./components/Services/Services";
import Cards from "./components/Cards/Cards";
import Support from "./components/Support/Support";
import Rates from "./components/Rates/Rates";
import ServicesMini from "./components/ServicesMini/ServicesMini";
import Team from "./components/Team/Team";
import Cases from "./components/Cases/Cases";
import Reviews from "./components/Reviews/Reviews";
import RunningLine from "./components/RunningLine/RunningLine";
import Faq from "./components/Faq/Faq";
import Form from "./components/UI/form/form";


function App() {
    const headerData = [
        {
            menuItems: [
                { label: "ПОДДЕРЖКА DRUPAL", type: 'a' },
                { label: "АДМИНИСТРИРОВАНИЕ", type: 'a', options: ["МИГРАЦИЯ", "БЭКАПЫ", "АУДИТ БЕЗОПАСНОСТИ", "ОПТИМИЗАЦИЯ СКОРОСТИ", "ПЕРЕЕЗД НА HTTPS"] },
                { label: "ПРОДВИЖЕНИЕ", type: 'a' },
                { label: "РЕКЛАМА", type: 'a' },
                { label: "О НАС", type: 'a', options: ["КОМАНДА", "DRUPALGIVE", "БЛОГ", "КУРСЫ DRUPAL"] },
                { label: "ПРОЕКТЫ", type: 'a' },
                { label: "Контакты", type: 'a' }
            ],
            number: "8 800 222-26-73",
            locale: "RU",
            languageOptions: ["EN", "CH"]
        },
    ];

    return (
        <div>
            {headerData.map((data, index) => (
                <Header key={index} {...data} />
            ))}
            <Services/>
            <Cards/>
            <Support/>
            <Rates/>
            <ServicesMini/>
            <Team/>
            <Cases/>
            <Reviews/>
            <RunningLine/>
            <Faq/>
            <Form/>
        </div>
    );
}

export default App;