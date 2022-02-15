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

- Build the blog: Run in root directory of the repository

   ```shell
   hugo server
   ```
   
Copy the Link (http://localhost:<4Numbers>/blog/) from the output into your browser.
