webpackJsonp([8,7],[function(module,exports,n){(function($){function t(){var n=window.location.href.split("#")[1];n=n||e.defaultRoute,$("ul[class=sub-menu] li a").each(function(t){"#"+n===$(this).attr("href")&&($(this).addClass("active"),$(this).parent().parent().show(300))}),a(n)}function i(){$(document).on("click",".sidebar .nav .has-sub",function(n){n.stopPropagation(),$(this).children(".sub-menu").toggle(300)}),$("ul[class=sub-menu] li a").on("click",function(n){if(n.stopPropagation(),$(this).hasClass("active"))return!1;$("ul[class=sub-menu] li a").removeClass("active"),$(this).addClass("active");var t=$(this).attr("href");t=t.split("#")[1],a(t)})}function a(n){e.params=null;var t="./html/"+n+".html",i="./"+n;$.get(t,[],function(n){$("#container").html(n),u(i)})}function u(t){var i;"./home"===t?n.e(6,function(require){i=n(5),i.init()}):"./hrm"===t?n.e(5,function(require){i=n(6),i.init(e.params)}):"./menu1"===t?n.e(4,function(require){i=n(7),i.init(e.params)}):"./menu2"===t?n.e(3,function(require){i=n(8),i.init(e.params)}):"./menu3"===t?n.e(2,function(require){i=n(9),i.init(e.params)}):"./menu5"===t?n.e(1,function(require){i=n(10),i.init(e.params)}):"./menu6"===t&&n.e(0,function(require){i=n(11),i.init(e.params)})}function s(){t(),i()}n(3),n(4);var e={params:{},defaultRoute:"home"};$(function(){s()})}).call(exports,n(1))},,,function(module,exports){},3]);