// logIn.js

// 1. 모달 요소 선택
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal"); // 초기 화면의 로그인 버튼
const closeModalBtn = document.querySelector(".modal .close"); //modal의 닫기 버튼
const loginForm = document.getElementById("loginForm");

// 2. 로그인 버튼 클릭 시 모달 열기
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// 3. 모달 닫기 버튼 클릭 시 모달 닫기
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

//  로직 헷갈림  //
// 4. 모달 외부 클릭 시 모달 닫기
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// 5. 로그인 폼 제출 처리
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 기본 제출 막기

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 간단한 예시: 콘솔 출력
  console.log("아이디:", username);
  console.log("비밀번호:", password);

  // TODO: 서버 연동 시 AJAX / fetch로 로그인 처리
  alert("로그인 시도 완료!");

  // 로그인 후 모달 닫기
  modal.style.display = "none";

  // 입력값 초기화
  loginForm.reset();
});

// 6. 모달 내 회원가입 버튼 클릭
const signUpBtn = document.getElementById("signUpInModal");

signUpBtn.addEventListener("click", (event) => {
  // 폼 제출 방지 추가
  event.preventDefault(); 
  
  // 예시: 회원가입 페이지 이동
  window.location.href = "signup.html"; // 현재는 비어있음

  // 또는 모달 내 다른 폼 표시
  // loginForm.style.display = "none";
  // signUpForm.style.display = "block";
});