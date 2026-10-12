const myFunction = () => {
  const Name = document.getElementById("name");
  const Email = document.getElementById("email");
  const Password = document.getElementById("pass");
//   const SubmitBtn = document.getElementById("submit");
  const Message = document.getElementById("errorMsg");

  Message.innerHTML = " ";

  // let x = document.getElementById("pass")

  try {
    if (Password.length < 8)
      throw "Password must be at least 8 characters long";
    if (Email == "") throw "Input Email";
    if (Name == "") throw "Input Name";
  } catch {
    Message.innerHTML = "Input is " + err;
  }
};
