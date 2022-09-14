// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status == 200) {
//        myFunction(this.responseText) 

       
//     }
// }
// xhttp.open("GET", "", true);
// xhttp.send();

// function myFunction(data) {
// console.log(data);
// }

const vote = document.querySelector('#vote');
const books = document.querySelector('#books');
const api = 'http://120.0.0.1:2000';
const ul = document.getElementsByClassName('ul');

vote.addEventListener('click', async (el) => {
    const res = await fetch(api + '/vote')
    .then((res) => res.json()
    .then(res => res))
    .catch(error => console.log('error'));
    if (!res) {
        return false
    }
 vote.innerHTML = `your vote is accepted ${res}`;
})