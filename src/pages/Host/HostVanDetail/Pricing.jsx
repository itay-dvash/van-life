import { useOutletContext } from 'react-router-dom'

export default function Pricing() {
    const { hostVan } = useOutletContext()
    
    return (
        <div className='mini hvd-pricing'>
            <div className='hvd-pricing--price'>
                <h3 className='van-price'>${hostVan.price.toFixed(2)}</h3>
                <p className='per-day'>/day</p>
            </div>
        </div>
    )
}