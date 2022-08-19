import React from "react";
const chatStyle = {
	width: 450,
	height: 550,
	border: '1px solid gray',
	overflow: 'auto',
	fontFamily: 'monospace'
}

const messageStyle = {
	padding: '1rem',
	borderBottom: '1px solid #DDD'
}
const avatarStyle = {
	width: 50,
	height: 50,
	borderRadius: '50%'
}


class Chat extends React.Component{
	box = React.createRef();

	getSnapshotBeforeUpdate(){
		const box = this.box.current;
		if(box.scrollTop + box.offsetHeight >= box.scrollHeight){
			return true
		}
		return false
	}

	componentDidUpdate(prevProps, prevState, snap){
		const box = this.box.current;
		if(snap){
			box.scrollTop = box.scrollHeight
		}
	}

	render(){
		return(
			<div ref={this.box} style={chatStyle}>
				{
					this.props.list.map(user => (
						<div
							key={user.id}
							style={messageStyle}
						>
							<p>{user.message}</p>
							<div>{user.name}</div>
							<img style={avatarStyle} src={user.avatar} alt="Avatar" />
						</div>
					))
				}
			</div>
		)
	}
}
export default Chat