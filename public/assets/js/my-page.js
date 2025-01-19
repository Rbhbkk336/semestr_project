window.addEventListener('DOMContentLoaded',()=>{
    const generalBlock = document.querySelector('.general__block'),
          generalCount = document.querySelector('.general__count span');

    async function fetchPublications() {
        try {
            const response = await fetch('url'); 
            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных');
            }

            const data = await response.json();

            if (data.length === 0) {
                return;
            }
            
            generalCount.textContent = data.length;

            // Перебираем данные и добавляем их в DOM.ожидаю jSON внтури которого 
            // обьекты с ключами title и imageUrl
            data.forEach((publication) => {

                //создаем блок с картинкой
                const generalPublicationBlock = document.createElement('div');
                generalPublicationBlock.classList.add('general__publications-block');
                generalPublicationBlock.style.backgroundImage = `url('${publication.imageUrl}')`;

                // создаеем заголовок и помещаем в блок с картинкой
                const generalPublicationTitle = document.createElement('h2');
                generalPublicationTitle.classList.add('general__publications-title')
                generalPublicationTitle.textContent = publication.title;
                generalPublicationBlock.appendChild(generalPublicationTitle);
               

                // Добавляем блок в общий блок
                generalBlock.appendChild(generalPublicationBlock);
            });
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    generalCount.textContent = 0;
    fetchPublications();
})