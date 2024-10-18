## Start Log Forwarder

```
docker compose -f fluent-bit.yml up -d
```

## Start Demo App

```
npm install
node index.js
```

## View logs

```
docker compose -f fluent-bit.yml logs -f
```