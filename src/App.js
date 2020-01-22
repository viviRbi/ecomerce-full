import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      clicked: '',
      create: false,
      productName: '',
      productUrl: '',
      productPrice: ''
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/mern')
      .then(data => data.json())
      .then(data => this.setState({ product: data }))
  }
  clickHandle = (e) => {
    const clicked = e.target.attributes.getNamedItem('id').value
    this.setState({ clicked })
  }
  inputHandle = (e) => {
    const result = e.target.value;
    const type = e.target.attributes.getNamedItem('placeholder').value
    if (type === "Name") { this.setState({ productName: result }) }
    else if (type === "Price") { this.setState({ productPrice: result }) }
    else if (type === "Url") { this.setState({ productUrl: result }) }
  }
  submitHandle = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/mern', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.productName, price: this.state.productPride, url: this.state.productUrl
      })
    })

    this.setState({ productName: "" })
    this.setState({ productPrice: "" })
    this.setState({ productUrl: "" })
    this.setState({ clicked: "" })
  }
  escHandle = (e) => {
    e.preventDefault()
    this.setState({ clicked: "" })
  }
  render() {
    if (this.state.product) {
      return (
        <div className="App">
          <div className={this.state.create ? "overlay" : "none"}>
            <form>
              <div>
                <h2>Create Product</h2><button className="x" onClick={e => this.escHandle(e)}>X</button>
                <input type="text" placeholder="Name" required onChange={e => this.inputHandle(e)} />
                <input type="number" placeholder="Price" required onChange={e => this.inputHandle(e)} />
                <input type="text" placeholder="Url" required onChange={e => this.inputHandle(e)} />
                <button className="submit" onClick={e => this.submitHandle(e)}>Submit</button>
              </div>
            </form>
          </div>

          <button>Create</button>
          {this.state.product.map(e => (
            <div key={e._id}>
              <button>Delete</button>
              <img src={e.url} alt={e.url} id={e._id} onClick={e => this.clickHandle(e)} />
              <h1>{e.name}</h1>
              <h1>{e.price}</h1>
            </div>
          ))}
          <div>
          </div>
        </div>
      );
    }
  }
}
export default App;