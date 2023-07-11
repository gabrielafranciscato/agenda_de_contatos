const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("form-nome");
  const phoneNumberInput = document.getElementById("form-phone");
  const name = nameInput.value;
  const phoneNumber = phoneNumberInput.value;

  const newRow = document.createElement("tr");
  const nameCell = document.createElement("td");
  const phoneCell = document.createElement("td");
  nameCell.textContent = name;
  phoneCell.textContent = phoneNumber;
  newRow.appendChild(nameCell);
  newRow.appendChild(phoneCell);
  tableBody.appendChild(newRow);

  nameInput.value = "";
  phoneNumberInput.value = "";
});
