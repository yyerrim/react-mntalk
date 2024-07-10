const Pager = () => {
    return (
        <div class="pager">
            <ul>
                <li><a href="#" class="prev">&lt;</a></li>
                <li class="on"><a href="#">1</a><span> / </span></li>
                <li><a href="#">2</a><span> / </span></li>
                <li><a href="#">3</a><span> / </span></li>
                <li><a href="#">4</a><span> / </span></li>
                <li><a href="#">5</a></li>
                <li><a href="#" class="next">&gt;</a></li>
            </ul>
        </div>
    );
};

export default Pager;