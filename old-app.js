// document.body.children[1].children[0].href = "https://google.com";

// let anchorElement = document.getElementById("external-link");

let anchorElement = document.querySelector('p a');
anchorElement.href = 'https://google.com';

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This link leads to Google!'

let firstParagraph = document.querySelector('p');

firstParagraph.append(newAnchorElement);

let firstH1Element = document.querySelector('h1');

firstH1Element.remove();

// firstH1Element.parentElement.removeChild(firstH1Element); for older browsers

firstParagraph.parentElement.append(firstParagraph);

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';