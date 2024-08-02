# Post Craze Backend

This is an Express.js application with the following functionalities:
- Retrieve all posts
- Create a new post
- Retrieve a post by its ID
- Create a comment on a post

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/devmaniac1/PostCraze-backend.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd PostCraze-backend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

## Usage

To run Post Craze locally:

1. **Start the development server:**

   ```bash
   node index.js || nodemon index.js
   ```

2. **Open your browser and navigate to:**

   ```bash
   http://localhost:3000
   ```

## API Endpoints

1. **Get All Posts**
   
   ```bash
   https://localhost:3000/posts/getPosts
   ```

2. **Get Post by Id**
   
   ```bash
   https://localhost:3000/posts/:postId
   ```

3. **Create Post**
   
   ```bash
   https://localhost:3000/posts/createPost
   ```

4. **Create Comment for Post**
   
   ```bash
   https://localhost:3000/posts/:postId/comments
   ```

