#!/bin/bash
ffmpeg -i public/originals/$1.gif -y -s 174x96 -pix_fmt yuvj420p $1.jpg
ffmpeg -i public/originals/$1.gif -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p $1.mp4
ffmpeg -i public/originals/$1.gif -c vp9 -b:v 0 -crf 41 $1.webm