const cyanButton = document.getElementById('cyan-card');
const yellowButton = document.getElementById('yellow-card');
const pinkButton = document.getElementById('pink-card');
const messageBox = document.getElementById('message-box');
// const cardIcon = document.querySelector('.card__icon');
const cyanText = document.querySelector('.card__description-cyan');
const yellowText = document.querySelector('.card__description-yellow');
const pinkText = document.querySelector('.card__description-pink');

let currentScene = 0;

const scenes = [
    {
      message: "You look around you and notice that there are men coming towards you from the north, as they come closer you notice that they are carrying weapons in their hands.",
      choices: [
        {
          option: "Attack the ninjas when they are not looking.",
          icon: "./icons/ninja.png",
          result: "You attacked the ninjas and won!",
        },
        {
          option: "Climb the mountain by the river.",
          icon: "./icons/climb.png",
          result: "You climbed the mountain but fell!",
        },
        {
          option: "Go back to the castle and stay inside.",
          icon: "./icons/castle.png",
          result: "You retreat to the safety of the castle walls.",
        },
      ],
    },
    // add more scenarios here
  ];
  

  function displayScene(scene) {
    // update message
    messageBox.textContent = scene.message;

    // Cyan Button
    // add options
    // create img element, add class, get img, append to buttons
    cyanText.textContent = scene.choices[0].option;
    const iconCyan = document.createElement('img');
    iconCyan.classList.add('card__icon');
    iconCyan.src = scene.choices[0].icon;
    cyanButton.appendChild(iconCyan);

    // Yellow button
    yellowText.textContent = scene.choices[0].option;
    const iconYellow = document.createElement('img');
    iconYellow.classList.add('card__icon');
    iconYellow.src = scene.choices[1].icon;
    yellowButton.appendChild(iconYellow);

    // Pink button
    pinkText.textContent = scene.choices[0].option;
    const iconpink = document.createElement('img');
    iconpink.classList.add('card__icon');
    iconpink.src = scene.choices[2].icon;
    pinkButton.appendChild(iconpink);


    

   
    
  }

  displayScene(scenes[currentScene]);


