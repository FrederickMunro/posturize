# Posturize

## Description
Posturize is a smart posture corrector aimed at significantly improving the user’s back health. The device works by using a flex sensor to monitor the angle of the wearer’s back. An Arduino board is utilized to process and send the information to a mobile app which aids the user in identifying a correct posture. Furthermore, the application will warn the user when they display an unhealthy form and provide day-to-day statistics regarding the user’s posture.
## Features

- Live posture feedback
- Exercise to-do list 

## Technologies Used
- React-native
- Node.js 
- Arduino board 
- Flex Sensor

## Team Members

| Name                         | GitHub Username  | Student ID |
| ---------------------------- | ---------------- | ---------- |
| Tyson Pham                   | TysonPham        | 40017829   |
| Frederick Munro              | FrederickMunro   | 40063651   |
| Khagik Astor                 | Kastor14         | 40099665   |
| Ejazali Rezayi               | ejazali-rezayi   | 40101892   |
| Daren Kafafian               | Dkafaf           | 40100511   |
| Mahmoud Idlbi                | --------------   | 40016792   |

## BackEnd
Node.js and various libraries (Socket.io and Serialport) are used to read incoming serial data from the flex sensor. A parser is used to read the incoming serial data that is in the form of raw binary data and transform them into readable numbers. 
Websockets are used to exchange the serial data into the frontend for real-time data. 

### Run BackEnd
```
cd backend && node ws_server.js
```

## FrontEnd
The user interface is built with React Native

### Run FrontEnd 
Download [Expo Go] (https://expo.dev/client) onto mobile device 
```
expo start
```
Scan QR code with the application



