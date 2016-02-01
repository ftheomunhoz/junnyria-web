#!/bin/bash

echo Renaming settings variable using env as $env

cd ../

cd app/config
rm settings.js
mv settings+$env+.js settings.js