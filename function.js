document.getElementById('calc').onclick = function () {
  const x = Number(document.getElementById('a').value);
  const y = Number(document.getElementById('b').value);
  const op = document.getElementById('op').value;

  let ans;
  switch (op) {
    case '+': ans = x + y; break;
    case '-': ans = x - y; break;
    case '*': ans = x * y; break;
    case '/':
      if (y === 0) {
        document.getElementById('result').textContent = '結果: エラー（0で割ることはできません）';
        return;
      }
      ans = x / y;
      break;
  }
  document.getElementById('result').textContent = '結果: ' + ans;
};
