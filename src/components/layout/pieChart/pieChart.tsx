import React, { useContext, useEffect, useState } from "react";
import * as d3 from "d3";
import Pie from "../statistics/statistic";
import { LessonService } from "../../../services/LessonsService";
import GeneralContext from "../../../contexts/GeneralContext";

const PieChartComponent: React.FC<{}> = (props) => {
  const context = useContext(GeneralContext);
  const generateData = (value: any, length = 5) =>
    d3.range(length).map((item, index) => ({
      name: "adi",
      value: 10,
    }));

  const [data, setData] = useState(LessonService.getStatistics(context.currentlySignedTeacher._id));
  return (
    <div>
      <Pie data={data} width={200} height={200} innerRadius={60} outerRadius={100} />
    </div>
  );
};

export default PieChartComponent;
