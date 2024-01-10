## LIVE

[Google Play Store]()
[Apple App Store]()

## About

This app was made with the help of [Sonny Sangha](https://www.youtube.com/watch?v=AkEnidfZnCU))



This app uses the following:
-Expo  
-React Native  
-Tailwind CSS   
-Redux  


## How  It Works

Users will select a restaurant from the list of displayed restaurants
After a place is selected a list of dished are displayed
You can add dishes to the cart.
Viewing the cart will show you what dishes you have in the cart
In the cart modal the subtotal, sales tax, and delivery fee will be shown and a calculated fina total will be displayed. 
An option to empty cart is in the top right corner
Hitting place order will empty the cart automatically and an animation of the restaurant waiting to accept your delivery will show up
A delivery screen will pop up showing you the location of the restaurant you just ordered. 
And option to "call" your delivery driver will just show Mike Jones number
You also have the option to order more food


## Getting Started

```shell
git clone https://github.com/basilspice/deliveroo-clone.git
```

### Install packages

```shell
npm install
```

### Required .env files


```js
GOOGLE_MAPS_APIKEY=
```


## Available commands
Running commands

| command         | description                              |
| :----------------------------------------------------------------- | :--------------------------------------- |
| `npx expo start`                                                   | Starts a development instance of the app |
| `eas build:configure`                                              | Will start deployment process            |
| `eas build --platform ios ` OR `eas build --platform android`      | Will build based off of platform chosen  |          |
| `eas submit -p ios --latest`                                       | Will submit latest build to Apple Store           |

