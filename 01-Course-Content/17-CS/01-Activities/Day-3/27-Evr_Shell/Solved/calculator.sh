#!/bin/bash

# create a variable to keep track if we want to keep using the calculator
runCalculator="y"

# while the value of `runCalculator` is 'y' for 'yes', run the calculator functionality
# use `;` between statements to terminate one and begin the other, or simply move the second statement to the following line
while [ $runCalculator = "y" ]; do

  # clear the command line for a cleaner experience
  clear

  # create a variable called `result` and set it to 0
  result=0

  # print prompt to the command line
  echo "Enter first number:"
  # use `read` command to capture command line input and store it in `num1` variable
  read num1
  echo "Enter second number:"
  read num2

  # print possible operations
	echo "What operation would you like to perform? (Select number of one of the following)"
	echo "Press '1' for addition"
	echo "Press '2' for subtraction"
	echo "Press '3' for multiplication"
	echo "Press '4' for division"
  # prompt for operation input
	read operation

  # use `case` to check operation value
	case $operation in
    # if we selected `1`, set result equal to $num1 + $num2
	  1) result=$(($num1 + $num2));;

    # use $() to interpolate values, much like a template literal in JavaScript (e.g. `${num1 + num2}`)
    2) result=$(($num1 - $num2));;

    # use `;;` to terminate case, like `break;` in JavaScript `switch`
    3) result=$(($num1 * $num2));;
	
    4) result=$(($num1 / $num2));;
	
    *) result="Invalid choice";;

  # end switch case with `esac` (which is "case" backwards)
	esac

  # print result
  echo "Result: $result"

  # ask if we want to run calculator again
	echo "Do u want to continue (y/n)) ?"
  # overwrite 
	read runCalculator
  # if we said 'no' and `runCalculator` is now "n", exit program
	if [ $runCalculator != "y" ]
  then
		exit
	fi
  
# signify end of `while` loop
done