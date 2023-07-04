import { useSearchParams, useLoaderData } from 'react-router-dom'
import VanCard from '../../components/VanCard'

export default function Vans() {
    // const [vans, setVans] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')

    const vans = typeFilter 
                    ? useLoaderData().vans.filter(
                        van => van.type === typeFilter.toLowerCase())
                    : useLoaderData().vans
    
    function handleFilterChange(key, value) {
        setSearchParams(prevSearchParams => {
            if (value === null)
                prevSearchParams.delete(key)
            else
                prevSearchParams.set(key, value)
            return prevSearchParams
        })
    }

    return (
        <div className='page vans'>
            <div className='vans--content'>
                <h1>Explore our van options</h1>

                <div className='vans--filtering'>
                    <button
                        className={`van-type simple vans--filter ${
                            typeFilter === 'simple' && 'selected'}`}
                        onClick={() => handleFilterChange('type', 'simple')}
                    >Simple</button>

                    <button
                        className={`van-type luxury vans--filter ${
                            typeFilter === 'luxury' && 'selected'}`}
                        onClick={() => handleFilterChange('type', 'luxury')}
                    >Luxury</button>

                    <button
                        className={`van-type rugged vans--filter ${
                            typeFilter === 'rugged' && 'selected'}`}
                        onClick={() => handleFilterChange('type', 'rugged')}
                    >Rugged</button>

                    {typeFilter && 
                    <p 
                        className='vans--clear-filter'
                        onClick={() => handleFilterChange('type', null)}
                    >Clear filters</p>}
                </div>

                {vans ? 
                <div className="van-cards">
                    {vans.map(van => <VanCard 
                                        key={van.id} 
                                        van={van} 
                                        sp={searchParams} 
                                    />)}
                </div>
                : <h2>Loading...</h2>}
            </div>
        </div>
    )
}