---
sidebar_position: 1
---

# WireGuard Tunnel
Ever wanted to expose your Home server with a VPN? We've got you covered with this tutorial!

## Requirements
- VPS (Server side)
- Home server (Client side)
- Must have root access

# Server side 

:::info

While installing this, the VPS won't SSH anymore when you've done all the steps, because you're redirecting all the data to your Home server.

:::

### 1. Getting Started
Installing necesary packages

```
sudo apt -y install curl
```

### 2. Installing WireGuard
```
curl -O https://raw.githubusercontent.com/angristan/wireguard-install/master/wireguard-install.sh && chmod +x wireguard-install.sh && ./wireguard-install.sh
```

### 3. Setting up iptables

:::warning

Replace `<PublicServerIP>` with your **VPS IP** not the Home server one!!!

:::

```
iptables -t nat -A PREROUTING -d <PublicServerIP> -p tcp -j DNAT --to-dest 10.66.66.2
```

### 4. install persistent iptables

:::info

This will save the iptables we applied before, so when you restart the VPS you won't need to apply it again.

:::

```
sudo apt -y install iptables-persistent
netfilter-persistent save
sudo netfilter-persistent reload
```
If it shows a popup press **Y** aka **YES**

# Client side

### 1. Install WireGuard and Resolvconf

```
sudo apt -y install wireguard resolvconf && nano /etc/wireguard/wg0.conf
```
Grab from the Server side the configuration file which is located in `/root/......`

### 2. Enabling & starting WireGuard

```
systemctl enable wg-quick@wg0.service && systemctl daemon-reload && systemctl start wg-quick@wg0
```

### 3. Checking if it's running
```
systemctl status wg-quick@wg0.service && curl ip.me
```

If your IPv4 shows the VPS one, it's now ready to go!

### 4. How to restart if i applied new config?
```
systemctl restart wg-quick@wg0.service
```