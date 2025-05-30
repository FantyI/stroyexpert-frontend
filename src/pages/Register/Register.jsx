import { Link, Navigate, useNavigate } from 'react-router';
import s from './style.module.css'
import Login from '../Login/Login';
import { useEffect, useisAuth, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister } from '../../redux/slice/userSlice';

const Register = () => {

    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const state = useSelector(state => state.user.items)
    // const isAuth = ('user' in state)
    // console.log(isAuth)

    // useEffect(() => {
    //     if(isAuth){
    //         navigate('/')
    //     }
    // }, [isAuth])


    const register = async () => {
        const userData = {
            name,
            email,
            password
        }
        const data = await dispatch(fetchRegister(userData))
        console.log('data', data)
        if(data.payload.error){
            alert(`Ошибка: ${data.payload.error}`)
        }
        else if(data.payload){
            window.localStorage.setItem('token',`Bearer ${data.payload.token}`)
            navigate('/')
        } else{
            alert('Не получилось зарегистрировааться')
        }
    }

    const onBlurUserName = (e) => {
        if(!name.includes('@')){
            return setName('@' + e.target.value)
        }
    }



    return (
        <div className={s.register} >
            <div className={s.wrap}>
                <div className={s.title}>Зарегистрироваться</div>
                {/* <div className={s.description}>Пожалуйста, войдите в свою учетную запись, чтобы продолжить работу.</div> */}

                <div className={s.inp}>
                    <input onChange={e => setName(e.target.value)} value={name} type="text" id='name' placeholder=' ' />
                    <label htmlFor="userName">Name</label>
                </div>
                <div className={s.inp} >
                    <input onChange={e => setEmail(e.target.value)} value={email} type="text" id='email' placeholder=' ' />
                    <label htmlFor="email">Email</label>
                </div>
                <div className={`${s.inp} ${s.password}`}>
                    <input onChange={e => setPassword(e.target.value)} value={password} type="text" id='password' placeholder=' ' />
                    <label htmlFor="password">Password</label>
                    <button className={s.hide}><img src="public/Visibility.svg" alt="" /></button>
                    <button className={s.hide}><img src="public/Visibility Off.svg" alt="" /></button>
                </div>

                <button onClick={register} className={s.sign}>Зарегистрироваться</button>
                <div className={s.or}>
                    <hr />
                    или
                    <hr />
                </div>

                <p className={s.login}>Already have an account?? <Link to='/auth/login'>Войти</Link></p>
            </div>
            <img className={s.img}  src="../../public/Register-Login/image.svg" alt="" />
        </div>
    )
}

export default Register;