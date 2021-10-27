import React from "react";

export const LegendModal = () => (
  <dl className="modal-content">
    <dt className="blue">Hurt box</dt>
    <dd>If my red box touches your blue box, you are hurt</dd>
    <dt className="red">Hit box</dt>
    <dd>If my red box touches your blue box, you are hurt</dd>
    <dt className="green">Push box</dt>
    <dd>If I walk towards you, my green box will push yours</dd>
    <dt className="yellow">Throw box</dt>
    <dd>If your white/black boxes enters my yellow box, I can throw you</dd>
    <dt className="white">Ground throwable box</dt>
    <dd>
      If your white boxes enters my yellow box, I can throw you (ground to
      ground)
    </dd>
    <dt className="black">Air throwable box</dt>
    <dd>
      If your black boxes enters my yellow box, I can throw you (air to air)
    </dd>
    <dt className="cyan">Projectile hurt box</dt>
    <dd>Hurt box for projectiles</dd>
    <dt className="orange">Projectile hit box</dt>
    <dd>Hit box for projectiles</dd>
  </dl>
);
