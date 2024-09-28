# FRVR Ads campaigns Dashboard 

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- [NextUI](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [Zustand](https://zustand-demo.pmnd.rs)
- [Jest](https://jestjs.io)
- [JSONServer](https://github.com/typicode/json-server)

## How to Use

### Install dependencies


```bash
npm install
```

### Run the development server and the mock database

```bash
npm run dev
```

### Publicly accessible deployment of the dashboard

[Live demo](https://frvr-53bb2.web.app)

## Key Features

1. **Responsive Design**: The dashboard is designed to be user-friendly on both desktop and mobile devices, ensuring a smooth experience across various screen sizes.
  
2. **Key Metrics Display**: Users can view essential ad performance metrics, including:
   - Daily Impressions
   - Ad Requests
   - Revenue

3. **Interactive Filters**: Date and property filters allow users to customize the data displayed on the dashboard for more specific insights.

4. **Loading and Error States**: The application gracefully handles loading states and errors, providing a robust user experience even when issues occur.

## Architectural Decisions

- **State Management**: The application uses Zustand for state management to provide a simple and efficient way to handle the state of the dashboard.
- **Data Fetching**: The dashboard fetches data from a mock API utilizing JSONServer to simulate real-time performance metrics, allowing for easy testing and development without a real backend.
- **Testing**: Jest is used for unit testing, focusing on key functionalities like data rendering and error handling to ensure reliability.

## Future Improvements

- **Real API Integration**: Once available, integrating with a real backend API to fetch live data.
- **Enhanced Analytics**: Adding more metrics to provide deeper insights.
- **User Authentication**: Implementing user authentication for personalized experiences.

## Prioritization of Tasks

1. **UI Development**: Focus on creating a responsive and intuitive user interface.
2. **API Integration**: Ensure smooth data flow from the mock API and handle various data states.
3. **Performance Optimization**: Implement techniques for faster loading times and overall performance improvements.
4. **Testing**: Write more unit tests for key functionalities to maintain code reliability.