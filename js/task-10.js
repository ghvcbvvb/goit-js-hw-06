function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



// In addition:

function createBoxes(amount) {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = ''; 

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10; 
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.classList.add('box');
        boxesContainer.appendChild(box);
      }
    }

    function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = ''; 
    }

    document.querySelector('[data-create]').addEventListener('click', () => {
      const input = document.querySelector('input[type="number"]');
      const amount = Number(input.value);
      if (amount > 0) {
        createBoxes(amount);
      }
    });

    document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);