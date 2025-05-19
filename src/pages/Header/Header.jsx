import Navigation from '../../components/Navigation/Navigation';
import s from './style.module.css'

const Header = () => {

    return (
        <header className={s.header}>
            <Navigation />
            <div className={s.greeting}>
                <h1 className={s.name}>
                    Civil <span className={s.srong}>Engineering Solutions</span> <br />
                    For The <span className={s.srong}>Cement</span> lndustry
                </h1>
                <p className={s.text}>
                    We are your leading partner for complex brownfield<br />
                    construction projects during ongoing operation.
                </p>
                <p className={s.text}>
                    Benefit from engineering excellence built on<br />
                    more than 30 years of industry experience.
                </p>
            </div>
            <div className={s.buttons}>
                <button>How can we serve you</button>
                <button>Contact Us</button>
            </div>
            <div className={s.advantages}>
                <div className={s.mainAdvantages}>
                    <div className={s.advantage}>
                        <div className={s.number}>25+</div>
                        <div className={s.description}>
                            Years of <br/>
                            Experience
                        </div>
                    </div>
                    <div className={s.advantage}>
                        <div className={s.number}>25+</div>
                        <div className={s.description}>
                            Years of <br/>
                            Experience
                        </div>
                    </div>
                    <div className={s.advantage}>
                        <div className={s.number}>25+</div>
                        <div className={s.description}>
                            Years of <br/>
                            Experience
                        </div>
                    </div>
                </div>

                <div className={s.listAdvantages}>
                    <ul>
                        <li>Quality Control System, 100% Satisfaction Guarantee</li>
                        <li>Highly Proffesional Staff, Accurate Testing Processes</li>
                        <li>Unrivalled Workmanship, Proffesional and Qualified</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header; 