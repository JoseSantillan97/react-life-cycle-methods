import React, {Component} from "react";

class ComponentWillUnmount extends Component{
	state = {
		time: 0,
		isPlaying: false,
	}

	tick = null

	play = () => {
		this.setState({ isPlaying: true })
		this.tick = setInterval(() => {
			this.setState({time: this.state.time + 1})
		}, 1000)
	}

	pause = () => {
		this.setState({ isPlaying: false })
		clearInterval(this.tick)
	}

	toggle = () => {
		if(this.state.isPlaying){
			this.pause()
		}
		else{
			this.play()
		}
	}
	// Clean intervals
	// Clean event listeners
	// Call methods to clean something inside 
	// a parent component
	componentWillUnmount(){
		this.props.onDestroy()
	}

	render(){
		return(
			<div>
				<h1>ComponentWillUnmount Method</h1>
				<p>{ this.state.time }</p>
				<button onClick={ this.toggle }>
					{ this.state.isPlaying ? 'Pause' : 'Play' }
				</button>
			</div>
		)
	}
}

export default ComponentWillUnmount