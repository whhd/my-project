$(function($) {
                
    $('#selectAll').on('change', function(evt) {
        // 获取事件源的两种方式: evt.target或者this
        // 这里拿到的是原生的JavaScript对象
        if ($(this).prop('checked')) {
            $('.single-item input[type="checkbox"]').prop('checked', true);
            calcTotal();
        } else {
            $('.single-item input[type="checkbox"]').prop('checked', false);
            $('#totalCount').text('0');
            $('#totalPrice').html('&yen;0.00');
        }
    });

    // 为单个商品项的复选框绑定改变事件
    $('input[name="selectOne"]').on('change', function() {
        calcTotal();
        if (!$(this).prop('checked')) {
            $('#selectAll').prop('checked', false);
        }
    });

    // 为删除选中商品超链接绑定事件回调
    $('#clearSelected').on('click', function() {
        if (window.confirm('确定要删除所选商品吗?')) {
            $('.single-item').each(function() {
                if ($(this).find('input[name="selectOne"]').prop('checked')) {
                    $(this).remove();
                }
            });
            calcTotal();
        }
    });

    // 为减少和添加商品数量的按钮绑定事件回调
    $('.single-item button').on('click', function(evt) {
        $(this).parent().parent().find('input[name="selectOne"]').prop('checked', true);
        if ($(this).text() == '-') {
            var count = parseInt($(this).next().val());
            if (count > 1) {
                count -= 1;
                $(this).next().val(count);
            } else {
                alert('商品数量最少为1');
            }
        } else {
            var count = parseInt($(this).prev().val());
            if (count < 200) {
                count += 1;
                $(this).prev().val(count);
            } else {
                alert('商品数量最多为200');
            }
        }
        var price = parseFloat($(this).parent().prev().find('span').text());
        $(this).parent().next().html('&yen;' + (price * count).toFixed(2));
        calcTotal();
    });

    // 为单个商品项删除超链接绑定事件回调
    $('.single-item a').on('click', function() {
        if (window.confirm('确定要删除该项吗?')) {
            $(this).parent().parent().remove();
            calcTotal();
        }
    });

    // 为商品数量文本框绑定改变事件回调
    $('.single-item input[type="text"]').on('change', function() {
        $(this).parent().parent().find('input[name="selectOne"]').prop('checked', true);
        var count = parseInt($(this).val());

        if (count != $(this).val() || count < 1 || count > 200) {
            alert('无效的商品数量值');
            count = 1;
            $(this).val(count);
        }
        var price = parseFloat($(this).parent().prev().find('span').text());
        $(this).parent().next().html('&yen;' + (price * count).toFixed(2));
        calcTotal();
    });

    // 计算总计
    function calcTotal() {
        var checkBoxes = $('input[name="selectOne"]');
        var priceSpans = $('.single-item .price');
        var countInputs = $('.single-item .count');
        var totalCount = 0;
        var totalPrice = 0;
        for (var i = 0; i < priceSpans.length; i += 1) {
            // 复选框被勾中的购物车项才进行计算
            if ($(checkBoxes[i]).prop('checked')) {
                // 强调: jQuery对象使用下标运算或get方法会还原成原生的JavaScript对象
                var price = parseFloat($(priceSpans[i]).text());
                var count = parseInt($(countInputs[i]).val());
                totalCount += count;
                totalPrice += price * count;
            }
        }
        $('#totalCount').text(totalCount);
        $('#totalPrice').html('&yen;' + totalPrice.toFixed(2));
    }
});