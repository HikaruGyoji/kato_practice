// 足し算
document.getElementById('add-calc').onclick = function () {
  const x = Number(document.getElementById('add-a').value);
  const y = Number(document.getElementById('add-b').value);
  document.getElementById('add-result').textContent = '結果: ' + (x + y);
};

// 引き算
document.getElementById('sub-calc').onclick = function () {
  const x = Number(document.getElementById('sub-a').value);
  const y = Number(document.getElementById('sub-b').value);
  document.getElementById('sub-result').textContent = '結果: ' + (x - y);
};

// 掛け算
document.getElementById('mul-calc').onclick = function () {
  const x = Number(document.getElementById('mul-a').value);
  const y = Number(document.getElementById('mul-b').value);
  document.getElementById('mul-result').textContent = '結果: ' + (x * y);
};

// 割り算
document.getElementById('div-calc').onclick = function () {
  const x = Number(document.getElementById('div-a').value);
  const y = Number(document.getElementById('div-b').value);
  if (y === 0) {
    document.getElementById('div-result').textContent = '結果: エラー（0で割ることはできません）';
  } else {
    document.getElementById('div-result').textContent = '結果: ' + (x / y);
  }
};
