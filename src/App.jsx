import './App.css';
import React, { Component } from 'react';
import ConstructorComponent from './MethodsComponents/ConstructorComponent';
import ComponentDidUpdateMethod from './MethodsComponents/ComponentDidUpdateMethod';
import GetSnapshotBeforeUpdate from './MethodsComponents/Snap/GetSnapshotBeforeUpdate';
import GetSnapshotBeforeUpdate2 from './MethodsComponents/Snap/GetSnapshotBeforeUpdate2';
import GetDerivedStateFromProps from './MethodsComponents/Derived/GetDerivedStateFromProps';
import ShouldComponentUpdate from './MethodsComponents/ShouldComponentUpdate';
import MainComponent from './MethodsComponents/Unmount/MainComponent';

class App extends Component {
  state = {
    id: 1,
    numero: 0
  }
  aumentar = () => {
    this.setState({
      id: this.state.id + 1
    })
  }
  render() {
    return (
      <div className="App">
        {/* <ConstructorComponent></ConstructorComponent> */}
        {/* <h1>id: {this.state.id}</h1>
        <button onClick={this.aumentar}>Aumentar</button>
        <ComponentDidUpdateMethod userId={this.state.id}></ComponentDidUpdateMethod> */}
        {/* <GetSnapshotBeforeUpdate></GetSnapshotBeforeUpdate> */}
        {/* <GetSnapshotBeforeUpdate2></GetSnapshotBeforeUpdate2> */}
        {/* <GetDerivedStateFromProps num={this.state.numero}></GetDerivedStateFromProps> */}
        <ShouldComponentUpdate></ShouldComponentUpdate>
        <MainComponent></MainComponent>
      </div>
    );
  }
}

export default App;
