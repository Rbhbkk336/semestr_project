document.addEventListener('DOMContentLoaded', function () {
    const settingsList = document.querySelectorAll('.settings__list__el');
    const settingsContent = document.querySelectorAll('.settings__content-block');

    function hideAllContent() {
        settingsContent.forEach(content => {
            content.style.display = 'none';
        });
    }

    function removeActiveClass() {
        settingsList.forEach(item => {
            item.classList.remove('active');
        });
    }

    settingsList.forEach(item => {
        item.addEventListener('click', function () {
            hideAllContent();
            removeActiveClass();
            this.classList.add('active');
            const targetId = this.id;
            const targetContent = document.querySelector(`.settings__${targetId}`);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });

    if (settingsList.length > 0) {
        settingsList[0].click();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const profilePhotoInput = document.getElementById('profilePhotoInput');
    const profilePhotoPreview = document.getElementById('profilePhotoPreview');

    if (profilePhotoInput) {
        profilePhotoInput.addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    profilePhotoPreview.innerHTML = `<img src="${e.target.result}" alt="Profile Photo" style="max-width: 100%; border-radius: 50%;">`;
                };

                reader.readAsDataURL(file);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const socialBtn = document.getElementById('social-btn')

})