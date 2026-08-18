---
title: "websiteCheck.py"
date: "2025-11-29"
tags: [projects, websiteCheck]
---

## (FINISHED THIS PROJECT IN AUGUST)

Github repo [here.](https://github.com/raaz4n/websiteCheck)

I originally had the idea to create this Python script as I was searching for jobs back in August 2025. I was struggling pretty badly and wanted to find something new, and found a careers page that had 0 listings. My initial thought was to register for email notifications on the company's website, but found no such option.

That's when I came up with the idea of using a website's hash and comparing it to a previous hash on certain intervals. I used AWS for my own use, along with several Python libraries such as BeautifulSoup and EmailMessage. I could have used hardware such as a Raspberry Pi, but chose not to in order to gain more experience using AWS.

It's tied in with both AWS Lambda and S3, with Lambda running my script every hour and storing the hash in an S3 bucket. Once the hash has been stored, the script will compare the new hash with the hash stored in S3. If the hash has changed, the user will be sent an email and S3 will overwrite the old hash. Otherwise, nothing will happen and AWS will run the script once again based on the user's chosen interval.

Currently, I use this script for several careers websites for myself and my father, as he has also been struggling to find a position in this job market.
