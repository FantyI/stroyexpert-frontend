import { Link } from 'react-router';
import Navigation from '../Navigation/Navigation';
import s from './style.module.css'

const Header = () => {

    return (
        <header className={s.header}>
            <Navigation />
            <div className={s.greeting}>
                <h1 className={s.name}>
                    <span className={s.srong}>СтройЭксперт</span> <br />
                    Ваш <span className={s.srong}>надежный</span> партнер <br /> в строительстве
                </h1>
                <p className={s.text}>
                    Добро пожаловать на сайт компании «СтройЭксперт» – лидера в сфере строительства и ремонта! Мы предлагаем полный спектр услуг: от проектирования до сдачи объекта «под ключ».
                </p>
                <p className={s.text}>
                    Наша команда профессионалов гарантирует высокое качество, соблюдение сроков и индивидуальный подход к каждому клиенту.
                </p>
            </div>
            <div className={s.buttons}>
                <Link className={s.button} to='/projects'>Проекты</Link>
                <Link className={s.button} to='/contacts'>Контакты</Link>
            </div>
            <div className={s.advantages}>
                <div className={s.mainAdvantages}>
                    <div className={s.advantage}>
                        <div className={s.number}>25+</div>
                        <div className={s.description}>
                            Многолетний опыт работы
                        </div>
                    </div>
                    <div className={s.advantage}>
                        <div className={s.number}>378+</div>
                        <div className={s.description}>
                            Завершенных
                            проектов
                        </div>
                    </div>
                    <div className={s.advantage}>
                        <div className={s.number}>69+</div>
                        <div className={s.description}>
                            Различных
                            наград
                        </div>
                    </div>
                </div>

                <div className={s.listAdvantages}>
                    <ul>
                        <li>Система контроля качества, гарантия 100%</li>
                        <li>Высокопрофессиональный персонал</li>
                        <li>Профессионализм и квалификация</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header; 