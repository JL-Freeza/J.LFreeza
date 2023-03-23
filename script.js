const { exec } = require('youtube-dl-exec');

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
                output.innerHTML = "<a href='" + xhr.responseText + "'>Download MP3</a>";
            }
        }
        xhr.send("youtube_url=" + youtubeUrl);
    } else {
        // Display an error message if the URL is invalid
        var output = document.getElementById("output");
        output.innerHTML = "<p>Invalid YouTube URL. Please enter a valid URL.</p>";
    }

    return false; // Prevents the form from submitting and reloading the page
}
By adding return false at the end of the function, you are telling the browser not to perform the default action of submitting the form and reloading the page.






