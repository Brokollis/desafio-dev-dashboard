import './style.css'

interface IpropsCardCategory{
    category: string;
    quantitySales: number;
    colorBorder?: string;
}

const CardCategory = ({category, quantitySales, colorBorder} : IpropsCardCategory) =>{
    return(
        <div className="card-category">
            <div className="card-category_image">
                <span className="card-category_title-category"
                style={{
                    border:"3px solid " + colorBorder
                }}>
                    {category}
                </span>
            </div>
            <div className="card-category_text">
                <div className='card-category_quantity-sales'>
                    <span className="card-category_icon">
                        <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
                            <path d="M12 4v16m-8-8h16" />
                        </svg>
                    </span>
                    <h1 className="card-category_value">
                        {quantitySales}
                    </h1>
                </div>
                <p className="card-category_legend">
                    Total vendido
                </p>
            </div>
        </div>
    )
}

export default CardCategory;