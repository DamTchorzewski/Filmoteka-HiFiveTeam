# :film_strip: Filmoteka :popcorn:

<table>
  <tr>
    <td><p>The "Filmoteka" website created by the HiFiveTeam team is a place where you can find reviews and descriptions of films that are worth watching. It is an ideal source of inspiration for cinema lovers and people who want to expand their knowledge of the film world. Intuitive and clear navigation will allow you to quickly find the videos you are interested in and read the descriptions or watch the trailer. Go to the website and allow yourself unforgettable movie screenings!</p></td>
    <td><img src="https://i.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.webp" alt="bird_and_popcorn" width="1200"></td>
  </tr>
</table>

## Introduction
Filmoteka is an interactive film platform that allows users to browse, search, and gather information about films. It was created to provide an enjoyable movie experience for users by presenting information about movies, the ability to watch trailers, and the option to add movies to watch and watch in the future.

## Design Structure

The project has been organized into a modular structure, which makes it easier to manage code and develop functionality. Below is a description of the main modules of the project:

- api. js: Module responsible for communication with external movie API (The Movie Database). Includes features to download videos, movie details, trailers, etc.

- btn-modal. js: Module that supports interaction with buttons to add videos to watchlist and to watch. Uses local data storage.

- genres. js: A module that defines available movie genres, used to map genre identifiers to their names.

- loader. js: Module responsible for showing and hiding animated loader.

- local-storage. js: A module that manages local data storage, such as watchlist and watchlist.

- modal-movie. js: Module that supports showing and hiding modal window with movie details.

- modal-open-close. js: Module responsible for opening and closing a modal window and handling closing events (Escape key, clicking outside the window).

- my-library. js: A module that supports the functionality of the user library, i. e. watch and watch lists.

- pagination. js: A module that implements pagination for search results and trending lists.

- refresh. js: A module that updates the state of the buttons for adding videos in the modal window after changing the state of the local storage.

- refs. js: A module containing references to DOM elements, making it easier to access them in other modules.

- render-movie-card. js: A module that renders movie cards on the home page and in the user library.

- render-movie-details. js: A module that renders movie details in a modal window.

- scroll-top. js: The module responsible for scrolling the page to the top.

- search. js: Video search engine that uses pagination to display results.

- trailer. js: Module for displaying movie trailers in a modal window.

- trending-movies-pagination. js: Pagination module for trending movies section.

## Main Features of the Project

### Watching Videos:
- The homepage presents film trends using pagination.
- Each video is represented by a card containing basic information.

### Search Videos:
- Ability to search for videos based on the title.
- Pagination of search results for better navigation.

### Video Details:
- Clicking on the video opens a modal window with full information about the video.

### Adding to List:
- Users can add videos to their watch list and to watch.
- Update the status of the add buttons in the modal window.

### User Library:
- A separate section containing a list of watched and to watch videos.
- Ability to switch between lists.

### Movie Trailers:
- Option to watch the movie trailer in the modal window.

### Technologies Used:

- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API
- Local Storage
- Notiflix (for notifications)
- BasicLightbox (for displaying trailers)

## Success Criteria

- Responsiveness: The design is responsive and adapted to different devices.
- Code Transparency: Project code is readable, organized, and uses best programming practices.
- Working Features: All major design features work properly, and user interactions are intuitive.

## Summary
Filmoteka is a comprehensive solution for film lovers to easily browse, search and collect information about films. Thanks to the modular code structure and the use of modern technologies, FilmHub provides users with a satisfying film experience.

## Screenshots
<img width="100%" src="https://github.com/damtchorzewski/filmoteka-hifiveteam/blob/main/assets/ss2.png">
<img width="100%" src="https://github.com/damtchorzewski/filmoteka-hifiveteam/blob/main/assets/ss3.png">


## HiFiveTeam Co-Creators

<table>
  <tr>
    <td align="center">
     <b>Damian Tchorzewski</b><br>
    <a href="https://github.com/damiantchorzewski">
      <img src="src/images/team/DamianT.jpg" alt="avatar" width="25%" style="border-radius: 50%"></a><br>
      Team Lead<br>
 Project management, including coordinating and delegating tasks to team members.
Creating the website template starter files for the project.
Code review to ensure code quality and consistency.
Implementation of pagination and search functionalities.
Adding icons.svg to enhance the user interface.
    </td>
    <td align="center">
    <b>Beniamin Brzezińśki</b><br>
    <a href="https://github.com/benbrzezinski">
      <img src="src/images/team/BeniaminB.jpg" alt="avatar" width="25%" style="border-radius: 50%"></a><br>
      Scrum Master<br>
      Code review to ensure code quality and consistency.
Planning and leading team meetings to keep the project on track.
Implementation of Api with feach to fetch data from external sources.
Use of LocalStorage to store user data.
Functionality to add and delete movies.
Styling the website globally.
Use of Trello for project management.
      </td>
  </tr>
  <tr>
    <td align="center">
     <b>Dorota Dudzik</b><br>
    <a href="https://github.com/doradudzik">
      <img src="src/images/team/DorotaD.jpg" alt="avatar" width="25%" style="border-radius:50%"></a><br>
      Developer<br>
     Rendering of movie cards for the website.
Implementation of the movie cards functionality.
Developing the overall application and styles.
Adding animations to enhance the user experience.
    </td>
    <td align="center">
    <b>Edyta Sowa</b><br>
    <a href="https://github.com/EdytaSowa">
      <img src="src/images/team/EdytaS.jpg" alt="avatar" width="25%" style="border-radius: 50%"></a><br>
      Developer<br>
      Developing the header for the home and library pages.
Adding search functionality to the website.
    </td>
  </tr>
  <tr>
    <td align="center">
    <b>Filip Vukić</b><br>
    <a href="https://github.com/FVuk">
      <img src="src/images/team/FilipV.jpg" alt="avatar" width="25%" style="border-radius: 50%"></a><br>
      Developer<br>
      Developing and implementing the modal window for movies and teams.
    </td>
    <td align="center">
    <b>Dagmara Sobczyk</b><br>
    <a href="https://github.com/DagmaraSobczak">
      <img src="src/images/team/DagmaraS.jpg" alt="avatar" width="25%" style="border-radius: 50%"></a><br>
      Developer<br>
     Developing the footer for the home and library pages.
Implementing the display of movie trailers.
    </td>
  </tr>
  <tr>
    <td align="center">
    <b>Dawid Demkowicz</b><br>
    <a href="https://github.com/Ddemkowicz">
      <img src="src/images/team/DawidD.jpg" alt="avatar" width="25%" style="border-radius: 50%"></a><br>
      Developer <br>
      Developing the "Watched" and "Queue" buttons to create lists of movies added to a given group.
    </td>
    <td align="center">
    <b>Filip Zieliński</b> <br>
    <a href="https://github.com/Thebrefff">
      <img src="src/images/team/FilipZ.jpg" alt="avatar" width="25%" style="border-radius: 50%"></a><br>
      Developer<br>
      Implementing the search functionality for the website.
    </td>
  </tr>
  <tr>
    <td align="center">
    <b>Filip Grzelak</b><br>
    <a href="https://github.com/FilipGk">
      <img src="src/images/team/FilipG.jpg" alt="avatar" width="25%" style="border-radius: 50%"></a><br>
      Developer<br>
     Implementing pagination to enable the display of large amounts of data on multiple pages.
    </td>
    <td></td>
  </tr>
</table>

## :hammer_and_wrench: Languages and Tools :

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/github/github-original-wordmark.svg" title="GitHub" alt="GitHub" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original-wordmark.svg" title="Visual Studio Code" alt="Visual Studio Code" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/bash/bash-original.svg" title="Bash" alt="Bash" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg" title="Figma" alt="Figma" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-plain-wordmark.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg" title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" title="Sass" alt="Sass" width="40" height="40"/>&nbsp; 
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" title="npm" alt="npm" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" title="Terminal" alt="Terminal" width="40" height="40"/>&nbsp;
  <img src="https://parceljs.org/avatar.66e613b2.avif" title="Parcel" alt="Parcel" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/codepen/codepen-plain.svg" title="CodePen" alt="CodePen" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/slack/slack-original.svg" title="Slack" alt="Slack" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/trello/trello-plain.svg" title="Trello" alt="Trello" width="40" height="40"/>&nbsp;
  <img src="https://browsersl.ist/browserlist-e428d541.svg" title="Browserslist" alt="Browserslist" width="40" height="40"/>&nbsp;
</div>
