import s from './style.module.css'

const AboutUs = () => {

    return (
        <div className={s.aboutUs}>
            <img src="../../public/AboutUs/AboutUs.svg" alt="" />
            <div className={s.text}>
                <div className={s.name}>
                    <span className={s.highlight}>25 years</span><br />
                    of experience!
                </div>
                <div className={s.description}>
                    <p>
                        We have a team of experienced professionals who have been in the industry for over 25 years. Our contractors have a wealth of knowledge and skills that they have acquired over the years, making them experts in their field.
                    </p>
                    <p>
                        With 25 years of experience, our contractors have a deep understanding of industry standards and regulations. We ensure that all our projects comply with the latest safety and building codes, and that the final product meets or exceeds our client's expectations.
                    </p>
                </div>
                <div className={s.signature}>
                    <span>jhon lbf</span><br/>
                    {/* Henry Kurnia Adhi - Founder */}
                </div>
            </div>
        </div>
    )
}

export default AboutUs;