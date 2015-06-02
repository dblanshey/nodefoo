#!/bin/bash
service codedeploy-agent stop
rm -rf /opt/codedeploy-agent/deployment-root/*
rm -rf /home/ec2-user/YOW
rm -rf /home/ec2-user/test
service codedeploy-agent start