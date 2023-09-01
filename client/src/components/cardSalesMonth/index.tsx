import './style.css'

interface IPropsCardSalesMonth{
    month: string;
    valueSales: number;
}
const CardSalesMonth: React.FC<IPropsCardSalesMonth> = ({month, valueSales}) => {

    return (
        <div className="card-sales_month">
            <div className="card-sales_month_title">
               <h1>
                    {month}
               </h1>
            </div>
            <div className="card-sales_month_value">
                <p className="card-sales_month_legend">
                    Total vendido mes
                </p>
                <div className="card-sales_month_quantity">
                    <h2>
                        {valueSales}
                    </h2>
                    <p>
                        un
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardSalesMonth