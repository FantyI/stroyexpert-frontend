import { useState } from 'react';
import s from './style.module.css'

const Team = () => {
    let [pageNumber, setPageNumber] = useState(1);
    let [moveIt, setMoveIt] = useState(0);

    const numberPages = 2 ;

    const moveRight = () => {
        if(moveIt + 1400 > 1400 * (numberPages - 1)){
            setMoveIt(1400 * (numberPages - 1))
            setPageNumber(numberPages)
        } else {
            setMoveIt((moveIt) => moveIt + 1400);
            setPageNumber(numberPages => numberPages + 1)
        }
    }

    const moveLeft = () => {
        if(moveIt - 1400 < 0){
            setMoveIt(0)
            setPageNumber(0)
        } else {
            setMoveIt((moveIt) => moveIt - 1400);
            setPageNumber(numberPages => numberPages - 1)
        }
    }

    return (
        <div className={s.TeamBlock}>
            <div className={s.heading}>
                <div className={s.title}><img src="../../public/Heading/Vector (3).svg" alt="" />Our experienced team</div>
                <p className={s.description}>
                    At Pinnacle, we're not just building structures - we're building relationships. Here's what some of our satisfied clients have to say about their experience with us.
                </p>
            </div>
            <div className={s.scrolle} >
                <div className={s.cards} style={{transform: `translateX(-${moveIt}px)`}}>
                    <div className={s.card}>
                        <img src="../../public/Team/Card-image.png" alt="" className={s.photo} />
                        <div className={s.nameAndPosition}>
                            <span className={s.name}>John Doe /</span><span className={s.position}> Founder and СЕО</span>
                        </div>
                        <div className={s.aboutEmployee}>
                            With over 20 years of experience in the construction and real estate industry, he has built a reputation for his unwavering commitment to quality and innovation.
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="../../public/Team/Card-image.png" alt="" className={s.photo} />
                        <div className={s.nameAndPosition}>
                            <span className={s.name}>John Doe /</span><span className={s.position}> Founder and СЕО</span>
                        </div>
                        <div className={s.aboutEmployee}>
                            With over 20 years of experience in the construction and real estate industry, he has built a reputation for his unwavering commitment to quality and innovation.
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="../../public/Team/Card-image.png" alt="" className={s.photo} />
                        <div className={s.nameAndPosition}>
                            <span className={s.name}>John Doe /</span><span className={s.position}> Founder and СЕО</span>
                        </div>
                        <div className={s.aboutEmployee}>
                            With over 20 years of experience in the construction and real estate industry, he has built a reputation for his unwavering commitment to quality and innovation.
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="../../public/Team/Card-image.png" alt="" className={s.photo} />
                        <div className={s.nameAndPosition}>
                            <span className={s.name}>John Doe /</span><span className={s.position}> Founder and СЕО</span>
                        </div>
                        <div className={s.aboutEmployee}>
                            With over 20 years of experience in the construction and real estate industry, he has built a reputation for his unwavering commitment to quality and innovation.
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="../../public/Team/Card-image.png" alt="" className={s.photo} />
                        <div className={s.nameAndPosition}>
                            <span className={s.name}>John Doe /</span><span className={s.position}> Founder and СЕО</span>
                        </div>
                        <div className={s.aboutEmployee}>
                            With over 20 years of experience in the construction and real estate industry, he has built a reputation for his unwavering commitment to quality and innovation.
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="../../public/Team/Card-image.png" alt="" className={s.photo} />
                        <div className={s.nameAndPosition}>
                            <span className={s.name}>John Doe /</span><span className={s.position}> Founder and СЕО</span>
                        </div>
                        <div className={s.aboutEmployee}>
                            With over 20 years of experience in the construction and real estate industry, he has built a reputation for his unwavering commitment to quality and innovation.
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.management}>
                <div className={s.pages}>
                    <span className={s.pageNumber}>{pageNumber}</span> / <span className={s.numberPages}>{numberPages}</span>
                </div>
                <div className={s.switchingButtons}>
                    <button className={s.leftButton} onClick={moveLeft}><img src="../../public/Team/arrow.svg" alt="" /></button>
                    <button className={s.rightButton} onClick={moveRight}><img src="../../public/Team/arrow.svg" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Team;