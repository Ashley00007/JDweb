function JD_effect(){
}

JD_effect.prototype = {
    // 头部背景颜色模块
    headerbgColor: function () {
        var header = document.getElementById('header');
        var slide = document.getElementById('slide');
        var opacity = document.documentElement.scrollTop / slide.offsetHeight;
        opacity = opacity < 1 ? opacity : 1;
        header.style.backgroundColor = "rgba(222, 24, 27," + opacity + ")"
    },

    // 滚动头部渐变模块
    headerScroll: function () {
        window.addEventListener('scroll', jd_effect.headerbgColor);
    },

    // 倒计时模块
    timeDown: function () {
        // getTime获取距离1970年的毫秒数
        var futureTime = new Date(2018, 8, 22, 18).getTime() / 1000;
        var currentTime = new Date() / 1000;
        var time = futureTime - currentTime;
        time = time <= 0 ? 0 : time;
        var spanList = document.querySelectorAll('#seckill .down-time span');
        renderTime();
        if (time > 0) {
            setInterval(function () {
                time--;
                renderTime()
            }, 1000)
        }

        function renderTime() {
            var hour = Math.floor(time / 3600)
            var sec = Math.floor(time % 3600 / 60);
            var min = Math.floor(time % 60);
            spanList[0].innerText = Math.floor(hour / 10);
            spanList[1].innerText = hour % 10;
            spanList[3].innerText = Math.floor(sec / 10);
            spanList[4].innerText = sec % 10;
            spanList[6].innerText = Math.floor(min / 10);
            spanList[7].innerText = min % 10;
        };
    },

    // 轮播图模块
    slide: function () {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 水平切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // },

            // 如果需要滚动条
            // scrollbar: {
            //   el: '.swiper-scrollbar',
            // },

            // 自动轮播 
            autoplay: {
                delay: 1500,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            }
        })

    }

}

var jd_effect=new JD_effect();

window.addEventListener('load', function () {
    jd_effect.headerbgColor();
    jd_effect.headerScroll();
    jd_effect.timeDown();
    jd_effect.slide();
})