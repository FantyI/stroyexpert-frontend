import { useEffect, useRef, useState } from 'react';
import s from './style.module.css'
import Navigation from '../../components/Navigation/Navigation';
import { Link, useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer'
import Feedback from '../../components/Feedback/Feedback';


const Contact = () => {

    return (
        <>
            <Navigation />
            <div className={s.contact}>
                <h1 className={s.name}>
                    Связаться с нами
                </h1>
                <p className={s.description}>
                    Мы ценим ваши отзывы и хотели бы услышать от вас. Если у вас есть вопрос, комментарий или предложение, мы здесь, чтобы выслушать и помочь любым возможным способом.
                </p>
                <div className={s.main}>
                    <img src="../../../public/Contacts/img.png" alt="" className={s.mainImg}/>
                    <div className={s.contactsForms}>
                        <div className={s.left}>
                            <div className={s.section}>
                                <div className={s.sectionName}>Свяжитесь с нами</div>
                                <div className={s.wrapContent}>
                                    <button className={s.buttonInfo}>info@pinnacle.com</button>
                                    <button className={s.buttonInfo}>+1 (123) 456-7890</button>
                                </div>
                            </div>
                            <div className={s.section}>
                                <div className={s.sectionName}>Наш адрес</div>
                                <div className={s.wrapContent}>
                                    <div style={{fontSize: '1.8rem'}}>ddress: 123 Main St, Anytown, USA 12345</div>
                                    <button className={s.buttonInfo}>Get Directions</button>
                                </div>
                            </div>
                            <div className={s.section}>
                                <div className={s.sectionName}>Соцсети</div>
                                <div className={s.wrapSocialNetwork}>
                                    <button className={s.socialNetwork}><img src="../../../public/socialNetwork/facebook.png" alt="" /></button>
                                    <button className={s.socialNetwork}><img src="../../../public/socialNetwork/linkdin.png" alt="" /></button>
                                    <button className={s.socialNetwork}><img src="../../../public/socialNetwork/twit.png" alt="" /></button>
                                    <button className={s.socialNetwork}><img src="../../../public/socialNetwork/youtube.png" alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className={s.right}>
                            <Feedback />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact;