import Footer from './lib';
import cn from './App.module.scss';
import ImagePane from '@ryqndev/image-pane';

function App() {
	return (
		<div className={cn.container}>
			<div className={cn.content}>
				<ImagePane
					className={cn.image}
					src='https://boba.watch/bobawatch.png'
					alt='boba watch various screens'
					content={{
						tag: '/ boba watch',
						title: 'splash art',
						description:
							'This is an overview of the splash art that was created for the Boba Watch. The splash art is a combination of the the various screens that can be accessed.',
					}}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
