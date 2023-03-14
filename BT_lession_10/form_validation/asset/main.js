const password = document.getElementById("password");
const username = document.getElementById("username");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setErrorfor(username, "Xin vui lòng không bỏ trống user name");
  } else if (!isUsername(usernameValue)) {
    setErrorfor(
      username,
      "Username vui lòng không bắt đầu bằng một số và có ít nhất 2 ký tự"
    );
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === "") {
    setErrorfor(password, "Vui lòng không bỏ trống mật khẩu");
  } else if (passwordValue.length < 8) {
    setErrorfor(password, "Vui lòng nhập mật khẩu tối thiểu 8 ký tự");
  } else {
    setSuccessFor(password);
  }
}

function setErrorfor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  formGroup.className = "form-group error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

function isUsername(username) {
  return /^[A-Za-z][A-Za-z0-9]+$/.test(username);
}
