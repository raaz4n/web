---
title: "Portfolio website (outdated)"
date: "2025-11-29"
tags: [projects, personal]
---

## I've really enjoyed building this website.

Github repo [here.](https://github.com/raaz4n/personal-portfolio)

I had a website that I built a couple of months back, but it wasn't what I really wanted. It seemed very basic, and I knew that I could do better. I used React to help build that website, and got advice from my good friend [mahloola.](https://github.com/mahloola)

Later on, I realized that I couldn't access the code for Webflow and instead thought of challenging myself. I took the journey to learn Tailwind and NextJS. I can safely say that it was an amazing learning experience! It makes web development so much easier and simpler, I wish I had learned it earlier.

Building the theme changer was quite the pain... having to organize so many color palettes together, but it was very rewarding to see it working.

Most of the website is finished at this point, but I had a vision that I really wanted to implement. If you've ever played the Wii, you probably remember this guy right here

![wii-hand](/files/nintendo-wii-hand-animated-custom-cursor.gif)

You may be a bit confused as to why I'm even mentioning this, but stay with me.

If you've gone through my website, you have probably noticed that swapping between the Navbar tabs on a fresh start can cause lag between the tabs until they're fully loaded in. Besides that however, I wanted to create a really cool transition between pages. I want to create a hand similar to the Wii hand which essentially grabs a projector string when clicking on a tab. It should end up looking something like this

![wii-hand](/files/projector.gif)

Here's my thought process on how it should work:

1. Wii hand sits in the bottom right of every page
2. If a user highlights over a tab, the gray underline in the Navbar becomes the same color as the tab
3. Simultaneously, a pixelated projector string handle appears under the Navbar
4. If the user presses on the tab, the Wii hand will move toward the string, grab it, and pull it down all the way to the end of the screen, leaving the entire page the same color as the tab.
5. After approximately 200ms, the Wii hand lets go of the string, and the new page is loaded.

May seem a bit odd currently (if you're reading this before it's pushed out), but I'll try to make it work. Never worked with animations through JS, seems pretty difficult right now but I'm up to the challenge.

Also, another thing - you may wonder why the main page seems so bland. I plan on developing an image/video to ASCII script in Python and having a really cool animation play in the background. Will try to get that done as soon as I can.

Thanks for reading!
