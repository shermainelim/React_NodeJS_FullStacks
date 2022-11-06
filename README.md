# React_NodeJS_MySQL Chocolate Ticket System 2022

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

# Youtube Link to Present App and Testing
https://youtu.be/hbvS_lvyVM8

# Available Testing Credentials

# Credential- Admin Login to create new staff:
- username: AD01100
- password: ^([)-AKp$vgy*

# Credential- Resident Data to create/check queue (can get the rest from Resident script)
Customer/Resident 1:
- fullName: John Don Bach
- address: Blk 125, Dover St 9, Unit 02-91, S098125
- Loyalty Card Fin Last 5 Digit: 2121G
- mobileNo: 91112000

# Credential- Resident 2:
- fullName: Nurul binte Musa 
- address: Blk 8, Kallang St 8, Unit 10-201, S112008, 
- Loyalty Card Fin Last 5 Digit: 1541D
- mobileNo: 91112111

# Credential- Resident 3:
- fullName: Jenny Smith Landi
- address: Blk 10, Paya Lebar St 2, Unit 017-31 , S700010
- Loyalty Card Fin Last 5 Digit: 1041H
- mobileNo: 92222000


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
2)	Customer/Resident Category: If a resident data doesn’t exist in database, show alert error. 
3)	Customer/Resident Category: If a ticket number exist , create ticket button is disabled/not available. 
4)	Admin , Staff Category: Login fields cannot be empty and if data don’t exist in database, show alert error. 
5)	Staff Category: Login input from UI is matched with hashed password from database. 
6)  Staff Category: When at Staff Page to verify ticket number, if fields are empty, show alert error. 
7)	Staff Category: When at Staff Page to verify ticket number, if customer/resident ticket , show alert error. 
8)	Staff Category: When at Staff Page to verify ticket number, if customer/resident has redeemed chocolate already, issue chocolate bytton is disabled/not available. 

# Web
![image](https://user-images.githubusercontent.com/65886071/200170406-7604200a-e84b-48f9-b265-9c8c1b679fbc.png)

# Mobile Responsive Flow

- Resident get ticket number after nput last 5 digit of Loyalty Card Fin No and their mobile no.
- Go to welcome page. Pick Customer/Resident Category.

![image](https://user-images.githubusercontent.com/65886071/200170448-df347fa5-aa92-47e1-aaba-2df370d95fb9.png)

- Go to Customer/Resident Category and enter particulars.

![image](https://user-images.githubusercontent.com/65886071/200170541-278ff831-cac7-49a1-9ae0-1cf13c614725.png)

- Customer/Resident check if they can get chocolate ticket number , if ticket number already exist, cannot create another.

![image](https://user-images.githubusercontent.com/65886071/200170608-da7f1fa0-1cd1-4d0a-b02a-e56b9832f599.png)
![image](https://user-images.githubusercontent.com/65886071/200170774-50af9826-acc1-4910-849b-27a3e120d840.png)

- Customer/Resident send the chocolate ticket number to their email. Logout. 

![image](https://user-images.githubusercontent.com/65886071/200170703-67ec4c09-a07e-4cca-9304-c7c4f52c28e7.png)

# Admin create new staff
- Go to Admin Category and login to create new staff.

- Credential- Admin Login to create new staff:
- username: AD01100
- password: ^([)-AKp$vgy*

![image](https://user-images.githubusercontent.com/65886071/200170835-58dc4467-cb46-49a4-b63b-939cde103cdc.png)

- Admin Category has form validation for create new staff

![image](https://user-images.githubusercontent.com/65886071/200170985-3bf817f8-6a59-44bf-ba0f-3082c493c9a6.png)


- Staff password is hashed in backend.
![image](https://user-images.githubusercontent.com/65886071/200171030-ea9992ed-42ec-42e4-b49c-f41119a6359c.png)

- Staff creation successful. 

![image](https://user-images.githubusercontent.com/65886071/200171065-ddb241f3-4046-49b6-beca-6e911888ab5b.png)

- Go to Staff Category , Login , verify chocolate ticket number and issue chocolate to customers/residents.

![image](https://user-images.githubusercontent.com/65886071/200171227-ce5152c8-2bc7-439d-82ee-c71b4b2b7549.png)

- Staff issue chocolate bar to customer/resident and complete chocolate ticket status.

![image](https://user-images.githubusercontent.com/65886071/200171261-18a0abc7-2d0f-4100-b03b-44c0bee948bb.png)

- Issue Chocolate Bar button is disabled if customer/resident has collected before. 

![image](https://user-images.githubusercontent.com/65886071/200171293-9ddaad83-539d-4db8-b8f1-e29a3fb0b0d2.png)


