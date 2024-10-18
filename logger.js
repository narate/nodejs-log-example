const winston = require("winston");
const { combine, timestamp, json, align, printf } = winston.format;

const logger = winston.createLogger({
  level: "debug",
  format: combine(
    timestamp(),
    json(),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(),
    // https://github.com/winstonjs/winston/blob/master/docs/transports.md#http-transport
    new winston.transports.Http({
      host: "127.0.0.1",
      port: "5170",
      path: "/app.log"
    })
  ],
});

module.exports = logger;
