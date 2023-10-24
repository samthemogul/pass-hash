import { generate } from "random-words";


const useUsernameGenerate = (capitalize, digits) => {
    const randomword = capitalize ? generate({minLength: 5, maxLength: 5}).charAt(0).toUpperCase() + generate({minLength: 5, maxLength: 5}).slice(1) : generate({minLength: 5, maxLength: 5});
    const randomDigits = Math.floor(Math.random() * 10000);
    if(digits) {
        return `${randomword}${randomDigits}`
    } else {
        return `${randomword}`
    }
}

export default useUsernameGenerate

