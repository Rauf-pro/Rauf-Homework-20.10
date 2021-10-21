function showdata() {
  let name = document.myform.name.value;
  let surname = document.myform.surname.value;
  let textbox = document.myform.textbox.value

  console.log(name, surname, textbox);

  if (name == null || name == "") {
    alert("Enter the Name");
    return false;

  } else if (surname == null || surname == "") {
    alert("Enter the Surname");
    return false;

  } else if (textbox == null || textbox == "") {
    alert("Enter text in the textbox");
    return false;
  }
}
let btn = document.querySelector(".btn");

btn.addEventListener("click",(e)=>{
  e.preventDefault();
  showdata();
});