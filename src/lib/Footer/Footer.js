import { Contact } from './components';
import BackgroundTextWall from './components/BackgroundTextWall/BackgroundTextWall';
import cn from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={cn.container}>
			<div className={cn.content}>
				<BackgroundTextWall />
				<Contact />
			</div>
		</footer>
	);
};

export default Footer;
