const Character = require("../models/Character");
const { JSDOM } = require("jsdom");
const axios = require("axios");

module.exports = {
  async index(req, res) {
    // const charactersNames = require("../charactersNames");

    // const takeCharacterData = async (characterNameData) => {
    //   const characterName = characterNameData.replace(" ", "_");
    //   try {
    //     const { data } = await axios.get(
    //       `https://disney.fandom.com/pt-br/wiki/${characterName}`
    //     );
    //     const dom = new JSDOM(data);
    //     const { document } = dom.window;

    //     const name = document.getElementById("firstHeading").innerHTML || "";
    //     const biographElement = document.querySelector(".mw-parser-output");
    //     const bioPharagraphs = biographElement.getElementsByTagName("p");
    //     console.log({ bioPharagraphs: bioPharagraphs.length, name });
    //     const bio =
    //       bioPharagraphs.length <= 5
    //         ? bioPharagraphs[0].innerHTML
    //         : bioPharagraphs[1].innerHTML;
    //     const avatar_url =
    //       document.querySelector(
    //         "#WikiaMainContentContainer #mw-content-text #infoboxinternal .image > img"
    //       ).dataset.src || "";

    //     const character = { name, bio, avatar_url };

    //     return character;
    //   } catch (error) {
    //     return res.send(error);
    //   }

    // };

    // const handleAllNamesCharacters = async () => {
    //   const characters = charactersNames.map((nameCharacter) =>
    //     takeCharacterData(nameCharacter)
    //   );
    //   return Promise.all(characters);
    // };

    // return handleAllNamesCharacters().then((characters) =>
    //   res.send(characters)
    // );

    const charactersArray = require("../charactersArray");

    const getCharacterPage = async (characterName) => {
      const characterNameFormated = characterName.replace(" ", "_");
      const { data } = await axios.get(
        `https://disney.fandom.com/pt-br/wiki/${characterNameFormated}`
      );
      return data;
    };

    const changeAvatarUrl = async () => {
      const newCharacters = charactersArray.map(async (character) => {
        const { name, avatar_url } = character;
        if (
          avatar_url ===
          "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"
        ) {
          const characterPageData = await getCharacterPage(name);

          const dom = new JSDOM(characterPageData);
          const { document } = dom.window;
          const imgElement = document.querySelector(
            "#infoboxinternal .image > img"
          );
          const avatarImgGet = imgElement ? imgElement.dataset.src : "";
          character.avatar_url = avatarImgGet;
          return character;
        } else {
          return character;
        }
      });
      return Promise.all(newCharacters);
    };

    return changeAvatarUrl().then((newCharacters) => res.send(newCharacters));
  },
};
