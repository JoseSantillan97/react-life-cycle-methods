import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, {Component} from "react";

class ConstructorComponent extends Component{
	constructor(props){
		super(props)

		this.addClick = this.addClick.bind(this)

		this.state = {
			counter: 0,
		}
	}

	addClick(){
		this.setState(state => ({
			counter: state.counter + 1,
		}))
	}
	render(){
		return(
			<div>
				<h1>Constructor Method</h1>
				<button onClick={ this.addClick }>Counter ( {this.state.counter} )</button>	
			</div>
		)
	}
}

export default ConstructorComponent