//1.Chiedere all'utente la sua email,
//2. Controllare che sia nella lista di chi può accedere
//3. Se l'email dell'utente è presente nella lista allora può accedere
//4. Altrimenti non può accedere
//5.Stampare un messaggio appropriato sull'esito del controllo.

//evento al click del pulsante Genera
submitBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    console.log('Clicked!')
    //lista Array
    const usernameValid = [
        'marco@gmail.com',
        'ivan@hotmail.com',
        'alessio@gmail.com',
        'francesca@yahoo.com',
    ]
    //creazione di variabili
    let username = document.getElementById('username').value
    let email = false
    //ciclo for
    for (let i = 0; i < usernameValid.length; i++) {
        if (username === usernameValid[i]) {
            email = true
        }
    }
    if (email == true) {
        alert('Puoi entrare')
    } else {
        alert('Non puoi entrare')
    }
})
