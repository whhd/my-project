// document.addEventListener('DOMContentLoaded',()=>{
			
  

 
//     var xhr = new XMLHttpRequest();//readyState=0

//     xhr.onreadystatechange = function(){
//         // console.log(xhr.readyState)
//         if(xhr.readyState === 4){
            
//             var data = JSON.parse(xhr.responseText);
//             console.log(data);
//             var content = `<ul>`;
//              for(var i=0;i<data.length;i++){
//              content += `<li data-guid="${data[i].id}">
//              <a href="xiqing.html"> <img src="${data[i].imgUrl}"/></a>
//              <a href="xiqing.html"> <h4>${data[i].title}</h4></a>

//             <p>现价：<span class ="price">${data[i].price.toFixed(2)}</span></p>
//             <p>销量:${data[i].sales}</p>
//         </li>`;
//         // var prices= data[i].price;console.log(prices);

//         }

//         content += `</ul>`;

//         // console.log(content);

//         // 获取元素
//         var goodslist = document.querySelector('.goodslist');

//         goodslist.innerHTML = content;
       
           
//         }
//     }

//     // 配置参数，建立与服务器连接
//     xhr.open('get','../api/php/list.php',true);//readyState=1

//     // 发起请求
//     xhr.send();

    
//         });




document.addEventListener('DOMContentLoaded',function(){

    //实例化一个异步请求对象
    var xhr = new XMLHttpRequest();

    xhr.onload = function(){

        if(xhr.status === 200){
            //确认数据接收完毕
            //在此获取数据：responseText
            // var data = JSON.parse(xhr.responseText);
            // console.log(xhr.responseText);

            var data = JSON.parse(xhr.responseText);

             console.log(data);

           

            //获取元素
            // var price = document.querySelector('#price');
            // var date = document.querySelector('#date');   
            var goodslist = document.querySelector('.goodslist');


            
            goodslist.innerHTML = data.map(function(item,idx){
                return `<li data-guid="${item.id}">
                    <img img src="${item.imgUrl}"/>
                    <h4>${item.title}</h4> 
                    <p>现价：<span class ="price">￥${item.price}</span></p>
                    <p class="sale">销量:${item.sales}</p>
                </li>`
            }).join('\n');


            var uprice = document.querySelector('.uprice');
            uprice.onclick = function(){
                var xhr = new XMLHttpRequest();

                xhr.onload = function(){
                    if(xhr.status === 200){
                        //确认数据接收完毕
                        //在此获取数据：responseText
                       
                        var goodslist = document.querySelector('.goodslist');
                        var datalist = JSON.parse(xhr.responseText);
                        console.log(datalist);

                        goodslist.innerHTML = '';
                        goodslist.innerHTML = data.map(function(item,idx){
                            return `<li data-guid="${item.id}">
                                <img img src="${item.imgUrl}"/>
                                <h4>${item.title}</h4> 
                                <p>现价：<span class ="price">￥${item.price}</span></p>
                                <p class="sale">销量:${item.sales}</p>
                            </li>`
                        }).join('\n');

                }
            }
         

           
                    //配置参数，建立与服务器连接
                    xhr.open('get','../api/php/listSort.php',true);


                    //发起请求
                    xhr.send();

        }
    }
            
                    //传参到详情页    
                    let gdli = goodslist.children;
                    
                    for(var i=0;i<gdli.length;i++){
                    gdli[i].onclick = function(e){
                        // console.log(e.target.parentNode)
                    let id = e.target.parentNode.getAttribute('data-id');
                    
                            
                    location.href = 'xiqing.html?id=' + id;


           }
        }
  



   
}

            //配置参数，建立与服务器连接
            xhr.open('get','../api/php/list.php',true);


            //发起请求
            xhr.send();
});