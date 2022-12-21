export function downloadFile(url: string, fileName: string) {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    anchor.target = "__Blank";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
