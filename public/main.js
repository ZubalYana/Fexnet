

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    axios.post('/api/upload', formData)
        .then(res => {
            console.log(res);
        })
});

document.getElementById('downloadForm').addEventListener('codeInput', async (e) => {
    e.preventDefault();
    const code = document.getElementById('fileInput');
    const res = await fetch(`/api/download/${code}`);
    if(res.ok){
        const blob = await res.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none';
        a.href = url;
        a.download = '';
        a.click();
        window.URL.revokeObjectURL(url)
    }else{
        alert('Error')
    }
})