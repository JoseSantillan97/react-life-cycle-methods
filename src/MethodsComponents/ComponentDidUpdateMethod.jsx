import React, { Component } from "react";

class ComponentDidUpdateMethod extends Component {
	state = {
		usuarios: {},
		loading: false
	}
	componentDidMount() {
		this.fetchData();
	}
	componentDidUpdate(prevProps, prevState){
		if(prevProps.userId !== this.props.userId){
			console.log('el id actual es: ', this.props.userId)
			this.fetchData();
		}
	}
	fetchData(){
		this.setState({loading: true})
		fetch('https://jsonplaceholder.typicode.com/users/' + this.props.userId)
			.then(response => response.json())
			.then(usuarios => this.setState({ usuarios, loading: false }))
	}
	render() {
		return (
			<div>
				{
					this.state.loading === true ? <div><h2>Cargando...</h2></div> : <pre>{JSON.stringify(this.state.usuarios, null, 4)}</pre>
				}
				
			</div>
		)
	}
}

export default ComponentDidUpdateMethod