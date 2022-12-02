import { memo } from 'react';
import cn from './BackgroundTextWall.module.scss';

const PROJECT_NAMES =
	'bobawatch pickbanpro learnryqndev datavis caeno spotimaps morphvism mymo tftactics rdsl digitalexplorers fearfilter rememory ';

const BackgroundTextWall = () => (
	<div className={cn.container}>
		{PROJECT_NAMES.repeat(10)
			.split(' ')
			.map((project, idx) => (
				<p key={idx}>{project}</p>
			))}
	</div>
);

export default memo(BackgroundTextWall);
