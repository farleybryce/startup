# Your startup name here

[My Notes](notes.md)

The application is a game where players attempt to reach a target word from a starting word by accessing the definition of an intermediate word that appears in the definition of either the starting word or a previously accessed intermediate word. The starting word definition will be displayed and any of the words that appear within it can be clicked on to access their definition, the player can then select a word in this second word's definition. This process is then repeated untill the target word is accessed. A counter will determine how many steps it took the player and a scoreboard will rank players for a daily challenge.

> [!NOTE]
> This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
> If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] Proper use of Markdown
- [ ] A concise and compelling elevator pitch
- [ ] Description of key features
- [ ] Description of how you will use each technology
- [ ] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Do you enjoy word games, but want a game that tests your knowledge of word meaning rather than orthography. This game lets you traverse the English language by accessing words through definitions by attempting to reach a target word from a starting word. This game allows you to explore how words are connected, learn new definitions, and expand your vocabulary. In a way, you are trying to prove that a target word helps to define a starting word even if it would appear that the two words are unrelated.

### Design

![Design image](startup_design1.jpg)

The website features three pages, a login page, a gameplay page, and a leaderboard page. The login page features boxes to enter a username and password. The gameplay page displays the starting word and target word. Below these is the currently selected word along with it's phonetic spelling and definitions. Underneath the definitions is a display showing other players that are online and their current word. At the top of the page is a small navigation bar to select the leaderboard page. The leaderboard page shows a ranking of all the players.

```mermaid
sequenceDiagram
    actor You
    actor Friend
    You->>Server: your word
    Friend->>Server: friend's word
    Server-->>You: friend's word
    Server-->>Friend: your word
```

### Key features

- Secure login over HTTPS
- Ability to choose which word in the definitions to link to
- Ability to view the current words of other users in realtime
- Generation of a new puzzle/game every day
- Leaderboard displaying player rankings

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses HTML structure for the three pages of the application. 
- **CSS** - Styling to give the website an appealing look. Use of color, whitespace, font, etc.
- **React** - Allows for login, displaying new definitions, words in definitions to be clicked on, and switching between pages.
- **Service** - Fetching the definition using https://api.dictionaryapi.dev/api/v2/entries/en/<word> or a similar api. Used for regestering, logging in, and logging out users. Submitting and retrieving scores and daily challenges.
- **DB/Login** - Stores authentication informaiton, users, target words, and scores in a database.
- **WebSocket** - Users can see what word other users are currently on in realtime.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Visually appealing colors and layout. No overflowing elements.** - I did not complete this part of the deliverable.
- [ ] **Use of a CSS framework** - I did not complete this part of the deliverable.
- [ ] **All visual elements styled using CSS** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [ ] **Use of a imported font** - I did not complete this part of the deliverable.
- [ ] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
