const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
  clearUI();
  e.preventDefault();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  if (url === "") {
    hideSpinner();
  } else {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);
    }, 1000);
  }
};
// Generate QR code
const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};
// Clear QR code and save button
const clearUI = () => {
  qr.innerHTML = "";
};
const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};
form.addEventListener("submit", onGenerateSubmit);
