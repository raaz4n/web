---
title: "r3turn"
date: "2026-08-11"
tags: [projects]
---

Github repo [here.](https://github.com/raaz4n/r3turn/)

This was a small script I created to help me with pentesting on websites. My issue was that when using subfinder, you get a LOT of URLs and don't know which actually work and which don't.

It didn't take long to develop the script but it helps me a lot to find which URLs lead somewhere and which don't. It recursively goes through a list of URLs and shows which return codes it gets
from sending a GET request to the website. If the URL provides no status code, it doesn't get displayed at all.