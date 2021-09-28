import React, { useState } from 'react';

//functional component useForm
//initialState stores the various values (name, email, message)
//callback is the function that will be executed when use submits form
export const useForm = (callback: any, initialState = {}) => {
	console.log('setting values');
	const [values, setValues] = useState(initialState);
	console.log('Values: ' + values);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [event.target.name]:
		event.target.value });
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('clicked on submit');
		callback();
	}

	return {
		onChange,
		onSubmit,
		values,
	};
}

/*
	onChange >> sets target value of event that is passed to the target name
	initialState should have attributes with the same name as the specified
	in the input field!
	onSubmit >> there is no database
*/