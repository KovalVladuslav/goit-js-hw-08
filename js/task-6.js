function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

const counter = controls.querySelector('input');

const createBtn = controls.querySelector('button[data-create]');
const destroyBtn = controls.querySelector('button[data-destroy]');

const createBoxes = () => {
  if (counter.value === '' || counter.value < 1 || counter.value > 100) {
    return;
  }

  const amount = counter.value;

  const items = [];

  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement('div');

    item.style.width = `${30 + i * 10}px`;
    item.style.height = `${30 + i * 10}px`;
    item.style.margin = '5px';
    item.style.backgroundColor = getRandomHexColor();

    items.push(item);
  }

  boxes.innerHTML = '';
  boxes.append(...items);
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
  counter.value = '';
});

