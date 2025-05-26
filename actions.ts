'use server';

import { signIn } from '@/auth';
import ROUTES from './constants/routes';

export async function authSignIn(formData: FormData) {
	const provider = formData.get('provider');

	if (!provider) {
		throw new Error('Provider not found');
	}

	await signIn(provider as string, { redirectTo: ROUTES.HOME });
}
