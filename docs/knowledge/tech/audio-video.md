# Working with video / audio

## Convert video

```bash
ffmpeg -i input.mov -vcodec libx264 -crf 24 input.mp4
```

## Get audio from video
```bash
ffmpeg -i input-video.mp4 output-audio.mp3
```