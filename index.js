$(function(){
    let ww=$(window).width();
        
        function fnSlider(item){
            var swiper = new Swiper('.swiper',{                                   
                effect:item,
                loop:true,            
                autoplay:{
                    delay:3000,
                },
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true,
                }, 
            });
        }
        

        if(ww>=768){
            fnSlider('fade');
        }else{
            fnSlider('slide');
        }
        
        function fnPopOpen(item){
            $('.popup').eq(item).show();
        }

        $('.top03 .item').click(function(){
            fnPopOpen($(this).index()-1);
        })
        $('.btn-close').click(function(){
            $('.popup').hide();
        })

        $(window).scroll(function(){
            let wScrTop = $(this).scrollTop();
            if(wScrTop>0){
                $('#btn-top').css({
                    display:'grid',
                })
            }else{
                $('#btn-top').css({
                    display:'none',
                })
            }
        })

        let noticeList = $('.notice a');
        $.ajax({
            type:'GET',
            url:`./json/notice-list.json`,
            dataType:'json',

            // 성공
            success:function(data){
                for(let idx=0;idx<=4;idx++){
                    noticeList.eq(idx).html(data[idx].noticeTitle);
                }
            },

            // 실패
            error:function(){
                alert('실패....');
            },
        })

        noticeList.click(function(e){
            let listNum = noticeList.index(this);
            location.href = `./notice-view.html#${listNum}`;
            e.preventDefault();
        })
})