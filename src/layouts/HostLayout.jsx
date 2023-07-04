import { Outlet } from 'react-router-dom'
import HostNavbar from '../components/HostNavbar'

export default function HostLayout() {
    return (
        <div className='layout'>
            <HostNavbar />
            <Outlet />
        </div>
    )
}