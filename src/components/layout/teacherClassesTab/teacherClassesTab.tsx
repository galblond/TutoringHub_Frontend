import { Button, Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import GeneralContext from "../../../contexts/GeneralContext";
import useStyles from "./teacherClassesTabStyles";
import ClassCard from "../classCard/classCard";
import AddIcon from "@material-ui/icons/Add";
import ClassDetailsPopUp from "../../shared/classDetailsPopUp/classDetailsPopUp";
import { LessonService } from "../../../services/LessonsService";
import { IClass } from "../../../services/TeacherService";

const TeacherClassesTab: React.FC<{}> = () => {
  const context = useContext(GeneralContext);
  const classes = useStyles();
  const [isAddingClassPopUpOpen, setIsAddingClassPopUpOpen] = useState(false);

  useEffect(() => {
    if (context.teacherRelatedClasses !== []) {
      context.getTeacherRelatedClasses();
    }
    if (context.cities.length === 0) context.getAllCities();
  }, []);

  const deleteClass = (classToDelete: IClass) => {
    LessonService.deleteClass(classToDelete._id)
      .then((value) => {
        console.log("The class was deleted successfully");
        context.getTeacherRelatedClasses();
      })
      .catch((e) => console.log("e"));
  };

  return (
    <div>
      {context.teacherRelatedClasses && context.teacherRelatedClasses.length > 0 ? (
        <Grid container className={classes.classesGridContainer}>
          {context.teacherRelatedClasses.map((teacherRelatedClass, index) => (
            <Grid key={index} xs={6}>
              <ClassCard classData={teacherRelatedClass} deleteClass={deleteClass} />
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
