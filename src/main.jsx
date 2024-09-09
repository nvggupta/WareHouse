import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import HouseDetails from "./HouseDetails";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/house/:id" element={<HouseDetails />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
