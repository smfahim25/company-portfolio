export default function validateForm({ name, email, number, topic }) {
	if (!name.trim()) {
		return 'Username required';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Email required';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email address is invalid';
	}
	if (!number) {
		return 'Number is required';
	} else if (number.length < 9) {
		return 'Number needs to be 9 characters or more';
	}

	if (!topic) {
		return 'Topic is required';
	} else if (topic !== "") {
		return 'You have to add topic';
	}
	return null;
}
