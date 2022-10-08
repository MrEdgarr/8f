const data = [
    {
        images: 'https://images.unsplash.com/photo-1664415371283-4a1a478c8649?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name1: 'Không Sao mà, Em Đây Rồi',
        name2: 'Thùy Chi',
    },
    {
        images: 'https://images.unsplash.com/photo-1664415341973-f50512e068ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name1: 'Lời Đường Mật',
        name2: 'LYLY x HIEUTHUHAI',
    },
    {
        images: 'https://images.unsplash.com/photo-1662581872342-3f8e0145668f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name1: 'Mười Năm',
        name2: 'Đen x Ngọc Linh',
    },
    {
        images: 'https://images.unsplash.com/photo-1664386047639-9144c4f37b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name1: 'Đau Để Trưởng Thành',
        name2: 'Only C',
    },
    {
        images: 'https://images.unsplash.com/photo-1664415371283-4a1a478c8649?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name1: 'Không Sao mà, Em Đây Rồi',
        name2: 'Thùy Chi',
    },
    {
        images: 'https://images.unsplash.com/photo-1664415341973-f50512e068ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name1: 'Lời Đường Mật',
        name2: 'LYLY x HIEUTHUHAI',
    },
    {
        images: 'https://images.unsplash.com/photo-1662581872342-3f8e0145668f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name1: 'Mười Năm',
        name2: 'Đen x Ngọc Linh',
    },
    {
        images: 'https://images.unsplash.com/photo-1664386047639-9144c4f37b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name1: 'Đau Để Trưởng Thành',
        name2: 'Only C',
    },
    {
        images: 'https://images.unsplash.com/photo-1664415371283-4a1a478c8649?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name1: 'Không Sao mà, Em Đây Rồi',
        name2: 'Thùy Chi',
    },
    {
        images: 'https://images.unsplash.com/photo-1664415341973-f50512e068ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name1: 'Lời Đường Mật',
        name2: 'LYLY x HIEUTHUHAI',
    },
    {
        images: 'https://images.unsplash.com/photo-1662581872342-3f8e0145668f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name1: 'Mười Năm',
        name2: 'Đen x Ngọc Linh',
    },
    {
        images: 'https://images.unsplash.com/photo-1664386047639-9144c4f37b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name1: 'Đau Để Trưởng Thành',
        name2: 'Only C',
    },

]
const video = document.querySelector('.video-js')
video.innerHTML = data.map(items => {
    const { images, name1, name2 } = items;
    return `
    <div class="content-item" style="height: 150px;" data-aos="fade-up">
                    <a href="singleVideo.html">
                        <div class="content-item__img" style="height: 90px;">
                            <img src="${images}"
                                alt="" class="rounded-0 h-100">
                        </div>
                        <div class="content-item__name mt-2" style="color: #2a2a2a;">
                            <p class="m-0" style="font-weight: 600;">${name1}</p>
                            <span style="color: #696F8C;">${name2}</span>
                        </div>
                    </a>
                </div>
    `
}).join('');