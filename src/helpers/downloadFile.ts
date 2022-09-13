export function downloadFile(url: string, fileName: string) {
  fetch(url, {
    method: "get",
    mode: "no-cors",
    referrerPolicy: "no-referrer",
  })
    .then((res) => res.blob())
    .then((res) => {
      const aElement = document.createElement("a");
      aElement.setAttribute("download", fileName);
      const href = URL.createObjectURL(res);
      aElement.href = href;
      aElement.setAttribute("target", "_blank");
      aElement.click();
      URL.revokeObjectURL(href);
    });
}
