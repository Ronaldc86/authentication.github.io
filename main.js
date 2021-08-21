let $data = localStorage.getItem("__orders")
var id = 0

if (!$data) $data = []
else {
  $data = JSON.parse($data)
  $data.forEach(function (rowData) {
  if (!rowData) return
  
 id+=1
 let li = document.createElement('li');j
  

  })
}

// break

let button = document.getElementById('btn');
    button.addEventListener('click',save)
    
    function save(){
      id+=1
      // Create Li
      let li = document.createElement('li');

let inputadd = document.getElementById('inputadd').value;
 let last = document.getElementById('last').value;
 
      // Create text
      let text = document.createTextNode(inputadd);
      li.appendChild(text);
      let text1 = document.createTextNode(last);
      li.appendChild(text1);
      
      
  
 $data.push({
 id,
 inputadd,
 last
 
 })
 
   localStorage.setItem("__orders", JSON.stringify($data))
    
  }
