![Alt text](https://raw.github.com/pedrolopesme/gemexplorer/master/dist/ruby.png) gemExplorer - A Chrome Extension to explore Gems!
=================================================

[![Build Status](https://travis-ci.org/pedrolopesme/gemexplorer.png?branch=master)](https://travis-ci.org/pedrolopesme/gemexplorer)


With gemExplorer you can make searches on rubygems.org's API through a simple Google Chrome Extension. See it by yourself at [https://chrome.google.com/webstore/detail/gemexplorer/ebbpjmphjlbbahpipjolfmeiiepoeofc](https://chrome.google.com/webstore/detail/gemexplorer/ebbpjmphjlbbahpipjolfmeiiepoeofc "Link to extension")  .


A lot of cool (and modern) Javascript stuff
-------------------------------------------

This extension is a pure JS application and was created using several modern and cool libs. To make easy the resolution of tons of JS libs and standardize the project structure, I decided to build this extension using as cornerstone the fantastic Yeoman (http://yeoman.io/) and it's AngularJS generator.

If you have any question, feel free to ask me.


Testing
-------

To run the app's tests, just type:

```
grunt test
```

Running in your browser
-----------------------

If you want to clone this repository and run directly in your browser, just follow the Google's Getting Started (on how to load an unpacked extension in the Browser) - http://developer.chrome.com/extensions/getstarted.html#unpacked. 

Before do it, you need generate a local build and load the extension in you local computer. For this, you should navigate to project's root path, and run:


```
grunt build
```

Then, you should use Google's tutorial taking into consideration all resources under *dist* directory.


Publishig at Google Chrome Store
--------------------------------

For now, I'm the only person with the necessary permissions to publish new versions of the extension at Google Chrome Store. 

But do not get discouraged - it will be a pleasure to publish your contributions in the official app - and put your name in the developers list, of course ;-).


Boring legal stuff
------------------

Copyright (c) 2013, Pedro Mendes

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.