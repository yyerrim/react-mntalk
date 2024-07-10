const Comment = () => {
    return (
        <div class="comment">
            <div class="showCmt"><span>6</span>개의 댓글이 있습니다.</div>
            <div class="cmtList">
                <ul>
                    <li>
                        <div class="cuser">
                            <span class="cname"> 츄레이서 </span>
                            <span class="ctime">2019-12-03 15:39:23</span>
                        </div>
                        <div class="ctext">왜 저렇게 호달달달 떨어요ㅋㅋㅋㅋㅋㅋ 귀엽</div>
                    </li>
                    <li>
                        <div class="cuser">
                            <span class="cname"> 츄레이서 </span>
                            <span class="ctime">2019-12-03 15:39:23</span>
                        </div>
                        <div class="ctext">왜 저렇게 호달달달 떨어요ㅋㅋㅋㅋㅋㅋ 귀엽</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Comment;