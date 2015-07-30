function g(id){
	if(id.substr(0,1) == "."){
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}

function slider(){
	var temp_main = g("temp_main").innerHTML.replace(/^\s*/,"").replace(/^\s*$/,"");

	var temp_ctrl = g("temp_ctrl").innerHTML.replace(/^\s*/,"").replace(/^\s*$/,"");

	var out_main = [];
	var out_ctrl = [];

	for(i in data){
		var _main = temp_main.replace(/{{index}}/g,data[i].img).replace(/{{desc}}/g,data[i].desc);

		var _ctrl = temp_ctrl.replace(/{{index}}/g,data[i].img);
      
		out_main.push(_main);
		out_ctrl.push(_ctrl);
	}

	g("temp_main").innerHTML = out_main.join("");

	g("temp_ctrl").innerHTML = out_ctrl.join("");

}

slider();

function see(n){     //添加class
    var main = g("main_"+n);
    var ctrl = g("ctrl_"+n);
    
    // console.log(main);
    var clear_main =g (".main_i");
    var clear_ctrl =g (".ctrl_i");
     

     for(i = 0;i<clear_ctrl.length;i++){
     	clear_ctrl[i].className = clear_ctrl[i].className.replace("ctrl_i_active","");
     	clear_main[i].className = clear_main[i].className.replace("main_i_active","");
     }
    main.className+=" main_i_active";
    ctrl.className+=" ctrl_i_active";
}

see(1);

 var oCtrl = g(".ctrl_i");
 var Width = window.innerWidth;
 var aCt = document.getElementsByClassName("ctrl_i");
 var oCl = g("temp_ctrl");
       
 var count = Math.ceil(Width/aCt[0].offsetWidth);

oCl.style.width = Math.ceil((aCt.length+1)/count)*Width+"px";

for(var i = 0;i<oCtrl.length;i++){
     oCtrl[i].index = i;

     oCtrl[i].onclick = function(){

     	if((this.index+1)%count == 0){
     		oCl.style.left = -((this.index+1)/count)*Width+"px";
     	}

 	   see(this.index);
     }
   
}