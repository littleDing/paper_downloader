#!/bin/bash 
cat -n papers | awk 'BEGIN{print "var papers={"}{line=$1; $1=""; name=substr($0,2); printf("\t\"%s\" : \"%s\", \n",line,name);  }END{print "\"last\" : \"null\"}"}' > papers.json


