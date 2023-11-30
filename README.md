# Course Registration App

## Overview

This repository contains the source code for a simple Course Registration web application developed for Aurum University. The application allows students to log in, view their dashboard, select courses, and view their selected course list.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Features

1. **Login System**: Students can log in using their student ID and password.
2. **Dashboard**: Displays student details upon successful login.
3. **Course Selection**: Allows students to view and select available courses.
4. **Selected Course List**: Displays a list of courses selected by the student.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/course-registration-app.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   - Development mode (with watch):

     ```bash
     npm run watch
     ```

   - Production build:

     ```bash
     npm run build
     ```

4. Open the application in a web browser:

   - [http://localhost:8080](http://localhost:8080) (default)

## File Structure

- `src/`: Contains source code files
  - `js/`: JavaScript files
  - `scss/`: SCSS styles
  - `index.html`, `dashboard.html`, `course-selection.html`, `selected-courses.html`: HTML templates
- `dist/`: Output directory for bundled files
- `webpack.config.js`: Webpack configuration
- `package.json`: Node.js package file
- `LICENSE`: MIT License file

## Dependencies

- Bootstrap: v5.3.2
- Popper.js Core: v2.11.8

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
