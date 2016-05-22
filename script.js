//поиск
var lastResFind="";
var copy_page="";
function TrimStr(s) {
     s=s.replace( /^\s+/g, '');
  return s.replace( /\s+$/g, '');
}
function FindOnPage(inputId){
  var obj=window.document.getElementById(inputId);
  var textToFind;
 
  if (obj) {
    textToFind=TrimStr(obj.value);
  } else {
    alert("Введенная фраза не найдена");
    return;
  }
  if (textToFind=="") {
    alert("Вы ничего не ввели");
    return;
  }
  
  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  alert("Ничего не найдено, проверьте правильность ввода!");
  
  if(copy_page.length>0)
        document.body.innerHTML=copy_page;
  else copy_page=document.body.innerHTML;
    
  document.body.innerHTML=document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");
  document.body.innerHTML=document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:red'>"+textToFind+"</a>");
  lastResFind=textToFind;
  window.location='#'+textToFind;
 } 
//добавление нового товара
function add(){
    var table = document.getElementById('table').getElementsByTagName('TBODY')[0];
    var name = document.getElementById('getName').value;
    var count = document.getElementById('getCount').value;
    var price = document.getElementById('getPrice').value;
    var row = document.createElement('TR');
    table.appendChild(row);
    var td1 = document.createElement('TD');
    row.appendChild(td1);
    var td2 = document.createElement('TD');
    row.appendChild(td2);
    var td3 = document.createElement('TD');
    row.appendChild(td3);
    td1.innerHTML = '<a href="#">' + name + '</a>' + '<span class="badge">' + count + '</span>';
    td2.innerHTML = '$' + price;
}
