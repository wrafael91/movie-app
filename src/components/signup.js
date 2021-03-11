const form = document.getElementById('reg-form');
form.addEventListener('submit', registerUser);

//Send data as JSON
async function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const result = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password 
        })
    }).then((res) => res.json())
    if (result.status === 'ok') {
        //ok
        alert('Success')
    } else {
        alert(result.error)
    }
}