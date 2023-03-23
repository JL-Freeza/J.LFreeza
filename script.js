const convertBtn = document.getElementById('convert-btn');
const audioPlayer = document.getElementById('audio-player');
const errorMsg = document.getElementById('error-msg');

convertBtn.addEventListener('click', () => {
	const youtubeLink = document.getElementById('youtube-link').value.trim();
	const regex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

	if (regex.test(youtubeLink)) {
		const videoId = youtubeLink.split('v=')[1];
		const mp3Url = `https://www.convertmp3.io/fetch/?video=https://www.youtube.com/watch?v=${videoId}`;
		audioPlayer.src = mp3Url;
		audioPlayer.style.display = 'block';
		errorMsg.style.display = 'none';
	} else {
		errorMsg.textContent = 'Please enter a valid YouTube link.';
		errorMsg.style.display = 'block';
		audioPlayer.style.display = 'none';
	}
});



