import React from "react";
import { IUserPresentedData } from "../services/TeacherService";

const isUserSignedType: boolean = false;
const userDataType: IUserPresentedData = {
  fullName: "",
  email: "",
};

export default React.createContext({
  isUserSigned: isUserSignedType,
  setIsUserSigned: (isUserSigned: boolean) => {},
  userData: userDataType,
  setUserData: (userData: IUserPresentedData) => {},
});
