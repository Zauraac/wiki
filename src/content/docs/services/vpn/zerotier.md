---
title: Zerotier One
sidebar:
  order: 2
prev: 
  link: /services/vpn/getting-started
next: 
  link: /services/vpn/wireguard
---
Install [ZeroTier One](https://github.com/zerotier/ZeroTierOne) on your machine. 

**Windows**:
Winget: `winget install zerotier.zerotierone`

**Linux**:
Debian-based distros: `curl -s https://install.zerotier.com | sudo bash`
In the future, document installation on Alpine/Arch

**MacOS**:
[PKG Installer](https://download.zerotier.com/dist/ZeroTier%20One.pkg)

**Mobile**: 
[App Store](https://apps.apple.com/us/app/zerotier-one/id1084101492) and [Play Store](https://play.google.com/store/apps/details?id=com.zerotier.one&pcampaignid=web_share) links. 

## Configuration
1. Enter the appropriate network ID (16 hexadecimal characters) in the UI. 
    - Linux: `sudo zerotier-cli join <network>`
2. Access the [dashboard](https://my.zerotier.com/network/). 
3. Open the settings for the node you want to set up
4. Authorize the node and add a managed route. 
After a minute, it should have access to the network. 
# Note
This will enable access to connected devices only. It's not a masquarader. 
