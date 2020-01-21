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
    fetch('http://localhost:5000/mern')
      .then(data => data.json())
      .then(data => this.setState({ product: data }))
  }

  render() {
    return (
      <div className="App">
        {this.state.product.map(e => (
          <div>
            <h1>{e.name}</h1><button>Delete</button>
            <h1>{e.price}</h1>
            <img src={e.url} alt={e.url} />
          </div>
        ))}
        <div>
          <button>Create</button>
          <button>Update</button>
          <button>Read</button>
        </div>
      </div>

    );
  }
}
export default App;