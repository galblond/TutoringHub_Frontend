import React, { useState } from "react";
import GeneralContext from "./GeneralContext";

const GeneralState = (props: any) => {
  const [isUserSignedState, setIsUserSignedState] = useState(false);

  return (
    <GeneralContext.Provider
      value={{
        isUserSigned: isUserSignedState,
        setIsUserSigned: setIsUserSignedState
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
