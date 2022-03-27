# ZIP Associate Quality Engineer Exercise

## Create API Test Framework

### Setting up the environment

#### Coding Editor

Visual Studio Code

#### Install node.js

Step1: Download node.js installer: https://nodejs.org/en/ (16.14.2 LTS).

Step2: Install node.js

1. Run the installer

2. Follow the installer steps, agree the license agreement and click the next button

3. Restart your system

4. Test Node.js version using the following command in Command Prompt:

```
node -v
```

Test npm version using the following command:

```
npm -v
```

#### Setting up Tests

Step1: Download the test from GitHub to a folder in your computer, e.g. c:\Z1PASSESSMENT.

Step2: Start with Visual Studio Code File -> Open Folder to load the whole project

Step3: Terminal -> New Terminal to open the TERMINAL window

Step4: In the TERMINAL window type the following command to install dependencies

```
npm install
```

### Executing Tests

#### Test execution

##### Option 1:

In the TERMINAL window type the following command to run test and generate html report in report folder

```
npm run cucumber
```

##### Option 2:

In the TERMINAL window type the following command to run single test and generate cucumber_report.json in the root

```
npm run test
```

In the TERMINAL window type the following command to run test and generate html report in report folder

```
npm run report
```

##### How to modify single test run command:

Change the tag name to the test feature you want to run in the package.json, like

```
"test": "cucumber-js src/features/ -f json:cucumber_report.json src/features/ -r src/steps/ --tags @user-service",
```
