import React, { useState } from "react";
import { AppBar, Box, Button, Tab, Tabs, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TeacherClassesTab from "../../components/layout/teacherClassesTab/teacherClassesTab";
import TeacherStatisticsTab from "../../components/layout/teacherStatisticsTab/teacherStatisticsTab";
import TeacherProfileTab from "../../components/layout/teacherProfileTab/teacherProfileTab";
import useStyles from "./teacherManagementPageStyles";

interface ITeacherManagementTab {
  tabIndex: number;
  tabName: string;
  tabContent: React.FC<any>;
}

const teacherManagementTabs: ITeacherManagementTab[] = [
  {
    tabIndex: 0,
    tabName: "My Classes",
    tabContent: TeacherClassesTab,
  },
  {
    tabIndex: 1,
    tabName: "Statistics",
    tabContent: TeacherStatisticsTab,
  },
  {
    tabIndex: 2,
    tabName: "Profile",
    tabContent: TeacherProfileTab,
  },
];
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function tabProps(index: any) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const TeacherManagementPage = () => {
  const classes = useStyles();
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

  const handleTabSelectionChange = (event: React.ChangeEvent<{}>, newSelectedTabIndex: number) => {
    setSelectedTabIndex(newSelectedTabIndex);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={selectedTabIndex}
          onChange={handleTabSelectionChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          {teacherManagementTabs.map((teacherManagementTab) => (
            <Tab
              label={<span style={{ textTransform: "none" }}>{teacherManagementTab.tabName}</span>}
              {...tabProps(teacherManagementTab.tabIndex)}
            />
          ))}
          <Button className={classes.addNewClassIcon}>
            <AddIcon />
          </Button>
        </Tabs>
      </AppBar>
      {teacherManagementTabs.map((teacherManagementTabPanel) => (
        <TabPanel value={selectedTabIndex} index={teacherManagementTabPanel.tabIndex}>
          {teacherManagementTabPanel.tabContent}
        </TabPanel>
      ))}
    </div>
  );
};

export default TeacherManagementPage;
