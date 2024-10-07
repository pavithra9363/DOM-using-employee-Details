 
class Employee{

    person1={
        name:"pavithra",
        empid:134,
        address:{
            cityName:"pollachi",
            district:"coimbatore",
            pinCode  :642120
        },
        hobbies:["cocking","playing games","painting","listening"]
        
    }

    person2={
        name:"kiruthika",
        empid:128,
        address:{
            cityName:"palladam",
            district:"tiruppur",
            pinCode  :642120},
        hobbies:["cocking","playing games","painting","listening"]

        
    }
    person3={
        name:"Esther",
        empid:108,
        address:{
            cityName:"sap",
            district:"chennai",
            pinCode  :642120},
        hobbies:["cocking","playing games","painting","listening"]

        
    }
    person4={
        name:"Thamarai",
        empid:154,
        address:{
            cityName:"avinasi",
            district:"tiruppur",
            pinCode  :642120},
        hobbies:["cocking","playing games","painting","listening"]

        
    }
    person5={
        name:"karthika",
        empid:128,
        address:{
            cityName:"kumar nagar",
            district:"madurai",
            pinCode  :642120,
        },
        hobbies:["cocking","playing games","painting","listening"]

        
    }
  }  
 const empClass  = new Employee();
 const emp=document.querySelector("body");
  let div1=document.createElement("div");
  div1.className="red";
  emp.appendChild(div1);

 Object.keys(empClass).map((employ)=>{
  let blue=document.createElement("div");
  blue.className="blue"
  div1.appendChild(blue);

  let h2=document.createElement("h2");
  h2.innerHTML=`NAME:${empClass[employ].name}`;
  blue.appendChild(h2);



  let empid=document.createElement("h2");
  empid.innerHTML=`Employee Id: ${empClass[employ].empid}`
   blue.appendChild(empid);

   let div2=document.createElement("div");
   div2.className="green";
   blue.appendChild(div2);

 Object.keys(empClass[employ].address).map(add=>{
    let h3=document.createElement("h3");
    h3.innerHTML=`${add}:${empClass[employ].address[add]}`;
    div2.appendChild(h3);

    
})  ;


let hob=document.createElement("span");
hob.innerHTML=`<b>HObbies:</b>`
hob.style.fontSize="20px";
blue.appendChild(hob);
 


empClass[employ].hobbies.forEach(hobi => {
    let last=document.createElement("span");
    last.innerHTML=`<b>${hobi}.</b> `;

    blue.appendChild(last);
});


  });
  

