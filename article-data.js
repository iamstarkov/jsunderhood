var md = require('commonmark-helpers');
var moment = require('moment');

function isDate(event) {
  if (!event.entering || !md.literal(event)) {
    return;
  }
  return moment(new Date(md.literal(event))).isValid();
}

function containOnlyImage(event) {
  var img = md.match(event.node, isImage);
  if (img) {
    return md.text(img) === md.text(event.node);
  }
}

function isDesc() {
  var dateFound;
  return function(event) {
    if (!event.entering) { return; }
    if (isDate(event)) { dateFound = true; }
    return dateFound && !containOnlyImage(event) && !isDate(event) && md.isParagraph(event);
  };
}

function isImage(event) {
  return event.entering && md.isImage(event);
}

module.exports = function(content) {
  return {
    title: md.text(md.match(content, md.isHeader)),
    image: (md.match(content, isImage) || { destination: null }).destination,
    desc: md.text(md.match(content, isDesc())),
    descText: md.text(md.match(content, isDesc())),
    descHtml: md.html(md.match(content, isDesc())),
    descRSS: (md.html(md.match(content, isDesc())) + md.html(md.match(content, isImage) || '')),
    date: md.text(md.match(content, isDate)),
    content: md.html(content),
  };
};
