/*
   * JQuery 封装策略
   * 使用调用匿名函数方式封装避免变量污染
   * 给window对象赋予属性$
   *
   * */
(function(){
    var $=function(selector,context){
        return new $.fn.init(selector,context)
    }
    $.fn = $.prototype;

    $.fn.init=function (selector,context) {
        // 判断参入参数是否是dom对象
        if(selector instanceof HTMLElement){
            this.length=1;//构造对象的length必要
            this[0]=selector;
            return this;
        }
        console.log(3333)
        // querySelectorAll 兼容到ie8+
        var nodeList=(context||document).querySelectorAll(selector);
        this.length=nodeList.length;
        for(var i=0;i<this.length;i++){
            this[i]=nodeList[i];
        }
        console.log(this)
        return this;
    }
    $.fn.init.prototype = $.fn;
    $.fn.each=function (fn) {
        for(var i=0;i<this.length;i++){
            //fn为构造函数，call将this[i]指向fn并继承fn的属性，注意区别apply,apply以数组形式传递参数
            fn.call(this[i])
        }
        return this;
    }
    $.fn.hide=function () {
        this.each(function () {
            console.log(66666)
            this.style.display='none';
        })
    }
    $.fn.show=function () {
        this.each(function () {
            this.style.display='block';
        })
    }
     window.$=$;//仅将$暴露出去
})()