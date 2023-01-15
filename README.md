# localSetup (local)

local setup

## prerequisites raspi

1. sudo apt update
2. sudo apt upgrade
3. curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
4. sudo apt install nodejs
5. sudo apt install pigpio
6. npm i -g @quasar/cli
7. sudo git clone this project...
8. sudo quasar build -m pwa
9. sudo npm install pm2
10. sudo pm2 start webserver.js
11. sudo pm2 startup
12. sudo pm2 save

## Install the dependencies

npm install

````

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
````

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build -m pwa
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
