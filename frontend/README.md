# Frontend

## Summary :clipboard:

- [Requirements](#requirements)
- [Setup and Installation](#setup-installation)
- [Running tests](#tests)
- [How to Use](#how-to-use)

---

## Requirements :pencil: <a name="requirements"></a>

- [TypeScript 4.8+](https://www.typescriptlang.org/)
- Npm 9.5.1+

---

## Setup and Installation :white_check_mark: <a name="setup-installation"></a>

### Cloning the repo :file_folder:

First off, in order to get a copy of the project and be able to run/test it, clone the repository into a folder on your machine:

```
git clone git@github.com:jvoliveirag/C317.git
```

### Installing Dependencies :wrench:

First access the frontend directory:

```
cd frontend
```

Now, to install all the necessary project dependencies, run the following command in the terminal:

```
npm install
```

### Executing the Project :arrow_forward:

To run your project, simply type the following command in the terminal (make sure you are running it from within the frontend folder):

```
npm run dev
```

---

## Running tests :test_tube:

To run all the tests with <b>Jest</b>, simply type the following command in the terminal (make sure you are running it from within the frontend folder):

```
npm run test
```

To run the tests with Cypress in the terminal (and generate the reports) run:

```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

If you want to see the interface:

```
npm run cypress:open
```

This commando will open the cypress interface and then you will be able to run the tests.

---

## How To Use :man_technologist: <a name="how-to-use"></a>

Once you have run the app with commando above, all you need to do is to open <i><u>localhost</u></i> in your browser to see to application running. You must receive a message like this in your terminal:

`ready - started server on 0.0.0.0:3000, url: http://localhost:3000`

Now if you go to the browser window this is what you should see:

![image](../docs/images/app.png)

To see the detailed explanation click <u><b><a href='https://github.com/jvoliveirag/C317#howto'>here</a></b></u>
