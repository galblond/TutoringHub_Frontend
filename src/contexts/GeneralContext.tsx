import React from "react";
import { IClass, IServerClass, ITeacher, IUserPresentedData } from "../services/TeacherService";
import { ICity } from "../services/utils/citiesUtil";

const isUserSignedType: boolean = false;
const usersConnect: number = 0;
const userDataType: IUserPresentedData = {
  uid: "",
  fullName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
const teacherRelatedClassesType: IClass[] = [];
const citiesType: ICity[] = [];
const currentlySignedTeacherType: ITeacher = {
  _id: "",
  name: "",
};

export default React.createContext({
  isUserSigned: isUserSignedType,
  setIsUserSigned: (isUserSigned: boolean) => {},
  userData: userDataType,
  setUserData: (userData: IUserPresentedData) => {},
  teacherRelatedClasses: teacherRelatedClassesType,
  getTeacherRelatedClasses: () => {},
  getAllCities: () => {},
  cities: citiesType,
  createClass: (classData: IServerClass) => {},
  updateClass: (classData: IClass) => {},
  currentlySignedTeacher: currentlySignedTeacherType,
  setCurrentlySignedTeacher: (teacher: ITeacher) => {},
  usersConnect: usersConnect,
  setUsersConnect: (users: number) => {},
});
