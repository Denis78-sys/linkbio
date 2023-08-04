/* eslint-disable prettier/prettier */
const Vue = require("vue");
const serverRenderer = require("vue-server-renderer").createRenderer();

// Seu aplicativo Vue.js
const App = require("./dist/app.server");

const express = require("express");
const app = express();

app.get("*", async (req, res) => {
  try {
    const appContent = await serverRenderer.renderToString(App);
    const html = `
      <!DOCTYPE html>
      <html lang="">
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>Meu aplicativo Vue.js</title>
        </head>
        <body>
          <div id="app">${appContent}</div>
          <noscript>
            <strong>
              We're sorry but this app doesn't work properly without JavaScript enabled.
              Please enable it to continue.
            </strong>
          </noscript>
        </body>
      </html>
    `;
    res.send(html);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
