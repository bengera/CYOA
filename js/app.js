const cyanButton = document.getElementById('cyan-card');
const yellowButton = document.getElementById('yellow-card');
const pinkButton = document.getElementById('pink-card');
const messageBox = document.getElementById('message-box');

const scenes = [{
    id:1,
    title: "Scene 1",
    cards: [
        {
        id:1,
        color: "cyan",
        icon:".icons/ninja.png",
        description: 'Attack the ninjas when they are not looking.',
        results: 'You attacked the ninjas and won!'           
    }
    ]
}]

let currentScene = 1;
let currentCard = 1;

cyanButton.addEventListener('click', () => {
    console.log('cyan button clicked');
    //should be innerHTML with template literals
    messageBox.textContent = 'You attacked the ninjas and won!';
});

yellowButton.addEventListener('click', () => {
    console.log('yellow button clicked');
    //should be innerHTML with template literals
    messageBox.textContent = 'You climbed the mountain but fell!';
});


pinkButton.addEventListener('click', () => {
    console.log('pink button clicked');
    //should be innerHTML with template literals
    messageBox.textContent = 'You retreat to the safety of the castle walls.';
});

