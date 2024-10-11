const nameInput = document.getElementById('nameInput');
const natIDInput = document.getElementById('natIDInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const singUpButton = document.getElementById('signUpBtn');



//Funciones que se ejecutan en segundo plano pero se sigue la ejecucion del codigo.
const postUser = async () => {
    fetch('http://localhost:8000/users/create', {
        method: 'POST',
        body : json,
        headers:{'Content-Type':'application/json'}

    });
    console.log('alfa')
    let responseJSON = await Response.json();
}


singUpButton.addEventListener('click', (event)=>{
    event.preventDefault();

    let name = nameInput.value;
    let natID = natIDInput.value;
    let email= emailInput.value;
    let password = passwordInput.value;

    let user = {
        name: name,
        natID: natID,
        email: email,
        password: password
    };

    let json = JSON.stringify(user);
    console.log(json);

    postUser();
    console.log("Fin del metodo")

});