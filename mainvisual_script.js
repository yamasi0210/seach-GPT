const placeholderTexts = [
  "yamasi 入力",
  "日々更新します",
  "yamasi"
];

let placeholderIndex = 0;
const inputField = document.querySelector('mainvisual .search-box input');
const searchButton = document.querySelector('mainvisual .search-button');

function updatePlaceholder() {
  inputField.setAttribute('placeholder', placeholderTexts[placeholderIndex]);
  placeholderIndex = (placeholderIndex + 1) % placeholderTexts.length;
}

// 一定時間ごとにプレースホルダーを更新
setInterval(updatePlaceholder, 3000);

// 検索ボックスの青背景とアイコンを設定
if (searchButton) {
  searchButton.style.backgroundColor = '#007bff'; // 青色
  searchButton.innerHTML = '<i class="fas fa-search" style="color: white; font-size: 18px;"></i>'; // メガネマーク（検索アイコン）
}

// "yamasi"が入力されている場合、新しいタブを開く
function handleSearch() {
  const query = inputField.value.trim();
  if (query.toLowerCase() === 'yamasi') {
    window.open('http://yamasi.jp/', '_blank');
  }
}

// ボタンクリックで検索処理
searchButton.addEventListener('click', handleSearch);

// Enterキーで検索処理
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});
