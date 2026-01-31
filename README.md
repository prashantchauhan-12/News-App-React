# NewsMag - React News Application

NewsMag is a modern, responsive news aggregation application built with React and Vite. It fetches real-time top headlines from the NewsAPI, offering a seamless way to stay updated with the latest events across various categories.

## 🚀 Features

-   **Real-time News**: Fetches the latest top headlines from [NewsAPI](https://newsapi.org/).
-   **Category Filtering**: informative navigation bar allows users to filter news by categories such as:
    -   Technology
    -   Business
    -   Health
    -   Sports
    -   Entertainment
-   **Responsive Design**: Built with Bootstrap to ensure a great experience on both desktop and mobile devices.
-   **Dynamic Content**: Automatically handles missing images and descriptions with stylish fallbacks.
-   **Modern UI**: Dark mode themed cards for a sleek, comfortable reading experience.

## 🛠️ Technologies Used

-   **Frontend Library**: [React.js](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Bootstrap 5](https://getbootstrap.com/)
-   **API**: [NewsAPI](https://newsapi.org/)
-   **State Management**: React Hooks (`useState`, `useEffect`)

## 📦 Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/news-mag.git
    cd news-mag
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure API Key:**
    -   Get your free API key from [NewsAPI](https://newsapi.org/).
    -   Create a `.env` file in the root directory:
        ```bash
        touch .env
        ```
    -   Add your API key to the `.env` file:
        ```env
        VITE_API_KEY=your_api_key_here
        ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## 📂 Project Structure

```
news-mag/
├── public/
├── src/
│   ├── assets/         # Images and static assets
│   ├── Components/     # React components (Navbar, NewsBoard, NewsItem)
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Entry point
├── .env                # Environment variables (API Key)
└── package.json
```
