const textArea = document.getElementById("textArea");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textArea.addEventListener("input", () => {
    let text = textArea.value.trim();
    let words = text.length > 0 ? text.split(/\s+/).length : 0;
    let chars = text.length;
    wordCount.textContent = words;
    charCount.textContent = chars;
});
