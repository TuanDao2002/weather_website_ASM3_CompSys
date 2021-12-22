const url = 'https://weather-api-comsys.herokuapp.com/';

const inputField = document.querySelector("input");
const button = document.querySelector("button");
const responseField = document.querySelector("#responseField");
const dropdown = document.querySelector("select");
const sendRequest = (button) => {
    let endpoint;
    const command = button.value;
    const measurement = dropdown.options[dropdown.selectedIndex].value;

    if (measurement === "surrounding") {
        endpoint = url + "" + "/" + command;
    } else if (measurement === "specific"){
        const location = inputField.value;

        endpoint = url + location + "/" + command;
        if (location === "" && measurement === "specific") {
            responseField.innerHTML = `<h2>You have not entered location</h2>`;
            return;
        }
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
                
                render(measurement, res, command);

            } else if (status === 404) {
                warning(measurement);
            } 
        } 
    }

    xhr.send();
}

//in arrow function, this always refer to global variable
button.addEventListener('click', function(){
    sendRequest(this);
});

