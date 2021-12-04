#!/bin/bash

aws s3 cp --recursive ./build/distributions/ s3://run3wide/website-v2 --profile probson-admin --endpoint-url http://s3-accelerate.amazonaws.com
