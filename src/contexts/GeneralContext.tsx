import React from "react";

const isUserSignedType: boolean = false;

export default React.createContext({
  isUserSigned: isUserSignedType,
  setIsUserSigned: (isUserSigned: boolean) => {}
});
