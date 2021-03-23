
<p align="center">
  <h2 align="center">React Music Player</h2>
</p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![React Music Player - resized](https://user-images.githubusercontent.com/17607970/112149117-3b2bf000-8c11-11eb-8d58-9764eab07fa8.gif)

<p align="center">
  A music player web app. Built with React, styled-components, Spotify Web API, Spotify Web Playback SDK.
</p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
    <a href="https://peitrae-music-player.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/peitrae/react-music-player/issues">Report Bug</a>
</p>

## Table of Contents
<ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#support">Support</a></li>
</ol>

## Installation

1. Clone the repo based on your needs.
    <h5>Only Views</h5>
   
    ```sh
      git clone -b views --single-branch git@github.com:peitrae/react-music-player.git
    ```
    
    <h5>With authentication</h5>
    
    ```sh
      git clone -b feature/authentication --single-branch git@github.com:peitrae/react-music-player.git
    ```
    
    <h5>Final (authentication and player)</h5>
    
    ```sh
      git clone git@github.com:peitrae/react-music-player.git
    ```
2. Run `npm install` to install dependencies.
3. Create `.env.development` file in the root of the project. Learn about how to get Spotify client id and client secret in <a href="https://developer.spotify.com/documentation/general/guides/app-settings">here</a>
   ```js
     REACT_APP_URL=http://localhost:3000 /* Your URL, default is localhost */
     REACT_APP_CLIENT_ID= /* Your Spotify Client Id */
     REACT_APP_CLIENT_SECRET= /* Your Spotify Client Id */
   ```
4. Run `npm start` to start the local server.

## License

Distributed under the <a href="https://github.com/peitrae/react-music-player/blob/master/LICENSE">MIT License</a>

## Contact 

Peitra Erdi - <a href="https://www.linkedin.com/in/peitrae">LinkedIn</a> - 
<a href="mailto:peitrae@gmail.com" data-action="share/email" target="_blank" rel="noopener noreferrer">peitrae@gmail.com</a>

## Support 

If you would like to support this and another of my projects or say thanks for this one, you can support me by <a href="https://www.buymeacoffee.com/peit">buying me a coffee</a> :coffee: 

<!-- MARKDOWN LINKS & IMAGES -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/peitrae/react-music-player/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/peitrae
