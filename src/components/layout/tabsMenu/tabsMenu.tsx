// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import useStyles from "./tabsMenuStyle";

// import SwipeableViews from "react-swipeable-views";

// const TabsMenu: React.FC<{}> = () => {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };
//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

//   return (
//     <div className={classes.tabCard}>
//       <Paper className={classes.root}>
//         <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
//           <Tab label="My Classes" />
//           <Tab label="Statistics" />
//           <Tab label="Profile" />
//         </Tabs>
//         <SwipeableViews
//           // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//           index={value}
//           onChangeIndex={handleChangeIndex}
//         >
//           <TabPanel value={value} index={0} dir={theme.direction}>
//             Item One
//           </TabPanel>
//           <TabPanel value={value} index={1} dir={theme.direction}>
//             Item Two
//           </TabPanel>
//           <TabPanel value={value} index={2} dir={theme.direction}>
//             Item Three
//           </TabPanel>
//         </SwipeableViews>
//       </Paper>
//     </div>
//   );
// };

// export default TabsMenu;
import React, { useContext } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PieChartComponent from "../pieChart/pieChart";
import useStyles from "./tabsMenuStyle";
import TeacherProfileTab from "../teacherProfileTab/teacherProfileTab";
import TeacherClassesTab from "../teacherClassesTab/teacherClassesTab";
import GeneralContext from "../../../contexts/GeneralContext";
// import { PieChart } from "@material-ui/icons";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// }));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const context = useContext(GeneralContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <>
      {context.currentlySignedTeacher.name && (
        <Typography variant="h6" className={classes.userNameTitle}>
          Hello, {context.currentlySignedTeacher.name}
        </Typography>
      )}
      <div className={classes.tabCard}>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="My Classes" {...a11yProps(0)} />
              <Tab label="Statistics" {...a11yProps(1)} />
              <Tab label="Profile" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <TeacherClassesTab />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {/* Item Two */}
              <PieChartComponent />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <TeacherProfileTab />
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </>
  );
}
