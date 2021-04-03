import React, { useState } from "react";
import { IUserPresentedData } from "../services/TeacherService";
import GeneralContext from "./GeneralContext";

const GeneralState = (props: any) => {
  const [isUserSignedState, setIsUserSignedState] = useState(false);
  const [userDataState, setUserDataState] = useState<IUserPresentedData>({
    fullName: "",
    email: "",
  });

  return (
    <GeneralContext.Provider
      value={{
        isUserSigned: isUserSignedState,
        setIsUserSigned: setIsUserSignedState,
        userData: userDataState,
        setUserData: setUserDataState,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
