import {formData} from "./forms";

const form: HTMLFormElement = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
e.preventDefault();
const data: { } = formData(form);
console.log(data);
});