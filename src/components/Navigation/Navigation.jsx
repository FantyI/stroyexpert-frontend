import s from './style.module.css'

import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../../redux/slice/userSlice';
const Navigation = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.user.items)
    console.log(items)

    const clickExit = () => {
        if(confirm('Вы уверены, что хотите выйти?')){
            dispatch(logout())
        }
    }   

    return (
        <nav className={s.navigate}>
            <Link to='/' className={s.logo}>
                <img src="../../public/header/logo.svg" alt="logo" />
                <p className={s.nameCompany}>Строй <br /> Эксперт</p>
            </Link>

            <ul className={s.navigationList}>
                <li><Link to='/projects'>Проекты</Link></li>
                <li><Link to='/repairs'>Ремонты</Link></li>
                <li><Link to='/contacts'>Контакты</Link></li>
            </ul>

            {/* <div className={s.search}>
                <input type="text" placeholder='Search'/>
                <img src="../../public/header/iconSearch.svg" alt="" className={s.iconSearch} />
            </div> */}
            {items?.user
                ? <div className={s.sign}>
                    <button className={s.account}>{items.user.name.slice(0, 1).toUpperCase()}</button>
                    <button onClick={clickExit} className={s.signIn} to='/auth/login'>Выйти</button>
                </div>

                : <div className={s.sign}>
                    <Link className={s.signIn} to='/auth/login'>Войти</Link>
                    <Link className={s.signUp} to='/auth/register'>Зарегистрироваться</Link>
                </div>
            }
        </nav>
    )
}

export default Navigation;