import React, {Component} from "react";
import ComponentWillUnmount from "./ComponentWillUnmount";

class MainComponent extends Component{
	state = {
		mostrar: true,
		message: ''
	}
	handlerDestroy = () => {
		this.setState({ message: 'El componente fue destruido' })
	}
	desmontar = () => {
		this.setState({ mostrar: false })
	}
	render(){
		return(
			<div>
				<h1>Padre</h1>
				<button onClick={ this.desmontar }>Desmontar</button>
				<p>{this.state.message}</p>
				{ this.state.mostrar && <ComponentWillUnmount onDestroy={ this.handlerDestroy }></ComponentWillUnmount> }
			</div>
		)
	}
}

export default MainComponent