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
            setPageNumber(1)
        } else {
            setMoveIt((moveIt) => moveIt - 1400);
            setPageNumber(numberPages => numberPages - 1)
        }
    }

    return (
        <div className={s.TeamBlock}>
            <div className={s.heading}>
                <div className={s.title}><img src="/Heading/Vector (3).svg" alt="" />Наша команда</div>
                <p className={s.description}>
                    Обладая разнообразными навыками и опытом, наша команда стремится добиваться исключительных результатов и превосходить ожидания наших клиентов.
                </p>
            </div>
            <div className={s.scrolle} >
                <div className={s.cards} style={{transform: `translateX(-${moveIt}px)`}}>
                    <div className={s.card}>
                        <img src="/Team/Card-image.png" alt="" className={s.photo} />
                        <div className={s.nameAndPosition}>
                            <span className={s.name}>Сергей /</span><span className={s.position}> Founder and СЕО</span>
                        </div>
                        <div className={s.aboutEmployee}>
                            Имея более чем 20-летний опыт работы в сфере строительства и недвижимости, он заслужил репутацию человека, неизменно преданного качеству и инновациям.
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="/Team/Card-image.png" alt="" className={s.photo} />
                        <div className={s.nameAndPosition}>
                            <span className={s.name}>Евгения /</span><span className={s.position}> VP of 0perations</span>
                        </div>
                        <div className={s.aboutEmployee}>
                            Евгения — движущая сила повседневной деятельности. Ее способность решать сложные задачи и находить креативные решения сыграла решающую роль в нашем росте.
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="/Team/Card-image.png" alt="" className={s.photo} />
                        <div className={s.nameAndPosition}>
                            <span className={s.name}>Михаил /</span><span className={s.position}> Director of Design</span>
                        </div>
                        <div className={s.aboutEmployee}>
                            Он обладает уникальной способностью превращать даже самые амбициозные видения в реальность. Его инновационный подход и внимание к деталям заслужили ему уважение наших клиентов.
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="/Team/Card-image.png" alt="" className={s.photo} />
                        <div className={s.nameAndPosition}>
                            <span className={s.name}>John Doe /</span><span className={s.position}> Founder and СЕО</span>
                        </div>
                        <div className={s.aboutEmployee}>
                            With over 20 years of experience in the construction and real estate industry, he has built a reputation for his unwavering commitment to quality and innovation.
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="/Team/Card-image.png" alt="" className={s.photo} />
                        <div className={s.nameAndPosition}>
                            <span className={s.name}>John Doe /</span><span className={s.position}> Founder and СЕО</span>
                        </div>
                        <div className={s.aboutEmployee}>
                            With over 20 years of experience in the construction and real estate industry, he has built a reputation for his unwavering commitment to quality and innovation.
                        </div>
                    </div>
                    <div className={s.card}>
                        <img src="/Team/Card-image.png" alt="" className={s.photo} />
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
                    <button className={s.leftButton} onClick={moveLeft}><img src="/Team/arrow.svg" alt="" /></button>
                    <button className={s.rightButton} onClick={moveRight}><img src="/Team/arrow.svg" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Team;