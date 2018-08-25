document.addEventListener('DOMContentLoaded',()=>{
			

 
    var xhr = new XMLHttpRequest();//readyState=0

    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState)
        if(xhr.readyState === 4){
            
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            var content = `<ul>`;
             for(var i=0;i<data.length;i++){
             content += `<li data-guid="${data[i].id}">
             <a href="xiqing.html"> <img src="${data[i].imgUrl}"/></a>
             <a href="xiqing.html"> <h4>${data[i].name}</h4></a>

            <p>现价：<span class ="price">${data[i].price.toFixed(2)}</span></p>
        </li>`;
        var prices= data[i].price;console.log(prices);

        }

        content += `</ul>`;

        // console.log(content);

        // 获取元素
        var goodslist = document.querySelector('.goodslist');

        goodslist.innerHTML = content;
       
           
        }
    }

    // 配置参数，建立与服务器连接
    xhr.open('get','../lib/goodslist.json',true);//readyState=1

    // 发起请求
    xhr.send();

    
        });
