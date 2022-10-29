//to do list - in progress
function updating() {
    //updating colleges of interest
    let curr = document.getElementById("toDos");
    console.log(curr);
    if(curr == null) curr = "did u rlly enter smth";
    let items = [];
    let command = document.getElementById("your goal");
  
    command.onclick = function() {
      let add = " " + curr.value;
      if (items.includes(add)) {
        window.alert("You tried to add " + curr.value + ", but you already have this goal.");
      } else {
        items[items.length] = add;
      }
  
      document.getElementById("demo").innerHTML = items;
    }
  
  }