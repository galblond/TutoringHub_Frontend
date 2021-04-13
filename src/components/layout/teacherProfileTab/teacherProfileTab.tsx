import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Lock, MailOutline, Visibility, VisibilityOff } from "@material-ui/icons";
import GeneralContext from "../../../contexts/GeneralContext";
import {
  Area,
  Gender,
  IServerTeacher,
  ITeacher,
  IUserPresentedData,
  TeacherService,
} from "../../../services/TeacherService";
import useStyles from "./teacherProfileTabStyles";
import firebase from "firebase";

interface IUserPassword {
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
  showPasswordConfirm: boolean;
}

const TeacherProfileTab: React.FC<{}> = () => {
  const context = useContext(GeneralContext);
  const classes = useStyles();
  const [isClassPopUpOpen, setIsClassPopUpOpen] = useState(false);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [teacherData, setTeacherData] = useState<IServerTeacher>({
    id: context.currentlySignedTeacher._id,
    name: context.currentlySignedTeacher.name,
    education: context.currentlySignedTeacher.education,
    availability: context.currentlySignedTeacher.availability,
    gender: context.currentlySignedTeacher.gender,
    areas: context.currentlySignedTeacher.areas,
  });

  const resetPassword = () => {
    var auth = firebase.auth();
    var emailAddress = context.userData.email;

    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        setPopUpOpen(true);
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const handleClose = () => {
    setPopUpOpen(false);
  };

  const handleChange = (prop: keyof ITeacher) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeacherData({
      ...teacherData,
      [prop]: event.target.value,
    });
  };

  const saveChanges = () => {
    TeacherService.updateTeacher(teacherData)
      .then((createdTeacher) => {
        console.log("createdTeacher => ", createdTeacher);
        context.setCurrentlySignedTeacher(createdTeacher);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };
  return (
    <div style={{ maxHeight: "45vh" }}>
      <FormControl>
        <InputLabel required className={classes.inputLabel} shrink={true}>
          Full name
        </InputLabel>
        <Input
          required
          className={classes.input}
          type={"text"}
          value={teacherData.name || ""}
          onChange={handleChange("name")}
        />
      </FormControl>
      <FormControl style={{ marginTop: "3.5vh" }}>
        <InputLabel className={classes.inputLabel} shrink={true}>
          Gender
        </InputLabel>
        <Select
          className={classes.input}
          value={teacherData.gender}
          onChange={(event) => setTeacherData({ ...teacherData, gender: event.target.value as Gender })}
          // value={context.currentlySignedTeacher.gender}
          // onChange={(event) => props.setTeacherData({ ...props.teacherData, gender: event.target.value as Gender })}
        >
          <MenuItem value={""} disabled>
            Choose gender
          </MenuItem>
          <MenuItem value={Gender.Female}>Female</MenuItem>
          <MenuItem value={Gender.Male}>Male</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ marginTop: "3.5vh" }}>
        <InputLabel className={classes.inputLabel} shrink={true}>
          Area
        </InputLabel>
        <Select
          className={classes.input}
          value={teacherData.areas}
          multiple
          onChange={(event) => setTeacherData({ ...teacherData, areas: event.target.value as Area[] })}
        >
          <MenuItem value={""} disabled>
            Choose your teaching area
          </MenuItem>
          <MenuItem value={Area.central}>Central</MenuItem>
          <MenuItem value={Area.north}>North</MenuItem>
          <MenuItem value={Area.south}>South</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel required className={classes.inputLabel} shrink={true}>
          Describe your education
        </InputLabel>
        <Input
          required
          className={classes.input}
          type={"text"}
          value={teacherData.education || ""}
          onChange={handleChange("education")}
        />
        <FormControlLabel
          classes={{
            labelPlacementStart: classes.labelPlacementStart,
          }}
          control={
            <Checkbox
              checked={teacherData.availability}
              // onChange={handleChange}
              name="Availability"
              color="primary"
            />
          }
          label="Availability"
          labelPlacement="start"
        />
        <Button onClick={resetPassword}>Reset Password</Button>
        <Button onClick={saveChanges}>Save Changes</Button>
      </FormControl>
      <Dialog
        open={popUpOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete class"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have received an email for password reset.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TeacherProfileTab;
