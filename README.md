# The ERC Blog

The **Official ERC Blog Page** for articles by our members.

Built using Hugo Framework

## Installation Instructions(Windows)

Requirements: git, ruby, gem, jekyll

1. Install Scoop: A command line tool for installing and managing software.

   ```shell
   powershell
    iex <new-object net.webclient>.downloadstring<'https://get.scoop.sh'>
   ```

2. Install Curl: A command line tool for transferring data with URL syntax.

   ```shell
   scoop install curl
   curl https://get.scoop.sh
   ```

3. Install Hugo: A static site generator.

   ```shell
   scoop install hugo
   hugo #From the root directory of the repo
   ```

## Running Local Host Server

1. Build the blog: Run in root directory of the repository

   ```shell
   hugo server
   ```

Output:  
    '''shell
    Start building sites …
    hugo v0.92.2-CDF6A0D6 windows/amd64 BuildDate=2022-02-11T14:17:39Z VendorInfo=gohugoio
    WARN 2022/02/15 12:31:40 The google_news internal template will be removed in a future release. Please remove calls to this template. See <https://github.com/gohugoio/hugo/issues/9172> for additional information.

                    | EN
    -------------------+-----
    Pages            | 42
    Paginator pages  |  0
    Non-page files   |  0
    Static files     | 88
    Processed images |  0
    Aliases          | 13
    Sitemaps         |  1
    Cleaned          |  0

    Built in 119 ms
    Watching for changes in C:\Users\<usr>\blog\{archetypes,content,data,layouts,static,themes}
    Watching for config changes in C:\Users\<usr>\blog\config.toml
    Environment: "development"
    Serving pages from memory
    Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
    Web Server is available at http://localhost:1313/blog/ (bind address 127.0.0.1)
    Press Ctrl+C to stop
    '''

Copy the Link given into your browser.
