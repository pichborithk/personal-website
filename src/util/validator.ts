function isEmpty(value: string): boolean {
  return value === value.trim();
}

function isValidEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function isValidForm(email: string, subject: string, content: string): boolean {
  return isValidEmail(email) || isEmpty(subject) || isEmpty(content);
}

export default isValidForm;
