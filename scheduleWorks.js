



var ws = {
  // (A) PROPERTIES
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
   data: null,
   arr: 24,

  discover: 0,
  wrapmainRow:null,
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper
  svp: null,
  s1vp:null,
  s2vp:null,
  s3vp: null,
  fsw: null,
  sdk: null,
  ininame: null,
  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score
  ButtonEl: null,
stime:null,
st: null,
  timeleft: 60,
  checkdate:null,
  inputid: null,
  newid: null,
  bb: null,
  // (B) INIT QUIZ HTML

  beforeInit: function () {
    let rightnow_T=moment().hours
    
    ws.wrapmainRow = document.getElementById("mainRow");
    
    ws.svp = document.createElement("div");
   
    ws.svp.id = "firstpage";
    
    ws.wrapmainRow.appendChild(ws.svp);
    
    document.getElementById("firstpage").classList.add("row");
 
const d = new Date();

console.log(d.getHours());
var f=d.getHours();
//alert(f);
var j=0;
   // loop create column and controls based on the hours
  
    for (var i=f; i<23; i++) {
     j=j+1;
     // first div
    ws.s1vp = document.createElement("div");

    ws.s1vp.id="seconddiv"+i;

    ws.svp.appendChild(ws.s1vp);
   
    document.getElementById(ws.s1vp.id).classList.add("col");
    document.getElementById(ws.s1vp.id).classList.add("df")
    //create time label
    ws.st = document.createElement("label");
    
   //use moment js to create time
   ws.st.textContent=moment().add(j, 'hours').format("ddd, hA");
   //id based on the hours a day
    ws.st.id="stimec"+i;
    // checkdate is index to store data
   ws.checkdate=i;
    document.getElementById(ws.s1vp.id).appendChild(ws.st);
    //alert(ws.st.id);

  //   second div element
  ws.s2vp = document.createElement("div");

  ws.s2vp.id="thirddiv"+i;

  ws.svp.appendChild(ws.s2vp);
  
  document.getElementById(ws.s2vp.id).classList.add("col-10");
  document.getElementById(ws.s2vp.id).classList.add("dg");
   //
   //first check local storage, display it if exist
   if (localStorage.getItem(ws.st.textContent)==null)
   ws.s2vp.innerHTML = "<div class='dd'></div>";
  //  localStorage.clear();
  else
   ws.s2vp.innerHTML = "<div class='dd'>"+localStorage.getItem(ws.st.textContent)+"</div>";
// create input in the second div
   var yourini
  if (localStorage.getItem(ws.st.textContent)==null){
   yourini = document.createElement("input");
   //alert(i + "is");
   yourini.name = 'myname'+i;
   ws.inputid=yourini.name;
   yourini.type = Text;
   yourini.id = "initid"+i;
   
   document.getElementById(ws.s2vp.id).appendChild(yourini);
   document.getElementById(yourini.id).classList.add("fwidth");
   }
   
   //create third div

   ws.s3vp=document.createElement("div");
   ws.s3vp.id="fdiv"+i;
   ws.svp.appendChild(ws.s3vp);
   document.getElementById(ws.s3vp.id).classList.add("col")
   document.getElementById(ws.s3vp.id).classList.add("dh")
   // create save text with localstorage value hide 
   ws.s3vp.innerHTML = "save"+ "<div class='ff'>"+ ws.st.textContent+"</div>";
   
// ws.date is the value
   ws.data = localStorage.getItem(ws.s3vp.id);
   
   if (ws.data==null) {
     localStorage.setItem(ws.s3vp.id, "{}");
     ws.data = {};
     
    
   } else {
     ws.data = JSON.parse(ws.data);
     //alert(ws.data);
     
   }

   ws.s1vp.addEventListener("click", function(){
      ws.show(this);
    });

    ws.s3vp.addEventListener("click", function(){
      ws.cshow(this);
    });

  
   ws.getlist();
   //yourbtn.id.addEventListener("click", ws.savenote);
    }
   

    },

    show : function (el) {
      // (C1) FETCH EXISTING DATA
     // alert( "sfdsfis ");
      ws.data = el.getElementsByClassName("dd")[0].innerHTML;
     // alert(ws.data + "is ");
      //localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, JSON.stringify(ws.data));
    },
    cshow : function (el) {
      // (C1) FETCH EXISTING DATA
       let re = "2PM";
      alert("your schedule saved!!")
      var index=null;
      var iv=null;
      //alert( "sfdsfis ");
      ws.data = el.getElementsByClassName("ff")[0].innerHTML;
      //index = ws.data.search(re);
      //alert("find index" + index);
      //  f(true) { re="2pm"; index = ws.data.search(re);if (iindex>1) iv="myname13";}
      //  else {re="3pm"; index = ws.data.search(re);if (index>1) iv="myname14";}
      if(ws.data.includes('1AM')) iv="myname0"
      if(ws.data.includes('2AM')) iv="myname1"
      if(ws.data.includes('3AM')) iv="myname2"
      if(ws.data.includes('4AM')) iv="myname3"
      if(ws.data.includes('5AM')) iv="myname4"
      if(ws.data.includes('6AM')) iv="myname5"
      if(ws.data.includes('7AM')) iv="myname6"
      if(ws.data.includes('8AM')) iv="myname7"
      if(ws.data.includes('9AM')) iv="myname8"
      if(ws.data.includes('10AM')) iv="myname9"
      if(ws.data.includes('11AM')) iv="myname10"
      if(ws.data.includes('12PM')) iv="myname11"
      if(ws.data.includes('1PM')) iv="myname12"
      if(ws.data.includes('2PM')) iv="myname13" //true
      if(ws.data.includes('3PM')) iv="myname14"
      if(ws.data.includes('4PM')) iv="myname15"
      if(ws.data.includes('5PM')) iv="myname16"
      if(ws.data.includes('6PM')) iv="myname17"
      if(ws.data.includes('7PM')) iv="myname18"
      if(ws.data.includes('8PM')) iv="myname19"
      if(ws.data.includes('9PM')) iv="myname20"
      if(ws.data.includes('10PM')) iv="myname21"
      if(ws.data.includes('11PM')) iv="myname22"
      if(ws.data.includes('12AM')) iv="myname23"
 
      // alert(iv + "iv value")
      //alert(key + "is ");
       //alert(document.querySelector("input[name='"+iv+"']").value+ " inside the textbox");
      //ws.data is the key
      localStorage.setItem(ws.data, document.querySelector("input[name='"+iv+"']").value);
      
  },
  savenote: function (evt){
     

     
          evt.stopPropagation();
          evt.preventDefault();
         
          //alert(ws.s3vp.id);
          //alert(document.getElementById(ws.s3vp.id).value)
          

  },

 getlist: function(){
 // ws.s2vp.innerHTML = "<div class='dd'>"+ws.st.textContent+"</div>";
 if (localStorage.getItem(ws.data)!= null)
 //ws.s2vp.innerHTML = "<div class='dd'>"+localStorage.getItem("cal-Sat, 5PM")+"</div>";
 ws.s2vp.innerHTML = localStorage.getItem("Sat, 7PM");
 //alert(localStorage.getItem("Sat, 7PM"));
 
 }
  
};
window.addEventListener("load", ws.beforeInit);



   
   
   
   



