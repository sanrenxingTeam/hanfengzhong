define(['jquery'], function ($) {
    var fun1 = function () {
        $("#dd").html("dddddd");
        alert("it works");
    }

    var maimai = {};
    maimai.fun1 = fun1;
    return maimai;
})