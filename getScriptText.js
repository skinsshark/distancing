export function getScriptText(iVal = KEYWORD) {
  return `/* social-distancer.min.js
* https://social-distance-this-for.me */
const distancerBodyTag=document.querySelector("body");function createStyles(){const e=document.createElement("style");e.innerHTML="body.social-distance, body.social-distance * {letter-spacing: 1rem;}",document.head.appendChild(e)}createStyles();const KEYWORD="${iVal}";let isDistanced=!1,history=[...KEYWORD];window.addEventListener("keypress",e=>{const s=String.fromCharCode(e.keyCode).toUpperCase();history[0]==s?history.shift():32!==e.keyCode&&13!==e.keyCode&&(history=[...KEYWORD]),0===history.length&&(history=[...KEYWORD],isDistanced?(distancerBodyTag.classList.remove("social-distance"),isDistanced=!1):(distancerBodyTag.classList.add("social-distance"),isDistanced=!0))});`;
}
