/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(item => {
    if (item.profession == "developer")
      console.log(item);
  })

}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach((item) => {
  console.log(arr);
})
}

function addData() {
  //Write your code here
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" })
  console.log(arr)
}

function removeAdmin() {
  //Write your code here
  arr.filter((item) => {
    if (item.profession != "admin")
      console.log(item)
})
}

function concatenateArray() {
  //Write your code here
  let arr2 = [
  { id: 5, name: "ravi", age: "25", profession: "testing" },
  { id: 6, name: "kishan", age: "17", profession: "Data scientist" },
  { id: 7, name: "robert", age: "22", profession: "HR" },
];

  let combine = arr.concat(arr2);
  console.log(combine);
  
}
