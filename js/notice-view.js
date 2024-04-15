$(function(){
    console.log(location.href);
        let loHref = location.href;

        let startIdx = loHref.indexOf('#') + 1;
        // console.log(`시작인덱스 = ${startIdx}`);
        let endIdx = loHref.length;
        // console.log(`끝인덱스 = ${endIdx}`);
        let listNum = loHref.substring(startIdx,endIdx)
        // substring은 endIdx가 아니라 그 바로 앞번호까지 가져오는 것, 그래서 endIdx에 -1이 필요하지 않다.
        // console.log(`리스트번호 = ${listNum}`);

        $.ajax({
                    type:'GET',
                    url:`./json/notice-list.json`,
                    dataType:'json',

                    // 성공
                    success:function(data){
                        let noticeView = data[listNum];
                        $('#notice-tit').html(noticeView.noticeTitle);
                        $('#notice-date').html(`작성일 : ${noticeView.noticeDate}`);
                        $('#notice-hit').html(`조회수 : ${noticeView.noticeHit}`);
                        $('#notice-txt').html(noticeView.noticeTxt);
                    },

                    // 실패
                    error:function(){
                        alert('실패....');
                    },
                })

        $('#btn-list').click(function(){
            history.back();
        })
})