import './style.css'

interface IPropsCardHighlight{
    title: string;
    descripton: string;
    quantitySales: number;
}

const CardHighlight =({title, descripton, quantitySales} : IPropsCardHighlight) => {
    return(
        <div className="card-highlight">
            <div className="card-highlight_text">
                <h1>
                    {title}
                </h1>
                <p>
                    {descripton}
                </p>
            </div>
            <div className="card-highlight_sales-balance">
                <div className='card-highlight_quantity-sales'>
                    <span className="card-highlight_icon">
                        <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
                            <path d="M12 4v16m-8-8h16" />
                        </svg>
                    </span>
                    <h1 className="card-highlight_value">
                        {quantitySales}
                    </h1>
                </div>
            </div>
        </div>
    )

}

export default CardHighlight;