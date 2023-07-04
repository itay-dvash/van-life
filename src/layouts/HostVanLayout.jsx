import { Link, Outlet, useLoaderData } from 'react-router-dom'
import VanDetailContainer from '../components/VanDetailContainer'
import HostVanNavbar from '../components/HostVanNavbar'
import { arrowIcon } from '../assets/icons.jsx'

export default function HostVanLayout() {
    const hostVan = useLoaderData().vans

    return (
        <div className='page'>
            <Link to='..' relative='path' className='van-detail--back'>
                {arrowIcon} Back to all vans
            </Link>

            {hostVan ?
            <div className='host-vans-detail'>
                <VanDetailContainer hostVan={hostVan} />
                <HostVanNavbar id={hostVan.id} />
                <Outlet context={{ hostVan }} />
            </div>
            : <h2 style={{marginLeft: '2.4rem'}}>Loading...</h2>}
        </div>
    )
}