const inputs = document.querySelectorAll('.controls input');
const arr = Array.from(inputs);
console.log(arr);

function handleUpdate(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

arr.forEach(input => input.addEventListener('change', handleUpdate));
arr.forEach(input => input.addEventListener('mouseover', handleUpdate));