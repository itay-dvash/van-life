import { Link, NavLink } from 'react-router-dom'
import { avatarIcon } from '../assets/icons'

export default function Header() {
    return (
        <header>
            <h1><Link to='.'>#VANLIFE</Link></h1>
            <nav>
                <NavLink to='host'>Host</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='vans'>Vans</NavLink>

                <NavLink to="login" className="login-link">
                    {avatarIcon}
                </NavLink>
            </nav>
        </header>
    )
}