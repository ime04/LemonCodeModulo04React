import React from "react";
import { RouterComponent } from "./core/router/router.component";
import { SearchProvider } from "./core/search";

export const App = () => {
  return (
    <SearchProvider>
      <RouterComponent />
    </SearchProvider>
  );
};