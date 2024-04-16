import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginPage } from "./frontend/components/LoginPage";
import { MainPage } from "./frontend/components/MainPage";
import { LandingPage } from "./frontend/components/LandingPage";
import { Navbar } from "./frontend/components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PredictCrop } from "./frontend/components/PredictCrop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/predict/",
    element: <PredictCrop/>
  },
  {
    path: "",
    element: <App/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
    <RouterProvider router={router}/>
    <Navbar/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
