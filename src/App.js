import React from "react";
import LayaoutBase from "./layouts/LayaoutBase";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Dashboard from "./containers/Dashboard";

const AppMemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayaoutBase>
        <Dashboard />
      </LayaoutBase>
    </ThemeProvider>
  );
};

export default AppMemo;
