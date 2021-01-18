const btn = document.querySelector(".btn");
const board = document.querySelector(".board");
const inputTitle = document.querySelector(".inputTitle");
const inputDesc = document.querySelector(".inputDesc");

const editTitle = document.querySelector(".editTitle");
const editDesc = document.querySelector(".editDesc");

const modal = document.querySelector(".modal");
const modalWrapper = document.querySelector(".modal__wrapper");
const modalContent = document.querySelector(".modal__content");
const closeBtn = document.querySelector("#closeBtn");

let counter = 0;

const arr = [];

btn.addEventListener("click", (event) => {
  event.preventDefault();

  arr.push({
    inputTitle: inputTitle.value,
    inputDesc: inputDesc.value,
    id: counter,
  });
  counter++;

  draw();
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

board.addEventListener("click", (event) => {
  if (event.target.closest("#dlt")) {
    deleteCount(event);
  }
  if (event.target.closest("#edit")) {
    modal.style.display = "block";
    editCount(event);
  }
});

function editCount(event) {}

function deleteCount(event) {
  const item = event.target.closest("#item_");
  const id = item.querySelector(".id").textContent;

  arr.forEach(function (record, index) {
    if (+record.id === +id) {
      arr.splice(index, 1);
      board.innerHTML = "";
    }
  });

  draw();
}

function draw() {
  let displayBoard = "";
  arr.forEach(function (item) {
    displayBoard += `
        <div id ="item_">
        <p class="newTitle">${item.inputTitle}</p>
        <p class="newDesc">${item.inputDesc}</p>
        <p class="id" style="display: none">${item.id}</p>
        <button id="dlt">Delete</button>
        <button id="edit">Edit</button>
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

// const item = { a: "a1", b: "b2", c: "c3" };

// const { a, b, c } = item;
// console.log(a);
// console.log(b);
// console.log(c);
