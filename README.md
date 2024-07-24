This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About this project
This is a project using Next.js, Material UI library. It's a website which can control devices at home.

## What did I do in this project ?
I created a core-components package, then a website based on this core-components package.
The UI components were powered by MUI components.
The backend by AWS Amplify, using Cognito, Lambda, DynamoDB, IoT Core.

## How to read this source code ?
1. Getting start with **core** folder from root. I created components for **Card** (a), **Animation** (b), **Layout** (c) 
  a) **Card**
    - Although this component looks like Box, or Card of MUI, the reason why I made it, is that integrating with **Animation** - a component generate effects
  b) **Animation**
    - This component generate effects for any element or node. It's also integrated inside my **Card**
    - This component is inherited from MUI's animation components
  c) **Layout**
    - This component generate a skeleton for entire website layout. It contain 4 child: Sidebar, Header, Main, and Footer.
    - Each of child has props, receives children element or node to render. Styles are also adjusted.

2. Next, you can read my setup example in **initial** folder. I defined all routes, and attached logo, branch name.
  
3. Finally, you can see in **views** folder, there are many components created from my core-components package. Every component uses Card as its root element and children passed inside.
