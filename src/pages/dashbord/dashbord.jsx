import React, { useEffect } from "react";
// import Chart from "chart.js/auto";
import { DashobrdChart , destroyChart } from "../../utils/dashbordChart";
import Cards from "./Card";
import ProductTable from "./productTable";

const Dashobord = () => {

    useEffect(()=>{
        const labels = [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند",
          ];
          const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
        DashobrdChart( labels , datapoints)
        return ()=>{
            destroyChart() 
          }
    } , [])

  return (
    <div className="container-fluid mt-3">
      <div className="cards d-flex justify-content-between mt-5">

        <Cards classCa="card1" numValue={"1,500,000"} Title="درامد امروز" icon="bi bi-currency-dollar" infoTitle="جمع مبلغ دریافتی"/>
        
        <Cards classCa="card2" numValue={"50"} Title="سفارشات امروز" icon="bi bi-cart" infoTitle="سفارشات کامل و دارای پرداختی"/>

        <Cards classCa="card3" numValue={"45"} Title="سفارشات مانده امروز" icon="bi bi-truck" infoTitle="سفارشات مانده و فاقد پرداختی"/>

        <Cards classCa="card4" numValue={"10"} Title="سبد خرید امروز" icon="bi bi-basket" infoTitle="سبد های خرید امروز"/>

      </div>

      <div className="content mt-5 p-3 d-flex justify-content-between">

        <div className="saleTable">

          <h6 className="text-center">محصولات رو به اتمام</h6>
          
          <ProductTable />

        </div>

        <div className="chartt w-50">

          <canvas id="myChart">
          </canvas>

        </div>
        
      </div>
    </div>
  );
};

export default Dashobord;
