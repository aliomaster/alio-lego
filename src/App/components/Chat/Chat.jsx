import React, { Component } from 'react';
import importcss from 'importcss';
import { autobind } from 'core-decorators';

@importcss(require('./Chat.css'))
export default class Chat extends Component {
	@autobind
	handleKeyDown(e) {
		if (e.keyCode === 13) {
			this.props.onSubmit && this.props.onSubmit(this.input.value)
			this.input.value = ''
		}
	}
	@autobind
	scrollBottom() {
		this.content && (this.content.scrollTop = 999999);
	}

	render() {
		if (!this.props.scroll) {
			setTimeout(() => {
				this.scrollBottom()
			}, 10);
		}
		return <div styleName={`root fixed_${fixed}`}>
			<div styleName='header' onClick={this.toggle}>
				{this.props.title || 'Super messenger'}
			</div>
			<If condition={!this.state.closed}>
			<div styleName='content'
				ref={(content) => { this.content = content; }}
			>
				{this.props.children}
			</div>
			<div styleName='footer'>
				<input
					type='textarea'
					ref={(input) => { this.input = input; }}
					styleName='input'
					placeholder='Enter message'
					onKeyDown={this.handleKeyDown}
				/>
			</div>
			</If>
		</div>
	}
}

@importcss(require('./Chat.css'))
export class ChatMessages extends Component {
	render() {
		return <div styleName='messages'>
			{this.props.children}
		</div>
	}
}
Chat.Messages = ChatMessages;