import s from './style.module.css'

const AboutUs = () => {

    return (
        <div className={s.aboutUs}>
            <img src="../../public/AboutUs/AboutUs.svg" alt="" />
            <div className={s.text}>
                <div className={s.name}>
                    <span className={s.highlight}>25 лет</span>опыта<br />
                    в строительстве<span className={s.highlight}>!</span>
                </div>
                <div className={s.description}>
                    <p>
                        У нас есть команда опытных профессионалов, которые работают в отрасли более 25 лет. Наши подрядчики обладают обширными знаниями и навыками, которые они приобрели за эти годы, что делает их экспертами в своей области.
                        
                    </p>

                    <p>
                        Обладая 25-летним опытом, наши подрядчики обладают глубоким пониманием отраслевых стандартов и нормативных актов. Мы гарантируем, что все наши проекты соответствуют последним требованиям безопасности и строительным нормам, а конечный продукт соответствует ожиданиям наших клиентов или превосходит их.
                    </p>
                </div>
                <div className={s.signature}>
                    <span>jhon lbf</span><br />
                    {/* Henry Kurnia Adhi - Founder */}
                </div>
            </div>
        </div>
    )
}

export default AboutUs;