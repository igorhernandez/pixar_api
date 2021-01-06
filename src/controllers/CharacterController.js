const axios = require("axios");
const { JSDOM } = require("jsdom");
const Character = require("../models/Character");
const charactersArray = require("../charactersArray");
const charactersNames = require("../charactersNames");

module.exports = {
  async index(req, res) {
    const getCharacterPage = async (characterName) => {
      const characterNameFormated = characterName.replace(" ", "_");
      const { data } = await axios.get(
        `https://disney.fandom.com/pt-br/wiki/${characterNameFormated}`
      );
      const dom = new JSDOM(data);
      const { document } = dom.window;
      return document;
    };

    const cleanTags = (data) => {
      const regex = /(<([^>]+)>)/gi;
      return data.replace(regex, "");
    };

    const handleBioContent = async (bioPharagraphs) => {
      const bioArray = Array.from(bioPharagraphs);
      const biosFiltered = bioArray
        .map((bio) => cleanTags(bio.innerHTML))
        .filter((bioContent, index) => {
          if (bioContent && bioContent.length > 100) {
            if (!bioContent.includes("é  um artigo destacado") && index <= 3) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        });

      const bio = biosFiltered.length >= 1 ? biosFiltered[0] : biosFiltered;
      await Promise.all(bio);

      return bio;
    };

    const takeCharacterData = async (characterData) => {
      const { name, avatar_url } = characterData;
      console.log({ name });
      try {
        const characterName = characterData.name.replace(" ", "_");
        const document = await getCharacterPage(characterName);

        // const name = document.getElementById("firstHeading").innerHTML || "";

        const biographElement = document.querySelector(".mw-parser-output");
        const bioPharagraphs = biographElement.getElementsByTagName("p");
        const bio = await handleBioContent(bioPharagraphs);

        // const avatar_url =
        //   document.querySelector(
        //     "#WikiaMainContentContainer #mw-content-text #infoboxinternal .image > img"
        //   ).dataset.src || "";

        const character = { name, bio, avatar_url };

        return character;
      } catch (error) {
        return res.send(error);
      }
    };

    const handleAllNamesCharacters = async () => {
      const characters = charactersArray.map((character) =>
        character.bio === "" ? takeCharacterData(character) : character
      );
      return Promise.all(characters);
    };

    return handleAllNamesCharacters().then((characters) =>
      res.send(characters)
    );

    // const changeAvatarUrl = async () => {
    //   const newCharacters = charactersArray.map(async (character) => {
    //     const { name, avatar_url } = character;
    //     if (
    //       avatar_url ===
    //       "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"
    //     ) {
    //       const characterPageData = await getCharacterPage(name);

    //       const dom = new JSDOM(characterPageData);
    //       const { document } = dom.window;
    //       const imgElement = document.querySelector(
    //         "#infoboxinternal .image > img"
    //       );
    //       const avatarImgGet = imgElement ? imgElement.dataset.src : "";
    //       character.avatar_url = avatarImgGet;
    //       return character;
    //     } else {
    //       return character;
    //     }
    //   });
    //   return Promise.all(newCharacters);
    // };

    // return changeAvatarUrl().then((newCharacters) => res.send(newCharacters));
  },
};
