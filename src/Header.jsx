const Header = () => {
    return (
        <header id="header">
            <div id="headerIn">
                <h1 class="logo"><a href="#"><img src="img/logo.jpg" alt="멍냥토크" /></a></h1>
                <div class="search">
                    <input type="text" class="src" /><label>검색하기</label>
                    <select class="h_category">
                        <option>전체</option>
                        <option>멍톡</option>
                        <option>냥톡</option>
                        <option>잡담</option>
                        <option>헬프</option>
                    </select>
                    <a href="#" class="srcimg"><img src="img/srcimg.jpg" alt="검색" /></a>
                </div>
            </div>
        </header>
    );
};

const AdsHeader = () => {
    return (
        <header id="header">
            <div id="headerIn">
                <h1 class="logo"><a href="index.html"><img src="img/logo.jpg" alt="멍냥토크" /></a></h1>
                <div class="search">
                    <input type="search" class="src" /><label>검색하기</label>
                    <select class="h_category">
                        <option>전체</option>
                        <option>멍톡</option>
                        <option>냥톡</option>
                        <option>잡담</option>
                        <option>헬프</option>
                    </select>
                    <a href="#" class="srcimg"><img src="img/srcimg.jpg" alt="검색" /></a>
                </div>
                <div class="login ut">
                    <a href="mypage.html">
                        <img src="img/user.svg" class="profileimg" />
                        <span class="username"><strong>이름</strong></span></a>
                    <span class="user2"> 님, 환영합니다.</span>
                </div>
                <a href="#" class="logout">로그아웃</a>
            </div>
        </header>
    );
};

export { Header, AdsHeader };