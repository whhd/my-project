
document.addEventListener('DOMContentLoaded', function () {

    //实例化一个异步请求对象
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {

        if (xhr.status === 200) {
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



            goodslist.innerHTML = data.map(function (item, idx) {
                return `<li data-guid="${item.id}">
                    <img img src="${item.imgUrl}"/>
                    <h4>${item.title}</h4> 
                    <p>现价：<span class ="price">￥${item.price}</span></p>
                    <p class="sale">销量:${item.sales}</p>
                </li>`
            }).join('\n');


            var uprice = document.querySelector('.uprice');
            uprice.onclick = function () {
                var xhr = new XMLHttpRequest();

                xhr.onload = function () {
                    if (xhr.status === 200) {
                        //确认数据接收完毕
                        //在此获取数据：responseText

                        var goodslist = document.querySelector('.goodslist');
                        var datalist = JSON.parse(xhr.responseText);
                        console.log(datalist);

                        goodslist.innerHTML = '';
                        goodslist.innerHTML = data.map(function (item, idx) {
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
                xhr.open('get', '../api/php/listSort.php', true);


                //发起请求
                xhr.send();

            }
        }

        //传参到详情页    
        let gdli = goodslist.children;

        for (var i = 0; i < gdli.length; i++) {
            gdli[i].onclick = function (e) {
                var id = ''
                
                if(e.target.tagName !== 'Li'){
                     id = e.target.parentNode.getAttribute('data-guid') || '';
                    console.log(e.target.parentNode)
                    console.log(id)
                }
               if(id){
                location.href = '../html/detail.html?id=' + id;
               }
               


            }
        }





    }

    //配置参数，建立与服务器连接
    xhr.open('get', '../api/php/list.php', true);


    //发起请求
    xhr.send();
});