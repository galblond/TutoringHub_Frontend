import React, { useContext, useEffect, useState } from "react";
import * as d3 from "d3";
import Pie from "../statistics/statistic";
import { LessonService } from "../../../services/LessonsService";
import GeneralContext from "../../../contexts/GeneralContext";
import { ClassType } from "../../../services/TeacherService";
import { Grid, Typography } from "@material-ui/core";

interface IPieChartData {
  name: string;
  value: any;
}

const PieChartComponent: React.FC<{}> = (props) => {
  const context = useContext(GeneralContext);
  const generateData = async () => {
    const returnedData = await LessonService.getStatistics(context.currentlySignedTeacher._id);
    let arrangedData = returnedData.map((item: any) => ({
      name:
        item._id === ClassType.Zoom
          ? "Zoom"
          : ClassType.Teachers_Home
          ? "Teacher's Home"
          : ClassType.Students_Home
          ? "Student's Home"
          : "",
      value: item.value,
    }));
    setData(arrangedData);
  };

  const generateCityStatisticsData = async () => {
    const returnedData = await LessonService.getCityStatistics(context.currentlySignedTeacher._id);
    let arrangedData = returnedData.map((item: any) => ({
      name: item._id,
      value: item.count,
    }));
    setCityStatisticsData(arrangedData);
  };

  const [data, setData] = useState<IPieChartData[]>([]);
  const [cityStatisticsData, setCityStatisticsData] = useState<IPieChartData[]>([]);

  useEffect(() => {
    generateData();
    generateCityStatisticsData();
  }, []);

  return (
    <Grid container style={{ overflowY: "scroll", height: "55vh" }}>
      {data.length > 0 || cityStatisticsData.length > 0 ? (
        <>
          {data.length > 0 && (
            <Grid item xs={6}>
              <Typography variant="h6">By classes types</Typography>
              <Pie data={data} width={300} height={300} innerRadius={70} outerRadius={150} />
            </Grid>
          )}
          {cityStatisticsData.length > 0 && (
            <Grid item xs={6}>
              <Typography variant="h6">By classes cities</Typography>
              <Pie data={cityStatisticsData} width={300} height={300} innerRadius={70} outerRadius={150} />
            </Grid>
          )}
        </>
      ) : (
        <Typography variant="h6">Add classes to show some statistics about them</Typography>
      )}
    </Grid>
  );
};

export default PieChartComponent;
