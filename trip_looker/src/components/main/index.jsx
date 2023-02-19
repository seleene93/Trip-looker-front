import "./style.css";

export const Main = () => {
  return (
    <main>
      <section className="form">
        <form>
          <input type="text" name="experiencias" placeholder="Lugar" />
          <button id="lupa">
            <img src="/iconos/lupa.png"></img>
          </button>
        </form>
      </section>
    </main>
  );
};
