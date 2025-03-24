const layout = document.createElement('template');
layout.innerHTML = /*html */ `
<article>
    <header class="img-render-box">
        <img src="" alt="Sprite del pokémon en cuestión.">
    </header>
    <section class="resume-box">
        <h3>Info:</h3>
        <ul class="poke-id-list">
            <li><span>{Nombre}</span></li>
            <li><span>{ID}</span></li>
        </ul>
        <ul class="type-attr-list">
            <li><span>{tipo}</span></li>
            <li><span>{tipo}</span></li>
        </ul>
        <ul class="egg-group-list">
            <li>{Grupo Huevo}</li>
            <li>{Grupo Huevo}</li>
        </ul>
    </section>
</article>`;

class CardPokemonElement extends HTMLElement {
    #shadow;
    #data; //Podria hacer fetch de los datos necesarios y pasarlos aquí.

    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'open'});
        this.#shadow.append(layout.content.cloneNode(true));
    }

}

customElements.define('kantodex-cardpokemon', CardPokemonElement);