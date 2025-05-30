import { useEffect, useRef, useState } from 'react';
import s from './style.module.css'
import Navigation from '../../components/Navigation/Navigation';
import CardProject from '../../components/cardProject/cardProject';
import { Link, useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer'


const RepairPage = () => {
    const { state } = useLocation()
    const { title, description, location, images, advantages, details } = state.project;

    const [shift, setShift] = useState(0)
    const [numberPages, setNumberPages] = useState(0)
    const [pages, setPages] = useState(1)
    const [favoriteActive, setFavoriteActive] = useState(false)
    
    const widthScrolle = useRef()
    const widthImg = useRef()
    // const {name, description, location, image, features} = project;

    const clickLeft = () => {
        if (shift + widthImg.current.clientWidth > 0) {
            return
        }
        setShift(shift => shift + widthImg.current.clientWidth)
        setPages(pages => pages - 1)
    }

    const clickRight = () => {
        if (shift - widthImg.current.clientWidth + widthScrolle.current.clientWidth <= 0) {
            return
        }
        setShift(shift => shift - widthImg.current.clientWidth)
        setPages(pages => pages + 1)
    }

    // const clickFavorite = () => {
    //     setFavoriteActive(true)
    // } 

    useEffect(() => {
        setNumberPages(widthScrolle.current.children.length)
    }, [])

    return (
        <>
            <Navigation />
            <div className={s.ProjectPage}>
                <Link to='/projects' className={s.back}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                    </svg>
                    Вернуться
                </Link>
                <h1 className={s.name}>{name}</h1>
                {/* <p>{description}</p> */}
                <div className={s.main}>
                    <div className={s.scrolle_bar}>
                        <div className={s.scrolle}>
                            <button className={s.left} onClick={clickLeft}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                                </svg>
                            </button>
                            <button className={s.right} onClick={clickRight}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                                </svg>
                            </button>
                            <div className={s.photo} ref={widthScrolle} style={{ translate: `${shift}px` }}>
                                <img ref={widthImg} src="../../../../public/CardRepair/Card-image.png" alt="" className={s.mainImg} />
                                <img src="../../../../public/CardRepair/Card-image.png" alt="" className={s.mainImg} />
                                <img src="../../../../public/Team/Card-image.png" alt="" className={s.mainImg} />
                                <img src="../../../../public/CardRepair/Card-image.png" alt="" className={s.mainImg} />
                                <img src="../../../../public/CardRepair/Card-image.png" alt="" className={s.mainImg} />
                            </div>
                        </div>
                        <div className={s.counterPages}>{pages}/{numberPages}</div>
                    </div>
                    <div className={s.additionally}>
                        <div className={s.advantagesWrap}>
                            <div className={s.amenities}>Amenities</div>
                            <div className={s.advantages}>
                                {advantages.map(advantage => (
                                    <div className={s.advantage}>{advantage}</div>
                                ))}
                            </div>
                        </div>
                        <div className={s.buttons}>
                            <button className={s.addBasket}>Добавить в корзину</button>
                            <button onClick={() => setFavoriteActive(favoriteActive => !favoriteActive)} className={`${s.favorite} ${favoriteActive && s.favoriteActive}`}>
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
                        <div className={s.features}>
                            {details.features.map(feature => (
                                <li>{feature}</li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RepairPage;