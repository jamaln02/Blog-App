import React from "react";

import { ThemeProvider, Provider, store } from "../../clientExports.js";
import Header from "@/component/Header.jsx";

const MainLayout = ({ children }) => {
  return (
    <div>
      <ThemeProvider>
        <Provider store={store}>
          <Header />
          <div>{children}</div>
        </Provider>
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
