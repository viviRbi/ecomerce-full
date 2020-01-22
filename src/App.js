import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      clicked: false,
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
  componentDidUpdate() {
    fetch('http://localhost:5000/mern')
      .then(data => data.json())
      .then(data => this.setState({ product: data }))
  }
  putOnClickHandle = (e) => {
    const clicked = e.target.attributes.getNamedItem('id').value
    this.setState({ clicked: clicked })
  }

  putSubmitHandle = (e) => {
    e.preventDefault()
    const clicked = this.state.clicked
    const url = `http://localhost:5000/mern/${clicked}`
    console.log(url)
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.productName,
        price: this.state.productPride,
        url: this.state.productUrl
      })
    }).then(res => res.json()).then(res => console.log(res))
    this.setState({ productName: "" })
    this.setState({ productPrice: "" })
    this.setState({ productUrl: "" })
    this.setState({ clicked: false })
  }

  deleteHandle = (e) => {
    const clicked = e.target.attributes.getNamedItem('id').value
    fetch(`http://localhost:5000/mern/${clicked}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
  }
  createHandle = () => {
    this.setState({ create: true })
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
        name: this.state.productName,
        price: this.state.productPride,
        url: this.state.productUrl
      })
    })

    this.setState({ productName: "" })
    this.setState({ productPrice: "" })
    this.setState({ productUrl: "" })
    this.setState({ create: false })
  }
  escHandle = (e) => {
    e.preventDefault()
    this.setState({ create: false })
    this.setState({ clicked: false })
  }
  render() {
    if (this.state.product) {
      return (
        <div className="App">

          {/* ------------------------- put/edit ------------------------- */}
          <div className={this.state.clicked ? "overlay" : "none"}>
            <form>
              <div>
                <h2>Edit Product</h2><button className="x" onClick={e => this.escHandle(e)}>X</button>
                <input type="text" placeholder="Name" required onChange={e => this.inputHandle(e)} />
                <input type="text" placeholder="Price" required onChange={e => this.inputHandle(e)} />
                <input type="text" placeholder="Url" required onChange={e => this.inputHandle(e)} />
                <button className="submit" onClick={e => this.putSubmitHandle(e)}>Submit</button>
              </div>
            </form>
          </div>

          {/* ------------------------- create ------------------------- */}
          <div className={this.state.create ? "overlay" : "none"}>
            <form>
              <div>
                <h2>Create</h2><button className="x" onClick={e => this.escHandle(e)}>X</button>
                <input type="text" placeholder="Name" required onChange={e => this.inputHandle(e)} />
                <input type="text" placeholder="Price" required onChange={e => this.inputHandle(e)} />
                <input type="text" placeholder="Url" required onChange={e => this.inputHandle(e)} />
                <button className="submit" onClick={e => this.submitHandle(e)}>Submit</button>
              </div>
            </form>
          </div>

          {/* --------------------- Product start here ---------------------------- */}
          <button className='create' onClick={this.createHandle}>Create</button>
          <div className="product">
            {this.state.product.map(e => (
              <div key={e._id} className="each">
                <div className="img" style={{ backgroundImage: `url(${e.url})` }} alt={e.url} id={e._id} onClick={e => this.putOnClickHandle(e)} />
                <h1>{e.name}</h1>
                <h1>{e.price}</h1>
                <button id={e._id} onClick={e => this.deleteHandle(e)}>Delete</button>
              </div>
            ))
            }
          </div>
        </div >
      );
    }
  }
}
export default App;