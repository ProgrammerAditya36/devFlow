import Link from 'next/link';
import React from 'react';

import ROUTES from '@/constants/routes';
import { getDeviconClassName } from '@/lib/utils';

import { Badge } from '../ui/badge';

interface Props {
	_id: string;
	name: string;
	questions?: number;
	showCount?: boolean;
	compact?: boolean;
}

const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
	const iconClass = getDeviconClassName(name);

	return (
		<Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
			<Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
				{!compact && (
					<div className="flex-center invert-colors space-x-2">
						<i className={`${iconClass} text-sm`}></i>
						<span>{name}</span>
					</div>
				)}
				{compact && name}
			</Badge>

			{showCount && (
				<p className="small-medium text-dark500_light700">
					{questions}
				</p>
			)}
		</Link>
	);
};

export default TagCard;
