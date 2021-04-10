import React from "react";
import useStyles from "./classDetailsPopUpStyles";
import { classTypes, IClass } from "../../../services/TeacherService";
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
    "& .MuiInput-underline:after": {
      // borderBottomColor: "#86c5ac",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        // borderColor: "#999085",
      },
      "&:hover fieldset": {
        // borderColor: "#86c5ac",
      },
      "&.Mui-focused fieldset": {
        // borderColor: "#86c5ac",
      },
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
  const [presentedSubject, setPresentedSubject] = React.useState<string>(props.classData?.city || "");
  const [presentedCity, setPresentedCity] = React.useState<string>(props.classData?.city || "");
  const [presentedAgeRange, setPresentedAgeRange] = React.useState<number[]>(
    props.classData ? [props.classData.ageRangeMin, props.classData.ageRangeMax] : [0, 0]
  );
  const [presentedClassType, setpresentedClassType] = React.useState<classTypes>(
    props.classData ? props.classData.classType : classTypes.zoom
  );

  const handleClose = () => {
    props.onClose();
  };

  const getAgeRangeSliderValueText = (value: number) => {
    return `${value}`;
  };

  const handleChangeAgeRangeSlider = (event: any, newValue: number | number[]) => {
    setPresentedAgeRange(newValue as number[]);
  };

  const handleChangeClassTypeSelection = (event: React.ChangeEvent<{ value: unknown }>) => {
    setpresentedClassType(event.target.value as classTypes);
  };

  const saveClass = () => {
    if (props.classData) {
      context.updateClass({
        id: props.classData.id,
        subject: presentedSubject,
        city: presentedCity,
        ageRangeMin: presentedAgeRange[0],
        ageRangeMax: presentedAgeRange[1],
        classType: presentedClassType,
      });
    } else {
      context.createClass({
        id: "",
        subject: presentedSubject,
        city: presentedCity,
        ageRangeMin: presentedAgeRange[0],
        ageRangeMax: presentedAgeRange[1],
        classType: presentedClassType,
      });
    }
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
          <MenuItem value={classTypes.zoom}>Zoom</MenuItem>
          <MenuItem value={classTypes.frontal}>Frontal</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={saveClass}> Save </Button>
    </Dialog>
  );
};

export default ClassDetailsPopUp;
