//file sending from the input
document.querySelector('#fileInput').addEventListener('change', function() {
    const fileNameSpan = document.querySelector('#fileName');
    if (this.files && this.files.length > 0) {
        fileNameSpan.textContent = this.files[0].name;
    } else {
        fileNameSpan.textContent = 'No file chosen';
    }
});

//file uploading
document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const res = await axios.post('/api/upload', formData);
        console.log(res);
        const message = res.data.message;
        document.getElementById('UploadMessage').innerText = message;
    } catch (error) {
        console.error('Error uploading file', error);
        document.getElementById('UploadMessage').innerText = 'Error uploading file';
    }
});

//file downloading
document.getElementById('downloadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const code = document.getElementById('codeInput').value;
    
    try {
        const res = await fetch(`/api/download/${code}`);
        if (res.ok) {
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = '';
            a.click();
            window.URL.revokeObjectURL(url);
            document.getElementById('message').innerText = 'File downloaded successfully';
        } else {
            throw new Error('Download failed');
        }
    } catch (error) {
        console.error('Error downloading file', error);
        document.getElementById('message').innerText = 'Error downloading file';
}})

//theme changing
let theme = localStorage.getItem('theme') || 'light';
$('.themeChanger').click(function(){
    if(theme == 'light'){
        theme = 'dark';
        localStorage.setItem('theme', theme);
        changeTheme(theme);

    }else{
        theme = 'light';
        localStorage.setItem('theme', theme);
        changeTheme(theme);
    }
})
function changeTheme(theme){
    if(theme == 'light'){
        $('.themeChanger').css('justify-content', 'flex-start')
        $('.themeChanger').css('background-color', '#332C39')
        $('.themeChanger_circle').css('background-color', '#068FFF')
        $('.themeChanger_circle').css('border', '2px #332C39 solid')
        $('.wrap').css('background-color', '#fff')
        $('select').css('background-color', '#fff')
        $('select').css('color', '#332C39')
        $('.logo').css('color', '#332C39')
        $('.title').css('color', '#332C39')
        $('.subtitle').css('color', '#332C39')
        $('.underline').css('background-color', '#4E4FEB')
        $('form').css('border', '1px #332C39 solid')
        $('p').css('color', '#332C39')
        $('.uploadForm_keyWords').css('color', '#4E4FEB')
        $('h3').css('color', '#332C39')
        $('#fileName').css('color', '#332C39')

        $('.custom-file-label').css('border', '2px solid #4E4FEB')
        $('.custom-file-label').css('background-color', '#fff')
        $('.plus').css('color', '#4E4FEB')
        $('.custom-file-label').hover(
            () => {
                $('.custom-file-label').css({
                    'background-color': '#4E4FEB',
                });
                $('.plus').css({
                    'color': '#fff',
                });
            },
            () => {
                $('.custom-file-label').css({
                    'background-color': '#fff',
                    'color': '#4E4FEB',
                });
                $('.plus').css({
                    'color': '#4E4FEB',
                });
            }
        ); 
        $('.downloadForm_icon').css('border', '2px solid #068FFF')
        $('.downloadForm_icon').css('background-color', '#fff')
        $('.cloud').css('color', '#068FFF')
        $('.downloadForm_icon').hover(
            () => {
                $('.downloadForm_icon').css({
                    'background-color': '#068FFF',
                });
                $('.cloud').css({
                    'color': '#fff',
                });
            },
            () => {
                $('.downloadForm_icon').css({
                    'background-color': '#fff',
                    'color': '#068FFF',
                });
                $('.cloud').css({
                    'color': '#068FFF',
                });
            }
        );   
        $('.uploadFile').css('border', '1px #332C39 solid')
        $('.uploadFile').css('background-color', '#fff')
        $('.uploadFile').css('color', '#332C39')
        $('.uploadFile').hover(
            () => {
                $('.uploadFile').css({
                    'background-color': '#332C39',
                    'color': '#fff',
                });
            },
            () => {
                $('.uploadFile').css({
                    'background-color': '#fff',
                    'color': '#332C39',
                });
            }
        );

        $('.saveFile').css('border', '1px #332C39 solid')
        $('.saveFile').css('background-color', '#fff')
        $('.saveFile').css('color', '#332C39')
        $('.saveFile').hover(
            () => {
                $('.saveFile').css({
                    'background-color': '#332C39',
                    'color': '#fff',
                });
            },
            () => {
                $('.saveFile').css({
                    'background-color': '#fff',
                    'color': '#332C39',
                });
            }
        );

        $('#codeInput').css('background-color', '#fff')
        $('#codeInput').css('border', '1px #332C39 solid')


    }else{
        $('.themeChanger').css('justify-content', 'flex-end')
        $('.themeChanger').css('background-color', '#fff')
        $('.themeChanger_circle').css('background-color', '#068FFF')
        $('.themeChanger_circle').css('border', '2px #fff solid')
        $('.wrap').css('background-color', '#332C39')
        $('select').css('background-color', '#332C39')
        $('select').css('color', '#fff')
        $('.logo').css('color', '#fff')
        $('.title').css('color', '#fff')
        $('.subtitle').css('color', '#fff')
        $('.underline').css('background-color', '#8283FA')
        $('form').css('border', '1px #fff solid')
        $('p').css('color', '#fff')
        $('.uploadForm_keyWords').css('color', '#8283FA')
        $('h3').css('color', '#fff')
        $('#fileName').css('color', '#fff')

        $('.custom-file-label').css('border', '2px solid #8283FA')
        $('.custom-file-label').css('background-color', '#332C39')
        $('.plus').css('color', '#8283FA')
        $('.custom-file-label').hover(
            () => {
                $('.custom-file-label').css({
                    'background-color': '#8283FA',
                });
                $('.plus').css({
                    'color': '#332C39',
                });
            },
            () => {
                $('.custom-file-label').css({
                    'background-color': '#332C39',
                    'color': '#8283FA',
                });
                $('.plus').css({
                    'color': '#8283FA',
                });
            }
        );   

        $('.downloadForm_icon').css('border', '2px solid #34A4FF')
        $('.downloadForm_icon').css('background-color', '#332C39')
        $('.cloud').css('color', '#34A4FF')
        $('.downloadForm_icon').hover(
            () => {
                $('.downloadForm_icon').css({
                    'background-color': '#34A4FF',
                });
                $('.cloud').css({
                    'color': '#332C39',
                });
            },
            () => {
                $('.downloadForm_icon').css({
                    'background-color': '#332C39',
                    'color': '#34A4FF',
                });
                $('.cloud').css({
                    'color': '#34A4FF',
                });
            }
        );  

        $('.uploadFile').css('border', '1px #fff solid')
        $('.uploadFile').css('background-color', '#332C39')
        $('.uploadFile').css('color', '#fff')
        $('.uploadFile').hover(
            () => {
                $('.uploadFile').css({
                    'background-color': '#fff',
                    'color': '#332C39',
                });
            },
            () => {
                $('.uploadFile').css({
                    'background-color': '#332C39',
                    'color': '#fff',
                });
            }
        );

        $('.saveFile').css('border', '1px #fff solid')
        $('.saveFile').css('background-color', '#332C39')
        $('.saveFile').css('color', '#fff')
        $('.saveFile').hover(
            () => {
                $('.saveFile').css({
                    'background-color': '#fff',
                    'color': '#332C39',
                });
            },
            () => {
                $('.saveFile').css({
                    'background-color': '#332C39',
                    'color': '#fff',
                });
            }
        );

        $('#codeInput').css('background-color', '#332C39')
        $('#codeInput').css('border', '1px #fff solid')

    }
}
changeTheme(theme);

//language changing
let semanticCore = {
    subtitle: {
        "en": "Forget about all the file sharing services you’ve used before! Quick, high quality, clean, suitable and understandable  solution is just ahead of you!",
        "ukraine": "Забудьте про всі служби обміну файлами, якими ви користувалися раніше! Швидке, якісне, чисте, прийнятне та зрозуміле рішення тільки попереду!",
        "poland": "",
        "japan": "",
        "france": "",
    },
    
};
let allLang = ['en', 'ukraine', 'poland', 'japan', 'france'];
let lang = localStorage.getItem('lang') || 'en';
function updateLanguage() {
    for (let key in semanticCore) {
        document.querySelector('.language-' + key).innerText = semanticCore[key][lang];
    }
}
function changeLanguage() {
    let hash = (window.location.hash).substring(1);

    if (!allLang.includes(hash)) {
        hash = 'en';
        location.href = window.location.pathname + '#en';
    }

    lang = hash;
    localStorage.setItem('lang', lang); 

    updateLanguage();
    $('#languageChanger').val(lang);

}
$('#languageChanger').change(function() {
    let selectedValue = $(this).val();
    $('#languageChanger').val(lang);
    switch (selectedValue) {
        case 'en':
            lang = 'en';
            break;
        case 'ukraine':
            lang = 'ukraine';
            break;
        case 'japan':
            lang = 'japan';
            break;
        case 'france':
            lang = 'france';
            break;
        case 'poland':
            lang = 'poland';
            break;
        default:
            lang = 'en'; 
    }

    localStorage.setItem('lang', lang);
    updateLanguage(); 

    location.href = window.location.pathname + '#' + lang;
});
changeLanguage();
window.onhashchange = changeLanguage;