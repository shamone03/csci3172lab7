const firstNameValidate = /[a-zA-Z]+( [a-zA-Z])*/;

const lastNameValidate = /[a-zA-Z]+(-|')*[a-zA-Z]+/;

const emailValidate = /^[a-zA-Z0-9_]+(-|.)*[a-zA-Z0-9_]*@[a-zA-Z0-9_]+(-|.)*[a-zA-Z0-9_]*\.[a-zA-Z0-9_]+(-|.)*[a-zA-Z0-9_]*$/;

const passwordValidateLength = /(.*){8}/;
const passwordValidateUppercase = /[A-Z]+/;
const passwordValidateLowercase = /[a-z]+/;
const passwordValidateSpecial = /[^a-zA-Z0-9]+/

type LoginInfo = { firstName: string, lastName: string, email: string, password: string, season: "fall" | "winter" | "summer" };

function validate(data: LoginInfo) {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const password = data.password;
    console.log(firstName, lastName, email, password);
    if (!firstNameValidate.test(firstName.trim())) {
        return { success: false, message: "First Name input is wrong" };
    }
    if (!lastNameValidate.test(lastName.trim())) {
        return { success: false, message: "Last Name input is wrong" };
    }
    if (!emailValidate.test(email.trim())) {
        return { success: false, message: "Email input is wrong" };
    }
    if (!(passwordValidateLength.test(password) &&
        passwordValidateLowercase.test(password) &&
        passwordValidateUppercase.test(password) &&
        passwordValidateSpecial.test(password))) {
        return { success: false, message: "password input is wrong" };
    }
    return { success: true, message: "Form Submitted Successfully" };
}

export const loginAction: ActionFunction<Result<LoginInfo>> = (req) => {
    const data = Object.fromEntries(req) as LoginInfo;
    return { data, ...validate(data) };
}