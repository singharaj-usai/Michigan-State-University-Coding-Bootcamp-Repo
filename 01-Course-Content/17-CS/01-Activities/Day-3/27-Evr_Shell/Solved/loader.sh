#!/bin/bash

# create array called `arr` with values '-', '\', '|', and '/'
arr=('-' '\' '|' '/')

# while `true` is `true` (infinite loop), do the following
while true; do
  # for character in `arr`, do the following
	for c in "${arr[@]}"; do
    # print using `echo` command
    # "-e" to interpret the newline escape characters as escape characters
    # "-n" to make sure the output is not null
		echo -en "\r $c "
    # wait .5 secs before next iteration
		sleep .5
	done
done