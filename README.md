<br/>
<p align="center">
  <h3 align="center">NuxtJS v2 Download-Proxy</h3>

  <p align="center">
    A simple way to avoid CORS trouble in your external downloads.
    <br/>
    <br/>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/maximoospital/download-proxy?color=dark-green) ![Forks](https://img.shields.io/github/forks/maximoospital/download-proxy?style=social) ![Stargazers](https://img.shields.io/github/stars/maximoospital/download-proxy?style=social) ![Issues](https://img.shields.io/github/issues/maximoospital/download-proxy) ![License](https://img.shields.io/github/license/maximoospital/download-proxy) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](images/screenshot.png)

This is a solution to a (highly specific) problem i've had with NuxtJS v2, this being trying to get the server to serve me an external server's files as a download, while avoiding the CORS hijinks you'd run into with most solutions.

## Built With



* [NuxtJS v2](https://v2.nuxt.com/)
* [@nuxtjs/axios](https://axios.nuxtjs.org/)

## Getting Started

It's honestly pretty boilerplate stuff to get this demo working.

### Prerequisites

You only need NPM, any other stuff you might need you can get it through npm install.

### Installation

1. Clone the repo

```sh
git clone https://github.com/maximoospital/download-proxy.git
```

2. Install NPM packages

```sh
npm install
```

3. Run it. 

```sh
npm run dev
```

## Usage

The way this works is pretty simple actually, the path /downloadImage is now assigned to the server middleware script ~/server-middleware/downloadImage.js, the way you can utilize this is by calling the path itself as /downloadImage/?url="YOUR LINK HERE" (without the 
quotation marks). Keep in mind, the way this avoids CORS is by proxying traffic itself through the NodeJS server, so it is meant for either light files like images or light traffic, it does cleanup after download.

## Authors

* **Maximo Ospital** - *Junior Developer and CS Student* - [Maximo Ospital](https://github.com/maximoospital/) - *i made this lol*

## Acknowledgements

* [ShaanCoding for this awesome Readme's generator](https://github.com/ShaanCoding/)
