const url = 'https://weather-api-comsys.herokuapp.com';

const inputField = document.querySelector("input");
const methods = document.querySelector("#methods");
const options = document.querySelector("#options");
const display = document.querySelector("#display");
const responseField = document.querySelector("#responseField");

const createEndPoint = (url, selectedOption, selectedMethod) => {
    if (selectedOption === "surrounding") {
        return url + "/pi/" + selectedMethod;
    } else if (selectedOption === "specific"){
        const location = inputField.value;

        if (location === "") {
            responseField.innerHTML = `<h2>You have not entered location</h2>`;
            return null;
        }

        return url + "/" + location;
    }
}

const sendDataRequest = selectedMethod => {
    const endpoint = url + "/pi/data/measure";

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', endpoint, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                const res = xhr.response;

                if (res === null) {
                    responseField.innerHTML = `<h2>No response</h2>`;
                    return;
                }
                
                render(res, selectedMethod);

            } else if (status === 404) {
                responseField.innerHTML = `<h2>Server does not respond</h2>`;
            } 
        } 
    }

    xhr.send();
}

const sendCommandRequest = () => {
    let endpoint;
    const selectedMethod = methods.options[methods.selectedIndex].value;
    const selectedOption = options.options[options.selectedIndex].value;
    const selectedDisplay = display.options[display.selectedIndex].value;

    endpoint = createEndPoint(url, selectedOption, selectedMethod);
    if (endpoint === null) {
        return;
    }

    responseField.innerHTML = `<h2>Sending request...</h2>`;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', endpoint, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                const res = xhr.response;

                if (res === null) {
                    responseField.innerHTML = `<h2>No response</h2>`;
                    return;
                }
                
                if (selectedOption === "surrounding") {
                    sendDataRequest(selectedMethod, selectedOption);
                } else {
                    render(res, selectedMethod);
                }
            } else if (status === 404) {
                warning(selectedOption);
            } 
        } 
    }

    xhr.send();
}

const button = document.querySelector("button");
//in arrow function, "this" always refer to global variable
button.addEventListener('click', sendCommandRequest);

