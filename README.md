# React_NodeJS_MySQL Chocolate Ticket System -2022

# A Chocolate Ticketing System where customers can redeem chocolate from staff.

- React State Management - Redux Toolkit
- Front End -  React JS
- Backend - Node JS
- Relational Database - MYSQL
- Web and mobile responsive
- SMTP Email Integration
- Custom Button Styling

# Public Deployed Website , Frontend on Netlify and Backend on Heroku
https://chocolatelabs.netlify.app/


# Happy Flow
1) The welcome page shows Customer/Resident , Staff and Admin option. 
2) Choose Customer/Resident category first. 
3) Resident will go to resident page and input last 5 digit of Loyalty Card Fin No and their mobile no. Press verify to see if they already obtained a chocolate ticket number or no ticket number exist yet.
3.1)  If no ticket number, then press button to add chocolate ticket.
3.2)  Customer/Resident inputs an email to send the chocolate ticket number to their email.
3.3) Customer/Resident then proceed to approach staff. 

4) Admin will login and create new staff account that has hashed password. 
5) Staff will login and key in customer/resident’s chocolate ticket number , last 5 digit of Loyalty Card Fin No and their mobile no to verify. 
6) Chocolate Ticket verification will show particulars of the customer/resident as form of verification. 
7) There is also a completed status to show if collection/redemption process has been completed.  If completed status is empty, proceed to issue chocolate, else if completed status is true, no chocolate is issued. 
8) Complete Happy Flow. 

# Validation Checks
1)	Admin Category: When creating a new staff account, inputs have validation for confirm password and empty fields.
2)	 Resident Category: If a resident data doesn’t exist in database, show alert error. 
3)	Customer/Resident Category: If a ticket number exist , resident cannot create a ticket number again.
4)	Admin , Staff Category: Login fields cannot be empty and if data don’t exist in database, show alert error. 
5)	Staff Category: Login input from UI is matched with hashed password from database. 
6)	Staff Category: When at Staff Page to verify ticket number, if customer/resident ticket doesn’t exist, show alert error. 
7)	Staff Category: When at Staff Page to verify ticket number, if customer/resident data or ticket doesn’t exist, show alert error. 
8)	Staff Category: When at Staff Page to verify ticket number, if fields are empty, show alert error. 
