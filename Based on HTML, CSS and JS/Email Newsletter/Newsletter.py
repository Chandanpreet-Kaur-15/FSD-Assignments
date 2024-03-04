import pandas as pd
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Load the Excel file with explicit column names
column_names = ['Email', 'FirstName', 'Content']
emails_df = pd.read_excel('Newsletter.xlsx', sheet_name='Sheet1', names=column_names)

# Print DataFrame to inspect
print(emails_df)


# Email content, settings, and SMTP server setup...
subject = "Your Daily Newsletter"
body_template = """
<html>
  <head></head>
  <body>
    <p>Hi {firstname},</p>
    <p>{content}</p>
  </body>
</html>
"""

# Email settings
sender_email = " "  # Replace with your email
sender_password = " "  # Replace with your password

# Set up the SMTP server
server = smtplib.SMTP('smtp.gmail.com', 587)  # Replace with your SMTP server
server.starttls()
server.login(sender_email, sender_password)

# Send the email
for index, row in emails_df.iterrows():
    receiver_email = row['Email'] 
    firstname = row['FirstName']  
    content = row['Content']  

    # Format the email body using the template
    body = body_template.format(firstname=firstname, content=content)

    # Create the email message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = subject

    # Attach the HTML body to the email
    msg.attach(MIMEText(body, 'html'))

    # Send the email
    server.send_message(msg)

    # Clear the message for the next iteration
    del msg

# Quit the SMTP server
server.quit()
print("Emails sent successfully!")
