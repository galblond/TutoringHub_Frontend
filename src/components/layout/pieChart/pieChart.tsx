import React, { useContext, useEffect, useState } from "react";
import * as d3 from "d3";
import Pie from "../statistics/statistic";

const PieChartComponent: React.FC<{}> = (props) => {
  const generateData = (value: any, length = 5) =>
    d3.range(length).map((item, index) => ({
      name: "adi",
      value: 10,
    }));

  const [data, setData] = useState(generateData(10));
  return (
    <div>
      <Pie data={data} width={200} height={200} innerRadius={60} outerRadius={100} />
    </div>
  );
};

export default PieChartComponent;
