# feather
A lightweight theme for gutenberg

Feather is a blog theme specifically designed for the static site generator [Gutenberg](https://github.com/Keats/gutenberg).  It's as far as 
I know the first theme for the platform that isn't a port or just contained within template files.  

Feather is *not* intended for anything other than blogs.  

# Usage
Using feather is easy.  Install [Gutenberg](https://github.com/Keats/gutenberg) and follow 
[the guide for creating a site and using a theme](https://www.getgutenberg.io/documentation/themes/installing-and-using-themes/).  Then,
add `theme = "feather"` to your `config.toml` file.

If you intend to publish your site to Github Pages, please check out [this tutorial](http://vaporsoft.net/publishing-gutenberg-to-github/).

## Options
Gutenberg allows themes to [define `[extra]` variables](https://www.getgutenberg.io/documentation/getting-started/configuration/)
in the config.  Here's a full list of theme variables with example values and comments.

```
[extra]
# specify an image for the big header at the top of the page.
# this will be a background cover image, so make it large enough
# so that it won't upscale enough to pixelate
feather_header_image = "/theme_images/default.gif"

# if you want comments, add your disqus embed code here.  
# you can obtain a code on the disqus website.
disqus_code = "<div id='disqus_thread'></div><script> var disqus_config = ... etc ... etc ..."

# if you'd like people to be able to donate to you, you can include a donate link
# to be displayed in the footer of the website.
donate_link = "https://paypal.me/piedoomy"

# if you want analytics, add your tracking code HTML here.
google_analytics = "<script async src='https://www.googletagmanager.com/gtag/... etc ... etc ..."
```

# Live demo
[My dev site](http://vaporsoft.net/) uses the latest version of feather.

