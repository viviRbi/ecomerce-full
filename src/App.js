import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/mern")
      .then(data => data.json())
      .then(data => this.setState({ product: data }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <meta name="viewport" content="width=device-width, inital-scale= 1.0"></meta>
        {this.state.product.map(e => (
          <div className="product">
            <button>Delete</button>
            <img src={e.url} alt={e.url} />
            <h2><span>{e.name}</span><br></br><span>{e.price}</span></h2>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
