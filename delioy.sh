#!/bin/bash

echo "Firebase Login"
firebase login

echo "Deploy Start"
firebase deploy

echo "Platform Deploy Complete"