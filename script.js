    //swiperjs
    $(function(){
        
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            loop: true,
            slidesPerView: 1.23,
            spaceBetween: 20,
            breakpoints:{
                668:{
                    slidesPerView: 2.75,
                    spaceBetween: 25,
                }
            },
  
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
    });
$(function(){
    jQuery('.qa__wrap dl dt').on('click',function(){
        jQuery(this).next().slideToggle();
        jQuery(this).toggleClass('is-active');
        return false;
       });
});
//totop
$(function(){
  var pagetop=$('#pagetop');
  pagetop.hide();
  $(window).scroll(function(){
      if($(this).scrollTop()>80){ //トップから80pxスクロールしたら/*
          pagetop.fadeIn(300);//300ms(0.3秒)かけて/*
      }else{
          pagetop.fadeOut(300);
      }
  });
  pagetop.click(function(){
      $('body,html').animate({scrollTop:0},500);//ボタンを押したら500ms(0.5秒)かけてトップに戻る//
      return false;
  });
});

//drawerjs
$(document).ready(function() {
    $('.drawer').drawer();
  });
//グーグルフォーム
$(document).ready(function(){
let $form = $( '#js-form' )
$form.submit(function(event) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp()
        $( '#js-success' ).slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $form.slideUp()
        $( '#js-error' ).slideDown()
      }
    } 
  });
  event.preventDefault(); 
});
});

$(document).ready(function(){
    let $submit = $( '#js-submit' )
      $( '#js-form input, #js-form textarea' ).on('change',function(){
        if(
          $( '#js-form input[type="text"]' ).val() !== "" &&
          $( '#js-form input[type="email"]' ).val() !== "" &&
          $( '#js-form input[name="entry.724614126"]' ).prop('checked') === true
        ){
          //全て入力された時
          $submit.prop('disabled',false)
          $submit.removeClass( '-disabled' )
        } else {
          //入力されていない時
          $submit.prop('disabled',true)
          $submit.addClass( '-disabled' )
        }
      })
});
