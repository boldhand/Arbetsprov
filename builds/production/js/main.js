"use strict";function getData(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=JSON.parse(n.responseText);t(e)}},n.open("GET",e,!0),n.send()}function createSearchResult(e){var t=document.getElementById("history"),n=document.createElement("li"),r=document.createElement("h2");return r.innerText=e,n.appendChild(r),n.appendChild(dateStamp()),n.appendChild(removeButton()),t.appendChild(n),t}function emptySuggestions(){for(;suggestions.firstChild;)suggestions.removeChild(suggestions.firstChild)}function emptyInput(){var e=document.getElementById("search");e.value=""}function timeStampHistory(){var e=new Date,t=(e.getDate()<10?"0":"")+e.getDate(),n=(e.getMonth()+1<10?"0":"")+(e.getMonth()+1),r=e.getFullYear(),a=(e.getHours()<10?"0":"")+e.getHours(),s=(e.getMinutes()<10?"0":"")+e.getMinutes();return r+"-"+n+"-"+t+" "+a+":"+s}function dateStamp(){var e=document.createElement("time");return e.innerText=timeStampHistory(),e}function removeButton(){var e=document.createElement("button");return e.className="remove-item",e.addEventListener("click",function(e){var t=e.target.parentNode;t.parentNode.removeChild(t)}),e}var search=document.getElementById("search"),suggestions=document.getElementById("suggestions");search.addEventListener("keyup",function(){var e=document.getElementById("search").value,t=new RegExp(e,"i");return this.value.trim()?void getData("https://restcountries.eu/rest/v1",function(e){for(var n="",r=0;r<e.length;r++){var a=e[r];-1!=a.name.search(t)&&(n+="<li>"+a.name+"</li>")}document.getElementById("suggestions").innerHTML=n}):void emptySuggestions()}),suggestions.addEventListener("click",function(e){if(e.target&&"LI"==e.target.nodeName){var t=e.target.innerText;createSearchResult(t),emptySuggestions(),emptyInput()}});var search=document.getElementById("search");search.addEventListener("keydown",function(e){if(13==e.keyCode){var t=search.value;search.value&&(createSearchResult(t),emptySuggestions(),emptyInput())}});