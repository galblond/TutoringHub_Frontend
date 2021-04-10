import React from "react";
import { IClass, IUserPresentedData } from "../services/TeacherService";
import { ICity } from "../services/utils/citiesUtil";

const isUserSignedType: boolean = false;
const userDataType: IUserPresentedData = {
  uid: "",
  fullName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
const teacherRelatedClassesType: IClass[] = [];
const citiesType: ICity[] = [];

export default React.createContext({
  isUserSigned: isUserSignedType,
  setIsUserSigned: (isUserSigned: boolean) => {},
  userData: userDataType,
  setUserData: (userData: IUserPresentedData) => {},
  teacherRelatedClasses: teacherRelatedClassesType,
  getTeacherRelatedClasses: () => {},
  getAllCities: () => {},
  cities: citiesType,
  createClass: (classData: IClass) => {},
  updateClass: (classData: IClass) => {},
});
