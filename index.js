// Add your code here
function submitData(nameP, emailP) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name:nameP, email:emailP }),
  };

  fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((object) => appendDataToDOM(object.id))
    .catch(function (error) {
      appendDataToDOM(error.message);
      alert("Oops! An error occurred.");
      console.log(error.message);
    });
}

function appendDataToDOM(id) {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `Message: ${id}`;
  document.body.appendChild(newDiv);
}
