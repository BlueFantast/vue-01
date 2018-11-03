import Vue from 'vue'

Vue.filter('toString', function (v) {
    let str = v + "";
    let arr = str.split(".");
    if (arr[1]) {
        if (arr[1].length == 1) {
            return str + "0";
        } else {
            return str;
        }
    } else {
        return str + ".00";
    }
})