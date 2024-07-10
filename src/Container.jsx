import MainTop from './MainTop';
import Title from './Title';
import Comment from './Comment';
import Table from './Table';
import Pager from './Pager';
import BottomLeft from './BottomLeft';
import BottomRight from './BottomRight';

const Container = () => {
    return (
        <div id="container">
            <MainTop />
            <Title />
            <Comment />
            <Table />
            <Pager />
            <BottomLeft />
            <BottomRight />
        </div>
    );
};

const AdsContainer = () => {
    return (
        <div id="container">
            <h2>CONTACT US</h2>
            <div class="guide">
                <p>광고 집행과 관련한 문의사항을 양식에 맞게 작성해주세요.</p>
                <p>신속하게 답변드리겠습니다.</p>
            </div>
            <form method="post" action="">
                <div class="fwrite">
                    <input type="text" name="name" placeholder="이름(*필수)" />
                    <input type="text" name="tell" placeholder="연락처(*필수)" />
                    <input type="text" name="email" placeholder="이메일(*필수)" />
                    <textarea placeholder="* 내용을 입력해주세요"></textarea>
                    <p>*연락처는 문의내용 이외에 어떠한 다른 목적으로도 사용되지 않습니다.</p>
                </div>
                <input type="submit" value="보내기" class="submit" />
            </form>
        </div>
    );
};

export { Container, AdsContainer };