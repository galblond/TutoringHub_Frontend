import React, { useContext, useEffect, useState } from "react";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import GeneralState from "./contexts/GeneralState";
import Routes from "./routes";
import "./App.css";
import Header from "./components/layout/header/header";
import io from "socket.io-client";
import GeneralContext from "./contexts/GeneralContext";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const ENDPOINT = "http://localhost:5001";

const socket = io(ENDPOINT, {
  transportOptions: {
    polling: {
      extraHeaders: {
        // Authorization: token.accessToken,
      },
    },
  },
});

function App() {
  const context = useContext(GeneralContext);
  const [usersConnectState, setUsersConnectState] = useState<number>(0);

  useEffect(() => {
    socket.on("FromAPI", (data: number) => {
      // setUsersConnectState(data);
      context.setUsersConnect(data);
    });
  }, []);

  return (
    <div className="App">
      {/* <GeneralState> */}
      <StylesProvider jss={jss}>
        <Header />
        <Routes />
      </StylesProvider>
      {/* </GeneralState> */}
    </div>
  );
}

export default App;
