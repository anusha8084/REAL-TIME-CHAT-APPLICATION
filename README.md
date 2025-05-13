# REAL-TIME-CHAT-APPLICATION

*COMPANY* : CODETECH IT SOLUTIONS

*NAME* : ANUSHA ADDYOLA

*INTERN ID* : CT04DL81

*DOMAIN* : FRONTEND WEBDEVELOPMENT

*DURATION* : 4 WEEKS

*MENTOR* : NEELA SANTHOSH

*DISCRIPTION* : 
This project involved the complete development of a real-time chat application where users can send and receive messages instantly. The application is structured using a client-server architecture with both components running independently on different ports. It utilizes WebSockets for real-time bidirectional communication and React.js for building a dynamic and responsive frontend. This task demonstrates the integration of frontend and backend technologies to create a seamless chat experience and prepares a foundation for scalable real-time applications.

Tasks Performed
Project Setup and Folder Structure:

Created a parent folder named real-time-chat-application with two main subfolders: client and server.

The client folder contains the frontend code developed using React.js, while the server folder houses the backend WebSocket server using Node.js.

Backend (WebSocket Server) Development:

Set up a simple WebSocket server using Node.js and the ws library.

Implemented logic to handle WebSocket connections, broadcast incoming messages to all connected clients, and manage server-side events.

Configured the server to run independently on port 3001.

Frontend (React.js Application) Development:

Initialized a React.js application using create-react-app inside the client directory.

Built a responsive chat UI that includes a message input box, a send button, and a display area for chat history.

Connected the React frontend to the WebSocket server.

Implemented event handling for sending messages on pressing "Enter" or clicking the "Send" button.

Ensured that messages appear on the screen immediately upon sending or receiving.

Error Handling and Debugging:

Handled common errors such as port conflicts (EADDRINUSE) by identifying and stopping processes using the port.

Resolved React runtime errors related to rendering incorrect data types (e.g., [object Blob]) by ensuring only text messages are rendered.

GitHub Integration:

Created a new GitHub repository titled real-time-chat-application.

Uploaded all project files to GitHub using the web interface.

Organized the repository structure clearly, with appropriate file names and folder hierarchy.

Prepared a visual screenshot of the completed repository to reflect its state after full setup.

Tools and Technologies Used
Programming Languages:

JavaScript (for both frontend and backend)

Frameworks & Libraries:

React.js for the frontend user interface.

Node.js and ws library for WebSocket server functionality.

Platforms & Editors:

Visual Studio Code (VS Code) was used as the primary editor for writing and managing both frontend and backend code.

GitHub was used for version control and to host the project repository.

Utilities:

Command Prompt (cmd) for running servers, executing Git commands, and managing ports.

netstat and taskkill for resolving port conflicts during development.

Application and Use Cases
This real-time chat application demonstrates fundamental real-time communication principles, making it an excellent foundation for more advanced systems such as:

Customer Support Systems: Live chat tools for websites that connect users with support teams in real time.

Collaborative Platforms: Tools like Slack or Microsoft Teams that require live messaging between team members.

Gaming Applications: In-game chat features for multiplayer communication.

Live Event Communication: Messaging systems for webinars or live broadcasts where users can interact instantly.

Educational Tools: Real-time Q&A and discussion interfaces for virtual classrooms.

This project serves as a learning milestone for integrating real-time data transfer mechanisms with modern frontend frameworks. It also reflects practical skills in setting up independent frontend-backend communication, deploying applications, and using GitHub for collaborative code management.


*OUTPUT*:
![Image](https://github.com/user-attachments/assets/7ad8d7b8-e8c4-4add-b2cd-0ef1041b6307)
