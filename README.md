# SuperMarket Management System

A modern web application for managing supermarket staff and equipment, built with Next.js and TypeScript.

## Features

### Staff Management

- Add and remove workers and cashiers
- Track employee information (name, email, phone)
- Manage cashier-machine assignments
- Monitor employee status (active/inactive)

### Machine Management

- Add and remove machines
- Track machine numbers and status
- Grid-based machine overview

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  ├── app/              # Next.js app directory
  ├── components/       # React components
  │   ├── Staff/       # Staff management components
  │   └── UI/          # Reusable UI components
  └── types/           # TypeScript type definitions
```

## Features Overview

### Staff Management Component

- **Worker Management**:

  - Add new workers with name, email, and phone
  - Track worker status
  - Remove workers from the system

- **Cashier Management**:

  - Add cashiers with machine assignments
  - Track cashier details and status
  - Remove cashiers from the system

- **Machine Management**:
  - Add new machines with unique numbers
  - Track machine status
  - Remove machines from the system

## UI/UX Features

- Modern dark theme interface
- Responsive grid and list layouts
- Interactive forms with validation
- Status indicators for machines and employees
- Smooth transitions and hover effects
