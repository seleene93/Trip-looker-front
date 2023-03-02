import "./style.css";

export const Main = () => {
  return (
    <main>
      <section id="textos">
        <article className="article-textos">
          <img src="/iconos/buscar.png"></img>
          <h3>¿Qué es Trip Looker?</h3>
          <p className="p-article">
            Es un buscador de experiencias de viaje basadas en los votos y
            opiniones de viajeros. Personas como tú que ya han estado antes en
            ese lugar y te cuentan de primera mano como ha sido su aventura. ¿A
            dónde quieres ir?
          </p>
        </article>

        <article className="article-textos">
          <img src="/iconos/3069197.png"></img>
          <h3>¿Cómo formar parte?</h3>
          <p className="p-article">
            Regístrate con tus datos y podrás compartir tus publicaciones. Votar
            y comentar en las recomendaciones de otros viajeros y así contribuir
            a que la comunidad crezca. ¿Te apuntas?
          </p>
        </article>
      </section>
    </main>
  );
};
