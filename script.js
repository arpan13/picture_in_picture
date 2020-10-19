const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaStream() {
  try {
    let captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = captureStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    //if some errors happens then this message will be displayed
    console.log("Opps...,Something went wrong..", err);
  }
}

button.addEventListener("click", async () => {
  button.disabled = true;

  await videoElement.requestPictureInPicture();

  button.disabled = false;
});
selectMediaStream();
