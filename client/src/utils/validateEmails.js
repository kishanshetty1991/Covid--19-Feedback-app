
const re= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
 const invalidEmails = emails.split(',').map(email => email.trim()).filter(email => email.length && re.test(email) === false)


if(invalidEmails.length) {
	if (invalidEmails.includes("")) {
       return "Please remove a trailing comma or add another email";
 }
	return `These Emails are invalid: ${invalidEmails}`;
}

return;
};