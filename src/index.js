import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CategoryListProvider } from "./context/category-list.context";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NavigationProvider } from "./context/navigation.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryListProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </CategoryListProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
