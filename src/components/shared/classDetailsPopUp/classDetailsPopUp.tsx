import React, { useEffect } from "react";
import useStyles from "./classDetailsPopUpStyles";
import { ClassType, IClass } from "../../../services/TeacherService";
import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import GeneralContext from "../../../contexts/GeneralContext";

const CustomTextFieldOfAutocomplete = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInputBase-input": {
      height: "35px",
    },
    "& .MuiInput-underline:after": {},
    "& .MuiOutlinedInput-root": {
      "& fieldset": {},
      "&:hover fieldset": {},
      "&.Mui-focused fieldset": {},
    },
  },
})(TextField);

interface IClassDetailsPopUpProps {
  classData: IClass | null;
  isAddingClassPopUp: boolean | null;
  isOpen: boolean;
  onClose: () => void;
}

const ClassDetailsPopUp: React.FC<IClassDetailsPopUpProps> = (props: IClassDetailsPopUpProps) => {
  const context = React.useContext(GeneralContext);
  const classes = useStyles();
  const [presentedSubject, setPresentedSubject] = React.useState<string>(props.classData?.subject || "");
  const [presentedCity, setPresentedCity] = React.useState<string>(props.classData?.city || "");
  const [presentedAgeRange, setPresentedAgeRange] = React.useState<number[]>(
    props.classData && props.classData.minAgeRange && props.classData.maxAgeRange
      ? [props.classData.minAgeRange, props.classData.maxAgeRange]
      : [1, 120]
  );
  const [presentedClassType, setPresentedClassType] = React.useState<ClassType>(
    props.classData && props.classData.classType ? props.classData.classType : ClassType.Zoom
  );

  useEffect(() => {
    setPresentedSubject(props.classData?.subject || "");
    setPresentedCity(
      props.classData ? context.cities.find((city) => city.cityName === props.classData?.city)?.cityName || "" : ""
    );
    setPresentedAgeRange(
      props.classData && props.classData.minAgeRange && props.classData.maxAgeRange
        ? [props.classData.minAgeRange, props.classData.maxAgeRange]
        : [1, 120]
    );
    setPresentedClassType(props.classData && props.classData.classType ? props.classData.classType : ClassType.Zoom);
  }, []);

  const handleClose = () => {
    setPresentedSubject("");
    setPresentedCity("");
    setPresentedAgeRange([1, 120]);
    setPresentedClassType(ClassType.Zoom);
    props.onClose();
  };

  const getAgeRangeSliderValueText = (value: number) => {
    return `${value}`;
  };

  const handleChangeAgeRangeSlider = (event: any, newValue: number | number[]) => {
    setPresentedAgeRange(newValue as number[]);
  };

  const handleChangeClassTypeSelection = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPresentedClassType(event.target.value as ClassType);
  };

  const saveClass = () => {
    if (props.classData) {
      context.updateClass({
        _id: props.classData._id,
        subject: presentedSubject,
        city: presentedCity,
        minAgeRange: presentedAgeRange[0],
        maxAgeRange: presentedAgeRange[1],
        classType: presentedClassType,
        teacherId: context.currentlySignedTeacher._id,
      });
    } else {
      context.createClass({
        id: "",
        subject: presentedSubject,
        city: presentedCity,
        minAgeRange: presentedAgeRange[0],
        maxAgeRange: presentedAgeRange[1],
        classType: presentedClassType,
        teacherId: context.currentlySignedTeacher._id,
      });
    }
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="classDetailsDialogTitle" open={props.isOpen}>
      <DialogTitle id="classDetailsDialogTitle">
        {!props.isAddingClassPopUp && props.classData
          ? props.classData.subject + " Class Details"
          : "Create a New Class"}
      </DialogTitle>
      <FormControl>
        <InputLabel className={classes.inputLabel} shrink={true}>
          Subject
        </InputLabel>
        <Input
          required
          className={classes.input}
          type={"text"}
          value={presentedSubject}
          onChange={(event) => setPresentedSubject(event.target.value as string)}
        />
      </FormControl>
      <FormControl>
        <InputLabel className={classes.inputLabel} shrink={true}>
          City
        </InputLabel>
        <Autocomplete
          id="city"
          options={context.cities.map((city) => {
            return { name: city.cityName };
          })}
          size="small"
          autoComplete={true}
          onInputChange={(event: React.ChangeEvent<{}>, value: string) => setPresentedCity(value)}
          inputValue={presentedCity}
          defaultValue={{ name: props.classData?.city } || null}
          getOptionLabel={(option: { name: any }) => option.name}
          style={{
            zIndex: 99,
            marginTop: "4vh",
          }}
          noOptionsText="No city was found"
          renderInput={(params: any) => (
            <CustomTextFieldOfAutocomplete
              name="city"
              variant="standard"
              className={classes.input}
              style={{ zIndex: 99 }}
              required={true}
              {...params}
            />
          )}
        />
      </FormControl>
      <FormControl className={classes.sliderFormControl}>
        <Typography id="ageRangeSlider" gutterBottom className={classes.sliderLabel}>
          Age range
        </Typography>
        <Slider
          value={presentedAgeRange}
          onChange={handleChangeAgeRangeSlider}
          aria-labelledby="ageRangeSlider"
          getAriaValueText={getAgeRangeSliderValueText}
          valueLabelDisplay="on"
          min={1}
          max={120}
          classes={{ root: classes.sliderRootWithStaticThumb }}
        />
      </FormControl>
      <FormControl style={{ marginTop: "3.5vh" }}>
        <InputLabel id="classTypeSelectLabel" className={classes.inputLabel} shrink={true}>
          Class Type
        </InputLabel>
        <Select
          className={classes.input}
          labelId="classTypeSelectLabel"
          id="classTypeSelect"
          value={presentedClassType}
          onChange={handleChangeClassTypeSelection}
        >
          <MenuItem value={ClassType.Zoom}>Zoom</MenuItem>
          <MenuItem value={ClassType.Teachers_Home}>Teacher's Home</MenuItem>
          <MenuItem value={ClassType.Students_Home}>Student's Home</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={saveClass}> Save </Button>
    </Dialog>
  );
};

export default ClassDetailsPopUp;
