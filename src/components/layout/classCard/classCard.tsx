import React, { useState } from "react";
import useStyles from "./classCardStyle";
import { IClass } from "../../../services/TeacherService";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ClassDetailsPopUp from "../../shared/classDetailsPopUp/classDetailsPopUp";

interface IClassCardProps {
  classData: IClass;
}

const ClassCard: React.FC<IClassCardProps> = (props: IClassCardProps) => {
  const classes = useStyles();
  const [isClassPopUpOpen, setIsClassPopUpOpen] = useState(false);

  return (
    <>
      <div className={classes.classCardRoot}>
        <div className={classes.classSubject}>{props.classData.subject}</div>
        <div className={classes.classAdditionalData}>{props.classData.city}</div>
        <div className={classes.classAdditionalData}>
          {props.classData.ageRangeMin.toString() + " - " + props.classData.ageRangeMax.toString()}
        </div>
        <div className={classes.classActionButtons}>
          <Button onClick={() => setIsClassPopUpOpen(true)}>
            <EditIcon className={classes.classActionButtonIcon} />
          </Button>
          <Button>
            <DeleteIcon className={classes.classActionButtonIcon} />
          </Button>
        </div>
      </div>
      <ClassDetailsPopUp
        classData={props.classData}
        isAddingClassPopUp={false}
        isOpen={isClassPopUpOpen}
        onClose={() => setIsClassPopUpOpen(false)}
      />
    </>
  );
};

export default ClassCard;
