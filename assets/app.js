$(document).ready(function(){
  $('.home-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: true
  });

  $('.play-button').click(function(e){
    e.preventDefault();
    this.remove();
    $('.video-container .aspect-ratio--object').remove();
  });

  // Newsletter popup

  var dbc_popup_expires = $(".popup-box").data("expires");
  var dbc_popup_delay = $(".popup-box").data("delay") * 1000;

  $('.popup_close-box').on('click', function(e){
      $.cookie('dbc_popup', 'closed', { expires: dbc_popup_expires, path: '/' });
      $('.popup-box,.popup-overlay').fadeOut(200);
      e.preventDefault();
  });

  if($.cookie('dbc_popup') != 'closed' ){
      setTimeout(dbc_en_nlpopup, dbc_popup_delay);
  }

  function dbc_en_nlpopup(){
      var topoffset = $(document).scrollTop(),
          viewportHeight = $(window).height(),
          $popup = $('.popup-box');
      var calculatedOffset = (topoffset + (Math.round(viewportHeight/2))) - (Math.round($popup.outerHeight()/2));

      if(calculatedOffset <= 40){
          calculatedOffset = 40;
      }

    //   $popup.css('top', calculatedOffset);
      $('.popup-box,.popup-overlay').fadeIn(500);
  }
});



/* jQuery Cookie Plugin v1.3.1 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a);}else{a(jQuery);}}(function(e){var a=/\+/g;function d(g){return g;}function b(g){return decodeURIComponent(g.replace(a," "));}function f(g){if(g.indexOf('"')===0){g=g.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\");}try{return c.json?JSON.parse(g):g;}catch(h){}}var c=e.cookie=function(p,o,u){if(o!==undefined){u=e.extend({},c.defaults,u);if(typeof u.expires==="number"){var q=u.expires,s=u.expires=new Date();s.setDate(s.getDate()+q);}o=c.json?JSON.stringify(o):String(o);return(document.cookie=[c.raw?p:encodeURIComponent(p),"=",c.raw?o:encodeURIComponent(o),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join(""));}var g=c.raw?d:b;var r=document.cookie.split("; ");var v=p?undefined:{};for(var n=0,k=r.length;n<k;n++){var m=r[n].split("=");var h=g(m.shift());var j=g(m.join("="));if(p&&p===h){v=f(j);break;}if(!p){v[h]=f(j);}}return v;};c.defaults={};e.removeCookie=function(h,g){if(e.cookie(h)!==undefined){e.cookie(h,"",e.extend(g,{expires:-1}));return true;}return false;};}));
