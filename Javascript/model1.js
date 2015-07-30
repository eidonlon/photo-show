function g(id){
	if(id.substr(0,1) == "."){
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}


function size(){
	var Height = window.innerHeight;
	var oPicture_shade = g("picture_shade");

	var oCantainer = g("container");

	oCantainer.style.minHeight = Height-70+"px";

	oPicture_shade.style.height = Height+"px";

}

size();

window.onresize = function(){
	size();
}

var data = [      //先手动写，后期从数据库获取此数据
   {img:0,desc:"一张图片一张图片一张图片一张图片一张图片0"},
   {img:1,desc:"一张图片一张图片一张图片一张图片一张图片1"},
   {img:2,desc:"一张图片一张图片一张图片一张图片一张图片2"},
   {img:3,desc:"一张图片一张图片一张图片一张图片一张图片3"},

];


function getData(){
	var html = g("picture_view").innerHTML;
	var picuters = g("container").innerHTML;
    
    var picuters_view = [];
    var view = [];

	for(i in data){
		var _view = html.replace(/{{index}}/g,data[i].img).replace(/{{desc}}/g,data[i].desc);

		var _picuters = picuters.replace(/{{index}}/g,data[i].img);
        

        picuters_view.push(_picuters);
		view.push(_view);
	}


    g("container").innerHTML = picuters_view.join("");
	g("picture_view").innerHTML = view.join("");


}
getData();



function see(n){

   

	var _oImg = g("img_"+n);
	var _oDesc = g("desc_"+n);

	var _oPre = g("pre_"+n);
	var _oNext = g("next_"+n);

	var _aImg = g(".img");
	var _aDesc = g(".desc");
	var _aPre = g(".pre");
	var _aNext = g(".next");


	var oPicture_view = document.getElementById("picture_view");

		oPicture_view.style.marginLeft = -oPicture_view.offsetWidth/2+"px";
		oPicture_view.style.marginTop = -(oPicture_view.offsetHeight/2-25)+"px";

	for(var i = 0;i<_aImg.length;i++){
		_aImg[i].className = _aImg[i].className.replace("img_active","");
		_aDesc[i].className = _aDesc[i].className.replace("desc_active","");

		_aPre[i].className = _aPre[i].className.replace("pre_active","");
		_aNext[i].className = _aNext[i].className.replace("next_active","");
	}

	_oImg.className+=" img_active";
	_oDesc.className+=" desc_active";

	_oPre.className+=" pre_active";
	_oNext.className+=" next_active";

}

function imagesClick(){
    var aImages = g(".small_img");
    var oPicture_shade = g("picture_shade");

    var oClose = g("close");

    oClose.onclick = function(){
    	oPicture_shade.style.zIndex = 1;
    }


    for(var i = 0;i<aImages.length;i++){

    	  aImages[i].index = i;

          aImages[i].onclick = function(){
             see(this.index);
             start(this.index);
          	oPicture_shade.style.zIndex = 5;

          }
    }
}


function start(i){

	var _aImg = g(".img");

	var aPre = g(".pre");
	var aNext = g(".next");

	var oPicture_view = document.getElementById("picture_view");

		oPicture_view.style.marginLeft = -oPicture_view.offsetWidth/2+"px";
		oPicture_view.style.marginTop = -(oPicture_view.offsetHeight/2-25)+"px";

         aNext[i].onclick = function(){

         	if(i+1 == _aImg.length){i = -1;}
         	see(i+1);
         	i++;         	
     	    start(i);
         }

         aPre[i].onclick = function(){
         	if(i-1 == -1){i = _aImg.length;}
         	see(i-1);
         	i--;

         	 start(i);
         }
}


see(1);

imagesClick();

