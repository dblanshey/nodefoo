#!/bin/bash
touch /home/ec2-user/YOW
cd /home/ec2-user/test
npm install
node /home/ec2-user/test/hi.js &
