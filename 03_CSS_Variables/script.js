
const imgBox = document.querySelector('img');

// inputs
const spacingInput = document.getElementById('spacing');
const blurInput = document.getElementById('blur');
const colorInput = document.getElementById('base');

const setStyle = () => {
  const spacing = spacingInput.value;
  const blur = blurInput.value;
  const color = colorInput.value;
  imgBox.style.borderStyle = 'solid';
  imgBox.style.borderWidth = `${spacing}px`;
  imgBox.style.borderColor = color;
  imgBox.style.filter =  `blur(${blur}px)`;
};

spacingInput.addEventListener('input', () => setStyle());
blurInput.addEventListener('input', () => setStyle());
colorInput.addEventListener('input', () => setStyle());

setStyle();




