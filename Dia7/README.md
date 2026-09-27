# Inventory System

## About
A simple inventory system created to practice the skills learned over the past few days.

In this project, I implemented modules and features to manipulate arrays and retrieve information from sample data.

The system is simple, but it allowed me to practice and demonstrate the main concepts I learned during the first week.

## Features
Manage product data.

Generate an inventory report.

Add, update, and remove products.

Search for products by ID.

Filter products by category.

Identify low-stock products.

Identify out-of-stock products.

Validate product data and handle errors.

## Concepts practiced
Arrays and objects

Array methods (map, filter, find, some, and reduce)

Functions

Modules

Import / Export

Destructuring and spread syntax

Data validation

Error handling with try/catch and throw

Immutable data manipulation

## Project structure
The system has a simple modular structure:

data/ contains the sample product data used by the application.

services/ contains the functions used to validate, search, add, update, remove, and filter products.

reports/ contains the function responsible for generating an object with inventory statistics.

app.js is the main file. It integrates the data, services, and report module and demonstrates the system's features.

## How to run
To run this system, download the project folder and navigate to it using the terminal.

Then run the following command:

node app.js