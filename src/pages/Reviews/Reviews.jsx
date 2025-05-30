import s from './style.module.css'

const Reviews = () => {

    return (
        <div className={s.ReviewsBlock}>
            <div className={s.heading}>
                <div className={s.title}>Что говорят клиенты<img src="../../public/Heading/Vector (3).svg" alt="" /></div>
                <p className={s.description}>
                    Наша компания не просто строит структуры — мы строим отношения. Вот что говорят некоторые из наших довольных клиентов о своем опыте работы с нами.
                </p>
                <div className={s.users}>
                    <div className={s.icons}>
                        <img src="../../public/Reviews/user1.png" alt="" />
                        <img src="../../public/Reviews/user2.png" alt="" />
                        <img src="../../public/Reviews/user3.png" alt="" />
                        <img src="../../public/Reviews/users.png" alt="" />
                    </div>
                    <div className={s.estimation}>
                        <div className={s.stars}>
                            {Array.from({ length: 5 }).map(() => (
                                <img src='../../public/Reviews/star.png' />
                            ))}
                        </div>
                        <div className={s.info}>4.8/5 Оценка от 300+ профессионалов</div>
                    </div>
                </div>
            </div>
            <div className={s.reviews}>
                <div className={s.review}>
                    <img className={s.userIcon} src="../../public/Reviews/users.png" alt="" />
                    <div className={s.text}>
                        <div className={s.name}>- Ольга, Owner, Smith & Co.</div>
                        <p className={s.msg}>
                            «Внимание Строй Эксперт к деталям и стремление к совершенству не имеют себе равных. Их команда профессиональна, вежлива и всегда готова сделать все возможное».                        </p>
                    </div>
                </div>
                <div className={s.review}>
                    <img className={s.userIcon} src="../../public/Reviews/users.png" alt="" />
                    <div className={s.text}>
                        <div className={s.name}>- Иван, Owner, Smith & Co.</div>
                        <p className={s.msg}>
                            «Я был поражен качеством работы. Они действительно понимают важность предоставления исключительных результатов».                        </p>
                    </div>
                </div>
                <div className={s.review}>
                    <img className={s.userIcon} src="../../public/Reviews/users.png" alt="" />
                    <div className={s.text}>
                        <div className={s.name}>- Давид, CEO, Lee Enterprises</div>
                        <p className={s.msg}>
                            «Я был поражен качеством работы и уровнем обслуживания. Они действительно понимают важность предоставления исключительных результатов».
                        </p>
                    </div>
                </div>
                <div className={s.review}>
                    <img className={s.userIcon} src="../../public/Reviews/users.png" alt="" />
                    <div className={s.text}>
                        <div className={s.name}> - Анна, Project Manager, Johnson Co</div>
                        <p className={s.msg}>
                            «Способность сбалансировать бюджет, график и качество впечатляет. Они — настоящий партнер в процессе строительства».
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;