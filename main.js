const btn = document.querySelector(".btn");
const board = document.querySelector(".board");
const inputTitle = document.querySelector(".inputTitle");
const inputDesc = document.querySelector(".inputDesc");

const arr = [];

btn.addEventListener("click", (event) => {
  event.preventDefault();
  arr.push({ inputTitle: inputTitle.value, inputDesc: inputDesc.value });
  console.log(arr);
  draw();
});

board.addEventListener("click", (event) => {
  if (event.target.closest("#dlt")) {
    deleteCount();
  }
});

function deleteCount() {
  const item = event.target.closest("#item_");
  const newTitle = item.querySelector(".newTitle").textContent;
  const newDesc = item.querySelector(".newDesc").textContent;

  arr.forEach(function (item, index) {
    if (item.inputTitle === newTitle && item.inputDesc === newDesc) {
      arr.splice(index, 1);
      board.innerHTML = "";
    }
  });

  console.log(arr);

  draw();
}

function draw() {
  let displayBoard = "";
  arr.forEach(function (item, index) {
    displayBoard += `
        <div id ="item_">
        <p class="newTitle">${item.inputTitle}</p>
        <p class="newDesc">${item.inputDesc}</p>
        <button id=dlt>Delete</button>
        <button id=edit>Edit</button>
        </div>
        `;
    board.innerHTML = displayBoard;
  });
}

// event.target.closest("#item_");
// const newTitle = document.querySelector(".newTitle");
// const newDesc = document.querySelector(".newDesc");
// draw();
// arr.forEach(function (item, index) {
//   if (item.inputTitle === item.newTitle && item.inputDesc === item.newDesc) {
//     arr.splice(index, 1);
//     board.innerHTML = "";

//     console.log(newTitle);
//     console.log(newDesc);
//   }
// });
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

// console.log("newTitle.textContent:", newTitle.textContent);
// console.log("inputTitle.value:", inputTitle.value);
// console.log("newDesc.textContent:", newDesc.textContent);
// console.log("inputDesc.value", inputDesc.value);
// console.log("newTitle:", newTitle);
// console.log("newDesc:", newDesc);

// console.log("newTitle.textContent:", newTitle.textContent);
// console.log("inputTitle.value:", inputTitle.value);
// console.log("newDesc.textContent:", newDesc.textContent);
// console.log("inputDesc.value", inputDesc.value);
// console.log("newTitle:", newTitle);
// console.log("newDesc:", newDesc);
