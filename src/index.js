// const express = require("express");
// const routes = require("./routes");
// const app = express();

// app.use(express.json());
// app.use(routes);
// app.listen(3334);

const http = require("http");
const { JSDOM } = require("jsdom");
const axios = require("axios");

const port = 5555;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, () => {
  console.log(`Server running at PORT:${port}/`);
});

const charactersNames = require("./charactersNameShort");

const takeCharacterData = async (characterNameData) => {
  const characterName = characterNameData.replace(" ", "_");
  try {
    const { data } = await axios.get(
      `https://disney.fandom.com/pt-br/wiki/${characterName}`
    );
    const dom = new JSDOM(data, {
      runScripts: "dangerously",
      resources: "usable",
    });
    const { document } = dom.window;
    const name = document.getElementById("firstHeading").innerHTML;
    const biographElement = document.querySelector(".mw-parser-output");
    const bioPharagraphs = biographElement.getElementsByTagName("p");
    console.log({ bioPharagraphs: bioPharagraphs.length, name });
    const bio =
      bioPharagraphs.length <= 3
        ? bioPharagraphs[0].innerHTML
        : bioPharagraphs[1].innerHTML;
    const avatar_url = document.querySelector(".image > img").src;

    const character = { name, bio, avatar_url };
    return character;
  } catch (error) {
    throw error;
  }
};

const handleAllNamesCharacters = async () => {
  const characters = charactersNames.map((nameCharacter) =>
    takeCharacterData(nameCharacter)
  );
  return Promise.all(characters);
};

handleAllNamesCharacters().then((characters) => console.log(characters));
