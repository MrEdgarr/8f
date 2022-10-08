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
]

const showData = () => {
    const dt = document.querySelector(".show-data-item");
    const result = data.map(item => {

        const { id, img, name, age, address } = item;
        return `
        <div class="col position-absolute items-js">
                        <div class="content-body__item content-img p-2 position-relative">
                        <a href='#' class="position-relative">
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
                    </div>
        `
    })
    dt.innerHTML = result.join('');
}
// showData();
