const url = 'https://weather-api-comsys.herokuapp.com/';

const inputField = document.querySelector("input");
const methods = document.querySelector("#methods");
const options = document.querySelector("#options");
const responseField = document.querySelector("#responseField");

const sendRequest = () => {
    let endpoint;
    const selectedMethod = methods.options[methods.selectedIndex].value;
    const selectedOption = options.options[options.selectedIndex].value;

    if (selectedOption === "surrounding") {
        endpoint = url + "" + "/" + selectedMethod;
    } else if (selectedOption === "specific"){
        const location = inputField.value;

        if (location === "") {
            responseField.innerHTML = `<h2>You have not entered location</h2>`;
            return;
        }

        endpoint = url + location + "/" + selectedMethod;
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
                
                render(selectedOption, res, selectedMethod);

            } else if (status === 404) {
                warning(selectedOption);
            } 
        } 
    }

    xhr.send();
}

const button = document.querySelector("button");
//in arrow function, this always refer to global variable
button.addEventListener('click', sendRequest);

