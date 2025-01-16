#!/bin/bash

# Find all .jsx files and rename them to .js
find . -name "*.jsx" -type f | while read file; do
    mv "$file" "${file%.*}.js"
    echo "Renamed: $file -> ${file%.*}.js"
done 