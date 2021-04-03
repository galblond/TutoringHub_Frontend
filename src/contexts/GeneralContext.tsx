import React from "react";
import { IClass, IUserPresentedData } from "../services/TeacherService";

const isUserSignedType: boolean = false;
const userDataType: IUserPresentedData = {
  fullName: "",
  email: "",
};
const teacherRelatedClassesType: IClass[] = [];

export default React.createContext({
  isUserSigned: isUserSignedType,
  setIsUserSigned: (isUserSigned: boolean) => {},
  userData: userDataType,
  setUserData: (userData: IUserPresentedData) => {},
  teacherRelatedClasses: teacherRelatedClassesType,
  getTeacherRelatedClasses: () => {},
});
