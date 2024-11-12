// let body = document.querySelector("body");
// console.log(body);

// let f = document.createElement("li");
// f.textContent = body.append(li);
// console.log(li);
//
//
//
//
// ////////////////////HOME WORK/////////////////////////////////////////
//
let table = document.querySelector("table");
let thead = document.querySelector("thead");
let tbody = document.querySelector("tbody");
let data = [
  { id: 1, name: "John Doe", age: 25, action: "delete edit" },
  { id: 2, name: "Jane Doe", age: 30, action: "delete edit" },
  { id: 3, name: "Alice Doe", age: 28, action: "delete edit" },
];
// data.forEach((val) => {
//   let tr = document.createElement("tr");
//   let tdId = document.createElement("td");
//   let tdName = document.createElement("td");
//   let tdAge = document.createElement("td");
//   let tdAction = document.createElement("td");
//   tdId.textContent = val.id;
//   tdName.textContent = val.name;
//   tdAge.textContent = val.age;
//   tr.append(tdId, tdName, tdAge, tdAction);
//   tbody.append(tr);

//   let div = document.createElement("div");
//   let delBtn = document.createElement("button");
//   let editBtn = document.createElement("button");
//   delBtn.classList.add("del-btn");
//   editBtn.classList.add("edit-btn");
//   div.append(delBtn, editBtn);

//   delBtn.textContent = "Delete";
//   editBtn.textContent = "Edit";
//   tdAction.append(div);
//   delBtn.addEventListener("click", () => {
//     // editBtn.remove();
//     // data[1].remove();
//   });
//   editBtn.addEventListener("click", () => {});
// });
data.forEach((val) => {
  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdName = document.createElement("td");
  let tdAge = document.createElement("td");
  let tdAction = document.createElement("td");

  tdId.textContent = val.id;
  tdName.textContent = val.name;
  tdAge.textContent = val.age;

  tr.append(tdId, tdName, tdAge, tdAction);

  val.action.split(" ").forEach((item) => {
    let delBttn = document.createElement("button");
    delBttn.classList.add("delete");
    delBttn.textContent = item;

    if (item === "delete") {
      delBttn.addEventListener("click", () => {
        tr.remove();
      });
    } else if (item === "edit") {
      delBttn.addEventListener("click", () => {
        tdName.contentEditable = true;
        tdAge.contentEditable = true;
      });
    }
    tdAction.append(delBttn);
  });
  tbody.append(tr);
});
