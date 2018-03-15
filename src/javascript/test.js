var _ = require('lodash');

function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hi', 'lodash'], ' ');
    // element.innerHTML = 'Hello webpack';
    return element;
}

function changeContect(){
    var element = document.getElementById('content');
    element.innerHTML = 'Hi yeah';
}

document.body.appendChild(component());