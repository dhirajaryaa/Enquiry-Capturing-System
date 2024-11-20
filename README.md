# Enquiry Capturing System 🚀

The **Enquiry Capturing System** is a backend project built using **Node.js**. It captures contact form submissions and stores them directly into a Google Sheet using the Google Sheets API, offering a streamlined solution for managing enquiries.

---

## ⚡ Features
- **Form Submission Handling**: Processes and stores enquiries submitted via a contact form.
- **Google Sheets Integration**: Automatically saves the submitted data in a Google Sheet for easy access and collaboration.
- **Scalable & Secure**: Uses Google Cloud service account for secure API access.

---

## Tech Stack
- **Backend**: Node.js
- **Dependencies**:
  - `express`: To set up the server and handle HTTP requests.
  - `googleapis`: To integrate with Google Sheets API.
  - `dotenv`: To manage environment variables.
  - `nodemon` (development): To auto-restart the server during development.

---

## Prerequisites

### 1. Google Cloud Project Setup
- **Create a Project**: Go to [Google Cloud Console](https://console.cloud.google.com/).
- **Enable the Google Sheets API**: Search for the API and enable it for your project.
- **Create a Service Account**: 
  - Navigate to the **Credentials** section.
  - Create a new service account and download its credentials file (JSON format).
- **Share Your Google Sheet**:
  - Create a Google Sheet to store data.
  - Share it with the service account's email address (found in the JSON file) and grant **Editor** permissions.

### 2. Node.js and npm
Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/dhirajaryaa/Enquiry-Capturing-System.git
   cd Enquiry-Capturing-System
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the project root and add the following:
     ```env
     GOOGLE_SHEET_ID=your-google-sheet-id
     GOOGLE_CREDENTIALS=path-to-your-service-account-credentials.json
     PORT=3000
     ```
   - Replace `your-google-sheet-id` with the ID of your Google Sheet (found in the URL of the sheet).
   - Replace `path-to-your-service-account-credentials.json` with the path to your downloaded credentials file.

4. **Run the Server**:
   ```bash
   npm start
   ```

---

## Contribution

Contributions are welcome! Feel free to fork the repository and submit pull requests for additional features, bug fixes, or improvements.

---

## License

This project is licensed under the **MIT License**. You can use, modify, and distribute it freely.

---

### Contact

For any questions, suggestions, or support, feel free to reach out at `dhirajarya.ptn@example.com`.