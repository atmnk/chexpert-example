## Getting Started With This repo
In order for you to run this code you need to have GOOGLE_API_KEY environment variable setup with your Gemini API Key.

## Generating Gemini API Key
Click on this link to get Gemini API Key https://ai.google.dev/gemini-api/docs/api-key

## Setting API Key
Best way to setup environment variable after generating key in VS Code is
Open Playwright Extension Page

Click on Gear icon then click on settings. Choose Workspace (For setting this in your current project only) or User (For setting this in your all projects). And click Edit Settings. Under playwright.env section add your key in following way

```json
"playwright.env": {
    "GOOGLE_API_KEY":"Your API Key Here"
},
```

