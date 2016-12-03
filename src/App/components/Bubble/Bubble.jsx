import React, { Component } from 'react';
import importcss from 'importcss';

@importcss(require('./Bubble.css'))
export default class Bubble extends Component {
	render() {
		const position = this.props.position || 'left';
		const color = this.props.color ? 'yes' : 'no';
		return <div styleName={`root position_${position} color_${color}`}>
			<div styleName='bubble'>
				<div styleName='corner'></div>
				<div styleName='inner'>
					<div styleName='wrapper'>
						<div styleName='content'>
							{this.props.children}
						</div>
					</div>
				</div>
				<div styleName='time'>
					<If condition={this.props.date}>
						{(new Date(this.props.date)).toISOString().slice(11, 16)}
					</If>
				</div>
			</div>
		</div>
	}
}