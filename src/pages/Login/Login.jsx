import { Link, useNavigate } from 'react-router';
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchLogin } from '../../redux/slice/userSlice';


const Login = () => {
    const dispatch = useDispatch();
    // const state = useSelector(state => state.user.items)

    // const isAuth = 'user' in state;

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = async () => {
        const dataUser = {
            email,
            password
        }

        const data = await dispatch(fetchLogin(dataUser))
        console.log('data', data)
        if (data.payload.error) {
            alert(`Ошибка: ${data.payload.error}`)
        }
        else if (data.payload) {
            window.localStorage.setItem('token',`Bearer ${data.payload.token}`)
            navigate('/')
        } else {
            alert('Не получилось войти')
        }

    }

    // useEffect(() => {
    //     if(isAuth){
    //         navigate('/home')
    //     }
    // }, [isAuth])

    return (
        <div className={s.login} >
            <div className={s.wrap}>
                <div className={s.title}>Войти</div>
                <div className={s.description}>Пожалуйста, войдите в свою учетную запись, чтобы продолжить работу.</div>

                <div className={s.inp} >
                    <input type="text" id='email' placeholder=' ' onChange={e => setEmail(e.target.value)} value={email} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className={`${s.inp} ${s.password}`}>
                    <input type="text" id='password' placeholder=' ' onChange={e => setPassword(e.target.value)} value={password} />
                    <label htmlFor="password">Password</label>
                    <button className={s.hide}><img src="public/regicter-login/Visibility.svg" alt="" /></button>
                    <button className={s.hide}><img src="public/regicter-login/Visibility Off.svg" alt="" /></button>
                </div>

                <button onClick={login} className={s.sign}>Войти</button>
                <div className={s.or}>
                    <hr />
                    или
                    <hr />
                </div>

                <p className={s.register}>Already have an account?? <Link className={s.link} to='/auth/register'>Создать аккаунт</Link></p>
            </div>
            <img className={s.img} src="../../public/Register-Login/image.svg" alt="" />
        </div>
    )
}

export default Login;