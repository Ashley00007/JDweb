var JD_Category = function(){

}

JD_Category.prototype = {
    // 初始化内容滑动
    initeSlide:function(){
        var swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            mousewheel: true,
        }); 
    },
    // 左侧导航吸顶效果
    leftCeiling:function(){
        var leftUl = document.querySelector('.left ul');
        var liList = leftUl.children;
        // 获取父盒子容器
        var container = leftUl.parentNode.parentNode;
        leftUl.onclick = function (e) { 
            for (var i =0;i<liList.length;i++){
                liList[i].index=i;
                liList[i].classList.remove('active');
            }
            var li = e.target.parentNode;
            li.classList.add('active');
            var distance = li.offsetHeight*-li.index;
            // 允许移动的最大距离为 父盒子容器的高度-内容的高度(为负数)
            maxDistance = container.offsetHeight- leftUl.offsetHeight;
            // 判断移动距离是否大于允许移动的最大距离,大于则为距离,小于则为最大距离
            // -600px>-700px
            distance = distance> maxDistance?distance:maxDistance;
            container.style.transform="translate3d(0px,"+distance+"px,0px)" ;
            container.style.transitionDuration="300ms";
         }
    }
}

jdCategory = new JD_Category();

window.addEventListener('load',function(){
    jdCategory.initeSlide();
    jdCategory.leftCeiling();
   
})