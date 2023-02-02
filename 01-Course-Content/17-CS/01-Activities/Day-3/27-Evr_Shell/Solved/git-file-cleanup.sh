#!/bin/bash

# Use this to check and remove any untracked files in your Git repo

# set up initial command
# set git clean command with necessary flags
# -f to force delete files (git won't remove them by default)
# -d to recursively check directories in repo and not just the level the command was run
# -n to perform a dry-run first, meaning it will identify files but not remove them
TO_REMOVE=`git clean -f -d -n`;

# if the command isn't null
if [[ -n "$TO_REMOVE" ]]; then
  echo "Cleaning...";
  # use printf to execute the expression that `TO_REMOVE` variable holds
  printf "\n$TO_REMOVE\n\n";
  
  echo "Proceed?";

  # use `select` command to prompt a list of options to be displayed for picking and store in `result` 
  select result in Yes No; do
    # if we say "yes" in the prompt...
    if [[ "$result" == "Yes" ]]; then
      echo "Cleaning in progress...";
      echo "";
      # execute `git clean -f -d`
      git clean -f -d;
      echo "";
      echo "All files and directories removed!";
    fi
    break;
  done;
else
  echo "Everything is clean";
fi;