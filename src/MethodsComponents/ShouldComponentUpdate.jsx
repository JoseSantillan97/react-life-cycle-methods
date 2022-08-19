import React, { Component } from "react";

class ShouldComponentUpdate extends Component{
	state = {
		num: 0
	}
	// It works as a switch, if a condition is not met, 
	// the Render method will not be called.
	// It is mainly used to improve the performance of the application.
	shouldComponentUpdate(nextProps, nextState){
		if(nextState.num < 5){
			console.log(nextState.num, this.state.num)
			return true
		}
		return false
	}
	agregar = () =>{
		this.setState({
			num: this.state.num + 1
		})
	}
	render(){
		return(
			<div>
				<h2>ShouldComponentUpdate</h2>
				<button onClick={this.agregar}>Agregar ( {this.state.num} )</button>
			</div>
		)
	}
}

export default ShouldComponentUpdate