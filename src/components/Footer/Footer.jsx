import s from './style.module.css'
import logo from '../../../public/header/logo.svg'
import send from '../../../public/Feedback/send.svg'
import email from '../../../public/Feedback/email.svg'
import facebook from '../../../public/socialNetwork/facebook.png'
import link from '../../../public/socialNetwork/linkdin.png'
import twit from '../../../public/socialNetwork/twit.png'
import youtube from '../../../public/socialNetwork/youtube.png'


function Footer() {
    return (
        <>
            <div className={s.footer__conteiner}>
                <div className={s.footer__content}>
                    <div className={s.footer__left__content}>
                        <div className={s.footer__logo}>
                            <img className={s.logo} src={logo} alt="" />
                            <h2 className={s.logo__text}>Строй Эксперт</h2>
                        </div>
                        <div className={s.footer__input}>
                            <div className={s.footer__input__content}>
                                <img className={s.email} src={email} alt="" />
                                <input placeholder='Email@gmail.com' className={s.input} type="text" />
                            </div>
                            <img className={s.send} src={send} alt="" />
                        </div>
                    </div>
                    <div className={s.footer__right__content}>
                        <div className={s.column__1}>
                            <h2 className={s.column__h}>Навигация</h2>
                            <p className={s.column__text}>Главная</p>
                            <p className={s.column__text}>Проекты</p>
                            <p className={s.column__text}>Ремонт</p>
                            <p className={s.column__text}>Контакты</p>
                        </div>
                        <div className={s.column__2}>
                            <h2 className={s.column__h}>О нас</h2>
                            <p className={s.column__text}>Наш опыт</p>
                            <p className={s.column__text}>Наши клиенты</p>
                        </div>
                        <div className={s.column__4}>
                            <h2 className={s.column__h}>Контакты</h2>
                            <p className={s.column__text}>Форма заявки</p>
                        </div>
                    </div>
                </div>
                <div className={s.copright}>
                    <h2 className={s.copright__text}>@2025 Строй Эксперт. Все права защищены.</h2>
                    <div className={s.social}>
                        <button className={s.copright__btn}>
                            <img className={s.icons} src={facebook} alt="" />
                        </button>
                        <button className={s.copright__btn}>
                            <img className={s.icons} src={link} alt="" />
                        </button>
                        <button className={s.copright__btn}>
                            <img className={s.icons} src={twit} alt="" />
                        </button>
                        <button className={s.copright__btn}>
                            <img className={s.icons} src={youtube} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer