# Project: Eltrocate

This project aims to provide information about the currency exchange rates for USD, MLC, and CUP in Cuba.

## Overview

Eltrocate is a web application that allows users to easily check the current exchange rates for USD, MLC (Moneda Libremente Convertible), and CUP (Cuban Peso) in Cuba. The application provides real-time data sourced from reliable financial institutions.

## Features

-   Currency Conversion: Users can convert between USD, MLC, and CUP using the latest exchange rates.
-   Historical Data: Eltrocate provides historical exchange rate data, allowing users to track currency fluctuations over time.
-   View posts about the situation in Cuba: Users can view posts about the situation in Cuba and the impact on the economy.
-   User Authentication: Eltrocate supports user authentication, allowing users to create accounts and log in to access additional features like commenting and liking posts.
-   Comment posts: Users can comment on posts to share their thoughts and opinions.
-   Like posts: Users can like posts to show their support or agreement.

## Installation

To install and run Eltrocate locally, follow these steps:

1. Clone the repository: `git clone https://github.com/GuillermoPerez32/eltrocate.git`
2. Navigate to the project directory: `cd eltrocate`
3. Install laravel dependencies: `composer install`
4. Install npm dependencies: `npm install`
5. Create a `.env` file by copying the `.env.example` file: `cp .env.example .env`
6. Generate an application key: `php artisan key:generate`
7. Create a new database and update the `.env` file with your database credentials
8. Run the database migrations: `php artisan migrate`
9. Seed the database with initial data: `php artisan db:seed`

## Running the Application

To run Eltrocate locally, use the following command to start the laravel serve:

```bash
php artisan serve
```

Open another terminal and start the npm server:

```bash
npm run dev
```

## Usage

Once the application is running, open your web browser and navigate to `http://localhost:3000` to access Eltrocate. From there, you can explore the different features and functionalities offered by the application.

## Contributing

Contributions to Eltrocate are welcome! If you have any ideas, bug reports, or feature requests, please submit them through the GitHub repository's issue tracker.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
