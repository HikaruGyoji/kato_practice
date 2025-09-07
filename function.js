document.getElementById('calc').onclick = function () {
  const x = Number(document.getElementById('a').value);
  const y = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = '結果: ' + (x + y);
};
