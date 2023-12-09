![screen or GIF of your app](https://via.placeholder.com/1000x300)

# FOOD-SHOP-APP

See the live version of [FOOD-SHOP-APP](https://sw-food-shop-app.web.app/).

This project mirrors an online store, offering a range of essential food items like vegetables and fruits. It focuses on the shopping process, starting from the customer adding products to the complete fulfillment, including making a payment and sending emails to customers.

**Main features**:

- Dynamic data management in Firebase for smooth interaction
- Interactive menu for precise product selection
- Addition of products to the shopping cart
- Flexible adjustment of the cart contents before purchase
- Step-by-step guide to complete the transaction
- Secure online payments using Stripe
- Transaction confirmation and rejection notifications via email
- Efficient navigation through content pagination
- Accessibility on mobile devices and computers

&nbsp;

## 💡 Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

&nbsp;

## 💿 FRONTEND Installation

1. Clone the repository:

```
git clone [repository_url]
```

2. Navigate to the project directory:

```
cd [YOUR-REPO-NAME]
```

3. The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). Having them installed, type into the terminal:

```
npm i
```

4. Create .env in main directory and paste empty variables from .env.example

```
REACT_APP_FIREBASE_APP_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
```

5. Create firebase project

6. Initialize firebase project and choose one You just created

```
firebase init
```

7. Paste data to variables in .env

8. Initialize firebase database and past address to variable in .env for example:

```
REACT_APP_FIREBASE_URL=https://project-name-rtdb.europe-west1.firebasedatabase.app
```

9. Set firebase database rules:

```
{
  "rules": {
    ".read": true,
    ".write": false
  }
}
```

10. Create navList object in firebase database and import ./assets/data/navList (disclaimer: navigation data are fetching because of the option "adding new products categories". The option will be available in the future administration panel)

11. Do the same like into point 10. with: 'products', 'productPrices', 'deliveryMethods', 'paymentMethods'

12. To easier testing BE create firebase hosting and deploy it (Unless you want to test application with localhost, and using ngrok to tunneling bandwidth from stripe webhook):

```
npm run build
```

```
firebase deploy --only hosting
```

&nbsp;

## 💿 BACKEND Installation

1. Navigate to the functions directory:

```
cd functions
```

2. Install dependencies:

```
npm i
```

3. Create .env in functions directory and paste empty variables from .env.example (If You are using hosting paste Your domain and add '/cart' at the end)

```
DOMAIN=domain/cart
STRIPE_PRIVATE_KEY=
ENDPOINT_SECRET=
CLIENT_ID=
CLIENT_SECRET=
REDIRECT_URI=
REFRESH_TOKEN=
MY_EMAIL=
DATABASE_URL=
```

4. Create secretAdminKeyShop.json file (from secretAdminKeyShop.example.json) in functions directory and paste data from firebase > settings > project settings > service accounts >

- generate new private key and paste it to secretAdminKeyShop.json

```
{
  "type": null,
  "project_id": null,
  "private_key_id": null,
  "private_key": null,
  "client_email": null,
  "client_id": null,
  "auth_uri": null,
  "token_uri": null,
  "auth_provider_x509_cert_url": null,
  "client_x509_cert_url": null,
  "universe_domain": null
}
```

- copy databaseURL to .env

```
DATABASE_URL=
```

5. Activate functions on firebase

6. Set in FRONTEND .env functions endpoint by copy this and changing project-id:

```
REACT_APP_STRIPE_CONNECTION_PROVIDER_ENDPOINT=https://us-central1-<project-id>.cloudfunctions.net/stripeConnection/create-checkout-session
```

7. Next build and deploy function:

```
npm run build
```

```
firebase deploy --only functions
```

8. Create [stripe](https://stripe.com/en-pl) account. Go to developers > API key >

- reveal secret key and paste into:

```
STRIPE_PRIVATE_KEY=
```

9. Go to developers > Webhooks >

- add endpoint
- paste there url connection link:

```
https://us-central1-sw-<project-id>.cloudfunctions.net/stripeConnection/webhook
```

- select events:
  - checkout.session.completed
  - customer.created
  - charge.failed
- reveal signing secret and paste into:

```
ENDPOINT_SECRET=
```

10.

&nbsp;

## 💳 Payment simulation

&nbsp;

## 🤔 Solutions provided in the project

- one

&nbsp;

- two:

```
some example code

more code :)
```

&nbsp;

- three

| Issue | Solution             |     |
| ----- | -------------------- | --- |
| one   | `short code example` |     |
| two   | `short code example` |     |
| thre  | `short code example` |     |

&nbsp;

- four - some shortcut <kbd>Ctrl</kbd> + <kbd>C</kbd>

&nbsp;

- five - example with a screenshot
  <img alt='what it is' src="https://via.placeholder.com/500x200" />

&nbsp;

## 💭 Conclusions for future projects

I would like to improve...

#### This is the first issue:

```
and this is a code example
```

#### This is the second issue:

```
and this is a code example
```

&nbsp;

## 🙋‍♂️ Feel free to contact me

Write sth nice ;) Find me on...

&nbsp;

## 👏 Thanks / Special thanks / Credits

Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) – for providing me with this task and for code review.
