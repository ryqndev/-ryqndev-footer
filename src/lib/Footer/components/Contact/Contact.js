import * as cn from './Contact.module.scss';
import { SocialIcon } from './components';
import { ReactComponent as WebsiteIcon } from './assets/icons/website.svg';

import { ReactComponent as GithubIcon } from './assets/icons/github.svg';
import { ReactComponent as InstagramIcon } from './assets/icons/instagram.svg';
import { ReactComponent as LinkedinIcon } from './assets/icons/linkedin.svg';
import { ReactComponent as DiscordIcon } from './assets/icons/discord.svg';

const socials = [
	{
		name: 'website',
		text: 'https://ryqn.dev',
		href: 'https://ryqn.dev',
		Icon: WebsiteIcon,
	},
	{
		name: 'github',
		text: 'ryqndev',
		href: 'https://github.com/ryqndev',
		Icon: GithubIcon,
	},
	{
		name: 'linkedin',
		text: 'ryanqyang',
		href: 'https://linkedin.com/in/ryanqyang',
		Icon: LinkedinIcon,
	},
	{
		name: 'instagram',
		text: '@bingeboba',
		href: 'https://www.instagram.com/bingeboba/',
		Icon:  InstagramIcon,
	},
	{
		name: 'instagram',
		text: '@veryfewsbux',
		href: 'https://www.instagram.com/veryfexsbux/',
		Icon:  InstagramIcon,
	},
	{
		name: 'discord',
		text: 'ryqndev#9909',
		href: 'discord',
		Icon: DiscordIcon,
	},
];

const Contact = () => (
	<div className={cn.container}>
		<h2 className={cn.contact}>contact</h2>
		<div className={cn.icons}>
			{socials.map(social => (
				<SocialIcon key={social.href} {...social} />
			))}
		</div>
	</div>
);

export default Contact;
