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
  Typography,
} from "@material-ui/core";

interface IClassDetailsPopUpProps {
  classData: IClass | null;
  isAddingClassPopUp: boolean | null;
  isOpen: boolean;
  onClose: () => void;
}

const ClassDetailsPopUp: React.FC<IClassDetailsPopUpProps> = (props: IClassDetailsPopUpProps) => {
  const classes = useStyles();
  const [presentedAgeRange, setPresentedAgeRange] = React.useState<number[]>(
    props.classData ? [props.classData.ageRangeMin, props.classData.ageRangeMax] : [0, 0]
  );
  const [presentedClassType, setpresentedClassType] = React.useState<classTypes>(
    props.classData ? props.classData.classType : classTypes.zoom
  );

  const handleClose = () => {
    props.onClose();
  };

  const handleChangeAgeRangeSlider = (event: any, newValue: number | number[]) => {
    setPresentedAgeRange(newValue as number[]);
  };

  const getAgeRangeSliderValueText = (value: number) => {
    return `${value}`;
  };

  const handleChangeClassTypeSelection = (event: React.ChangeEvent<{ value: unknown }>) => {
    setpresentedClassType(event.target.value as classTypes);
  };

  const handleChange = (prop: keyof IClass) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //TODO
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
          className={classes.input}
          type={"text"}
          value={props.classData?.subject || ""}
          onChange={handleChange("subject")}
        />
      </FormControl>
      <FormControl>
        <InputLabel className={classes.inputLabel} shrink={true}>
          City
        </InputLabel>
        <Input
          className={classes.input}
          type={"text"}
          value={props.classData?.city || ""}
          onChange={handleChange("city")}
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
      <Button> Save </Button>
    </Dialog>
  );
};

export default ClassDetailsPopUp;
