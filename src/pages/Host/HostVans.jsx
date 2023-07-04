import { useLoaderData } from 'react-router-dom'
import VanListItem from '../../components/VanListItem'

export default function HostVans() {
    const hostVans = useLoaderData().vans

    return (
        <div className='page host-vans'>
            <div className='host-vans--content'>
                <h1>Your listed vans</h1>

                {hostVans ? 
                <div className='host-vans-list'>
                    {hostVans.map(van => <VanListItem key={van.id} hostVan={van} />)}
                </div>
                : <h2 style={{marginTop: '2.4rem'}}>Loading...</h2>}
            </div>
        </div>
    )
}