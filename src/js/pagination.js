const ulElem = document.querySelector('.pagination_wrapper ul');
let totalPages = 20;

function element(totalPages, page) {
  let liTag = '';
  let activeLi;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 1) {
    liTag += `<li class="prev btn" onclick="element(totalPages, ${
      page - 1
    })"></li>`;
  }
  if (page > 2) {
    liTag += `<li class="number" onclick="element(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
      if (page > 4) {
        liTag += `<li class="number" onclick="element(totalPages, ${
          page - 2
        })"><span>${page - 2}</span></li>`;
      }
    }
  }

  for (let pageLength = beforePage; pageLength <= afterPage; pageLength++) {
    if (pageLength > totalPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    if (page == pageLength) {
      activeLi = 'active';
    } else {
      activeLi = '';
    }
    liTag += `<li class="number ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 3) {
      liTag += `<li class="number" onclick="element(totalPages, ${
        page + 2
      })"><span>${page + 2}</span></li>`;
    }
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="number" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="next btn" onclick="element(totalPages, ${
      page + 1
    })"></li>`;
  }
  ulElem.innerHTML = liTag;
}

element(totalPages, 1);
