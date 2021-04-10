import React, { useState } from "react";
import useStyles from "./classCardStyle";
import { IClass } from "../../../services/TeacherService";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ClassDetailsPopUp from "../../shared/classDetailsPopUp/classDetailsPopUp";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
interface IClassCardProps {
  classData: IClass;
}

const ClassCard: React.FC<IClassCardProps> = (props: IClassCardProps) => {
  const classes = useStyles();
  const [isClassPopUpOpen, setIsClassPopUpOpen] = useState(false);
  const [isClassDeletePopUpOpen, setIsClassDeletePopUpOpen] = useState(false);

  const handleClickOpen = () => {
    setIsClassDeletePopUpOpen(true);
  };

  const handleClose = () => {
    setIsClassDeletePopUpOpen(false);
  };

  const handleDelete = () => {
    setIsClassDeletePopUpOpen(false);
  };

  return (
    <>
      <div className={classes.classCardRoot}>
        <div className={classes.classSubject}>{props.classData.subject}</div>
        <div className={classes.classAdditionalData}>{props.classData.city}</div>
        <div className={classes.classAdditionalData}>
          {props.classData.ageRangeMin &&
            props.classData.ageRangeMax &&
            props.classData.ageRangeMin.toString() + " - " + props.classData.ageRangeMax.toString()}
        </div>
        <div className={classes.classActionButtons}>
          <Button onClick={() => setIsClassPopUpOpen(true)}>
            <EditIcon className={classes.classActionButtonIcon} />
          </Button>
          <Button>
            <DeleteIcon className={classes.classActionButtonIcon} onClick={handleClickOpen} />
          </Button>
        </div>
      </div>
      <Dialog
        open={isClassDeletePopUpOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete lesson"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the lesson?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
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
