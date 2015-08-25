import markdownEscape from 'markdown-escape';

function escapeText(string) {
  const input = markdownEscape(string);

  // @todo process the code
  return input.replace(/`/g, '\\`');
}

function renderEntity(type, data) {
  switch (type) {
    case 'user_mentions':
      return `[@${markdownEscape(data.screen_name)}](https://twitter.com/${data.screen_name} "${data.name}")`;
    case 'media':
      return `[${markdownEscape(data.display_url)}](${data.url})`;
    case 'hashtags':
      return `[${markdownEscape(data.text)}](https://twitter.com/search?q=%23${data.text})`;
    case 'urls':
      return `[${markdownEscape(data.display_url)}](${data.url} "${data.expanded_url}")`;
    default:
      return null;
  }
}

export default function(tweetData) {
  const text = tweetData.text;
  const replacements = [];
  let lastIdx = text.length;

  Object.keys(tweetData.entities).forEach(entityKey => {
    Array.prototype.push.apply(
      replacements,
      tweetData.entities[entityKey].map(entityData => [
        renderEntity(entityKey, entityData),
        entityData.indices[0],
        entityData.indices[1]
      ])
    )
  });

  if (0 === replacements.length) {
    return escapeText(text);
  }

  const data = replacements.sort((a, b) => b[1] - a[1]).map(replacement => {
    let output = replacement[0];

    if (replacement[2] < lastIdx) {
      output += escapeText(text.substr(replacement[2], lastIdx - replacement[2]))
    }

    lastIdx = replacement[1];

    return output;
  });

  if (lastIdx > 0) {
    data.push(escapeText(text.substr(0, lastIdx)));
  }

  return data.reverse().join('');
}
