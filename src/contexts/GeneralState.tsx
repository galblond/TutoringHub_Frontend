import React, { useState } from "react";
import { IClass, IUserPresentedData, TeacherService } from "../services/TeacherService";
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

  const getTeacherRelatedClasses = () => {
    TeacherService.getAllRelatedClasses(userDataState.uid).then((teacherRelatedClasses) =>
      setTeacherRelatedClassesState(teacherRelatedClasses)
    );
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
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
