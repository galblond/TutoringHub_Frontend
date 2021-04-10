import React from "react";
import { FormControl, Input, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import { Area, Gender, IServerTeacher, ITeacher } from "../../../../../services/TeacherService";
import useStyles from "./registerTeacherDataStyles";

interface IRegisterTeacherDataProps {
  teacherData: IServerTeacher;
  setTeacherData: (teacherData: IServerTeacher) => void;
}

const RegisterTeacherData: React.FC<IRegisterTeacherDataProps> = (props: IRegisterTeacherDataProps) => {
  const classes = useStyles();

  const handleChange = (prop: keyof ITeacher) => (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setTeacherData({
      ...props.teacherData,
      [prop]: event.target.value,
    });
  };

  return (
    <div className={classes.signInCard}>
      <Typography component="h1" variant="h5" color="inherit">
        Fill you're details
      </Typography>
      <FormControl>
        <InputLabel required className={classes.inputLabel} shrink={true}>
          Full name
        </InputLabel>
        <Input
          required
          className={classes.input}
          type={"text"}
          value={props.teacherData.name || ""}
          onChange={handleChange("name")}
        />
      </FormControl>
      <FormControl style={{ marginTop: "3.5vh" }}>
        <InputLabel className={classes.inputLabel} shrink={true}>
          Gender
        </InputLabel>
        <Select
          className={classes.input}
          value={props.teacherData.gender}
          onChange={(event) => props.setTeacherData({ ...props.teacherData, gender: event.target.value as Gender })}
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
          value={props.teacherData.areas}
          multiple
          onChange={(event) => props.setTeacherData({ ...props.teacherData, areas: event.target.value as Area[] })}
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
          value={props.teacherData.education || ""}
          onChange={handleChange("education")}
        />
      </FormControl>
    </div>
  );
};

export default RegisterTeacherData;
