!function($,i,t){$(function(){var t=250,n=$("#icons .cell"),e=$("#header"),o=$("#main-content"),s=$("#nav"),a=$("#nav-toggle");$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var i=$(this.hash);if(i=i.length?i:$("[name="+this.hash.slice(1)+"]"),i.length)return $("html, body").animate({scrollTop:i.offset().top-150},1e3),s.is(":visible")&&"absolute"===s.css("position")&&s.stop().slideUp(),!1}}),a.on("click",function(){s.is(":visible")?s.stop().slideUp():s.stop().slideDown()}),n.on("click",function(){var i=$(this).find("[data-original]"),t=$(this).find("[data-outlined]");i.is(":visible")?i.fadeOut(250,function(){t.fadeIn(250)}):t.fadeOut(250,function(){i.fadeIn(250)})}),$(i).scroll(function(){o.offset().top<e.offset().top+e.outerHeight()?e.addClass("filled"):e.removeClass("filled")})})}(window.jQuery,window,document);