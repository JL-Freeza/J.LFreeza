const { exec } = require('youtube-dl-exec');

function convertToMP3() {
  // Get the YouTube URL from the input field
  const youtubeUrl = document.getElementById('youtube_url').value;

  // Check if the URL is valid
  if (isValidYouTubeUrl(youtubeUrl)) {
    // Download and convert the YouTube video to an MP3 file
    const options = {
      dumpSingleJson: true,
      noWarnings: true,
      noCallHome: true,
      format: 'bestaudio',
      audioFormat: 'mp3',
      audioQuality: 0,
      output: '%(id)s.%(ext)s'
    };

    exec(youtubeUrl, options)
      .then(output => {
        // Display the download link for the MP3 file
        const downloadUrl = URL.createObjectURL(output[0].data);
        const outputEl = document.getElementById('output');
        outputEl.innerHTML = `<a href="${downloadUrl}" download>Download MP3</a>`;
      })
      .catch(error => {
        // Display an error message if the download or conversion failed
        const outputEl = document.getElementById('output');
        outputEl.innerHTML = '<p>Error converting video to MP3.</p>';
        console.error(error);
      });
  } else {
    // Display an error message if the URL is invalid
    const outputEl = document.getElementById('output');
    outputEl.innerHTML = '<p>Invalid YouTube URL. Please enter a valid URL.</p>';
  }
}

