let number = document.getElementById('id')
let btn = document.getElementById('btn')

btn.onclick = () => {
    if(number.value > 0 && number.value < 11 && Number.isInteger(Number(number.value))) {
        fetch('https://jsonplaceholder.typicode.com/users/' + number.value)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
                document.getElementById('root').
                innerHTML = `<h2 class="head">Имя:</h2><h2>${data.name}</h2><hr>
                <h2 class="head">Имя пользователя:</h2><h2>${data.username}</h2><hr>
                <h2 class="head">Номер телефона:</h2><h2>${data.phone}</h2><hr>`
                })
        .catch(error => console.log(error));
    } else {
        alert('Пожалуйста, введите целое число от 1 до 10.')
        }
}

document.getElementById('id').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      btn.onclick();
    }
  });