var count = 0;

const handleButton = () => {
  count++;

  if (count <= 2) {
    const newDiv = document.createElement("div");

    const randomTop = Math.floor(Math.random() * 800) + 1;
    const randomLeft = Math.floor(Math.random() * 1500) + 1;

    newDiv.classList.add("circle");

    newDiv.style.color = "red";
    newDiv.style.borderRadius = "50%";
    newDiv.style.border = "2px solid red";
    newDiv.style.width = "400px";
    newDiv.style.height = "400px";
    newDiv.style.position = "absolute";
    newDiv.style.top = `${randomTop}px`;
    newDiv.style.left = `${randomLeft}px`;

    document.body.appendChild(newDiv);

    if (count === 2) {
      const circles = document.querySelectorAll(".circle");

      const firstCircleRect = circles[0].getBoundingClientRect();
      const secondCircleRect = circles[1].getBoundingClientRect();

      const isIntersecting =
        firstCircleRect.left < secondCircleRect.right &&
        firstCircleRect.right > secondCircleRect.left &&
        firstCircleRect.top < secondCircleRect.bottom &&
        firstCircleRect.bottom > secondCircleRect.top;

      if (isIntersecting) {
        console.log("The circles are intersecting!");
      } else {
        // console.log("The circles are NOT intersecting.");
      }
    }
  } else {
    count = 0;

    document.querySelectorAll(".circle").forEach((circle) => {
      circle.remove();
    });
  }
};

document.getElementById("createCircle").addEventListener("click", handleButton);
