document.addEventListener('DOMContentLoaded',()=>{
			

    // 实例化一个异步请求对象
    var xhr = new XMLHttpRequest();//readyState=0

    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState)
        if(xhr.readyState === 4){
            // 确认数据接收完毕
            // 在次获取数据：responseText
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            var content = `<ul>`;
             for(var i=0;i<data.length;i++){
             content += `<li data-guid="${data[i].id}">
             <a href="#"> <img src="${data[i].imgUrl}"/></a>
             <a href="#"> <h4>${data[i].name}</h4></a>

        <p>现价：<span class ="price">${data[i].price.toFixed(2)}</span></p>
        </li>`;
        }

        content += `</ul>`;

        // console.log(content);

        // 获取元素
        var goodslist = document.querySelector('.goodslist');

        goodslist.innerHTML = content;

        var prices = document.querySelector('.price');
        prices.style.color='red';
        }
    }

    // 配置参数，建立与服务器连接
    xhr.open('get','../lib/goodslist.json',true);//readyState=1

    // 发起请求
    xhr.send();

    
        });
