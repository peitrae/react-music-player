<p align="center">
  <h3 align="center">React Music Player</h3>

  <p align="center">
    A music player web app. Built with React, styled-components, Spotify Web API, Spotify Web Playback SDK.
    <br />
    <a href="https://peitrae-music-player.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/peitrae/react-music-player/issues">Report Bug</a>
  </p>
</p>


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
