const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

// 로그인 버튼 클릭 → 모달 열기
loginBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// 닫기 버튼 클릭 → 모달 닫기
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 모달 바깥 클릭 → 모달 닫기
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});