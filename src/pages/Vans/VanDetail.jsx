import { Link, useLocation, useLoaderData } from 'react-router-dom'
import { arrowIcon } from '../../assets/icons.jsx'

export default function VanDetail() {
    const location = useLocation()
    const van = useLoaderData().vans

    return (
        <div className='page van-detail'>
            <div className='van-detail--container'>
                <Link 
                    to={`../?${location.state?.sp}`} 
                    relative='path'
                    className='van-detail--back'
                >
                    {arrowIcon} Back to all vans
                </Link>

                <img src={van.imageUrl}/>

                <div className='van-detail--content'>
                    <h4 className={`van-type ${van.type} selected big`}>{van.type}</h4>
                    <h3 className='van-name big'>{van.name}</h3>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h3 className='van-price big'>${van.price}</h3>
                        <p className='per-day big'>/day</p>
                    </div>

                    <p className='van-description'>{van.description}</p>

                    <Link className='link-button orange-button' to='/'>
                        Rent this van
                    </Link>
                </div>
            </div>
        </div>
    )
}