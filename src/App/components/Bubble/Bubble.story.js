import Bubble from './Bubble';

module.exports = ({ storiesOf, action }) => {
	return storiesOf('Bubble', module)
		.add('default', () => {
			return <Bubble
				children = {'Здравствуйте. Добро пожаловать. Если у вас есть вопросы, гуглите...'}
			/>
		})
		.add('word', () => {
			return <Bubble
				children = {'Здравствуйте. '}
			/>
		})
		.add('line', () => {
			return <Bubble
				children = {'Здравствуйте. Добро пожаловать. Если у вас есть вопросы, гуглите...'}
			/>
		})
		.add('left', () => {
			return <Bubble
				date = {Date.now()}
				position = 'left'
				color = {true}
				children = {'Здравствуйте. Добро пожаловать. Если у вас есть вопросы, гуглите...'}
			/>
		})
		.add('right', () => {
			return <Bubble
				date = {Date.now()}
				position = 'right'
				children = {'Здравствуйте. Добро пожаловать. Если у вас есть вопросы, гуглите...'}
			/>
		})
}