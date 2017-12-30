# 这是一个JQuery封装原理探究

> 主要运用的技术点
- js命名
- js原型portotype
- 原型继承
- new 实例化对象constructor
- this的运用
- call函数的使用

---

### 值得反复推敲的地方

1. 只要new表达式之后的constructor返回（return）一个引用对象（数组，对象，函数等），都将覆盖new创建的匿名对象，如果返回（return）一个原始类型（无return时其实为return原始类型undefined），那么就返回new创建的匿名对象。
2. 把new什么什么藏在$方法中
3. 在IE8+浏览器中，我们有选择器API，document.querySelector与document.querySelectorAll，前者返回唯一Node，后者为NodeList集合
4. $.fn = $.prototype;
5. $.fn.init.prototype = $.fn（注意这里与第一条this的指向有关）

### 参考博文

- [jQuery诞生记-原理与机制](http://www.zhangxinxu.com/wordpress/2013/07/jquery-%E5%8E%9F%E7%90%86-%E6%9C%BA%E5%88%B6/)

