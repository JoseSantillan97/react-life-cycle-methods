import React, { Component } from "react";
import Chat from './Chat'
import {faker} from "@faker-js/faker"
class GetSnapshotBeforeUpdate2 extends Component{
	state = {
		list: [  ]
	}
	addMessage = () => {
		const message = {
			id: faker.datatype.uuid(),
			name: faker.name.firstName(),
			avatar: faker.image.avatar(),
			message: faker.hacker.phrase(),
		}

		this.setState(state =>({
				list: [
					...state.list,
					message
				]
			}))
	}
	render(){
		return(
			<div>
				<h2>GetSnapshotBeforeUpdate2</h2>
				<Chat list={this.state.list}></Chat>
				<button onClick={this.addMessage}>Add message</button>
			</div>
		)
	}
}
export default GetSnapshotBeforeUpdate2