import React, { useEffect } from "react";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import GeneralState from "./contexts/GeneralState";
import Routes from "./routes";
import "./App.css";
import Header from "./components/layout/header/header";
import io from "socket.io-client";

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
  useEffect(() => {
    socket.on("FromAPI", (data: number) => {
      console.log(data + "Users is connected");
    });
  }, []);

  return (
    <div className="App">
      <GeneralState>
        <StylesProvider jss={jss}>
          <Header />
          <Routes />
        </StylesProvider>
      </GeneralState>
    </div>
  );
}

export default App;
