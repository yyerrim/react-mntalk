const Title = () => {
    return (
        <div class="title">
            <table>
                <th>제목 영역</th>
                <th></th>
                <th></th>
                <th></th>
                <tbody>
                    <td>작성자: 팅팅이</td>
                    <td>작성일: 2019/12/03</td>
                    <td>조회수: 1975</td>
                    <td>추천: 11</td>
                </tbody>
            </table>
            <div class="postArea cf">
                <div class="postMain">
                    글 들어오는 공간
                </div>
                <div class="postBottom">
                    <p>추천수: <span>11</span></p>
                    <p><a href="#">추천하기</a></p>
                    <p><a href="#">공유하기</a></p>
                </div>
            </div>
        </div>
    );
};

export default Title;