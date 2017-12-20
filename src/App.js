import React, { Component } from 'react';
import { List  } from 'immutable';

import ListView  from './components/ListView';

import logo from './logo.svg';
import './App.css';

let nextId = 13;

class App extends Component {
  scrollDown = true;
  state = {
    active: 0,
    items: new List( [
      {
        id: 0,
        title: "immutable item 1",
        active: false
      },
      {
        id: 2,
        title: "list item 1",
        active: false
      },
      {
        id: 3,
        title: "list item 1",
        active: false
      },
      {
        id: 4,
        title: "list item 1",
        active: false
      },
      {
        id: 5,
        title: "list item 1",
        active: false
      },
      {
        id: 6,
        title: "list item 1",
        active: false
      },
      {
        id: 7,
        title: "list item 1",
        active: false
      },
      {
        id: 8,
        title: "list item 1",
        active: false
      },
      {
        id: 9,
        title: "list item 1",
        active: false
      },
      {
        id: 10,
        title: "list item 1",
        active: false
      },
      {
        id: 11,
        title: "list item 1",
        active: false
      },
      {
        id: 12,
        title: "list item 1",
        active: false
      }

    ])
  }


  addItem = () => {

    let currentIndex  = this.state.items.findIndex((item) => item.active === true)
    let newIndex = currentIndex === -1 ? this.state.items.size : currentIndex + 1;

    let itm = {
      id: nextId++,
      title: `list item id ${nextId}`,
      active: true
    }
    
    let newValue = currentIndex === -1 ? this.state.items.push(itm) : this.state.items.insert(newIndex , itm);

    this.setState(
      {
        items: newValue.map((item, index) => index !== newIndex ? { ...item, active: false} : item),
      }
    )

    if(newIndex >= this.state.items.size || currentIndex === -1) {
      this.scrollDown = true;
    }
  
  }

  selectItem = (id) => {
    this.setState({
      items: this.state.items.map((item, index) =>
        item.id === id ?
          { ...item, active: true } :
          { ...item, active: false }
      )
    })
  }


  componentWillMount() {

  }
  render() {

    let scrollDown = this.scrollDown;

    if (scrollDown) {
      this.scrollDown = false;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.</p>
        <button onClick={this.addItem}>Add</button>
        <ListView items={this.state.items} active={this.state.active} onClick={this.selectItem} scrollDown={scrollDown} />

      </div>
    );
  }
}

export default App;