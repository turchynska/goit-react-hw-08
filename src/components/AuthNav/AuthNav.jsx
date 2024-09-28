import css from './AuthNav.module.css'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

const getLinkStyle = ({isActive}) => {
    classNames(css.link, {
        [css.isActive]: isActive
    })
}

const AuthNav = () => {
    return(
        <div className={css.box}>
            <NavLink to='/login' className={getLinkStyle}>Login</NavLink>
            <NavLink to='/register' className={getLinkStyle}>Register</NavLink>
        </div>
    )
}
export default AuthNav