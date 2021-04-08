import React from "react";
import { IClass, IUserPresentedData } from "../services/TeacherService";

const isUserSignedType: boolean = false;
const userDataType: IUserPresentedData = {
  uid: "",
  fullName: "",
  email: "",
  password: "",
  passwordConfirm: "",
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
