# Blog Application

This is a simple blog application built using Next.js and React.js. The application allows users to view a list of blog posts, read individual posts, and submit new posts. The project includes server-side rendering with Next.js and styling using Tailwind CSS and Material Tailwind.

## Features

- Home Page: Displays a list of blog posts fetched from a mock API.
- Post Detail Page: Displays the details of a single blog post.
- Create Post Page: A form to create a new blog post.
- Navigation: Simple navigation between pages.
- Styling: Basic styling using Tailwind CSS and Material Tailwind.
- Loading State: Shows loading spinner while fetching data.
- Notifications: Displays success and error notifications using react-toastify.

## Technical Requirements

- **Next.js**: For server-side rendering and routing.
- **React.js**: For building UI components.
- **Redux**: For state management.
- **API Integration**: Fetches blog posts data from a JSON placeholder API.
- **Styling**: Uses Tailwind CSS and Material Tailwind for styling.
- **Loading Spinner**: Uses react-loading for displaying loading spinners.
- **Notifications**: Uses react-toastify for displaying notifications.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jamaln02/Blog-App.git
   cd blog-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000] in your browser to see the application.

## Project Structure

```
blog-app/
├── redux-system/
│   ├── redux-slices/
│   │   └── postslice.jsx
│   └── store.jsx
├── src/
│   ├── app/
│   │   ├── addpost/
│   │   │   └── page.jsx
│   │   ├── posts/
│   │   │   ├── [postid]/
│   │   │   │   └── page.jsx
│   │   │   └── page.jsx
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── MainLayout.jsx
|   |   └── page.js
│   └── component/
│       ├── Header.jsx
│       └── PostsList.jsx
├── .eslintrc.json
├── .gitignore
├── clientExports.js
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.js


```

## Pages and Components

- **Home Page (`src/app/page.js`)**: Displays a list of blog posts.
- **Post Detail Page (`src/app/posts/[postid]/page.jsx`)**: Displays the details of a single blog post.
- **Create Post Page (`src/app/addpost/page.jsx`)**: Contains a form to create a new blog post.
- **Navbar (`src/component/Header.jsx`)**: Navigation bar with links to Home and Create Post pages.
- **PostList (`src/component/PostsList.jsx`)**: Displays a list of posts with excerpts and links to full posts.
- **PostDetail (`src/app/posts/[postid]/page.jsx`)**: Displays the details of a single post.
- **CreatePostForm (`src/app/addpost/page.jsx`)**: Form for creating a new post.

## API

The application fetches blog posts from the JSONPlaceholder API:

- **Fetch all posts**: `https://jsonplaceholder.typicode.com/posts`
- **Fetch a single post**: `https://jsonplaceholder.typicode.com/posts/${id}`

## Enhancements

- **Loading State**: Implemented loading state using react-loading while fetching data.
- **Form Validation**: Basic form validation for the create post form.
- **Notifications**: Implemented success and error notifications using react-toastify.

## Demo

A video demo of the project can be found [here](https://www.youtube.com/watch?v=vEphRK1hYwQ).

## Author

- **Jamal Nabaa**
#
