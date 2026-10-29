// Copy to clipboard

const copyBtn = document.getElementById("copyBtn");
const referral = document.getElementById("referral");
const copyMessage = document.getElementById("copyMessage");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(referral.textContent);
    copyMessage.textContent = "Copied!";
  } catch (error) {
    copyMessage.textContent =
      "Copy failed. Please select and copy the text manually.";
  }
});
