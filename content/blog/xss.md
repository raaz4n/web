---
title: "How I detected XSS within a multi-billion dollar company"
date: "2026-11-08"
tags: [projects, personal]
---

Hello. This is going to be a bit of a short one, as I unfortunately did not document my exact process of this. I found this XSS vuln within this company some time ago and it just recently got resolved through Bugcrowd, so I thought it was a good time to document how I found this vulnerability.

### What company?

Unfortunately, I'm unable to say which company this was as per their guidelines listed on Bugcrowd. I got no reward out of this as it was a VDP, but I will say that I gained quite a bit of experience in the process of finding this vulnerability.

### How did you find the vulnerability?

I was browsing many VDPs for a while before my school semester started in hopes of finding a bug or vulnerability within a website. This company stood out to me because they are in a field that I like (which I will not be naming here, ofc), and I had confidence that I could find something.

I start off all of my VDP or bug bounty work by first scanning for subdomains/directories. The tool I usually use is [r3turn](https://raazan.dev/blog/r3turn), which you can find [here.](https://github.com/raaz4n/r3turn/). After scanning the main domain which was given in the VDP, I found a fleet/business related subdomain which gave a 200 response.

Through this subdomain, I was immediately prompted with a website meant for fleets to purchase from the company. I scanned for SQL and XSS vulnerabilities as per usual, but nothing immediately showed up. I decided to look through the page source of the website, and saw several parameters within it. A parameter that caught my eye was 'cat'

```
REDACTED_cat = 'xxx',
```

This cat parameter seemed to reflect onto the website itself, so I tested it by including it within the URL and I was able to directly modify this parameter. Since the parameter was being reflected onto the webpage, I tried a pretty simple XSS script within it:

```
REDACTED_cat = 'test';document.write(document.cookie)//',
```

To my surprise, it was definitely vulnerable.

![XSS](/files/write_20cookie1.png)

I didn't think that such a simple bug would be present in a website of a multi-billion dollar company, especially in 2026, but I was wrong.

One thing to note is that this website had a CF WAF present as well. I tested using alert( as well but that threw a CF error, so I imagine there is some malfunction within the WAF. The data is inputted into a <script> block without any encoding, which was the root cause of this vulnerability.

### How was it resolved?

As it was resolved very recently, I decided to look into it again to see what changed. Apparently, the company completely scrapped the old fleet webpage and developed a new one which did not have that same bug. It kind of irked me that it took them so long to resolve this bug, but I understand that it's because it wasn't something crazy like RCE or SQLi.