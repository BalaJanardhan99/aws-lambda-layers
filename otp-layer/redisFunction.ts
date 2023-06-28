export function setOtp(event, context)  {
    // return Math.floor(100000 + Math.random() * 900000)
    const redis = require('redis');
    const client = redis.createClient({
      url: 'redis://default:123456@redis-17239.c83.us-east-1-2.ec2.cloud.redislabs.com:17239'
    });
    client.on('connect', function (err, reply) {
      console.log(reply);
    });
     client.connect();
    // console.log('event', event);
    // console.log('context', context);
    client.set(event, context, function (err, reply) {
      console.log(reply);
    });
    console.log(`OTP Successfully stored in redis  ${event} - ${context}`);
    return `OTP successfully sent to mobile number ${context}- ${event}`;
  };
  
  
  export function getOtp(event){
      const redis = require('redis');
    const client = redis.createClient({
      url: 'redis://default:123456@redis-17239.c83.us-east-1-2.ec2.cloud.redislabs.com:17239'
    });
    client.on('connect', function (err, reply) {
      console.log(reply);
    });
     client.connect();
     return  client.get(event);
  }
  
  export function deleteOtp(event) {
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

  export function existsOtp(event){
    const redis = require('redis');
    const client = redis.createClient({
      url: 'redis://default:123456@redis-17239.c83.us-east-1-2.ec2.cloud.redislabs.com:17239'
    });
    client.on('connect', function (err, reply) {
      console.log(reply);
    });
     client.connect();
     return client.exists(event, function(err,reply){
      if(reply ==1){
        return 1;
      }
      else{
        return 0;
      }
     });
  }
  
