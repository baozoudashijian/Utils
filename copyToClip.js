// 复制到粘贴版
export const copyToClip = (content) => {
  let aux = document.createElement("input");

  aux.setAttribute("value", content);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
};
