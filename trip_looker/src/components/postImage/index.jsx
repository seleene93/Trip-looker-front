import "./style.css";
export const PostImage = ({ post }) => {
  let indexImg = 0;
  let img = document.getElementById("detalle-img");
  let numImages = post.images.length;

  const handleNextImg = () => {
    if (numImages > 1 && indexImg + 1 < numImages) {
      indexImg++;
      img.setAttribute(
        "src",
        `http://localhost:8080/${post.images[indexImg].nombre}`
      );
    }
  };

  const handlePreviousImg = () => {
    if (numImages > 1 && indexImg > 0) {
      indexImg--;
      img.setAttribute(
        "src",
        `http://localhost:8080/${post.images[indexImg].nombre}`
      );
    }
  };

  return (
    <>
      <button onClick={() => handlePreviousImg()}>
        <img
          className="button-flecha"
          src="/iconos/flecha-izquierda.png"
          alt="flecha-derecha"
        ></img>
      </button>
      <img
        id="detalle-img"
        src={`http://localhost:8080/${post.images[0].nombre}`}
      ></img>
      <button onClick={() => handleNextImg()}>
        <img
          className="button-flecha"
          src="/iconos/flecha-correcta.png"
          alt="flecha-derecha"
        ></img>
      </button>
    </>
  );
};
