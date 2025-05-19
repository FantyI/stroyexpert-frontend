import { useEffect, useState } from 'react';
import s from './style.module.css'
import Navigation from '../../components/Navigation/Navigation';
import CardProject from '../../components/cardProject/cardProject';
import { useLocation } from 'react-router';

// const ProjectPage = [
//     {
//         name: "Уютный коттедж «Лесная сказка»",
//         description: "Дом в скандинавском стиле с панорамными окнами. Идеально подходит для жизни за городом в окружении природы.",
//         location: "Подмосковье, 25 км от МКАД",
//         image: "https://example.com/photo1.jpg",
//         features: ["Камин", "Терраса с видом на лес"]
//     },
//     {
//         name: "Современная квартира «Городские огни»",
//         description: "Стильная квартира с открытой планировкой и панорамными окнами. Отличный вариант для жизни в центре.",
//         location: "Москва, Пресненский район",
//         image: "https://example.com/photo2.jpg",
//         features: ["Домашний кинотеатр", "Умный дом"]
//     },
//     {
//         name: "Дача «Райский уголок»",
//         description: "Уютный дом для отдыха с просторной верандой и садом. Подходит для летнего и зимнего проживания.",
//         location: "Калужская область, 100 км от Москвы",
//         image: "https://example.com/photo3.jpg",
//         features: ["Баня", "Собственный пруд"]
//     },
//     {
//         name: "Таунхаус «Европейский квартал»",
//         description: "Элегантный таунхаус с отделкой премиум-класса. Закрытая территория и развитая инфраструктура.",
//         location: "Московская область, Новая Рига",
//         image: "https://example.com/photo4.jpg",
//         features: ["Бассейн", "Охраняемая территория"]
//     },
//     {
//         name: "Дом в стиле лофт «Бруклин»",
//         description: "Современный дом с индустриальными элементами и высокими потолками. Для ценителей нестандартных решений.",
//         location: "Ленинградская область, Курортный район",
//         image: "https://example.com/photo5.jpg",
//         features: ["Пентхаус с террасой", "Парковка на 2 авто"]
//     },
//     {
//         name: "Классический особняк «Аристократ»",
//         description: "Роскошный дом в английском стиле с большим участком. Отделка натуральным камнем и деревом.",
//         location: "Подмосковье, Рублёво-Успенское шоссе",
//         image: "https://example.com/photo6.jpg",
//         features: ["Библиотека", "Зимний сад"]
//     },
//     {
//         name: "Мини-отель «Гостевой дом»",
//         description: "Идеальный вариант для инвестиций или большого семейного проживания. 6 спален и общая гостиная.",
//         location: "Краснодарский край, Сочи",
//         image: "https://example.com/photo7.jpg",
//         features: ["Спа-зона", "Летняя кухня"]
//     },
//     {
//         name: "Дом-шале «Альпийские луга»",
//         description: "Тёплый и уютный дом в стиле шале с камином и сауной. Готов к проживанию круглый год.",
//         location: "Карелия, 30 км от Петрозаводска",
//         image: "https://example.com/photo8.jpg",
//         features: ["Сауна", "Панорамные виды"]
//     },
//     {
//         name: "Квартира «Лофт на набережной»",
//         description: "Просторная квартира с видом на реку и стильным дизайном. Высокие потолки и открытые коммуникации.",
//         location: "Санкт-Петербург, наб. реки Мойки",
//         image: "https://example.com/photo9.jpg",
//         features: ["Вид на воду", "Просторная терраса"]
//     },
//     {
//         name: "Эко-дом «Зелёный остров»",
//         description: "Энергоэффективный дом с солнечными батареями и системой рекуперации. Экологичные материалы.",
//         location: "Тверская область, озеро Селигер",
//         image: "https://example.com/photo10.jpg",
//         features: ["Солнечные панели", "Собственный сад"]
//     },
//     {
//         name: "Дом на воде «Морской бриз»",
//         description: "Уникальный проект дома на сваях с выходом к морю. Для тех, кто любит нестандартные решения.",
//         location: "Крым, Ялта",
//         image: "https://example.com/photo11.jpg",
//         features: ["Причал для катера", "Панорамные окна"]
//     },
//     {
//         name: "Дом в стиле хай-тек «Футуро»",
//         description: "Современный дом с умными системами и минималистичным дизайном. Автоматизация и комфорт.",
//         location: "Москва, Новая Москва",
//         image: "https://example.com/photo12.jpg",
//         features: ["Умный дом", "Зарядка для электромобиля"]
//     },
//     {
//         name: "Коттедж «Семейный очаг»",
//         description: "Просторный дом для большой семьи с игровой комнатой и двором. Безопасная и уютная территория.",
//         location: "Московская область, Истринский район",
//         image: "https://example.com/photo13.jpg",
//         features: ["Детская площадка", "Зона барбекю"]
//     },
//     {
//         name: "Дом в средиземноморском стиле «Вилла Маре»",
//         description: "Яркий и тёплый дом с террасами и бассейном. Напоминает курортные виллы Италии и Испании.",
//         location: "Краснодарский край, Анапа",
//         image: "https://example.com/photo14.jpg",
//         features: ["Бассейн с подогревом", "Летняя кухня"]
//     },
//     {
//         name: "Мини-дом «Тини-хаус»",
//         description: "Компактный и функциональный дом для тех, кто ценит минимализм. Всё необходимое в небольшом пространстве.",
//         location: "Ленинградская область, Выборг",
//         image: "https://example.com/photo15.jpg",
//         features: ["Мобильность", "Энергоэффективность"]
//     }
// ];


const ProjectPage = ({ project }) => {
    const { state } = useLocation()
    const { name, description, location, images, advantages, details } = state.project;
    // const {name, description, location, image, features} = project;

    return (
        <>
            <Navigation />
            <div className={s.ProjectPage}>
                <button className={s.back}>Васк to all Projects</button>
                <h1 className={s.name}>{name}</h1>
                {/* <p>{description}</p> */}
                <div className={s.main}>
                    <img src="../../../frontend/public/CardRepair/Card-image.png" alt="" className={s.mainImg} />
                    <div className={s.additionally}>
                        <div className={s.advantages}>
                            <div className={s.amenities}>Amenities</div>
                            {advantages.map(advantage => (
                                <div className={s.advantage}>{advantage}</div>
                            ))}
                        </div>
                        <div className={s.buttons}>
                            <button>add</button>
                            <button className={s.favorite}><img src="" alt="" />
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={s.moreDetailed}>
                    <div className={s.detailed}>
                        <h2>Описание</h2>
                        <div>{details.fullDescription}</div>
                    </div>
                    <div className={s.detailed}>
                        <h2>Кому подходит</h2>
                        <div>{details.targetAudience}</div>
                    </div>
                    <div className={s.detailed}>
                        <h2>Кому подходит</h2>
                        <div>{details.features}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage;