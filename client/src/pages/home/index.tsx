import { useContext } from "react";
import CardCategory from "../../components/cardCategory";
import CardHighlight from "../../components/cardHighlight";
import Carousel from "../../components/carousel";
import { FileDataContext } from "../../services/UseFileContext";
import { changeColorCategory } from "../../utils/changeColorCategory";
import CardSalesMonth from "../../components/cardSalesMonth";
import getMonthNameOfDate from '../../utils/getMonthOfDate.ts'
import './style.css'
import TableSales from "../../components/listSales/index.tsx";


const Home = () => {

    const { jsonData } = useContext(FileDataContext);
    const calculateTotalSalesOfCategory = (product: string) => {
        return jsonData
            .filter((obj) => obj.PRODUTO === product)
            .reduce((total, obj) => total + obj.QUANTIDADE_VENDIDA, 0);
    };

    const uniqueProducts = [...new Set(jsonData.map((obj) => obj.PRODUTO))];

    const uniqueCategoryProductCards = uniqueProducts.map((product) => {
        const salesQuantity = calculateTotalSalesOfCategory(product);
        return (
            <CardCategory key={product} quantitySales={salesQuantity} category={product} colorBorder= {changeColorCategory(product)}/>
        );
    });

    const totalSales = jsonData.reduce((total, obj) => total + obj.QUANTIDADE_VENDIDA, 0);


    const currentMonth = new Date().getMonth() + 1;
    const currentYear = 2021;

    const filteredSales = jsonData.filter((sale) => {
      return sale.DATA.includes(`${currentMonth}/${currentYear}`);
    });
    
    const totalQuantity = filteredSales.reduce((total, sale) => total + sale.QUANTIDADE_VENDIDA, 0);
       


    const calculateTotalSalesOfMonth = (monthYear: string) => {
        return jsonData
            .filter((obj) => {
                return obj.DATA.includes(monthYear);
            })
            .reduce((total, obj) => total + obj.QUANTIDADE_VENDIDA, 0);
    };
    
      
    const uniqueMonths = [...new Set(jsonData.map((obj) => obj.DATA.slice(3)))];

    const uniqueProductCardsOfMonth = uniqueMonths.map((monthYear) => {
        const [targetMonth, targetYear] = monthYear.split('/');
        const formattedMonthYear = `${targetMonth.padStart(2, '0')}/${targetYear}`;
        const salesQuantityOfMonth = calculateTotalSalesOfMonth(formattedMonthYear);
        const monthName = getMonthNameOfDate(formattedMonthYear); 
        return (
            <CardSalesMonth key={monthYear} month={monthName} valueSales={salesQuantityOfMonth} />
        );
    });


    return(
        <main>
            <section className="highlights">
                <div className="cards-sales-months">
                    <Carousel
                        settingsResponsive={{
                            0: { items: 2.1 },
                            380: { items: 2.2 },
                            430: { items: 2.5 },
                            580: { items: 3 },
                            650: { items: 3.5},
                            740: { items: 2},
                            815:{items:2.5 },
                            945:{items:3 },
                            1035:{items:3.5},
                            1140: { items: 4.0 }
                        }}>
                        {uniqueProductCardsOfMonth}
                    </Carousel>
                </div>
                <div className="cards-highlights">
                    <CardHighlight
                        title="Agosto"
                        descripton="Total vendido mês"
                        quantitySales={totalQuantity}
                    />
                    <CardHighlight
                        title="2021"
                        descripton="Total vendido ano"
                        quantitySales={totalSales}
                    />
                </div>
            </section>
            <section className="categories">
                <Carousel
                    settingsResponsive={{
                        0: { items: 1.4},
                        390: { items: 1.5},
                        460: { items: 1.8},
                        500: { items: 2},
                        560: { items: 2.2},
                        620: { items: 2.5},
                        685: { items: 2.8},
                        740: { items: 3},
                        800: { items: 3.1 },
                        950: { items: 3.5 },
                        1090:{items: 4.1},
                        1160: { items: 4.4 }
                 }}>
                    {uniqueCategoryProductCards}
                </Carousel>
            </section>
            <section className="list-sales">
                <TableSales/>
            </section>
        </main>
    );
}

export default Home;