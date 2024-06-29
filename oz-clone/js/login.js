// 회원가입 폼 처리
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;

    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    alert(`이메일: ${email}, 아이디: ${username}로 회원가입 되었습니다.`);
});