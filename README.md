this is react demo

node.js  + react + ant.design[阿里的react组件] + webpack + babel

## Installation

```bash
cd react-demo
npm install
npm install -g pm2
npm start           //or pm2 start devServer.js -i max
open http://localhost:3000
```
## plugs

react-transform-hmr          - enables hot reloading react components
react-transform-catch-errors - catches errors inside render()


## deploy with pm2

use pm2 to deploy app on production envrioment.

```
pm2 startOrReload pm2.json
```

## pm2 cmd

$ pm2 start www/development.js -i max

$ pm2 list

$ pm2 monit

$ tail -f /path/to/log1 /path/to/log2 ...

$ pm2 logs

$ pm2 dump

$ pm2 kill      //让我们假设一个PM2停掉了
$ pm2 resurect  //我所有的进程又满血满状态复活了
$ pm2 web
打开浏览器输入http://localhost:9615

