# CarRental

A modern car rental web application built with React and Vite, featuring both user and owner interfaces for seamless car booking and management.

## Features

### User Features
- Browse available cars
- View detailed car information
- Make bookings
- Manage personal bookings
- Responsive design for all devices

### Owner Features
- Dashboard for overview
- Add new cars to the inventory
- Manage existing cars
- Handle booking requests
- Dedicated owner interface

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Linting**: ESLint

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/CarRental.git
   cd CarRental
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Owner/          # Owner-specific components
│   └── ...
├── pages/              # Page components
│   ├── Owner/          # Owner dashboard pages
│   └── ...
├── assets/             # Static assets
└── ...
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
