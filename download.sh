#!/bin/bash

## Input:  stdin(url paper_name)
## 		$1 => target dir ,default is ./output/
## Output: files
function downloadPapers(){
local ddd="./output"; if ![ "x$1" -eq "x"  ]; then ddd=$1; mkdir -p $ddd; fi
	while read url  name ;
	do
		wget -O "$ddd/$name.pdf" $url ;
	done;		
}

downloadPapers 
