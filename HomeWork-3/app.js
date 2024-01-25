let username = prompt("Who's there");
if (username === "Admin") {
  let login = prompt("Password?");
  if (login === "TheMaster") {
    alert("Welcome!");
  } else if (login === null || login === "") {
    alert("Canceled.");
  } else {
    alert("Wrong password");
  }
} else if (username === null || username === "") {
  alert("Canceled.");
} else {
  alert("I don't know you");
}
