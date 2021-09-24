import "../styles/legend.css";

export const Legend = () => (
  <ul className="Legend">
    <li
      className="blue"
      aria-label="If my red box touches your blue box, you are hurt"
    >
      Hurt box
    </li>
    <li
      className="red"
      aria-label="If my red box touches your blue box, you are hurt"
    >
      Hit box
    </li>
    <li
      className="green"
      aria-label="If I walk towards you, my green box will push yours"
    >
      Push box
    </li>
    <li
      className="yellow"
      aria-label="If your white/black boxes enters my yellow box, I can throw you"
    >
      Throw box
    </li>
    <li
      className="white"
      aria-label="If your white boxes enters my yellow box, I can throw you (ground to ground)"
    >
      Ground throwable box
    </li>
    <li
      className="black"
      aria-label="If your black boxes enters my yellow box, I can throw you (air to air)"
    >
      Air throwable box
    </li>
    <li className="cyan" aria-label="Hurt box for projectiles">
      Projectile hurt box
    </li>
    <li className="orange" aria-label="Hit box for projectiles">
      Projectile hit box
    </li>
  </ul>
);
