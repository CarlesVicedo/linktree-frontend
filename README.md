# LinkTree

LinkTree is a web application that allows users to create a personalized page with links to their social media profiles and other important websites. This project is built using modern web technologies including React, TypeScript, and Vite.

## Features

- **User Profiles**: Create and manage user profiles with custom handles, descriptions, and profile images.
- **Social Links**: Add, edit, and reorder social media links.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Authentication**: Secure user authentication and authorization.
- **Real-time Updates**: Instant updates to user profiles and links.

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **State Management**: React Query
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **HTTP Client**: Axios
- **Testing**: Jest, React Testing Library
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone [https://github.com/yourusername/linktree.git](https://github.com/CarlesVicedo/linktree-frontend.git)
   cd linktree
   ```
  
2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

   ### Running the Application

1. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To build the application for production, run:

```sh
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` directory.

### Running Tests

To run the tests, use the following command:

```sh
npm test
# or
yarn test
```

## Project Structure

```plaintext
├── src
│   ├── api
│   │   └── LinkTreeAPI.ts
│   ├── components
│   │   ├── Header.tsx
│   │   ├── LinkTree.tsx
│   │   ├── LinkTreeInput.tsx
│   │   ├── LinkTreeLink.tsx
│   │   ├── NavigationTabs.tsx
│   │   └── SearchForm.tsx
│   ├── config
│   │   └── axios.ts
│   ├── utils
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public
│   └── index.html
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://react-query.tanstack.com/)
- [Axios](https://axios-http.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)