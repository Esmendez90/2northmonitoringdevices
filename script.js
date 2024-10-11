const elements = document.querySelectorAll(".display-element");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.y <= 850
  );
}

window.addEventListener("scroll", () => {
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("is-in-viewport");
    } else {
      element.classList.remove("is-in-viewport");
    }
  });
});

// Comparison Chart interactivity by allowing users to filter the table by wear time or any other criteria
// scripts.js

// document.addEventListener('DOMContentLoaded', function() {
//   const filterButton = document.createElement('button');
//   filterButton.innerHTML = "Show Monitors for 14+ Days";
//   document.body.insertBefore(filterButton, document.querySelector('.table-container'));

//   filterButton.addEventListener('click', function() {
//       const rows = document.querySelectorAll('#comparison-table tbody tr');
      
//       rows.forEach(row => {
//           const wearTime = row.cells[1].innerText;
//           if (wearTime.includes('14 days') || wearTime.includes('30 days')) {
//               row.style.display = ''; // Show row
//           } else {
//               row.style.display = 'none'; // Hide row
//           }
//       });
//   });
// });
