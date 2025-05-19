import s from './style.module.css'

import { Link } from 'react-router';

const Navigation = () => {

    return (
        <nav className={s.navigate}>
            <Link to='/' className={s.logo}>
                <img src="../../public/header/logo.svg" alt="logo" />
                <p className={s.nameCompany}>Строй <br /> Эксперт</p>
            </Link>

            <ul className={s.navigationList}>
                <li><Link to='/projects'>Project</Link></li>
                <li><Link to='/repairs'>Repair</Link></li>
                <li><a href="">Reviews</a></li>
                <li><a href="">Contacts</a></li>
            </ul>

            {/* <div className={s.search}>
                <input type="text" placeholder='Search'/>
                <img src="../../public/header/iconSearch.svg" alt="" className={s.iconSearch} />
            </div> */}

            <div className={s.sign}>
                <Link className={s.signIn} to='/auth/login'>Sign In</Link>
                <Link className={s.signUp} to='/auth/register'>Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navigation;