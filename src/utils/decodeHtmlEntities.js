const entities = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&quot;": '"',
  "&#34;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&#160;": " ",
  "&nbsp;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&euro;": "€",
  "&#8364;": "€",
};

export const decodeHtmlEntities = (text) => {
  return text.replaceAll(/&#?\w+;/g, (match) => entities[match]);
};
