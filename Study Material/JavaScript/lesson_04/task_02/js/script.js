// creates full-namelist
let containerOne = [
    'Avior',
    'Ben',
    'Dror',
    'Liran',
    'Martin',
    'Michal',
    'Niv',
    'Orel',
    'Ranni',
    'Sappir',
    'Stanislav',
    'Yossi M',
    'Yossi S',
];
let containerTwo = [];
// adds namelist to screen
for(let i = 0; i < containerOne.length; i ++){
    let li = document.createElement('li');
    li.innerText = containerOne[i];
    document.getElementById('addTo').appendChild(li);
}

function shuffleAndPull(){
    // delete exisiting namelist-onscreen
    let ul = document.getElementById('addTo');
    while(ul.hasChildNodes()){
        ul.removeChild(ul.childNodes[0]);
    }
    // variables used for array-shuffling
    let randomIndex = Math.floor(Math.random() * containerOne.length) + 1;
    let middleMemo = [];
    // shifts block of names from container 1 -> 2
    for(let i = 0; i < randomIndex; i ++){
        middleMemo = containerOne.shift();
        containerTwo.push(middleMemo);
    }
    // picks a name to display
    let poppedName = containerTwo.pop();
    // shifts all names back from container 2 -> 1
    for(let i = 0; i < (randomIndex - 1); i ++){
        middleMemo = containerTwo.pop();
        containerOne.unshift(middleMemo);
    }
    // create new namelist-onscreen
    for(let i = 0; i < containerOne.length; i ++){
        let li = document.createElement('li');
        li.innerText = containerOne[i];
        document.getElementById('addTo').appendChild(li);
    }
    // displays name
    alert(`Classmate picked: ${poppedName}`);
    // reset if required
    if(containerOne == 0 && containerTwo == 0){
        reset('code');
    }
}

function reset(buttonOrCode){
    // displays message before resetting
    if(buttonOrCode == 'code'){
        alert(`No more students to pick from; Resetting now...`);
    } else if(buttonOrCode == 'button'){
        alert(`Resetting now...`)
    }
    // resets namelist
    containerOne = [
        'Avior',
        'Ben',
        'Dror',
        'Liran',
        'Martin',
        'Michal',
        'Niv',
        'Orel',
        'Ranni',
        'Sappir',
        'Stanislav',
        'Yossi M',
        'Yossi S',
    ];
    containerTwo = [];
    let ul = document.getElementById('addTo');
    // deletes previous namelist-onscreen
    while(ul.hasChildNodes()){
        ul.removeChild(ul.childNodes[0]);
    }
    // adds reseted namelist-onscreen
    for(let i = 0; i < containerOne.length; i ++){
        let li = document.createElement('li');
        li.innerText = containerOne[i];
        document.getElementById('addTo').appendChild(li);
    }
}