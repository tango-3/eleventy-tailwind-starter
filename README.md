# eleventy-tailwind-starter
EleventyJS TailwindCSS

# TL;DR
brew install mkcert  
mkcert -install  
Add your sudo password when prompted  
mkcert localhost 127.0.0.1 ::1  
yarn  
yarn dev  
Ctrl + clicklocalhost links if you're using the terminal in VS Code or manually enter either into the address bar.
# You're done!

# The longer version

This is a starter for [eleventyjs](https://www.11ty.dev/) and includes [TailWindCSS](https://tailwindcss.com/)
The intent is to provide a simple started with only the basics, index file, robots, sitemap, basic site data, simple template.

Requirements;
- yarn
- mkcert - see [https://github.com/FiloSottile/mkcert](https://github.com/FiloSottile/mkcert)
- Your user must be in the sudo group to install the CA certificate into the system trust store on MacOS.

This has been tested on MacOS (Ventura) so your milage may vary - hopefully not by much though.
You may wish to take a look at mkcert by [Filippo Valsorda](https://github.com/FiloSottile) and familiarise yourself with how this operates. 
The mkcert application is written in Go and works on Windows, Linux and MacOS. 


Setup;
> $ mkcert -install
> Created a new local CA 💥
> Sudo password:
> The local CA is now installed in the system trust store! ⚡️
> 
> $ mkcert localhost 127.0.0.1 ::1
> 
> Created a new certificate valid for the following names 📜
> - "localhost"
> - "127.0.0.1"
> - "::1"
> 
> The certificate is at "./localhost+2.pem" and the key at "./localhost+2-key.pem" ✅


The .eleventy.js config file uses dotenv for the port and certificate filenames.
There is a hardcoded fallback for default certificate names but you should update the .env file 
with the names of your files from the earlier "mkcert localhost 127.0.0.1 ::1" command.


## Setup
```
yarn
```

## Dev
```
yarn dev
```

## Build production
```
yarn build
```