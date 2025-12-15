const btn = document.getElementById('btn');
const countEl = document.getElementById('count');
const msgEl = document.getElementById('message');

let count = 0;

btn.addEventListener('click', () => {
  count++;
  countEl.textContent = count;

  if (count === 1) {
    msgEl.textContent = 'Первый клик пошёл 👀';
  } else if (count < 10) {
    msgEl.textContent = `Нормально жмёшь, продолжаем… (${count})`;
  } else if (count === 10) {
    msgEl.textContent = '10 кликов! Ты явно тестируешь кнопку на прочность.';
  } else if (count < 25) {
    msgEl.textContent = `Уже ${count}. Бот или человек?`;
  } else {
    msgEl.textContent = `Окей, победил. ${count} кликов — уважение.`;
  }
});
