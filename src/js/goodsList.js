// $(function(){
//     $.ajax({
//      type:"get",
//      url:"../lib/goodslist.json",
//      dataType:"json",
//      success:function(res){
//       var str = "<ul class='con_ul'>";
//       $.each(res.lby, function(idx,val) {
//        str +="<li class=\"sec_li\"><a href='lb.html?lybId="+val.id+"' class='lp_li_a'><div class='lp_li_imgWrap'><img src='"+val.imgUrl+"'/></div><p class='lp_li_name'>"
//          +val.name+"</p><p class='lp_li_price'>"
//          +'￥'+val.price+"</p></a><li>";
//       });
//       str += "</ul>";
//       $('.content').append(str);
//      },error:function(){
//       alert(error)
//      }
//     });
//    })


		jQuery(function($){
			$.ajax({
				url:"../lib/goodslist.json",
				dataType:"json",
			     success:function(res){
			      var str = "<ul class='con_ul'>";
			      $.each(res.lby, function(idx,val) {
			       str +="<li class=\"sec_li\"><a href='lb.html?lybId="+val.id+"' class='lp_li_a'><div class='lp_li_imgWrap'><img src='"+val.imgUrl+"'/></div><p class='lp_li_name'>"
			         +val.name+"</p><p class='lp_li_price'>"
			         +'￥'+val.price+"</p></a><li>";
			      });
			      str += "</ul>";
			      $('.content').append(str);
			     },error:function(){
			      alert("error")
			     }
			})
		});
