import { authSignIn } from '@/actions';
import Image from 'next/image';
import { Button } from '../ui/button';

const SocialAuthForm = () => {
	const buttonClass =
		'background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 cursor-pointer';

	return (
		<form className="flex flex-wrap gap-2.5 mt-10" action={authSignIn}>
			<Button
				className={buttonClass}
				type="submit"
				value="github"
				name="provider"
			>
				<Image
					src="/icons/github.svg"
					alt="Github Logo"
					width={20}
					height={20}
					className="invert-colors mr-2.5 object-contain"
				/>
				<span>Log in with GitHub</span>
			</Button>

			<Button
				className={buttonClass}
				type="submit"
				value="google"
				name="provider"
			>
				<Image
					src="/icons/google.svg"
					alt="Google Logo"
					width={20}
					height={20}
					className="mr-2.5 object-contain"
				/>
				<span>Log in with Google</span>
			</Button>
		</form>
	);
};

export default SocialAuthForm;
