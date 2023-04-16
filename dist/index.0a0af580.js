const ulElem = document.querySelector(".pagination_wrapper ul");
let totalPages = 20;
function element(totalPages1, page) {
    let liTag = "";
    let activeLi;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if (page > 1) liTag += `<li class="prev btn" onclick="element(totalPages, ${page - 1})"></li>`;
    if (page > 2) {
        liTag += `<li class="number" onclick="element(totalPages, 1)"><span>1</span></li>`;
        if (page > 3) {
            liTag += `<li class="dots"><span>...</span></li>`;
            if (page > 4) liTag += `<li class="number" onclick="element(totalPages, ${page - 2})"><span>${page - 2}</span></li>`;
        }
    }
    for(let pageLength = beforePage; pageLength <= afterPage; pageLength++){
        if (pageLength > totalPages1) continue;
        if (pageLength == 0) pageLength = pageLength + 1;
        if (page == pageLength) activeLi = "active";
        else activeLi = "";
        liTag += `<li class="number ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }
    if (page < totalPages1 - 1) {
        if (page < totalPages1 - 3) liTag += `<li class="number" onclick="element(totalPages, ${page + 2})"><span>${page + 2}</span></li>`;
        if (page < totalPages1 - 2) liTag += `<li class="dots"><span>...</span></li>`;
        liTag += `<li class="number" onclick="element(totalPages, ${totalPages1})"><span>${totalPages1}</span></li>`;
    }
    if (page < totalPages1) liTag += `<li class="next btn" onclick="element(totalPages, ${page + 1})"></li>`;
    ulElem.innerHTML = liTag;
}
element(totalPages, 1);

//# sourceMappingURL=index.0a0af580.js.map
