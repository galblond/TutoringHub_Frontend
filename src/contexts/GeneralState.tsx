import React, { useState } from "react";
import { LessonService } from "../services/LessonsService";
import { IClass, IUserPresentedData, TeacherService } from "../services/TeacherService";
import { getAllCities, ICity } from "../services/utils/citiesUtil";
import GeneralContext from "./GeneralContext";

const GeneralState = (props: any) => {
  const [isUserSignedState, setIsUserSignedState] = useState(false);
  const [userDataState, setUserDataState] = useState<IUserPresentedData>({
    uid: "",
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [teacherRelatedClassesState, setTeacherRelatedClassesState] = useState<IClass[]>([]);
  const [citiesState, setCitiesState] = useState<ICity[]>([]);

  const getTeacherRelatedClasses = () => {
    TeacherService.getAllRelatedClasses(userDataState.uid).then((teacherRelatedClasses) =>
      setTeacherRelatedClassesState(teacherRelatedClasses)
    );
  };

  const createClass = (classData: IClass) => {
    LessonService.createClass(classData).then((createdClass: IClass) =>
      setTeacherRelatedClassesState([...teacherRelatedClassesState, { ...createdClass }])
    );
  };

  const updateClass = (classData: IClass) => {
    let classesWithoutUpdatedClass: IClass[] = [];
    LessonService.updateClass(classData).then((updatedClass: IClass) => {
      classesWithoutUpdatedClass = teacherRelatedClassesState.filter(
        (checkedClass) => checkedClass.id !== updatedClass.id
      );
      setTeacherRelatedClassesState([...classesWithoutUpdatedClass, { ...updatedClass }]);
    });
  };

  const getAllCitiesFromAPI = () => {
    getAllCities()
      .then((citiesFromAPI) => setCitiesState(citiesFromAPI || []))
      .catch((e) => console.log(e));
  };

  return (
    <GeneralContext.Provider
      value={{
        isUserSigned: isUserSignedState,
        setIsUserSigned: setIsUserSignedState,
        userData: userDataState,
        setUserData: setUserDataState,
        teacherRelatedClasses: teacherRelatedClassesState,
        getTeacherRelatedClasses: getTeacherRelatedClasses,
        cities: citiesState,
        getAllCities: getAllCitiesFromAPI,
        createClass: createClass,
        updateClass: updateClass,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
