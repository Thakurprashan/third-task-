let imgBox = document.getElementById("imgBox");
        let QRimage = document.getElementById("QRimage");
        let QRtext = document.getElementById("QRtext");
        let downloadLink = document.getElementById("downloadLink");

 function generateQR() {
    QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(QRtext.value);
    imgBox.classList.add("show-img");

    // Fetch the image as a Blob and create a download link
    fetch(QRimage.src)
        .then(response => response.blob())
        .then(blob => {
            const blobUrl = URL.createObjectURL(blob);
            downloadLink.style.display = "inline";
            downloadLink.href = blobUrl;
            downloadLink.download = "qr_code.png";
        });
}