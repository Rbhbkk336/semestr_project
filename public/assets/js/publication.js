window.addEventListener('DOMContentLoaded',()=>{
    const titleInput = document.getElementById('title');
    const imageInput = document.getElementById('image');


    const previewTitle = document.querySelector('.preview__title');
    const previewBlock = document.querySelector('.preview__block');


    titleInput.addEventListener('input', () => {
        previewTitle.innerText = titleInput.value || 'Заголовок поста';
    });

    //  предварительного просмотра при выборе изображения
    imageInput.addEventListener('change', () => {
        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewBlock.style.cssText = `background-image:url(${e.target.result})`;
                previewBlock.style.height = 300 + 'px';
                previewTitle.style.color = 'white';
            };
            reader.readAsDataURL(file);
        } else {
            previewBlock.style.cssText = 'background-image:url("")';
            previewBlock.style.height = 0 + 'px';
            previewTitle.style.color = 'black';
        }
    });

    document.getElementById('postForm').addEventListener('submit', function (event) {
        event.preventDefault(); 

     
        const formData = new FormData();
        const title = titleInput.value;
        const imageFile = imageInput.files[0];

        formData.append('title', title);
        formData.append('image', imageFile);


  /*       for (let [key, value] of formData.entries()) {
            console.log(key, value);
        } */


        fetch('url', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message || 'Пост успешно опубликован!');
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке данных.');
        });
    });
})
