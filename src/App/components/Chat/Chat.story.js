import Chat from './Chat';
import Bubble from '../Bubble';

module.exports = ({ storiesOf, action }) => {
	return storiesOf('Chat', module)
		.add('default', () => {
			return <Chat title = 'Super chat' onSubmit={(val) => alert(val)}>
				<Chat.Messages>
					<Bubble
						date = {Date.now()}
						position = 'left'
						color
						children = {'Здравствуйте. Добро пожаловать. Если у вас есть вопросы, гуглите...'}
					/>
					<Bubble
						date = {Date.now()}
						position = 'right'
						children = {'Hello'}
					/>
					<Bubble
						date = {Date.now()}
						position = 'right'
						color = {true}
						children = {'How are you?'}
					/>
					<Bubble
						date = {Date.now()}
						position = 'left'
						color
						children = {'гуглите...'}
					/>
				</Chat.Messages>
			{/*<Chat.Input />*/}
		</Chat>
	})
}