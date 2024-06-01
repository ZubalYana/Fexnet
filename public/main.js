document.querySelector('#fileInput').addEventListener('change', function() {
    const fileNameSpan = document.querySelector('#fileName');
    if (this.files && this.files.length > 0) {
        fileNameSpan.textContent = this.files[0].name;
    } else {
        fileNameSpan.textContent = 'No file chosen';
    }
});


document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const res = await axios.post('/api/upload', formData);
        console.log(res);
        document.getElementById('UploadMessage').innerText = 'File uploaded successfully';
    } catch (error) {
        console.error('Error uploading file', error);
        document.getElementById('UploadMessage').innerText = 'Error uploading file';
    }
});

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

