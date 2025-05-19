import s from './style.module.css'

const Feedback = () => {

    return (
        <div className={s.Feedback}>
            <div className={s.heading}>
                <div className={s.title}>What Our Clients Say<img src="../../public/Heading/Vector (3).svg" alt="" /></div>
            </div>
            <form className={s.form}>
                <div className={s.dataUsers}>
                    <div className={`${s.name} ${s.wrapInp}`}><img src='../../public/Feedback/name.svg' /><input required className={s.inp} type="text" placeholder='Name'/></div>
                    <div className={`${s.phone} ${s.wrapInp}`}><img src='../../public/Feedback/phone.svg' /><input required className={s.inp} type="text" placeholder='Phone Number'/></div>
                    <div className={`${s.email} ${s.wrapInp}`}><img src='../../public/Feedback/email.svg' /><input required className={s.inp} type="text" placeholder='Business Email'/></div>
                </div>
                <textarea required className={`${s.message} ${s.inp}`} placeholder='Message'></textarea>
                <div className={s.send}>
                    <div className={s.check}>
                        <input required type='checkbox' className={s.checkbox}/>
                        I agree with Terms of Use and Privacy Policy
                    </div>
                    <button className={s.btnSend}>Send <img src="../../public/Feedback/send.svg" alt="" /></button>
                </div>
            </form>
            
        </div>
    )
}

export default Feedback;