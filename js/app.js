const cyanButton = document.getElementById('cyan-card');
const yellowButton = document.getElementById('yellow-card');
const pinkButton = document.getElementById('pink-card');
const messageBox = document.getElementById('message-box');

const cyanText = document.querySelector('.card__description-cyan');
const yellowText = document.querySelector('.card__description-yellow');
const pinkText = document.querySelector('.card__description-pink');

let currentScene = 0;

const scenes = [
    {
      message: "You look around you and notice that there are men coming towards you",
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
    
    {
        message: "You hear a strange noise and decide to investigate. As you get closer, you see a large creature in front of you.",
        choices: [
          {
            option: "Attack the creature with your weapon.",
            icon: "./icons/weapon.png",
            result: "You defeated the creature and found a treasure chest!",
          },
          {
            option: "Try to sneak past the creature.",
            icon: "./icons/sneak.png",
            result: "You were able to sneak past the creature and found a secret passage.",
          },
          {
            option: "Run away as fast as you can.",
            icon: "./icons/run.png",
            result: "You ran away from the creature and found a hidden village.",
          },
        ],
      },

      {
        message: "The creature dies, you feel almost sad for a moment",
        choices: [
          {
            option: "Bury the creature in a hole",
            icon: "./icons/bury.png",
            result: "The creature is at rest",
          },
          {
            option: "Walk away from the creature",
            icon: "./icons/sneak.png",
            result: "You decide to walk away",
          },
          {
            option: "Carry the creature with you",
            icon: "./icons/carry.png",
            result: "You carry the creature but it is very heavy",
          },
        ],
      },
    // add more scenarios here
  ];
  
  function displayScene(scene) {
    messageBox.textContent = scene.message;
  
    // Cyan Button
    cyanText.textContent = scene.choices[0].option;
    const iconCyan = document.createElement('img');
    iconCyan.classList.add('card__icon');
    iconCyan.src = scene.choices[0].icon;
    cyanButton.innerHTML = '';
    cyanButton.appendChild(iconCyan);
    cyanButton.appendChild(cyanText);

    // Yellow button
    yellowText.textContent = scene.choices[1].option;
    const iconYellow = document.createElement('img');
    iconYellow.classList.add('card__icon');
    iconYellow.src = scene.choices[1].icon;
    yellowButton.innerHTML = '';
    yellowButton.appendChild(iconYellow);
    yellowButton.appendChild(yellowText);
  
    // Pink button
    pinkText.textContent = scene.choices[2].option;
    const iconPink = document.createElement('img');
    iconPink.classList.add('card__icon');
    iconPink.src = scene.choices[2].icon;
    pinkButton.innerHTML = '';
    pinkButton.appendChild(iconPink);
    pinkButton.appendChild(pinkText);
  }
  
  
/*
  function displayScene(scene) {

    messageBox.textContent = scene.message;

    // Cyan Button
    cyanText.textContent = scene.choices[0].option;
    const iconCyan = document.createElement('img');
    iconCyan.classList.add('card__icon');
    iconCyan.src = scene.choices[0].icon;
    cyanButton.appendChild(iconCyan);

    // Yellow button
    yellowText.textContent = scene.choices[1].option;
    const iconYellow = document.createElement('img');
    iconYellow.classList.add('card__icon');
    iconYellow.src = scene.choices[1].icon;
    yellowButton.appendChild(iconYellow);

    // Pink button
    pinkText.textContent = scene.choices[2].option;
    const iconpink = document.createElement('img');
    iconpink.classList.add('card__icon');
    iconpink.src = scene.choices[2].icon;
    pinkButton.appendChild(iconpink);

     
    
  }
  */

  displayScene(scenes[currentScene]);

  cyanButton.addEventListener('click', () => {
    console.log('cyan button clicked');
    const result = scenes[currentScene].choices[0].result;
    messageBox.textContent = result;
    currentScene++;
    // Erase
    // cyanButton.innerHTML = '';
    // yellowButton.innerHTML = '';
    // pinkButton.innerHTML = '';

    if (currentScene < scenes.length) {
        displayScene(scenes[currentScene]);
      }
    
  
    
  });
  


