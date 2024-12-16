import Link from 'next/link';

import { Button } from '@/components/ui/button';
import ROUTES from '@/constants/routes';
import LocalSearch from '@/components/search/LocalSearch';
const questions = [
	{
		_id: '1',
		title: 'How to create a custom hook in React?',
		description: 'I want to learn how to create a custom hook in React.',
		tags: [
			{ _id: '1', name: 'react' },
			{ _id: '2', name: 'javascript' },
		],
		author: {
			_id: '1',
			name: 'John Doe',
		},
		upvotes: 10,
		answers: 5,
		views: 100,
		createdAt: new Date(),
	},
	{
		_id: '2',
		title: 'How to use React Query?',
		description: 'I want to learn how to use React Query.',
		tags: [
			{ _id: '1', name: 'react' },
			{ _id: '2', name: 'javascript' },
		],
		author: {
			_id: '1',
			name: 'John Doe',
		},
		upvotes: 10,
		answers: 5,
		views: 100,
		createdAt: new Date(),
	},
	{
		_id: '3',
		title: 'How to use Redux?',
		description: 'I want to learn how to use Redux.',
		tags: [
			{ _id: '1', name: 'react' },
			{ _id: '2', name: 'javascript' },
		],
		author: {
			_id: '1',
			name: 'John Doe',
		},
		upvotes: 10,
		answers: 5,
		views: 100,
		createdAt: new Date(),
	},
];
interface SearchParams {
	searchParams: Promise<{ [key: string]: string }>;
}
const Home = async ({ searchParams }: SearchParams) => {
	const { query = '' } = await searchParams;
	const filteredQuestions = questions.filter((question) =>
		question.title.toLowerCase().includes(query?.toLowerCase())
	);
	return (
		<>
			<section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
				<h1 className="h1-bold text-dark100_light900">All Questions</h1>

				<Button
					className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
					asChild
				>
					<Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
				</Button>
			</section>
			<section className="mt-11">
				<LocalSearch
					imgSrc="/icons/search.svg"
					placeholder="Search questions..."
					otherClasses="flex-1"
					route="/"
				/>
			</section>
			HomeFilter
			<div className="mt-10 flex w-full flex-col gap-6">
				{filteredQuestions.map((question) => (
					<h1 key={question._id}>{question.title}</h1>
				))}
			</div>
		</>
	);
};

export default Home;
