import LinkSVG from "./link.svg";
import CheckSVG from "./checked.svg";
import { css } from "@linaria/core";
import { copy, setHash } from "../utils";

function getId($el: Element): string | undefined {
  // use the headers id or the first child element's id
  // some websites don't place an id on the heading but do on the child element
  return $el.id || $el.querySelector("[id]")?.id;
}

const link = css`
  position: relative !important;
  opacity: 0 !important;
  transition: opacity 0.2s ease-in !important;
  margin-left: 0.5em !important;

  svg {
    position: absolute !important;
    top: 50% !important;
    transform: translatey(-50%) !important;
    height: min(1em, 20px) !important;
  }
`;

const wrap = css`
  &:hover .${link} {
    cursor: pointer !important;
    opacity: 1 !important;
    transition: opacity 0.25s ease-out !important;
  }
`;

function htmlToElement(html: string): Element {
  const $template = document.createElement("template");
  $template.innerHTML = html;
  const $el = $template.content.firstChild;
  if (!$el) {
    throw new Error("Unable to create element");
  }
  return $el as Element;
}

function addLink($header: Element, id: string): void {
  let isShowing = false;
  const $link = htmlToElement(`<a class="${link}"/>`);
  $link.addEventListener("click", () => {
    copy(setHash(window.location.href, id));
    $link.setAttribute("title", "Copied!");
    $link.innerHTML = CheckSVG as string;
  });
  $header.classList.add(wrap);
  $header.addEventListener("mouseenter", () => {
    if (!isShowing) {
      isShowing = true;
      $link.setAttribute("title", "Copy link to clipboard!");
      $link.innerHTML = LinkSVG as string;
    }
  });
  $header.addEventListener("mouseleave", () => {
    isShowing = false;
  });
  $header.appendChild($link);
}

export function addCopyLinksToHeaders(): void {
  const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  headers.forEach(($header) => {
    const id = getId($header);
    if (!id) {
      return;
    }

    addLink($header, id);
  });
}
