const btn = document.getElementById('btn');
const status = document.getElementById('status');

let count = 0;
btn.addEventListener('click', () => {
  count++;
  status.textContent = `Clicks: ${count}`;
});
