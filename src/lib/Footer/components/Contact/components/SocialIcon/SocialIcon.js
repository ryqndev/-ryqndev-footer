import { useState, memo } from 'react';
import cn from './SocialIcon.module.scss';

const SocialIcon = ({ name, text, href, Icon }) =>
	name === 'discord' ? (
		<DiscordIcon Icon={Icon} />
	) : (
		<a
			target='_blank'
			rel='noopener noreferrer'
			href={href}
			className={cn.container}
			data-mouse-hover='button'
			data-mouse-hover-text={text}
		>
			<Icon />
		</a>
	);

/**
 * Since Discord doesn't have profile links, we make a popup that displays
 * unique username
 */
const DiscordIcon = ({ Icon, text }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			{' '}
			<a
				href='#ryqndev#9909'
				className={cn.container}
				data-mouse-hover='button'
				data-mouse-hover-text={text}
			>
				<Icon onClick={() => setOpen(true)} />
			</a>
			{open && (
				<div className={cn.backdrop} onClick={() => setOpen(false)}>
					<div className={cn.popup}>
						<span>DISCORD:</span>ryqndev#9909
					</div>
				</div>
			)}
		</>
	);
};

export default memo(SocialIcon);
