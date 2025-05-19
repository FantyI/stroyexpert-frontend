import { useEffect, useState } from 'react';
import s from './style.module.css'
import Navigation from '../../components/Navigation/Navigation';
import CardRepair from '../../components/CardRepair/CardRepair';

const repairs = [
    {
        title: "Капитальный ремонт квартиры в современном стиле",
        description: "Полная перепланировка, черновая и чистовая отделка. Использование современных материалов и продуманных решений.",
        image: "https://example.com/modern-flat-renovation.jpg",
        advantages: ["Дизайн-проект в подарок", "Гарантия 3 года"]
    },
    {
        title: "Ремонт кухни-гостиной с барной стойкой",
        description: "Объединение кухни и гостиной, установка барной стойки, монтаж встроенной техники и стильная отделка.",
        image: "https://example.com/kitchen-living-room.jpg",
        advantages: ["Эргономичное освещение"]
    },
    {
        title: "Ремонт ванной комнаты под ключ",
        description: "Демонтаж, гидроизоляция, укладка плитки, установка сантехники и подсветки. Любой уровень сложности.",
        image: "https://example.com/bathroom-renovation.jpg",
        advantages: ["Водостойкие материалы", "Тёплый пол"]
    },
    {
        title: "Косметический ремонт дачи",
        description: "Обновление интерьера без перепланировки: покраска стен, замена полов, освещения и декора.",
        image: "https://example.com/country-house-cosmetic.jpg",
        advantages: []
    },
    {
        title: "Премиальный ремонт пентхауса",
        description: "Эксклюзивные материалы, панорамное остекление, умный дом и авторский дизайн. Для требовательных клиентов.",
        image: "https://example.com/luxury-penthouse.jpg",
        advantages: ["Умный дом", "Видовые окна"]
    },
    {
        title: "Ремонт детской комнаты с экоматериалами",
        description: "Безопасные краски, гипоаллергенные покрытия и продуманное зонирование для игр и учёбы.",
        image: "https://example.com/kids-room-eco.jpg",
        advantages: ["Экологичные материалы"]
    },
    {
        title: "Ремонт офиса в стиле лофт",
        description: "Открытое пространство с кирпичными стенами, металлоконструкциями и функциональными зонами.",
        image: "https://example.com/office-loft-renovation.jpg",
        advantages: ["Звукоизоляция"]
    },
    {
        title: "Ремонт спальни с гардеробной",
        description: "Создание гардеробной комнаты, декоративная отделка стен и монтаж скрытого освещения.",
        image: "https://example.com/bedroom-wardrobe.jpg",
        advantages: ["Встроенные системы хранения"]
    },
    {
        title: "Ремонт балкона с утеплением",
        description: "Превращение балкона в уютное пространство: остекление, утепление, отделка и монтаж полок.",
        image: "https://example.com/balcony-renovation.jpg",
        advantages: ["Тёплый балкон"]
    },
    {
        title: "Ремонт загородного дома после пожара",
        description: "Восстановление конструкций, замена коммуникаций, отделка и противопожарная защита.",
        image: "https://example.com/house-after-fire.jpg",
        advantages: ["Аварийный выезд"]
    },
    {
        title: "Ремонт под ключ в новостройке",
        description: "От черновой отделки до мебели: выравнивание стен, монтаж потолков, укладка полов и декор.",
        image: "https://example.com/new-building-renovation.jpg",
        advantages: ["Рассрочка 0%"]
    },
    {
        title: "Ремонт коридора и прихожей",
        description: "Оптимизация узкого пространства: зеркала, скрытое освещение, полки для обуви и скрытые шкафы.",
        image: "https://example.com/hallway-renovation.jpg",
        advantages: ["Система хранения"]
    },
    {
        title: "Срочный ремонт после потопа",
        description: "Устранение последствий затопления: сушка стен, замена покрытий и восстановление повреждённых участков.",
        image: "https://example.com/flood-renovation.jpg",
        advantages: ["Выезд за 24 часа"]
    },
    {
        title: "Ремонт мансарды под спальню",
        description: "Утепление кровли, отделка деревом, монтаж мансардных окон и создание уютного интерьера.",
        image: "https://example.com/attic-bedroom.jpg",
        advantages: ["Скатные окна"]
    },
    {
        title: "Ремонт квартиры для сдачи в аренду",
        description: "Экономичный, но стильный ремонт с износостойкими материалами. Быстро и под ключ.",
        image: "https://example.com/rent-flat-renovation.jpg",
        advantages: ["Срок — 14 дней"]
    }
];


const Repair = () => {
    const [quantityProject, setQuantityProject] = useState(6)
    const [rollUp, setRollUp] = useState(false)
    const [search, setSearch] = useState('')
    const [searchArray, setSearchArray] = useState([])
    const [arrIsEmpty, setArrIsEmpty] = useState('')

    useEffect(() => {
        setSearchArray(repairs)
    }, [])

    const clickMore = () => {
        if (quantityProject + 6 > repairs.length) {
            setQuantityProject(repairs.length)
            setRollUp(true)
            return
        }
        setQuantityProject(quantityProject => quantityProject + 6)
    }

    const clickRollUp = () => {
        setQuantityProject(6)
        setRollUp(false)
    }

    const changeSearch = (e) => {
        setSearch(e.target.value)
        if(e.target.value === ''){
            setSearchArray(repairs)
            setArrIsEmpty('')
        }
    }

    const clickSearch = () => {
        const arr = repairs.filter(repair => repair.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        setSearchArray(arr)
        if (arr.length === 0) {
            return setArrIsEmpty('Ничего не найдено')
        }
        setArrIsEmpty('')
        console.log('arr', arr);
        console.log('projects', repairs);
    }

    return (
        <>
            <Navigation />
            <div className={s.Repair}>

                <div className={s.heading}>
                    <div className={s.title}>Our experienced team<img src="../../public/Heading/Vector (3).svg" alt="" /></div>
                    <p className={s.description}>
                        At Pinnacle, we're not just building structures - we're building relationships. Here's what some of our satisfied clients have to say about their experience with us.
                    </p>
                </div>

                <div className={s.search}>
                    <input type="search" placeholder='Введите текст...' value={search} onChange={(e) => changeSearch(e)} />
                    <button onClick={clickSearch} className={s.find}>Find a property</button>
                </div>

                {arrIsEmpty
                    ? <div className={s.empty}>Ничего не найдено</div>
                    : <div className={s.cards}>
                        {(searchArray.length ? searchArray.slice(0, quantityProject) : repairs.slice(0, quantityProject)).map(repair => (
                            <CardRepair repair={repair} />
                        ))}
                    </div>}


                <div style={{ display: 'flex', gap: 20 }}>
                    {searchArray.length > quantityProject && <button className={s.seeMore} onClick={clickMore}>See more</button>}
                    {quantityProject > 6 && <button className={s.seeMore} onClick={clickRollUp}>Roll up</button>}
                </div>
            </div>
        </>
    )
}

export default Repair;