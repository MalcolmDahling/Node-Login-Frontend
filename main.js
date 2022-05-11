document.getElementById('loginButton').addEventListener('click', function(){

    axios.post('http://localhost:3000/users/login', {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    },
    {
        headers:{
            "content-type":"application/json"
        }
    })
        .then((res) => {
            console.log(res);

            localStorage.setItem("loggedIn", JSON.stringify(res.data));
        })
        .catch((err) => {
            console.log(err);
        });

});
