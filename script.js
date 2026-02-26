const tweetInput = document.getElementById("tweetInput");
const charCount = document.getElementById("charCount");
const tweetBtn = document.getElementById("tweetBtn");
const max = 160;

function updateCharacterCount() {
    const remaining = max - tweetInput.value.length;

    if (remaining < 0) {
        charCount.textContent = "160 character limit exceeded!";
        charCount.style.color = "red";
        tweetBtn.disabled = true;
    } else {
        charCount.textContent = `${remaining} char remaining`;
        charCount.style.color = "black";
        tweetBtn.disabled = false;
    }
}

function validateTweet() {
    if (tweetInput.value.length > max) {
        tweetBtn.disabled = true;
    } else {
        tweetBtn.disabled = false;
    }
}

tweetInput.addEventListener("input", function () {
    updateCharacterCount();
    validateTweet();
});