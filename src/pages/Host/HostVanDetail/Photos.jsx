import { useOutletContext } from 'react-router-dom'

export default function Photos() {
    const { hostVan } = useOutletContext()
    
    return (
        <div className='mini hvd-photos'>
            <img src={hostVan.imageUrl} />
        </div>
    )
}