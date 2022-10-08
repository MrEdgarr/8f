// <div class="bg-like-right">
//                 <img src="assets/image/like-White.png" alt="">
//             </div>
//             <div class="bg-close-left">
//                 <img src="assets/image/btn-close-Dark.png" alt="">
//             </div>
const data = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Thiên Hương',
        age: 21,
        address: 'Hà Nội',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Thanh Hằng',
        age: 22,
        address: 'Hà Nam',
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Bảo Ngọc',
        age: 20,
        address: 'Hồ Chí Minh',
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Thiên Hương',
        age: 21,
        address: 'Hà Nội',
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Thanh Hằng',
        age: 22,
        address: 'Hà Nam',
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Bảo Ngọc',
        age: 20,
        address: 'Hồ Chí Minh',
    },
    {
        id: 7,
        img: 'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Thiên Hương',
        age: 21,
        address: 'Hà Nội',
    },
    {
        id: 8,
        img: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Thanh Hằng',
        age: 22,
        address: 'Hà Nam',
    },
    {
        id: 9,
        img: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Bảo Ngọc',
        age: 20,
        address: 'Hồ Chí Minh',
    },
    {
        id: 10,
        img: 'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Thiên Hương',
        age: 21,
        address: 'Hà Nội',
    },
    {
        id: 11,
        img: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Thanh Hằng',
        age: 22,
        address: 'Hà Nam',
    },
    {
        id: 12,
        img: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Bảo Ngọc',
        age: 20,
        address: 'Hồ Chí Minh',
    },
]

const showData = () => {
    const dt = document.querySelector(".show-data-item");
    const result = data.map(item => {

        const { id, img, name, age, address } = item;
        return `
        <div class="col position-absolute items-js" data-id=${id} style='height : 550px;'>
                        <div class="content-body__item content-img p-2 position-relative">
                        <a href='personalPage.html' class="position-relative" style='height : 450px;'>
                        <img src="${img}"
                            alt="">
                    </a>
                    <div class="content-img__desc">
                        <div class="content-img__name">
                            <p>${name}, <span>${age}</span></p>
                        </div>
                        <div class="content-img__address">
                            <img src="assets/image/home-content.png" alt="">
                            <span>${address}</span>
                        </div>
                    </div>
                        </div>
                        <div class="content-button" >
                    <button class="btn btn__close">
                    <img src="assets/image/btn-close-Dark.png" alt="" data-id=${id}>
                    </button>
                    <button class="btn btn__like">
                        <img src="assets/image/like-White.png" alt="" data-id=${id}>
                    </button>
                </div>
                    </div>
        `
    })
    dt.innerHTML = result.join('');
}
showData();
const items = Array.from(document.querySelectorAll('.items-js'))
const content_item = Array.from(document.querySelectorAll('.content-body__item'))

var xDown = null;
var yDown = null;
var resetSlide;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}
var paraRight, paraLeft;

const btnLike = Array.from(document.querySelectorAll('.content-button .btn__like'))
const btnClose = Array.from(document.querySelectorAll('.content-button .btn__close'))

var x = 0;

// Hàm OnClick 
const handleBtnClick = (para, items, classBtn, transformOrigin, transformrotateZ) => {
    // Add Class
    if (document.querySelector(`.${classBtn}`) === null) {
        para = document.createElement('div');
        para.innerHTML = '<img src="assets/image/like-White.png" alt="">';
        para.classList.add(`${classBtn}`)
        items.querySelector('.content-body__item').appendChild(para);
    }
    items.querySelector('.content-body__item').style.transformOrigin = `${transformOrigin}% 100%`;

    // Chuyen dong transform rotateZ
    let a = setInterval(() => {
        if (x > 35) {
            clearInterval(a)
            items.style.display = `none`;
            if (document.querySelector(`.${classBtn}`) !== null) {
                items.querySelector('.content-body__item').removeChild(document.querySelector(`.${classBtn}`))
            }
            x = 0;
        } else {
            x += 1;
            items.querySelector('.content-body__item').style.transform = `rotateZ(${transformrotateZ + x}deg) scale(1)`;
        }
    }, 5)
    para.style.transform = 'scale(1)';
}

items.forEach((item) => {
    // btn like right
    btnLike.forEach((btn) => {
        btn.onclick = (e) => {
            for (let i = 0; i < items.length; i++) {

                if (items[i].dataset.id === e.target.dataset.id) {
                    handleBtnClick(paraRight, items[i], 'bg-like-right', 80, '')
                    //     if (document.querySelector('.bg-like-right') === null) {
                    //         paraRight = document.createElement('div');
                    //         paraRight.innerHTML = '<img src="assets/image/like-White.png" alt="">';
                    //         paraRight.classList.add('bg-like-right')
                    //         items[i].querySelector('.content-body__item').appendChild(paraRight);
                    //     }

                    //     items[i].querySelector('.content-body__item').style.transformOrigin = `80% 100%`;
                    //     let a = setInterval(() => {
                    //         if (x > 35) {
                    //             clearInterval(a)
                    //             items[i].style.display = `none`;
                    //             if (document.querySelector('.bg-like-right') !== null) {
                    //                 items[i].querySelector('.content-body__item').removeChild(document.querySelector('.bg-like-right'))
                    //             }
                    //             x = 0;
                    //         } else {
                    //             x += 1;
                    //             items[i].querySelector('.content-body__item').style.transform = `rotateZ(${x}deg) scale(1)`;
                    //         }
                    //     }, 5)
                    //     paraRight.style.transform = 'scale(1)';
                }
            }
        }
    })
    // btn close left
    btnClose.forEach((btn) => {
        btn.onclick = (e) => {
            for (let i = 0; i < items.length; i++) {
                if (items[i].dataset.id === e.target.dataset.id) {
                    handleBtnClick(paraRight, items[i], 'bg-close-left', 20, '-')
                    // if (document.querySelector('.bg-close-left') === null) {
                    //     paraLeft = document.createElement('div');
                    //     paraLeft.innerHTML = '<img src="assets/image/btn-close-Dark.png" alt="">';
                    //     paraLeft.classList.add('bg-close-left')
                    //     items[i].querySelector('.content-body__item').appendChild(paraLeft);
                    // }

                    // items[i].querySelector('.content-body__item').style.transformOrigin = `20% 100%`;
                    // let a = setInterval(() => {
                    //     if (x > 35) {
                    //         clearInterval(a)
                    //         items[i].style.display = `none`;
                    //         if (document.querySelector('.bg-close-left') !== null) {
                    //             items[i].querySelector('.content-body__item').removeChild(document.querySelector('.bg-close-left'))
                    //         }
                    //         x = 0;
                    //     } else {
                    //         x += 1;
                    //         console.log(x);
                    //         items[i].querySelector('.content-body__item').style.transform = `rotateZ(${-x}deg) scale(1)`;
                    //     }
                    // }, 5)
                    // paraLeft.style.transform = 'scale(1)';
                }
            }
        }
    })
    item.addEventListener('touchstart', e => {
        const firstTouch = getTouches(e)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    })
    item.addEventListener('touchmove', e => {
        if (!xDown || !yDown) {
            return;
        }
        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;
        resetSlide = xUp / 20;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;



        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                if (document.querySelector('.bg-close-left') === null) {
                    paraLeft = document.createElement('div');
                    paraLeft.innerHTML = '<img src="assets/image/btn-close-Dark.png" alt="">';
                    paraLeft.classList.add('bg-close-left')
                    item.querySelector('.content-body__item').appendChild(paraLeft);
                }
                if (document.querySelector('.bg-like-right') !== null) {
                    item.querySelector('.content-body__item').removeChild(document.querySelector('.bg-like-right'))
                }
                //left
                item.querySelector('.content-body__item').style.transformOrigin = `20% 100%`;
                item.querySelector('.content-body__item').style.transform = `rotateZ(${xUp / 20 - 15}deg) scale(1)`
                paraLeft.style.transform = 'scale(1)';
            } else {
                if (document.querySelector('.bg-like-right') === null) {
                    paraRight = document.createElement('div');
                    paraRight.innerHTML = '<img src="assets/image/like-White.png" alt="">';
                    paraRight.classList.add('bg-like-right')
                    item.querySelector('.content-body__item').appendChild(paraRight);
                }
                if (document.querySelector('.bg-close-left') !== null) {
                    item.querySelector('.content-body__item').removeChild(document.querySelector('.bg-close-left'))
                }
                //right
                item.querySelector('.content-body__item').style.transformOrigin = `80% 100%`;
                item.querySelector('.content-body__item').style.transform = `rotateZ(${xUp / 20}deg) scale(1)`
                paraRight.style.transform = 'scale(1)';
            }
        }
    })


    item.addEventListener('touchend', e => {
        if (resetSlide > 15 || resetSlide < -10) {
            item.style.display = 'none';
            data.pop();
            if (document.querySelector('.bg-close-left') !== null) {
                item.querySelector('.content-body__item').removeChild(document.querySelector('.bg-close-left'));
                paraLeft.style.transform = 'scale(0)';
            } else {
                item.querySelector('.content-body__item').removeChild(document.querySelector('.bg-like-right'));
                paraRight.style.transform = 'scale(0)';
            }
        } else {
            item.querySelector('.content-body__item').style.transform = `rotateZ(0deg) scale(1)`;
            if (document.querySelector('.bg-close-left') !== null) {
                item.querySelector('.content-body__item').removeChild(document.querySelector('.bg-close-left'));
            }
            if (document.querySelector('.bg-like-right') !== null) {
                item.querySelector('.content-body__item').removeChild(document.querySelector('.bg-like-right'));
            }
        }
        resetSlide = 0;
    })
})