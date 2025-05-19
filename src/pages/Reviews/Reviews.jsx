import s from './style.module.css'

const Reviews = () => {

    return (
        <div className={s.ReviewsBlock}>
            <div className={s.heading}>
                <div className={s.title}>What Our Clients Say<img src="../../public/Heading/Vector (3).svg" alt="" /></div>
                <p className={s.description}>
                    At Pinnacle, we're not just building structures - we're building relationships. Here's what some of our satisfied clients have to say about their experience with us.
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
                        <div className={s.info}>4.3/5 Rated by 300+ Professionals</div>
                    </div>
                </div>
            </div>
            <div className={s.reviews}>
                <div className={s.review}>
                    <img className={s.userIcon} src="../../public/Reviews/users.png" alt="" />
                    <div className={s.text}>
                        <p className={s.msg}>
                            "Pinnacle's attention to detail and commitment to excellence is unparalleled. Their team is professional, courteous, and always willing to go the extra mile."
                        </p>
                        <div className={s.name}>- Emily J. Smith, Owner, Smith & Co.</div>
                    </div>
                </div>
                <div className={s.review}>
                    <img className={s.userIcon} src="../../public/Reviews/users.png" alt="" />
                    <div className={s.text}>
                        <p className={s.msg}>
                            "Pinnacle's attention to detail and commitment to excellence is unparalleled. Their team is professional, courteous, and always willing to go the extra mile."
                        </p>
                        <div className={s.name}>- Emily J. Smith, Owner, Smith & Co.</div>
                    </div>
                </div>
                <div className={s.review}>
                    <img className={s.userIcon} src="../../public/Reviews/users.png" alt="" />
                    <div className={s.text}>
                        <p className={s.msg}>
                            "Pinnacle's attention to detail and commitment to excellence is unparalleled. Their team is professional, courteous, and always willing to go the extra mile."
                        </p>
                        <div className={s.name}>- Emily J. Smith, Owner, Smith & Co.</div>
                    </div>
                </div>
                <div className={s.review}>
                    <img className={s.userIcon} src="../../public/Reviews/users.png" alt="" />
                    <div className={s.text}>
                        <p className={s.msg}>
                            "Pinnacle's attention to detail and commitment to excellence is unparalleled. Their team is professional, courteous, and always willing to go the extra mile."
                        </p>
                        <div className={s.name}>- Emily J. Smith, Owner, Smith & Co.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;