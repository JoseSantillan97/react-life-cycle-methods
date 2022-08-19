import React, { Component } from 'react'

class GetSnapshotBeforeUpdate extends Component{
	titulo = React.createRef();
	state = {
		text: 'Hola',
	}
	dispatch = () =>{
		this.setState({text: 'Bye'})
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log(this.titulo.current.innerText)
		return 'Hola desde Snapshot'
	}
	componentDidUpdate(prevProps, prevState, snap){
		console.log(this.titulo.current.innerText)
		console.log(snap)
	}
	render(){
		return(
			<div>
				<h1>get Snapshot Before Update lifecycle method</h1>
				<h3 ref={this.titulo}>{this.state.text}</h3>
				<button onClick={this.dispatch}>Dispara</button>
			</div>
		)
	}
}

export default GetSnapshotBeforeUpdate