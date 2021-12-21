const url = 'https://weather-api-comsys.herokuapp.com/';

const inputField = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const responseField = document.querySelector("#responseField");

const sendRequest = (button) => {
    responseField.innerHTML = `<h2>Sending request...</h2>`;
    const location = inputField.value;
    const command = button.value;
    const endpoint = url + location + '/' + command;

    if (location === "") {
        responseField.innerHTML = `<h2>You have not entered location</h2>`;
        return;
    }

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

                let info;
                let name;
                if (command === "temp") {
                    name = "Temperature";
                    info = res.temperature + "&degC";
                } else if (command === "humid") {
                    name = "Humidity";
                    info = res.humidity + "%";
                }

                responseField.innerHTML = `<h2>${name}: ${info} </h2>`;
            } else if (status === 404) {
                responseField.innerHTML = `<h2>Location not found</h2>`;
            } 
        } 
    }

    xhr.send();
}

buttons.forEach(button => {
    //in arrow function, this always refer to global variable
    button.addEventListener('click', function(){
        sendRequest(this);
    });
})
