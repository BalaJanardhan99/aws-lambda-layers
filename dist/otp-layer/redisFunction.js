"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOtp = exports.getOtp = exports.setOtp = void 0;
function setOtp(event, context) {
    const redis = require('redis');
    const client = redis.createClient({
        url: 'redis://default:123456@redis-17239.c83.us-east-1-2.ec2.cloud.redislabs.com:17239'
    });
    client.on('connect', function (err, reply) {
        console.log(reply);
    });
    client.connect();
    client.set(event, context, function (err, reply) {
        console.log(reply);
    });
    console.log(`OTP Successfully stored in redis  ${event} - ${context}`);
    return `OTP successfully sent to mobile number ${context}- ${event}`;
}
exports.setOtp = setOtp;
;
function getOtp(event) {
    const redis = require('redis');
    const client = redis.createClient({
        url: 'redis://default:123456@redis-17239.c83.us-east-1-2.ec2.cloud.redislabs.com:17239'
    });
    client.on('connect', function (err, reply) {
        console.log(reply);
    });
    client.connect();
    return client.get(event);
}
exports.getOtp = getOtp;
function deleteOtp(event) {
    const redis = require('redis');
    const client = redis.createClient({
        url: 'redis://default:123456@redis-17239.c83.us-east-1-2.ec2.cloud.redislabs.com:17239'
    });
    client.on('connect', function (err, reply) {
        console.log(reply);
    });
    client.connect();
    return client.del(event);
}
exports.deleteOtp = deleteOtp;
//# sourceMappingURL=redisFunction.js.map