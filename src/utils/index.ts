export function setHash(baseUrl: string, id: string): string {
  const url = new URL(baseUrl);
  url.hash = id;
  return url.href;
}

export function setTextFragment(baseUrl: string, fragment: string): string {
  return setHash(baseUrl, `:~:text=${encodeURIComponent(fragment)}`);
}

export function copy(text: string): void {
  const $textarea = document.createElement("textarea");
  $textarea.textContent = text;
  document.body.appendChild($textarea);
  $textarea.select();
  try {
    document.execCommand("copy");
  } catch (e) {
    console.warn(e);
  } finally {
    document.body.removeChild($textarea);
  }
}
