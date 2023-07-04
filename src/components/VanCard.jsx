import { Link } from 'react-router-dom'

export default function VanCard({van, sp}) {
    return (
        <Link to={`${van.id}`} className='van-card' state={ {sp: sp.toString()} }>
            <img src={van.imageUrl}/>

            <div className='van-card--content'>
                <div className='van-card--content-p1'>
                    <h3 className='van-name'>{van.name}</h3>
                    <h4 className={`van-type ${van.type} selected`}>{van.type}</h4>
                </div>

                <div className='van-card--content-p2'>
                    <h3 className='van-price'>${van.price}</h3>
                    <p className='per-day'>/day</p>
                </div>
            </div>
        </Link>
    )
}