const url = '';

const inputField = document.querySelector("input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("responseField");

const sendRequest = () => {
    const location = inputField.value;
    const command = submit.value;
    const endpoint = url + location + '/' + command

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', endpoint, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                responseField.innerHTML = `<h2>Request sent</h2>`;
            } 
        } else {
            responseField.innerHTML = `<h2>Sending request...</h2>`;
        }
    }

    xhr.send();
}