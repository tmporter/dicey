const generateGameUrl = title =>
   title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

module.exports = {
   generateGameUrl
};
