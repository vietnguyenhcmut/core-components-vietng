Link demo: https://master.d3n3605u39aiut.amplifyapp.com/
Username: viet.nguyen.hcmut@gmail.com
Password: ********
## About this project
This is a project using Next.js, Material UI library. It's a website which can control devices at home.

## What did I do in this project ?
I created a core-components package, then a website based on this core-components package.  
The UI components were powered by MUI components.  
The backend by AWS Amplify, with Cognito, Lambda, DynamoDB, IoT Core.  

## Flow
Whenever user access this website, it will check if this user has access or not (with Cognito Identity Pool). If user has access, they will pass through.  
Once user logs in successfully, they will see on the left, a **Sidebar** appears with 4 routes as menu navigator: **Home**, **Clock**, **User**, and **Contact**.  
  - **Home**: information about all devices that user owns  
  - **Clock**: user can set alarm for devices, the time a device will do its job   
  - **User**: user can see their information, update it  
  - **Contact**: email, phone number, address to contact  
When user choose any menu item above, data will be loaded from DynamoDB by AWS SDK V3.  
If user make an action like turn off a device, change dimming of a light, this action will be sent to IoT Core by MQTT protocol, then it triggers a message routing and fly to Lambda Function, this Lambda will update DynamoDB table corresponding to this device.

## How to read this source code ?
  1. Getting start with **core** folder from root. I created components for **Card** (a), **Animation** (b), **Layout** (c) <br />
    a) **Card**  
      - Although this component looks like Box, or Card of MUI, the reason why I made it, is that integrating with **Animation** - a component generate effects <br />
    b) **Animation**  
      - This component generate effects for any element or node. It's also integrated inside my **Card**. <br />
      - This component is inherited from MUI's animation components <br />
    c) **Layout**  
      - This component generate a skeleton for entire website layout. It contains 4 child: Sidebar, Header, Main, and Footer.  
      - Each of child has props, receives children element or node to render. Styles are also adjusted.  

2. Next, you can read my setup example in **initial** folder. I defined all routes, and attached logo, branch name, and a data store with **useContext** hook.  
  
3. Finally, you can see in **views** folder, there are many components created from my core-components package. Every component uses Card as its root element and children passed inside.  
