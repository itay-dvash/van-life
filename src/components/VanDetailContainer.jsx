export default function VanDetailContainer({hostVan}) {
    return (
        <div className='van-detial-container'>
            <img src={hostVan.imageUrl} />
            <div className='van-detial-container--content'>
                <h4 className={`van-type ${hostVan.type} selected`}>{hostVan.type}</h4>
                <h3 className='van-name big'>{hostVan.name}</h3>
                <div style={{display: 'flex', alignItems: 'center'}}>
                        <h3 className='van-price big'>${hostVan.price}</h3>
                        <p className='per-day big'>/day</p>
                </div>
            </div>

        </div>
    )
}