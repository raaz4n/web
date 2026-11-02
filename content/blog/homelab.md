---
title: "Detecting local admin creation in a Wazuh home lab"
date: "2026-11-02"
tags: [projects, personal]
---

Hi. Been practicing and learning new things for cybersec, and I wanted to create a SIEM/XDR based home lab.

## Environment and what I ran on

The environment I created utilized 3 different machines.
- My own computer
- An Ubuntu 24.04 server running through VirtualBox
- A Windows 11 endpoint running Sysmon, also through VirtualBox

The Ubuntu server was running Wazuh in the background, while I was utilizing the dashboard through my own computer.

### What was the purpose of this lab?

I wanted to simulate an environment where an attacker created their own hidden admin account, and I wanted to see how Wazuh would pick up on it and how I could respond to such an alert.

### How was the attack done?

Through the Windows 11 VM, I created a new account and granted it local admin using the following commands in PowerShell:

```
net user eviluser P@ssw0rd123! /add
net localgroup administrators eviluser /add
```

### How did Wazuh detect this?

![wazuh1](/files/wazuh1.png)

As you can see, Wazuh immediately gave an alert that a Windows account was created and a group was modified. The creation alerts were mapped to MITRE ATT&CK T1098, which was noted as Account Manipulation.

![manip](/files/manip.png)

Wazuh also tagged each alert to compliance controls which are useful for audit contexts.

### The analysis of the alerts

Reading the event: `subjectUserName` showed the account that performed the action, which in this case was win11-endpoint (the Windows VM). `targetUserName: eviluser` was the account that was created. By going through the logs, you can get a detailed view of what happened, when, and where. Wazuh even includes a more thorough JSON document for each alert.

### How did I respond?

I deliberately disabled the account before deleting, to preserve the account as evidence:

```
net user eviluser /active:no
net localgroup administrators eviluser /delete
net user eviluser /delete
```

Wazuh logged the response as well, giving the full history of what happened from start to finish.

![wazuh2](/files/wazuh2.png)

### What would happen next?

As I have yet to actually use a tool such as this within an industry setting, this was a great way of getting hands-on training with tools that SOC analysts/engineers use. This was a great experience for me, and I plan on documenting more blogs that go over my experience with learning new tools.

I believe that an SOC analyst would possibly investigate further on how the attacker got access to create an administrator in the first place, and investigate the account which created said user as well, as there could be a root backdoor set in place.