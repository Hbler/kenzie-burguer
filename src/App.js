import { useState, useEffect } from "react";
import WebFont from "webfontloader";

import Ecommerce from "./components/Ecomerce";

import {
  GlobalStyle,
  ThemeDark,
  ThemeFeedback,
  ThemeLight,
} from "./Global/styles";

// import "./App.css";

function App() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter:300,400,600,700,900"],
      },
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      {mode === "dark" ? <ThemeDark /> : <ThemeLight />}
      <ThemeFeedback />
      <div
        className="App"
        style={{
          fontFamily: "Inter",
          backgroundColor: mode === "dark" ? "var(--gray-four)" : "#fff",
          height: "100vh",
        }}
      >
        <Ecommerce mode={mode} setMode={setMode} />
      </div>
    </>
  );
}

export default App;
