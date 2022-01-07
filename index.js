const axios = require("axios");
const cheerio = require("cheerio");

const fetchShelves = async () => {
  try {
    const response = await axios.get("AMAZON_URL");

    const html = response.data;

    const $ = cheerio.load(html);

    const shelves = [];

    $(
      "PRODUCT_CSS_CLASS"
    ).each((_idx, el) => {
      const shelf = $(el);
      const title = shelf
        .find("TITLE_CSS_CLASS")
        .text();

      shelves.push(title);
    });

    return shelves;
  } catch (error) {
    throw error;
  }
};

fetchShelves().then((shelves) => console.log(shelves));
