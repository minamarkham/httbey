#!/bin/bash
ffmpeg -i public/originals/$1.gif -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p public/media/$1.mp4
ffmpeg -i public/originals/$1.gif -c vp9 -b:v 0 -crf 41 public/media/$1.webm
ffmpeg -ss 00:00 -i public/media/$1.mp4 -vframes 1 -q:v 2 public/media/$1.jpg
