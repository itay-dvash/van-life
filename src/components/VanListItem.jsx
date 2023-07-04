import { Link } from 'react-router-dom'

export default function VanListItem({hostVan}) {
    return (
        <Link to={`${hostVan.id}`} className='van-list-item'>
            <img src={hostVan.imageUrl} />
            <div className='van-list-item--content'>
                <h3>{hostVan.name}</h3>
                <p>${hostVan.price}/day</p>
            </div>
        </Link>
    )
}