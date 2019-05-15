import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Auth from "./Auth";

class App extends Component {
  displayUserInformation() {
    const auth = new Auth();
    if (auth.isLoggedIn()) {
      console.log("Hi you are logged in");
      console.log(auth.currentUser());
      return (
        <div>
          <p>
            Welcome, {auth.currentUser().firstName}{" "}
            {auth.currentUser().lastName} from {auth.currentUser().city},{" "}
            {auth.currentUser().country}
          </p>
          <a className="App-link" href="/abc" onClick={() => auth.logout()}>
            Sign Out
          </a>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.displayUserInformation()}
        </header>
      </div>
    );
  }
}

export default App;
