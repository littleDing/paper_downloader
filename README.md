paper_downloader
================

a simple tool to download a set of papers Semiautomaticly

Usage:
1. put the paper names into file ./papers , each a line
2. ./makejson.sh
3. cp ./papers.json transform_url/
4. load the chrome extension in transform_url/
5. open a new tab of any url but google,wait a minute and get the <paper url> pairs,copy then into "papers.url"
6. ./download.sh
7. the papers are in ./papers/
