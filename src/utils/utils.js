

export function surroundSelection(markdown, selectionStart, selectionEnd, tag) {
  return markdown.slice(0, selectionStart)
    + tag + markdown.slice(selectionStart, selectionEnd) + tag
    + markdown.slice(selectionEnd);
}

export function addTag(markdown, selectionStart, tag) {
  return markdown.slice(0, selectionStart) + tag + ' ' + markdown.slice(selectionStart);
}
