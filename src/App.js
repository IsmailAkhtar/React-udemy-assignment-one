import { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "",
  };
  nameChangedHandler = (event) => {
    {
      this.setState({ username: event.target.value });
    }
  };
  render() {
    return (
      <div className="App">
        <UserInput changed={this.nameChangedHandler} />

        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}

export default App;
