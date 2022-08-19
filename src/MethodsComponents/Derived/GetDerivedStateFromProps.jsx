import React, { Component} from "react";
import Contador from './Contador'
class GetDerivedStateFromProps extends Component{
	state = {
		numero: 0
	}
	handlerChange = (e) => {
		let numero = parseInt(e.target.value)
		if(isNaN(numero)){
			numero = 0
		}
		this.setState({numero})
	}
	render(){
		return(
			<div>
				<h2>GetDerivedStateFromProps life cycle method</h2>
				<hr />
				<h4>{this.state.numero}</h4>
				<input onChange={this.handlerChange} type="text"/>
				<Contador num={this.state.numero}></Contador>
			</div>
		)
	}
}
export default GetDerivedStateFromProps