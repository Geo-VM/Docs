---
sidebar_position: 1
---

# SSH Keys
SSH, or secure shell, is an encrypted protocol used to administer and communicate with servers. When working with an Ubuntu server, chances are you will spend most of your time in a terminal session connected to your server through SSH.

## 1. Creating the Key Pair
You must run this on your PC before adding SSH Keys to your VPS
```
ssh-keygen
```

Output:
```
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\yourPCname/.ssh/id_rsa):
```