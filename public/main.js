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
        $('#buyBtn').css('background-color', '#fff')
        $('#buyBtn').css('border', '1px #081323 solid')
        $('#buyBtn').css('color', '#081323')
        $('#buyBtn').hover(
            () => {
                $('#buyBtn').css({
                    'background-color': '#081323',
                    'color': '#fff',
                });
            },
            () => {
                $('#buyBtn').css({
                    'background-color': '#fff',
                    'color': '#081323',
                });
            }
        );   
    }else{
        $('.themeChanger').css('justify-content', 'flex-end')
        $('.themeChanger').css('background-color', '#fff')
        $('.themeChanger_circle').css('background-color', '#068FFF')
        $('.themeChanger_circle').css('border', '2px #fff solid')
        $('.wrap').css('background-color', '#332C39')
        $('#buyBtn').css('background-color', '#fff')
        $('#buyBtn').css('border', '1px #081323 solid')
        $('#buyBtn').css('color', '#081323')
        $('#buyBtn').hover(
            () => {
                $('#buyBtn').css({
                    'background-color': '#081323',
                    'color': '#fff',
                });
            },
            () => {
                $('#buyBtn').css({
                    'background-color': '#fff',
                    'color': '#081323',
                });
            }
        );   
    }
}
changeTheme(theme);