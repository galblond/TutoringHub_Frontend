import { Button, Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import GeneralContext from "../../../contexts/GeneralContext";
import useStyles from "./teacherClassesTabStyles";
import ClassCard from "../classCard/classCard";
import AddIcon from "@material-ui/icons/Add";
import ClassDetailsPopUp from "../../shared/classDetailsPopUp/classDetailsPopUp";

const TeacherClassesTab: React.FC<{}> = () => {
  const context = useContext(GeneralContext);
  const classes = useStyles();
  const [isAddingClassPopUpOpen, setIsAddingClassPopUpOpen] = useState(false);

  useEffect(() => {
    context.getTeacherRelatedClasses();
    if (context.cities.length === 0) context.getAllCities();
  }, []);

  return (
    <div>
      {context.teacherRelatedClasses && context.teacherRelatedClasses.length > 0 ? (
        <Grid container className={classes.classesGridContainer}>
          {context.teacherRelatedClasses.map((teacherRelatedClass, index) => (
            <Grid key={index} xs={6}>
              <ClassCard classData={teacherRelatedClass} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div style={{ height: "52vh", fontFamily: "CircularStdBold", fontSize: "5vh", color: "#00cc98" }}>
          It's never too late to teach some new classes!
        </div>
      )}
      <Button classes={{ root: classes.addClassButton }} onClick={() => setIsAddingClassPopUpOpen(true)}>
        <AddIcon />
      </Button>
      <ClassDetailsPopUp
        classData={null}
        isAddingClassPopUp={true}
        isOpen={isAddingClassPopUpOpen}
        onClose={() => setIsAddingClassPopUpOpen(false)}
      />
    </div>
  );
};

export default TeacherClassesTab;
