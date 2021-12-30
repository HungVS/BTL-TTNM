import React, { useState } from "react";
import "./Chat.css";
import messenger from "./messenger.png";

export const Chat = (props) => {
	let hide = {
		display: "none",
	};
	let show = {
		display: "block",
	};
	let textRef = React.createRef();
	const { messages } = props;

	const [chatopen, setChatopen] = useState(false);
	const toggle = (e) => {
		setChatopen(!chatopen);
	};

	const handleSend = (e) => {
		const get = props.getMessage;
		get(textRef.current.value);
	};

	return (
		<div id='chatCon'>
			<div class='chat-box' style={chatopen ? show : hide}>
				<div class='header'>HUSTHOME Hỗ trợ</div>
				<div class='msg-area'>
					{messages.map((msg, i) =>
						i % 2 ? (
							<p class='right'>
								<span>{msg}</span>
							</p>
						) : (
							<p class='left'>
								<span>{msg}</span>
							</p>
						)
					)}
				</div>
				<div class='footer'>
					<input id="chat_input" type='text' ref={textRef} placeholder="Nhập tin nhắn của bạn ở đây" />
					<button onClick={handleSend}>
						<i class='fa fa-paper-plane'></i>
					</button>
				</div>
			</div>
			<div class='pop'>
				<p>
					<img onClick={toggle} src={messenger} alt='' />
				</p>
			</div>
		</div>
	);
};

export default Chat;
