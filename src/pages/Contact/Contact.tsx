import React, { useState } from 'react';
import { useForm } from './useForm';
import emailjs from 'emailjs-com';

const Contact = () => {
	//define initial state
	const initialState = {
		email: "",
		name: "",
		message: ""
	};

	
	// getting the event handles from our useForm custom hook
	const { onChange, onSubmit, values } = useForm(
			sendEmailCallback,
			initialState
		);

		
	//submit function which will execute when contact form gets submitted
	function sendEmailCallback(event: React.FormEvent<HTMLFormElement>) {
		// event.preventDefault();
		console.log('inside sendEmail');
		console.log(values);
		console.log('values inside sendEmail: ' + values);
		emailjs.sendForm('service_f5yo35w', 'template_vbcwojh', '#contactForm', 'user_mWUMGs3nW2NY4ERTiJnoD')
		.then((result: any) => {
			console.log(result.text);
		}, (error: any) => {
			console.log(error.text);
		});
		//event.target.reset();
	}

	return (
		<form id="contactForm" onSubmit={onSubmit}>
			<div>
				<input
					name='name'
					id='name'
					type='name'
					placeholder='Name'
					onChange={onChange}
					required
					/>
				<input
					name='email'
					id='email'
					type='email'
					placeholder='Email'
					onChange={onChange}
					required
					/>
				<br></br>
				<input
					name='message'
					id='message'
					type='text'
					placeholder='Type your message...'
					onChange={onChange}
					required
					/>
				<br></br>
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
}

export default Contact;