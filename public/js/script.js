function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

document.getElementById("copyButton").addEventListener("click", function(e) {
    const copyButton = e.target
    const textToCopy = copyButton.getAttribute('data-url')
    copyToClipboard(textToCopy);
    copyButton.innerText = "Copied!";
    setTimeout(function() {
        copyButton.innerText = "Copy";
    }, 1000);
});

document.getElementById("refresh").addEventListener("click", function(e) {
    location.reload();
});
