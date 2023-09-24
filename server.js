import express from 'express';
import requestIp from 'request-ip';
import ip from 'ip';

const app = express();

app.get('/ip', (req, res) => {
  console.log('ip address', ip.address());
  console.log('request-ip', requestIp.getClientIp(req));
  res
    .status(200)
    .json({ ip: ip.address(), requestIp: requestIp.getClientIp(req) });
});

app.listen(7071, (req, res) => {
  console.log('started');
});
