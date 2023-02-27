import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { votePostService } from "../../services";

export const BotonesLikeDislike = ({ post }) => {
  const { token } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(post.votos[0].voto_positivo);
  const [dislikeCount, setDislikeCount] = useState(post.votos[0].voto_negativo);

  const id = post.id;

  // const [activeBtn, setActiveBtn] = useState("none");

  const handlePositiveVote = () => {
    handleVote("positivo");
  };

  const handleNegativeVote = () => {
    handleVote("negativo");
  };

  const handleVote = async (voto) => {
    try {
      const data = await votePostService({ token, id, voto });

      const { voto_positivo, voto_negativo } = data.recuento;

      setLikeCount(voto_positivo);

      setDislikeCount(voto_negativo);
    } catch (error) {
      console.error(error);
    }
  };

  //   if (activeBtn === "like") {
  //     setLikeCount(likeCount - 1);
  //     setActiveBtn("none");
  //     return;
  //   }

  //   if (activeBtn === "dislike") {
  //     setLikeCount(likeCount + 1);
  //     setDislikeCount(dislikeCount - 1);
  //     setActiveBtn("like");
  //   }
  // };

  // const handleDisikeClick = () => {
  //   if (activeBtn === "none") {
  //     setDislikeCount(dislikeCount + 1);
  //     setActiveBtn("dislike");
  //     return;
  //   }

  //   if (activeBtn === "dislike") {
  //     setDislikeCount(dislikeCount - 1);
  //     setActiveBtn("none");
  //     return;
  //   }

  //   if (activeBtn === "like") {
  //     setDislikeCount(dislikeCount + 1);
  //     setLikeCount(likeCount - 1);
  //     setActiveBtn("dislike");
  //   }
  //};

  return (
    <>
      <p className="numero-likes">{likeCount}</p>
      <button
        onClick={handlePositiveVote}
        // className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
      >
        <img src="/iconos/me-gusta.svg"></img>
      </button>
      <NavLink to={`/post/${post.id}`}>
        <button id="detalle">Ver</button>
      </NavLink>
      <button
        // className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
        onClick={handleNegativeVote}
      >
        <img src="/iconos/dislike.svg"></img>
      </button>
      <p className="numero-likes" id="dislike">
        {dislikeCount}
      </p>
    </>
  );
};
