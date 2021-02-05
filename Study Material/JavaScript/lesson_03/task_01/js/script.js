// function addToList(str){
//     let ul = document.createElement('ul');
//     document.getElementById('addTo').appendChild(ul);
//     for(let i = 0; i < str.length; i ++){
//         let li = document.createElement('li');
//         li.innerText = str.slice(0, 3);
//         ul.appendChild(li);
//         str = str.slice(3);
//         i = -1;
//     }
// }

let ul = document.createElement('ul');
let ulExist = false;
function addToList(str){
    if(ulExist == false){
        document.getElementById('addTo').appendChild(ul);
        ulExist = true;
    }
    let li = document.createElement('li');
    li.innerText = str;
    ul.appendChild(li);
}

// setItem() add key and value
// window.localStorage.setItem('key', 'value');
// -----
// storing arrays/objects need to be stringified
// window.localStorage.setItem('key', JSON.stringify(array/object));

// getItem() retrieve a value by key
// window.localStorage.getItem('key');
// -----
// getting array/object data
// JSON.parse(window.localStorage.getItem('key'));

// removeItem() remove an item by key
// window.localStorage.removeItem('key');

// clear() clear all localStorage
// window.localStorage.clear();

// key() retrieve nth key
// let keyName = window.localStorage.key(index);