document.getElementById('macaroon').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open')
    }
})

$('#submit').click(function () {
    let wish = $('#wish');
    let name = $('#name');
    let phone = $('#phone');
    let hasError = false;
    let form = $('#form');
    let loader = $('.loader');

    $('.error-input').hide();

    if (!wish.val()) {
        wish.next().show()
        hasError = true;
    }
    if (!name.val()) {
        name.next().show()
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show()
        hasError = true;
    }
    if (!hasError) {
        
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {wish: wish.val(), name: name.val(), location: phone.val()}
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    form.hide();
                    form.next().css('display', 'flex');
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });
    }

})

