let mainSucker = document.querySelector('#main');

mainSucker.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "is the champion";
document.body.appendChild(newHeader);