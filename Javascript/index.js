function g(id) {

	if(id.substr(0,1) == "."){
		return document.getElementsByClassName(id.substr(1));
	}
    return document.getElementById(id);
}

function indexSize() {

	var Height = window.innerHeight;
	var Width = window.innerWidth;
    var oContainer = g("container");

    oContainer.style.height = Height+"px";
    oContainer.style.minWidth = Width+"px";

    var aCategory = g(".category");
    var wd = 0;

    for(var i = 0;i<aCategory.length;i++){

    	aCategory[i].style.width = Math.ceil((Width-70)/aCategory.length)+"px";
    	wd+=aCategory[i].offsetWidth;

    }

    var oMain = g("main");
    
    oMain.style.width=wd+"px";


}

indexSize();

window.onresize = function(){
   indexSize();
}


var oClose = g("close");
var oHeader = g("header");
var oReplace = g("replace");
var oButton = g("button");

    var oMain = g("main");
 
oClose.onclick = function(){

	oHeader.style.display = "none";
	oReplace.style.display = "block";
	oMain.style.left = "70px";
}

oButton.onclick = function(){

	oReplace.style.display = "none";
	oHeader.style.display = "block";
	oMain.style.left = "200px";
}


var aBox_shade = g(".box_shade");
var aMenu = g(".menu");

for(var i = 0;i < aBox_shade.length;i++){
	aBox_shade[i].index = i;
	aBox_shade[i].onmouseover = function(){
        aMenu[this.index].style.width = "190px";
        aMenu[this.index].style.height = "190px";
        aMenu[this.index].style.lineHeight = "190px";
        aMenu[this.index].style.marginLeft = "auto";
        aMenu[this.index].style.marginTop = "-95px";

	}
	aBox_shade[i].onmouseout = function(){
		aMenu[this.index].style.width = "150px";
        aMenu[this.index].style.height = "150px";
        aMenu[this.index].style.lineHeight = "150px";
        aMenu[this.index].style.marginLeft = "auto";
        aMenu[this.index].style.marginTop = "-75px";
	}
}
