<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the YouTube URL from the POST data
  $youtubeUrl = $_POST['youtube_url'];

  // Use youtube-dl to download the video and extract the audio as an MP3 file
  $command = "youtube-dl --extract-audio --audio-format mp3 -o '%(title)s.%(ext)s' " . escapeshellarg($youtubeUrl);
  exec($command);

  // Get the title of the MP3 file
  $output = shell_exec("ls *.mp3");
  $title = pathinfo($output, PATHINFO_FILENAME);

  // Return the download URL of the MP3 file
  $mp3Url = $title . ".mp3";
  echo $mp3Url;
}
?>
