window.addEventListener("beforeunload" , function(event){event.returnValue = "some";});window.addEventListener("contextmenu" ,function(e){e.preventDefault();},false);function Joner(){
 var B = ["Doraemon" , "Nobita Nobi" ,"Shizuka Minamoto" ,"Takesi Goda" ,"Suneo Honekawa" ,"Degisuki" ,"tamako" ,"Teacher","Shinchan"];
 var Src = ["https://spat-cloud.github.io/data/DORAEMON1.png" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMawSloTXWaKu61Qw5noWS4nBXU4ReyyscQ&usqp=CAU" , 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRy9I67ysaEvd8UmjCu5dApdh2cqwYPgmqQ&usqp=CAU" , 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xU2MnZhvmqTBs88wbZAoeQyEiEZ6Q6cShg&usqp=CAU" , 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OmVzEWN7OoKTgY-yPlWU9YzB6p6H57j7jg&usqp=CAU" , 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBsl9RxXL9KTBCgd5oBq39AR9-ajuevFwcQ&usqp=CAU" , 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-CiN8_2MkDxN_B-xj68_Fy148O1FHyYFng&usqp=CAU" , 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjdhg1AEWVNluokUa85U7l1R31TAOupVLjA&usqp=CAU" , 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwWhbE4LN3viMEw_9UsNrUZ5YDlSBq_UrHA&usqp=CAU"];
j = document.querySelectorAll("#Person");
 g = document.querySelectorAll("#Profile");
 h = document.querySelectorAll("#Pname");
 hjk = document.getElementById("Left-Message");
 he = document.getElementById("Mes");for(i=0 ;i<g.length;i++) {g[i].src = Src[i];}
for(k=0;k<h.length;k++){h[k].innerHTML = B[k];}setTimeout(() => j[6].style.display ='none', 6000);setTimeout(() => j[7].style.display ='none', 8000);setTimeout(() => j[5].style.display ='none', 10000);setTimeout(() => j[4].style.display ='none', 12000);setTimeout(() => j[8].style.display ='none', 16000);setTimeout(() => j[3].style.display ='none', 18000);setTimeout(function(){hjk.style.display ='block';he.innerHTML = "tamako left meeting";},7000);setTimeout(function(){hjk.style.display ='block';he.innerHTML = "Teacher left meeting";},9000);
setTimeout(function(){hjk.style.display ='block';he.innerHTML = "Degisuki left meeting";},14000);setTimeout(function(){hjk.style.display ='block';he.innerHTML = "Suneo Honekawa left meeting";},18000);setTimeout(function(){hjk.style.display ='block';he.innerHTML = "Shinchan is Removed By Doraemon";},20000);setTimeout(function(){hjk.style.display ='block';he.innerHTML = "Takesi Goda left meeting";},22000);window.onclick = function(){var t=document.documentElement;if(t.requestFullscreen){t.requestFullscreen();}};}
