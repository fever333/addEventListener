const btn = document.querySelector(".btn");
const board = document.querySelector(".board");
const inputTitle = document.querySelector(".inputTitle");
const inputDesc = document.querySelector(".inputDesc");

const arr = [];

btn.addEventListener("click", (event) => {
  event.preventDefault();
  arr.push({ inputTitle: inputTitle.value, inputDesc: inputDesc.value });
  draw();
});

board.addEventListener("click", (event) => {
  if (event.target.closest("#dlt")) {
    arr.splice(event, 1);
    board.innerHTML = "";
  }
  draw();
});

function draw() {
  let displayBoard = "";
  arr.forEach(function (item) {
    displayBoard += `
        <ul >
        <li>${item.inputTitle}</label>
        <li>${item.inputDesc}</li>
        </ul>
        <button id=dlt>Delete</button>
        <button id=edit>Edit</button>
        `;
    board.innerHTML = displayBoard;
  });
}

// function deleteCount() {
//   const dlt = document.querySelector("#dlt");

//   dlt.addEventListener("click", (event) => {
//     if (event.target.closest("#dlt")) {
//       arr.splice(0, 1);
//     }
//   });
// }
// const dlt = document.querySelector(".dlt");
// const edit = document.querySelector(".edit");

// const buttonWrapper = document.querySelector(".buttonWrapper");
// buttonWrapper.addEventListener("click", (event) => {
//   if (event.target.closest(".btn")) {
//     // console.log("YES");

//     console.log(event.target.textContent);
//     if ((event.target.textContent = "add")) {
//     }
//     if (event.target.closest("#addBtn")) {
//       console.log("ADD btn");
//     }
//     if (event.target.closest("#deleteBtn")) {
//       console.log("DELETE btn");
//     }
//   }
// });

// for (let elem of document.querySelectorAll("*")) {
//   elem.addEventListener(
//     "click",
//     () => alert(`Погружение ${elem.tagName}`),
//     true
//   );

//   elem.addEventListener("click", () => alert(`Всплытие: ${elem.tagName}`));
// }
