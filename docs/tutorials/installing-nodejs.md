---
sidebar_position: 1
---

# Installing Node.JS
[Node.JS](https://nodejs.org/) is an open-source JavaScript runtime environment for building server-side and networking applications. It can run on Linux, macOS, FreeBSD, and Windows.

## Requirements
- VPS
- 1GB RAM
- Must have root access

## Installing necesary packages
```
apt -y install curl sudo
```
## Choosing the Node.JS Version

:::tip

Here you can choose the Node.JS Version that you need, please before continuing choose the correct one.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="nodejs-versions"
  defaultValue="v14"
  values={[
    { label: 'Node.js v14', value: 'v14' },
    { label: 'Node.js v16', value: 'v16' },
    { label: 'Node.js v18', value: 'v18' },
    { label: 'Node.js v20', value: 'v20' },
  ]}
>
  <TabItem value="v14" label="Node.js v14" default>
    <pre>
      <code>
        curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh && sudo bash nodesource_setup.sh && sudo apt -y install nodejs
      </code>
    </pre>
  </TabItem>
  <TabItem value="v16" label="Node.js v16">
    <pre>
      <code>
        curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh && sudo bash nodesource_setup.sh && sudo apt -y install nodejs
      </code>
    </pre>
  </TabItem>
  <TabItem value="v18" label="Node.js v18">
    <pre>
      <code>
        curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh && sudo bash nodesource_setup.sh && sudo apt -y install nodejs
      </code>
    </pre>
  </TabItem>
  <TabItem value="v20" label="Node.js v20">
    <pre>
      <code>
        curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh && sudo bash nodesource_setup.sh && sudo apt -y install nodejs
      </code>
    </pre>
  </TabItem>
</Tabs>


## So what's next?
Once, you're done do this command, if it shows your node.js version that you wanted, you're done.

```
node -v
```

```
Output
v14.4.0
```

## The end
🎉 So yup, you've made to the end, if you want to join our Discord server [Click me!](https://geo-vm.net/discord)