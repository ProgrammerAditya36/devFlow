'use client';
import React from 'react';

import AuthForm from '@/components/forms/AuthForm';
import { SignInSchema } from '@/lib/validation';

const SignIn = () => {
	return (
		<AuthForm
			formType="SIGN_IN"
			schema={SignInSchema}
			defaultValues={{
				email: '',
				password: '',
			}}
			onSubmit={(data) => {
				console.log(data);
				return Promise.resolve({ success: true });
			}}
		/>
	);
};

export default SignIn;
