$(function(){
	$.fn.magnifying = function(){
		var that = $(this),
		 $imgCon = that.find('.con-fangDaIMg'),//正常图片容器
		 	$Img = $imgCon.find('img'),//正常图片，还有放大图片集合
		   $Drag = that.find('.magnifyingBegin'),//拖动滑动容器
		   $show = that.find('.magnifyingShow'),//放大镜显示区域
		$showIMg = $show.find('img'),//放大镜图片
		$ImgList = that.find('.con-FangDa-ImgList > li >img'),
		multiple = $show.width()/$Drag.width();

		$imgCon.mousemove(function(e){
			$Drag.css('display','block');
			$show.css('display','block');
		    //获取坐标的两种方法
		   	// var iX = e.clientX - this.offsetLeft - $Drag.width()/2,
		   	// 	iY = e.clientY - this.offsetTop - $Drag.height()/2,	
		   	var iX = e.pageX - $(this).offset().left - $Drag.width()/2,
		   		iY = e.pageY - $(this).offset().top - $Drag.height()/2,	
		   		MaxX = $imgCon.width()-$Drag.width(),
		   		MaxY = $imgCon.height()-$Drag.height();
				
  	   	    /*这一部分可代替下面部分，判断最大最小值
		   	var DX = iX < MaxX ? iX > 0 ? iX : 0 : MaxX,
		   		DY = iY < MaxY ? iY > 0 ? iY : 0 : MaxY;
		   	$Drag.css({left:DX+'px',top:DY+'px'});	   		
		   	$showIMg.css({marginLeft:-3*DX+'px',marginTop:-3*DY+'px'});*/

		   	iX = iX > 0 ? iX : 0;
		   	iX = iX < MaxX ? iX : MaxX;
		   	iY = iY > 0 ? iY : 0;
		   	iY = iY < MaxY ? iY : MaxY;	
		   	$Drag.css({left:iX+'px',top:iY+'px'});	   		
		   	$showIMg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});
		   	//return false;
		});
		$imgCon.mouseout(function(){
		   	$Drag.css('display','none');
			$show.css('display','none');
		});

		$ImgList.click(function(){
			var NowSrc = $(this).data('bigimg');
			$Img.attr('src',NowSrc);
			$(this).parent().addClass('active').siblings().removeClass('active');
		});	
	}

	$("#fangdajing").magnifying();


});






                                                      
function jian() {
	var i = parseInt(document.getElementById("shang").valueOf().value) - 1;
	document.getElementById("shang").valueOf().value = i;
	if (i <= 1) {
		i = 0;
	}
}
function jia() {
	var i = parseInt(document.getElementById("shang").valueOf().value) + 1;
	document.getElementById("shang").valueOf().value = i;
}

var car = document.querySelector('.car');

// 添加购物车
/*
spList={
	IDx
	NAME
	QTY
	price
	imgsrc
}
*/
// function addCkie(spList){
//     var goodslist = Cookie.get('goodslist');
//     var idx = spList.idx;
//     if(goodslist.length > 0){
//         goodslist = JSON.parse(goodslist)

//         console.log(goodslist)
//     }else{
//         goodslist = []
//     }

//     var has = goodslist.some(function(spList){
//     var res = spList.idx === idx;
//     if(res){
//         spList.qty++
//     }

//     return res;

//     });

//     if(!has){
//         var goods = {
//             idx : idx,
//             qty : 1,
//             imgsrc : spList.imgsrc,
// 			price : spList.price,
// 			title:spList.title,
//         }

//         goodslist.push(goods);
//     }

//     // 把商品信息写入cookie
//     document.cookie = 'goodslist=' + JSON.stringify(goodslist);
// }

