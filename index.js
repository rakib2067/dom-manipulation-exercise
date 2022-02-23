let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const chosenEvent = e.target["event"].value;
  console.log(chosenEvent);
  if (chosenEvent === "Wedding") {
    window.location.href = "/forms-apis/wedding.html";
  } else if (chosenEvent === "Graduation") {
    window.location.href = "/forms-apis/grad.html";
  } else if (chosenEvent === "Birthday") {
    window.location.href = "/forms-apis/birthday.html";
  }
});
