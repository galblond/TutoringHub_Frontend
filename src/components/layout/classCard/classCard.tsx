import React, { useContext, useState } from "react";
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
import GeneralContext from "../../../contexts/GeneralContext";
interface IClassCardProps {
  classData: IClass;
  deleteClass: (classToDelete: IClass) => void;
}

const ClassCard: React.FC<IClassCardProps> = (props: IClassCardProps) => {
  const classes = useStyles();
  const context = useContext(GeneralContext);
  const [isClassPopUpOpen, setIsClassPopUpOpen] = useState(false);
  const [isClassDeletePopUpOpen, setIsClassDeletePopUpOpen] = useState(false);

  const handleClickOpen = () => {
    setIsClassDeletePopUpOpen(true);
  };

  const handleClose = () => {
    setIsClassDeletePopUpOpen(false);
  };

  const handleDelete = () => {
    props.deleteClass(props.classData);
    setIsClassDeletePopUpOpen(false);
  };

  return (
    <>
      <div className={classes.classCardRoot}>
        <div className={classes.classSubject}>{props.classData.subject}</div>
        <div className={classes.classAdditionalData}>{props.classData.city}</div>
        <div className={classes.classAdditionalData}>
          {props.classData.minAgeRange &&
            props.classData.maxAgeRange &&
            props.classData.minAgeRange.toString() + " - " + props.classData.maxAgeRange.toString()}
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
        <DialogTitle id="alert-dialog-title">{"Delete class"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the class {props.classData.subject}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
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
