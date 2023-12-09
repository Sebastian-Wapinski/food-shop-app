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

## ⚙️ Technologies

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

4. Create .env in main directory and paste empty variables from .env.example:

```
REACT_APP_FIREBASE_APP_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
```

5. Create firebase project

6. Paste data to variables in .env

7. Initialize firebase database and past address to variable in .env for example:

```
REACT_APP_FIREBASE_URL=https://project-name-rtdb.europe-west1.firebasedatabase.app
```

8. Set firebase database rules:

```
{
  "rules": {
    ".read": true,
    ".write": false
  }
}
```

9. Create navList object in firebase database and import ./assets/data/navList (disclaimer: navigation data are fetching because of the option "adding new products categories". The option will be available in the future administration panel)

10. Do the same like into point 10. with: 'products', 'productPrices', 'deliveryMethods', 'paymentMethods'

11. To easier testing BE create firebase hosting and deploy it (Unless you want to test application with localhost, and using ngrok to tunneling bandwidth from stripe webhook):

```
firebase init
```

- Choose hosting and paste to firebase.json this config:

```
{
  "functions": [
    {
      "source": "functions",
      "codebase": "default",
      "ignore": [
        "node_modules",
        ".git",
        "firebase-debug.log",
        "firebase-debug.*.log"
      ],
      "predeploy": [
        "npm --prefix \"$RESOURCE_DIR\" run lint"
      ]
    }
  ],
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

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

7. Create [stripe](https://stripe.com/en-pl) account. Go to developers > API key >

- reveal secret key and paste into:

```
STRIPE_PRIVATE_KEY=
```

8. Go to developers > Webhooks >

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

9. In Google Cloud > APIs & services > OAuth consent screen

- Create external app and add Test user (emailName sends emails to customers)

- You can watch also video on [YouTube](https://www.youtube.com/watch?v=-rcRf7yswfM&list=PL9MMrvHUTay_1wD7kYqiAPSyuIpPh6j71&index=13)

10. Go to Google Cloud > APIs & services> Credentials > Click create Credentials > OAuth Client ID

- Into Authorized redirect URIs add - https://developers.google.com/oauthplayground
- Go to created OAuth 2.0 Client IDs and copy to .env:

```
CLIENT_ID=
CLIENT_SECRET=
REDIRECT_URI=https://developers.google.com/oauthplayground
```

- also add to .env email's name to notify customers with emails:

```
MY_EMAIL=
```

11. Create an refresh token in [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/):

- first open options and check 'Use your own OAuth credentials'
- next past credentials generated in step before
- finally into 'Input your own scopes' choose https://mail.google.com and Authorize APIs

Then in step 2 You can get refresh token and paste it to .env:

```
REFRESH_TOKEN=
```

12. Build and deploy function:

```
cd ..
```

```
npm run build
```

```
firebase deploy
```

&nbsp;

## 💳 Payment Simulation

- Payment acceptation: 4242 4242 4242 4242
  - experience date must be older then today
  - any cvc
- Payment rejection: 4000 0000 0000 0002

&nbsp;

## 💡 Solutions Provided In The Project

- Reusable function to fetch data from firebase database:

```
export const setDataFromFirebaseDatabase = (path, dataCreator, dataSetter, setReduxState, link, navigate) => (dispatch, getState) => {
  const databaseRef = ref(database, path)

  return onValue(databaseRef, (snapshot) => {
    const rawData = snapshot.val()
    if (rawData === null) return navigate('*')
    const data = dataCreator(rawData)
    dataSetter(data)
    dispatch(setReduxState(data, link))
  })
}
```

&nbsp;

- Utilizing recursion to process data retrieved from Firebase:

```
export const createData = (rawData) => {
  const { hasSubcategory } = rawData
  const array = Object.entries(rawData)
  return array
    .filter((item) => {
      const key = item[0]
      return key !== 'hasSubcategory'
    })
    .map((item) => {
      const key = item[0]
      const value = item[1]

      if (hasSubcategory) {
        const subCategoryData = createData(value)
        return subCategoryData
      }

      return {
        ...value,
        id: key
      }
    })
    .flat(Infinity)
}
```

&nbsp;

- Pagination restricted only to 5 displaying pages

![screen or GIF of your app](https://via.placeholder.com/500x150)

&nbsp;

- Form created using a reusable component:

```
formCreationData.map(input => {
          const { label, id, validationParams, isRequired, placeholder } = input
          return (
            <StyledInputContainer key={id}>
              <StyledLabel
                htmlFor={id}
                isRequired={isRequired}
              >
                {label}
              </StyledLabel>
              <StyledInput
                autoComplete={'one-time-code'}
                type={'text'}
                id={id}
                errors={errors}
                placeholder={placeholder}
                {...register(id, { ...validationParams })}
              />
            </StyledInputContainer>
          )
        })
```

&nbsp;

- Utilizing styled-components for enhanced style management and passing calculated values:

```
// src/components/ProductCard.js
...
 <StyledProductContainer
    $isActive={accessibility > 0}
  >
...
```

```
// src/components/ProductCard.styled.js

const StyledProductContainer = styled.div`
...
z-index: 1;

${
  props => props.$isActive && css`
  &:hover {
    ...
    z-index: 2;
  }
  `
}
`
```

&nbsp;

| Issue                                                                   | Solution                           |     |
| ----------------------------------------------------------------------- | ---------------------------------- | --- |
| Long time of fetching data                                              | Caching data fetched from firebase |     |
| Necessity of managing many pages                                        | Usage of React Router              |     |
| Essential to store, modify, and maintain the state of the shopping cart | Usage of React Redux               |     |
| Requirement for processing payments                                     | Usage of Stripe                    |     |
| Necessity of sending notification emails to customers                   | Usage of OAuth 2.0                 |     |

&nbsp;

## ⏳ Future Ideas To Develop

- Allowing customers filtering and sorting products at particular categories
- Adding products to Favorites

&nbsp;

## 🙋‍♂️ Feel free to contact me

Thank you for investing your time. I hope you enjoyed exploring my project and have a pleasant experience testing it. For any inquiries, feel free to reach out to me via email at sebastian.pawel.wapinski@gmail.com.

&nbsp;

## 👏 Thanks

I am truly grateful for the guidance and support provided by my mentors. A heartfelt thank you to each of them for their invaluable contributions.

#### Mateusz Choma - [coderoad](https://coderoad.pl/)

#### Mateusz Bogolubow - [devmentor](https://devmentor.pl/)

#### [Akademia Samouka](https://akademiasamouka.pl/) - Mateusz Bogolubow i Mateusz Choma
