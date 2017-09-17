var jkkNav = document.getElementsByClassName("jkk-nav")[0];
var oul = jkkNav.getElementsByTagName("ul")[0];
$(function(){
	$.ajax({
		url:"http://localhost:8005/nav/li",
		type:"post",
		datatype:"json",
		data:{
			
		},
		success:function(data){
			var data=data.rest;
			for(var i=0;i<data.length;i++){
				var oli=document.createElement("li");
				oli.innerHTML=data[i].con;
				oli.onclick=function(){
					for(var i=0;i<oli.length;i++){
						oli[i].style.color="#777"
					}
					this.style.color="#ff6000"
				}
				oul.appendChild(oli)
			}
		}
	})
})
