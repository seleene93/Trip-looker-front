import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { votePostService } from "../../services";
import "./style.css";

export const BotonesLikeDislike = ({ post, posts, setPosts }) => {
  const { token } = useContext(AuthContext);

  const id = post.id;

  const handlePositiveVote = () => {
    handleVote("positivo");
  };

  const handleNegativeVote = () => {
    handleVote("negativo");
  };

  const handleVote = async (voto) => {
    try {
      const { message, data } = await votePostService({ token, id, voto });

      const { voto_positivo, voto_negativo } = data.recuento;

      // Obtenemos un nuevo array de post donde modificaremos unicamente el post que hemos votado.
      const modifiedPosts = posts.map((currentPost) => {
        // Modificamos el post que acabamos de votar.
        if (currentPost.id === post.id) {
          // Modificamos el total de votos.
          post.votos.positivo = voto_positivo || 0;
          post.votos.negativo = voto_negativo || 0;

          // Modificamos las propiedades que indican si he votado positiva o negativamente.
          if (message === "Voto positivo insertado") {
            post.heVotadoPositivamente = 1;
            post.heVotadoNegativamente = 0;
          } else if (message === "Voto negativo insertado") {
            post.heVotadoPositivamente = 0;
            post.heVotadoNegativamente = 1;
          } else if (message === "Cambio de voto") {
            post.heVotadoPositivamente = Number(!post.heVotadoPositivamente);
            post.heVotadoNegativamente = Number(!post.heVotadoNegativamente);
          } else {
            post.heVotadoPositivamente = 0;
            post.heVotadoNegativamente = 0;
          }
        }

        return currentPost;
      });

      // Actualizamos el array de posts con el nuevo array.
      setPosts(modifiedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <p className="numero-likes">{post.votos?.positivo}</p>
      <button onClick={handlePositiveVote}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            className={
              post.heVotadoPositivamente === 1 ? "voto-positivo" : undefined
            }
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M2421 4900 c-72 -15 -137 -66 -174 -135 -21 -38 -22 -56 -28 -405 -6
                -312 -9 -378 -27 -455 -58 -266 -210 -497 -435 -663 -135 -100 -347 -184 -498
                -198 l-69 -7 0 185 0 185 -26 24 -26 24 -511 3 c-282 2 -527 0 -546 -3 -18 -4
                -44 -17 -57 -30 l-24 -24 0 -1566 0 -1566 24 -24 c13 -13 39 -26 57 -30 19 -3
                264 -5 546 -3 l511 3 26 24 c26 24 26 26 26 183 0 101 4 158 10 158 6 0 52
                -21 102 -46 192 -96 388 -162 618 -206 113 -21 132 -22 1204 -25 743 -3 1105
                0 1140 7 114 23 213 92 276 189 86 135 84 330 -5 460 l-35 51 52 26 c68 34
                148 116 182 185 58 121 57 251 -4 375 -16 34 -30 64 -30 66 0 3 24 8 53 10 76
                6 177 57 240 120 126 126 161 320 87 474 -32 65 -119 155 -184 190 l-55 29 33
                50 c62 92 88 216 67 313 -35 166 -178 305 -349 341 -36 7 -286 11 -767 11
                -393 0 -715 3 -715 8 0 4 13 54 30 110 74 260 100 474 100 817 0 185 -4 266
                -15 313 -46 196 -205 366 -398 428 -68 21 -106 26 -222 29 -77 3 -160 0 -184
                -5z m362 -190 c118 -44 214 -136 258 -247 22 -54 24 -74 27 -301 5 -388 -34
                -646 -148 -976 -26 -78 -25 -92 9 -127 l29 -29 790 0 c886 0 852 3 938 -73 64
                -57 88 -107 88 -187 0 -75 -23 -128 -80 -184 -61 -60 -97 -66 -368 -66 -261 0
                -281 -4 -304 -54 -17 -33 -9 -68 19 -95 20 -19 39 -20 358 -23 317 -3 339 -4
                382 -24 131 -61 192 -180 155 -305 -20 -71 -64 -121 -134 -156 l-57 -28 -385
                -3 c-376 -3 -386 -4 -407 -24 -33 -31 -31 -87 3 -119 25 -24 29 -24 252 -29
                249 -5 258 -7 323 -72 97 -97 98 -258 3 -359 -14 -14 -46 -37 -72 -50 -46 -23
                -54 -24 -353 -29 -281 -5 -309 -7 -327 -24 -25 -22 -31 -51 -19 -89 17 -51 46
                -57 269 -57 192 0 206 -2 253 -24 59 -27 117 -88 136 -142 17 -51 16 -140 -3
                -185 -21 -49 -74 -106 -122 -132 l-41 -22 -1095 0 -1095 0 -120 23 c-232 45
                -394 101 -634 221 l-121 61 0 1040 0 1039 32 5 c144 21 196 32 285 61 359 119
                647 388 788 738 78 193 95 321 95 715 0 191 4 300 11 313 21 41 64 50 200 45
                94 -4 140 -11 182 -26z m-1763 -2875 l0 -1455 -425 0 -425 0 0 1448 c0 797 3
                1452 7 1455 3 4 195 7 425 7 l418 0 0 -1455z"
            />
            <path
              d="M495 956 c-27 -12 -67 -41 -87 -64 -35 -39 -68 -119 -68 -167 0 -47
                33 -128 67 -166 158 -175 443 -68 443 166 0 185 -190 309 -355 231z m159 -172
                c42 -43 33 -104 -21 -132 -33 -18 -59 -14 -89 12 -57 48 -20 146 55 146 17 0
                39 -10 55 -26z"
            />
          </g>
        </svg>
      </button>

      <NavLink to={`/post/${post.id}`}>
        <button>Ver</button>
      </NavLink>
      <button onClick={handleNegativeVote}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            className={
              post.heVotadoNegativamente === 1 ? "voto-negativo" : undefined
            }
            fill="#000000"
            stroke="none"
          >
            <path
              d="M854 4836 c-139 -70 -243 -193 -291 -344 -23 -74 -25 -95 -21 -195
                l4 -113 -70 -33 c-94 -45 -185 -136 -229 -228 -29 -62 -32 -76 -32 -168 0 -68
                6 -122 19 -168 l19 -68 -24 -16 c-47 -31 -135 -129 -166 -184 -107 -186 -76
                -364 95 -550 l63 -68 -36 -47 c-60 -78 -97 -167 -110 -265 -8 -56 14 -152 52
                -220 34 -63 134 -159 201 -193 101 -51 147 -56 562 -63 355 -5 565 1 781 24
                l61 6 -31 -62 c-39 -76 -84 -210 -107 -316 -21 -100 -24 -348 -5 -455 42 -240
                337 -715 499 -803 96 -52 241 -70 379 -46 78 14 120 41 153 99 23 41 25 58 28
                180 4 144 -14 303 -62 564 l-24 130 40 80 c145 290 340 647 441 806 94 149
                146 210 195 231 76 33 72 41 72 -169 l0 -188 31 -30 30 -29 677 -3 c720 -3
                798 1 880 42 59 30 136 111 165 174 l22 47 0 1205 0 1205 -27 57 c-34 73 -103
                142 -176 176 l-57 27 -739 3 c-665 2 -741 1 -763 -13 -30 -20 -53 -72 -53
                -120 0 -19 -2 -35 -4 -35 -2 0 -36 19 -76 41 -39 23 -120 61 -178 85 l-107 44
                -1006 0 -1006 0 -69 -34z m2144 -210 c56 -24 147 -74 202 -111 l100 -66 0
                -927 0 -927 -102 -40 c-82 -32 -111 -50 -152 -90 -114 -113 -305 -432 -582
                -974 -118 -232 -116 -211 -60 -526 27 -151 39 -251 43 -357 l6 -146 -57 -7
                c-73 -9 -150 1 -204 27 -105 50 -364 463 -404 643 -8 37 -12 118 -12 210 1
                126 6 165 27 247 35 134 85 244 164 361 79 118 85 153 34 199 -34 31 -54 33
                -146 18 -122 -19 -386 -41 -585 -49 -265 -10 -736 4 -806 24 -64 18 -144 87
                -174 151 -42 85 -5 187 115 322 91 102 88 129 -21 220 -116 96 -184 198 -184
                276 0 89 69 184 195 269 33 22 66 48 73 56 19 24 9 97 -23 171 -16 37 -30 91
                -33 127 -11 140 94 250 261 273 105 15 138 74 95 171 -19 45 -23 71 -23 154 0
                87 3 107 27 157 30 64 97 136 154 167 38 20 53 20 1004 20 l965 1 103 -44z
                m1848 18 c15 -11 37 -33 48 -48 21 -27 21 -34 24 -1183 l2 -1156 -25 -42 c-45
                -78 -11 -75 -744 -75 l-651 0 0 1265 0 1265 659 -2 c648 -3 660 -3 687 -24z"
            />
            <path
              d="M4297 2875 c-85 -32 -162 -111 -192 -195 -20 -55 -19 -154 1 -213 20
                -61 93 -141 158 -175 44 -23 63 -27 141 -27 75 0 97 4 135 24 61 32 116 86
                148 146 23 43 27 62 27 140 0 75 -4 97 -24 135 -32 62 -86 117 -146 148 -62
                32 -187 40 -248 17z m183 -212 c60 -53 48 -153 -22 -189 -78 -40 -168 14 -168
                102 0 39 5 51 34 80 29 29 41 34 80 34 36 0 52 -6 76 -27z"
            />
          </g>
        </svg>
      </button>
      <p className="numero-likes" id="dislike">
        {post.votos?.negativo}
      </p>
    </>
  );
};
