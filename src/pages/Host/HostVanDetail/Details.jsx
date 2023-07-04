import { useOutletContext } from 'react-router-dom'

export default function Details() {
    const { hostVan } = useOutletContext()
    
    return (
        <div className='mini hvd-deatails'>
            <p><strong>Name:</strong> {hostVan.name}</p>
            <p style={{ textTransform: 'capitalize' }}>
                <strong>Catagory:</strong> {hostVan.type}
            </p>
            <p><strong>Description:</strong> {hostVan.description}</p>
            <p><strong>Visibility:</strong> Public</p>
        </div>
    )
}