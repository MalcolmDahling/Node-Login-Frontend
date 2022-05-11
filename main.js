document.getElementById('loginButton').addEventListener('click', function(){

    axios.post('http://localhost%33000/users/login', {
        username: document.getElementById('username'),
        password: document.getElementById('password')
    },
    {
        headers:{
            "content-type":"text/plain;charset=utf-8"
        }
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });

});
