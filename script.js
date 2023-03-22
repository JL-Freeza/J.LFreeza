function convertToMP3() {
	// Get the YouTube URL from the input field
	var youtubeUrl = document.getElementById("youtube_url").value;

	// Check if the URL is valid
	if (isValidYouTubeUrl(youtubeUrl)) {
		// Send a request to the server to convert the YouTube video to an MP3 file
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "convert.php", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				// Display the download link for the MP3 file
				var output = document.getElementById("output");
				var mp3Url = xhr.responseText;
if (mp3Url.endsWith(".mp3")) {
  output.innerHTML = "<a href='" + mp3Url + "'>Download MP3</a>";
} else {
  output.innerHTML = "<p>Error converting video to MP3.</p>";
}
			}
		}
		xhr.send("youtube_url=" + youtubeUrl);
	} else {
		// Display an error message if the URL is invalid
		var output = document.getElementById("output");
		output.innerHTML = "<p>Invalid YouTube URL. Please enter a valid URL.</p>";
	}
}

function isValidYouTubeUrl(url) {
	// Check if the URL matches the pattern for a YouTube video URL
	var pattern = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
	return pattern.test(url);
}
