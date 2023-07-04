import { NavLink } from 'react-router-dom'

export default function HostVanNavbar({id}) {
    return (
        <nav className='host-navbar small'>
            <NavLink to={`/host/vans/${id}`} end>Details</NavLink>
            <NavLink to='pricing'>Pricing</NavLink>
            <NavLink to='photos'>Photos</NavLink>
        </nav>
    )
}