"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    function save(_content, _filename) {
        let blob = new Blob([_content], { type: "text/plain" });
        let url = window.URL.createObjectURL(blob);
        //*/ using anchor element for download
        let downloader;
        downloader = document.createElement("a");
        downloader.setAttribute("href", url);
        downloader.setAttribute("download", _filename);
        document.body.appendChild(downloader);
        downloader.click();
        document.body.removeChild(downloader);
        window.URL.revokeObjectURL(url);
    }
    Abschlussarbeit.save = save;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=save.js.map