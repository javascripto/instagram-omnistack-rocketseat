import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import send from '../assets/send.svg';
import comment from '../assets/comment.svg';

export default class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Yuri Alves</span>
              <span className="place">São Paulo</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3333/files/logo.jpg" alt="Mais" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>900 curtidas</strong>
            <p>
              Um post muito massa da Omnistack!
              <span>#react #node #express #mongo</span>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user-info">
              <span>Yuri Alves</span>
              <span className="place">São Paulo</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3333/files/logo.jpg" alt="Mais" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>900 curtidas</strong>
            <p>
              Um post muito massa da Omnistack!
              <span>#react #node #express #mongo</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}
