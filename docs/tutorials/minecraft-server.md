---
sidebar_position: 1
---

# Creating a Minecraft Server
Ever wanted to play with your friends online, for fun or trying to setup an SMP?

## Requirements
- VPS
- 2GB RAM
- Must have root access

### 1. Getting Started
Installing necesary packages

```
sudo apt -y install screen wget openjdk-16-jdk
```



### 2. Creating Folder
:::info

We're going to use `minecraft-server` as a folder name example, you can set whatever you like.

:::
```
mkdir minecraft-server && cd minecraft-server
```

### 3. Downloading Jar
First you will need to copy/paste the download link for the server software. On the official Minecraft website, right-click on the download link and select Copy Link Location from the context menu.
```
wget <link>
```