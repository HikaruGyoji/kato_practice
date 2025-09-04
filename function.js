window.onload = function() {
    // ボタンを取得
    const btn = document.getElementById("btn");
    const title = document.getElementById("title");
  
    // ボタンをクリックしたときの動き
    btn.addEventListener("click", function() {
      title.textContent = "ボタンが押されました！";
      title.style.color = "red"; // 文字色を赤に変更
    });
  };