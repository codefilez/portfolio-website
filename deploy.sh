#!/bin/bash

aws s3 cp --recursive ./build/distributions/ s3://run3wide/website --profile probson-admin
