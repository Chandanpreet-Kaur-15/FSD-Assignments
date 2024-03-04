## Newsletter Automation Project
Welcome to the Newsletter Automation project! This Python script automates the process of sending newsletters to a list of recipients whose email addresses are stored in an Excel sheet. The script utilizes the pandas library for handling Excel data and the smtplib library for sending emails.

# Project Overview
1. Features
- Excel Sheet: Reads email addresses, first names, and content from an Excel sheet named Newsletter.xlsx.
- Email Template: Utilizes an HTML email template with placeholders for the recipient's first name and content.
- SMTP Server: Connects to an SMTP server (e.g., Gmail) to send emails securely.
- Sender's Email Account: Requires the sender's email address and password (for authentication) to send emails.
- Email Sending Loop: Iterates through the Excel sheet, replacing placeholders, and sends personalized emails to each recipient.
- Success Message: Displays a success message once all emails are sent.

2. Setup Instructions
Install required libraries using pip install pandas and pip install secure-smtplib.

Replace the placeholder values for sender_email and sender_password with your email credentials.
Update the SMTP server details in server = smtplib.SMTP('smtp.gmail.com', 587) with your email provider's SMTP information.
Ensure your Excel sheet (Newsletter.xlsx) is correctly formatted with columns: Email, FirstName, and Content.

# Run the script: 
- python newsletter.py

3. Example Email Template
html code:
<html>
  <head></head>
  <body>
    <p>Hi {firstname},</p>
    <p>{content}</p>
  </body>
</html>
You can modify the template according to your needs.

4. Dependencies
- python
- pip : python -m ensurepip --default-pip
- pandas: Used for data manipulation and analysis.
- smtplib: Provides an interface for sending emails using the Simple Mail Transfer Protocol (SMTP).

5. Contribution
Feel free to explore and enhance the project! If you encounter any issues or have suggestions for improvement, please don't hesitate to reach out.