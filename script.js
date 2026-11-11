const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // 1. Select all elements with the class 'price'
  const priceElements = document.querySelectorAll(".price");
  
  let totalSum = 0;
  
  // 2. Loop through each price element and add its value to the total
  priceElements.forEach((el) => {
    totalSum += Number(el.textContent) || 0;
  });

  // 3. Check if the total row already exists to avoid duplicate rows on multiple clicks
  let existingTotalRow = document.querySelector("#total-row");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // 4. Create a new table row for the total price
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  newRow.id = "total-row";

  // Create a single cell spanning across or separate item/price cells depending on your table structure
  const itemCell = document.createElement("td");
  itemCell.textContent = "Total Price";
  
  const priceCell = document.createElement("td");
  priceCell.textContent = totalSum;

  newRow.appendChild(itemCell);
  newRow.appendChild(priceCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);