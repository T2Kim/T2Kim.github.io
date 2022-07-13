const paperMain = document.getElementById("paper");
const slider = document.querySelector(".image-comparison-slider");
const sliderImgWrapper = document.querySelector(".image-comparison-slider .img-wrapper");
const sliderHandle = document.querySelector(".image-comparison-slider .handle");

slider.addEventListener("mousemove", sliderMouseMove);

function sliderMouseMove(event) {
  const sliderLeftX = slider.offsetLeft + paperMain.offsetLeft;
  // const sliderLeftX = relativeLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandleWidth = sliderHandle.clientWidth;
  const sliderLe = sliderHandle.clientWidth;

  let mouseX = event.clientX - sliderLeftX;
  if(mouseX < 0) mouseX = 0;
  else if(mouseX > sliderWidth) mouseX = sliderWidth;

  sliderImgWrapper.style.width = `${((1 - mouseX/sliderWidth) * 100).toFixed(4)}%`;
  sliderHandle.style.left = `calc(${((mouseX/sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth/2}px)`;
}
