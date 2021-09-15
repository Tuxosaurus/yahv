import "../styles/legend.css";

export const Legend = () => (
  <ul className="Legend">
    <li
      className="blue"
      title="If my red box touches your blue box, you are hurt"
    >
      Hurt box
    </li>
    <li
      className="red"
      title="If my red box touches your blue box, you are hurt"
    >
      Hit box
    </li>
    <li
      className="green"
      title="If I walk towards you, my green box will push yours"
    >
      Push box
    </li>
    <li
      className="yellow"
      title="If your white/black boxes enters my yellow box, I can throw you"
    >
      Throw box
    </li>
    <li
      className="white"
      title="If your white boxes enters my yellow box, I can throw you (ground to ground)"
    >
      Ground throwable box
    </li>
    <li
      className="black"
      title="If your black boxes enters my yellow box, I can throw you (air to air)"
    >
      Air throwable box
    </li>
    <li className="cyan" title="Hurt box for projectiles">
      Projectile hurt box
    </li>
    <li className="orange" title="Hit box for projectiles">
      Projectile hit box
    </li>
  </ul>
);
