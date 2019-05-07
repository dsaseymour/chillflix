import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import b2cauth from "react-azure-adb2c";

b2cauth.initialize({
  instance: "https://login.microsoftonline.com/tfp/",
  tenant: "chillflixtenant.onmicrosoft.com",
  signInPolicy: "B2C_1_signupsign",
  applicationId: "f1ceeaa5-60e3-47ad-a43e-2db09ce9e32c",
  cacheLocation: "sessionStorage",
  scopes: ["https://chillflixtenant.onmicrosoft.com/api/user_impersonation"],
  redirectUri: "http://localhost:3000",
  postLogoutRedirectUri: window.location.origin
});

b2cauth.run(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
  serviceWorker.unregister();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
