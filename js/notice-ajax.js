$(function(){
    let listNum = $('.list-num');
        let listTit = $('.list-tit a');
        let listHit = $('.list-hit');
        let listDate = $('.list-date span:last-child');

    $.ajax({
        type:'GET',
        url:`./json/notice-list.json`,
        dataType:'json',

        // 성공
        success:function(data){
            for(let idx=0;idx<=data.length-1;idx++){
                listNum.eq(idx).text(data[idx].noticeNum)
                listTit.eq(idx).text(data[idx].noticeTitle)
                listHit.eq(idx).text(data[idx].noticeHit)
                listDate.eq(idx).text(data[idx].noticeDate)
            }
        },

        // 실패
        error:function(){
            alert('실패딩딩....');
        },
    })
    
    $('.list-tit').click(function(e){
        let idxNum = $('.list-tit').index(this);
        location.href=`notice-view.html#${idxNum}`;
        e.preventDefault();
    })
})