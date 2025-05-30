import { useState } from 'react'
import s from './style.module.css'
import { fetchSend } from '../../redux/slice/orderSlice';
import axios from '../../axios';

const Feedback = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSend = async () => {
        try {
            const userData = {
                name,
                phone,
                email,
                message
            }
            const { data } = await axios.post('/request', userData);
            console.log(data)
            alert('Заявка успешно отправлена.')
        } catch (error) {
            alert('Ошибка.')
        }
    }

    return (
        <div className={s.Feedback}>
            <div className={s.heading}>
                <div className={s.title}>У вас есть проект?<img src="../../public/Heading/Vector (3).svg" alt="" /></div>
            </div>
            <div className={s.form}>
                <div className={s.dataUsers}>
                    <div className={`${s.name} ${s.wrapInp}`}>
                        <img src='/Feedback/name.svg' />
                        <input
                            required
                            onChange={e => setName(e.target.value)}
                            className={s.inp}
                            type="text"
                            placeholder='Name' />
                    </div>
                    <div className={`${s.phone} ${s.wrapInp}`}>
                        <img src='/Feedback/phone.svg' />
                        <input
                            required onChange={e => setPhone(e.target.value)}
                            className={s.inp}
                            type="text"
                            placeholder='Phone Number' />
                    </div>
                    <div className={`${s.email} ${s.wrapInp}`}>
                        <img src='/Feedback/email.svg' />
                        <input
                            required
                            onChange={e => setEmail(e.target.value)}
                            className={s.inp}
                            type="text"
                            placeholder='Business Email' />
                    </div>
                </div>
                <textarea required onChange={e => setMessage(e.target.value)} className={`${s.message} ${s.inp}`} placeholder='Message'></textarea>
                <div className={s.send}>
                    <div className={s.check}>
                        <input required type='checkbox' className={s.checkbox} />
                        Я согласен с Условиями использования и Политикой конфиденциальности
                    </div>
                    <button onClick={onSend} className={s.btnSend}>Отправить <img src="../../public/Feedback/send.svg" alt="" /></button>
                </div>
            </div>

        </div>
    )
}

export default Feedback;