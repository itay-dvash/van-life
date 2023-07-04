import { NavLink } from 'react-router-dom'

export default function HostNavbar() {
    return (
        <nav className='host-navbar'>
            <NavLink to='.' end>Dashboard</NavLink>
            <NavLink to='income'>Income</NavLink>
            <NavLink to='vans'>Vans</NavLink>
            <NavLink to='reviews'>Reviews</NavLink>
        </nav>
    )
}