function Main() {
  return (
    <main>
      <section id="highlights">
        <header>
          <h3>Specials</h3>
          <a href="menu" role="button">
            Online menu
          </a>
        </header>

        <div className="foods">
          <article className="card">
            <img src="food1.jpg" alt="food" />
            <div>
              <h4>Greek Salad</h4>
              <em>$12.99</em>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
          </article>

          <article className="card">
            <img src="food1.jpg" alt="food" />
            <div>
              <h4>Greek Salad</h4>
              <em>$12.99</em>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
          </article>

          <article className="card">
            <img src="food1.jpg" alt="food" />
            <div>
              <h4>Greek Salad</h4>
              <em>$12.99</em>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
          </article>
        </div>
      </section>
      <section id="testimonials">
        <h3>Testimonials</h3>

        <div className="testimonials">
          <article className="card">
            <span>Rating</span>
            <div className="reviewer">
              <img src="reviewer.jpg" alt="" />
              <strong>Name</strong>
            </div>

            <p>Lorem ipsum</p>
          </article>

          <article className="card">
            <span>Rating</span>
            <div className="reviewer">
              <img src="reviewer.jpg" alt="" />
              <strong>Name</strong>
            </div>

            <p>Lorem ipsum</p>
          </article>

          <article className="card">
            <span>Rating</span>
            <div className="reviewer">
              <img src="reviewer.jpg" alt="" />
              <strong>Name</strong>
            </div>

            <p>Lorem ipsum</p>
          </article>

          <article className="card">
            <span>Rating</span>
            <div className="reviewer">
              <img src="reviewer.jpg" alt="" />
              <strong>Name</strong>
            </div>

            <p>Lorem ipsum</p>
          </article>
        </div>
      </section>
      <section id="about">
        <article>
          <h3>Little Lemon</h3>
          <h4>Chicago</h4>

          <p>Lorem ipsum dolor sit amet</p>
        </article>

        <aside>
          <img src="about.jpg" alt="about" />
          <img src="about2.jpg" alt="about" />
        </aside>
      </section>
    </main>
  );
}

export default Main;
