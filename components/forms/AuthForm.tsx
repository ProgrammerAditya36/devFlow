'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
	DefaultValues,
	FieldValues,
	Path,
	SubmitHandler,
	useForm,
} from 'react-hook-form';
import { z, ZodType } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import ROUTES from '@/constants/routes';

const formSchema = z.object({
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
});
interface AuthFormProps<T extends FieldValues> {
	schema: ZodType<T>;
	defaultValues: T;
	onSubmit: (data: T) => Promise<{ success: boolean }>;
	formType: 'SIGN_IN' | 'SIGN_UP';
}

export default function AuthForm<T extends FieldValues>({
	schema,
	defaultValues,
	formType,
	onSubmit,
}: AuthFormProps<T>) {
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: defaultValues as DefaultValues<T>,
	});

	// 2. Define a submit handler.
	const handleSubmit: SubmitHandler<T> = async () => {};

	const buttonText = formType === 'SIGN_IN' ? 'Sign In' : 'Sign Up';

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSubmit)}
				className="space-y-6 mt-10"
			>
				{Object.keys(defaultValues).map((field) => (
					<FormField
						key={field}
						control={form.control}
						name={field as Path<T>}
						render={({ field }) => (
							<FormItem className="flex-w-full flex-col gap-2.5">
								<FormLabel className="paragraph-medium text-dark400_light700">
									{field.name.charAt(0).toUpperCase() +
										field.name.slice(1)}
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										required
										type={
											field.name === 'password'
												? 'password'
												: 'text'
										}
										className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
				<Button
					className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
					disabled={form.formState.isSubmitting}
				>
					{form.formState.isSubmitting
						? buttonText === 'Sign In'
							? 'Signing In...'
							: 'Signing Up...'
						: buttonText}
				</Button>
				{formType === 'SIGN_UP' ? (
					<p className="paragraph-regular text-dark400_light700">
						Already have an account?{' '}
						<Link
							href={ROUTES.SIGN_IN}
							className="text-primary-500 hover:underline"
						>
							Sign In
						</Link>
					</p>
				) : (
					<p className="paragraph-regular text-dark400_light700">
						Dont Have an account?{' '}
						<Link
							href={ROUTES.SIGN_UP}
							className="text-primary-500 hover:underline"
						>
							Sign Up
						</Link>
					</p>
				)}
			</form>
		</Form>
	);
}
