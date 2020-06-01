# @mathshistory/katex-server

Runs a HTTP server which renders KaTeX, to speed up build times.

When building a page for the Maths History website, the page can contain formula
elements which need to get rendered with KaTeX, which is done using the
`katex` command line tool. However, if a page contains many formulae, this means
that repeated calls are needed, which significantly slows down the build with
the overhead.

This runs a small HTTP server which takes input of KaTeX markup, and returns the
rendered HTML.

---

The port is specified as the first command line argument, with the default being
5002.

The data sent to it should be an array of KaTeX formulae, and the response is an
array of those formulae rendered as HTML.
