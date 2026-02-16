const canvas = document.getElementById('stickerCanvas');
const ctx = canvas.getContext('2d');
const imageUpload = document.getElementById('imageUpload');
const textInput = document.getElementById('textInput');
const addTextBtn = document.getElementById('addTextBtn');
const downloadBtn = document.getElementById('downloadBtn');

let img = new Image();

imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            img.src = reader.result;
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        };
        reader.readAsDataURL(file);
    }
});

addTextBtn.addEventListener('click', () => {
    const text = textInput.value;
    if (text) {
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText(text, canvas.width / 2, canvas.height - 50);
        textInput.value = '';
    }
});

downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'funny-sticker.png';
    link.href = canvas.toDataURL();
    link.click();
});
