#!/bin/bash

aws s3 cp --recursive ./build/ s3://run3wide/website-v2 --endpoint-url http://s3-accelerate.amazonaws.com
