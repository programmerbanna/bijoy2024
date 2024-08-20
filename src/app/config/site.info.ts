const LIVE_URL: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://example.com";

const TITLE: string = "Project Bijoy2024";
const DESCRIPTION: string =
  "This project includes some sort of simple tasks to leverage/evaluating frontend developer actual potential.";

const DEFAULT_LANG: string = "en";
const COPYRIGHT: COPYRIGHT = {
  byName: "Hasanul Haque Banna",
  brandWebsite: LIVE_URL,
};

const site = {
  url: LIVE_URL,
  title: TITLE,
  description: DESCRIPTION,
  language: {
    default: DEFAULT_LANG,
    subLanguages: [],
  },
  copyright: COPYRIGHT,
};
export default site;
