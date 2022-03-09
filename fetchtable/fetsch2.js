const userElement = document.getElementById("userResult");






function show(datas){
    let tableElement = document.createElement("TABLE")
    userElement.appendChild(tableElement);

    let  trElement = document.createElement("TR");
    tableElement.appendChild(trElement); 
    
    let thElement = document.createElement("TH");
    thElement.textContent = "S.No";
    trElement.appendChild(thElement);

    let thElement1 = document.createElement("TH");
    thElement.textContent = "Name";
    trElement.appendChild(thElement1);

    let thElement2 = document.createElement("TH");
    thElement2.textContent = "user name";
    trElement.appendChild(thElement2);

    let thElement3 = document.createElement("TH");
    thElement3.textContent = "email";
    trElement.appendChild(thElement3);


 let thElement4 = document.createElement("TH");
    thElement4.textContent = "phone";
    trElement.appendChild(thElement4);


let thElement5 = document.createElement("TH");
    thElement5.textContent = "website";
    trElement.appendChild(thElement5);

   for(i=0; i<datas.length;i++){
       let trElement1 = document.createElement("TR");
      tableElement.appendChild(trElement1);
      let tdEle = document.createElement("TD");
      tdEle.textContent=datas[i].id;
      trElement1.appendChild(tdEle);
      let tdElement = document.createElement("TD");
      tdElement.textContent=datas[i].name;
      trElement1.appendChild(tdElement);

      let tdElement1 = document.createElement("TD");
      tdElement1.textContent=datas[i].username;
      trElement1.appendChild(tdElement1);

      let tdElement2 = document.createElement("TD");
      tdElement2.textContent=datas[i].email;
      trElement1.appendChild(tdElement2);

      let tdElement3 = document.createElement("TD");
      tdElement3.textContent=datas[i].phone;
      trElement1.appendChild(tdElement3);

      let tdElement4 = document.createElement("TD");
      tdElement4.textContent=datas[i].website;
      trElement1.appendChild(tdElement4);
     
      
     

    
    
     
   } 


} 

function clicks(){

const get_data=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((result)=>result.json())
    .then(datas=>{
        show(datas)
        console.log(datas)
          
    })
    .catch((err)=>{
        console.log(err);
    })
}

get_data();

}