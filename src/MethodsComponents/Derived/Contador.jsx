import React from "react";

class Contador extends React.Component {
	state = {
		num: this.props.num
	}

	// This method is used to update the state of the child 
	// component from the props if a certain condition is met.
	static getDerivedStateFromProps(nextProps, prevState) {
		if (prevState.num < nextProps.num) {
			return {
				num: nextProps.num
			}
		}
	}
	aumentar = () => {
		this.setState(state => ({
			num: state.num + 1

		}))

	}
	render() {
		return (
			<div>
				<button onClick={this.aumentar}>clicks ({this.state.num})</button>
			</div>
		)
	}
}

export default Contador