const url = '';

const inputField = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const responseField = document.querySelector("#responseField");

const sendRequest = (button) => {
    const location = inputField.value;
    const command = button.value;
    const endpoint = url + location + '/' + command;

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
            // test
            setTimeout(function(){
                responseField.innerHTML = `<h2>${command}</h2>`;
            }, 1000)   
            
            responseField.innerHTML = `<h2>Sending request...</h2>`;
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
