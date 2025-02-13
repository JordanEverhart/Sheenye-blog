// 平滑滚动功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏激活状态切换
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelector('.active')?.classList.remove('active');
            section.classList.add('active');
        }
    });
});

// 微信二维码显示功能
document.querySelector('.wechat-card').addEventListener('click', function() {
    document.querySelector('.qrcode-modal').classList.add('show-modal');
    document.querySelector('.modal-overlay').classList.add('show-modal');
});

// 关闭模态框
document.querySelectorAll('.close-modal, .modal-overlay').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.show-modal').forEach(el => {
            el.classList.remove('show-modal');
        });
    });
}); 