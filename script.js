const fullImgBox = document.getElementById("fullImgBox")
fulImg = document.getElementById("fulImg")

function openFullImg(reference) {
    fullImgBox.style.display = "flex"
    fulImg.src = reference
}

function closeImg() {
    fullImgBox.style.display = "none";
}

