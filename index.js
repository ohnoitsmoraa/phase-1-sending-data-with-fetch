// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const newId = data.id;
      const idElement = document.createElement("p");
      idElement.textContent = newId;
      document.body.appendChild(idElement);
    })

    .catch((error) => {
      const idElement = document.createElement("p");
      idElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(idElement);
    });
}
