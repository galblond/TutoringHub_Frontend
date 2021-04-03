import React from "react";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import GeneralState from "./contexts/GeneralState";
import Routes from "./routes";
import "./App.css";
import Header from "./components/layout/header/header";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
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
