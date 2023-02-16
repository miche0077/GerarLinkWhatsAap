function gerarLink() {
let number  = document.form_main.number.value;
let mensage = document.form_main.mensage.value;
let url = 'https://wa.me/'

let url_end = `${url}${number}?text=${mensage}%20`
document.getElementById('url_end').innerText = url_end
}