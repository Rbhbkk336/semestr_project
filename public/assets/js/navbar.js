document.addEventListener('DOMContentLoaded', function() {
    const navbarElements = document.querySelectorAll('.navbar__el');

    navbarElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'lightgray';
            }
        });

        element.addEventListener('mouseout', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = '';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Получаем текущий URL
    const currentPath = window.location.pathname;

    // Определяем активный элемент на основе текущего URL
    let activeElementId;
    if (currentPath.includes('/home')) {
        activeElementId = 'home';
    } else if (currentPath.includes('/search')) {
        activeElementId = 'search';
    } else if (currentPath.includes('/notifications')) {
        activeElementId = 'notifications';
    } else if (currentPath.includes('/settings')) {
        activeElementId = 'settings';
    }

    // Устанавливаем активный класс для соответствующего элемента
    if (activeElementId) {
        const activeElement = document.getElementById(activeElementId);
        if (activeElement) {
            activeElement.classList.add('active');
        }
    }

    // Добавляем обработчики событий для каждого элемента навигации
    const navbarElements = document.querySelectorAll('.navbar__el');
    navbarElements.forEach(element => {
        element.addEventListener('click', function() {
            const targetId = this.id;
            let targetUrl;

            switch (targetId) {
                case 'home':
                    targetUrl = '/home';
                    break;
                case 'search':
                    targetUrl = '/search';
                    break;
                case 'notifications':
                    targetUrl = '/notifications';
                    break;
                case 'settings':
                    targetUrl = '/settings';
                    break;
                default:
                    return;
            }

            // Переходим на соответствующую страницу
            window.location.href = targetUrl;
        });
    });
});