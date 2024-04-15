$(function(){
    $('button').click(function(){
        let thisText = $(this).text();
        let thisString = $(this).prev().children();
        if(thisText=='더보기'){
            $(this).text('접기');
            $(thisString).show();
        }else{
            $(this).text('더보기');
            $(thisString).hide();
        }
    })
    $(window).resize(function(){
        let ww = $(window).width();
        let thisText = $('button').text();
        let thisString = $('button').prev().children();
        if(ww<768){
            $(thisString).show();
            $(thisText).text('더보기');
        }else{
            $(thisString).hide();
        }
    })
}) 