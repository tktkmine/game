/* =====================
   AI思考
===================== */

export function decideEnemyAction({

  enemy

}) {

  /* 基本倍率 */

  let multiplier =

    1 +
    Math.random() * 4;

  /* SPD高いほど精度UP */

  if (enemy.spd >= 30) {

    multiplier += 0.5;
  }

  /* 上限 */

  if (multiplier > 5) {

    multiplier = 5;
  }

  return multiplier;
}

/* =====================
   AI待機時間
===================== */

export function getEnemyDelay() {

  return (

    700 +
    Math.random() * 800

  );
}

/* =====================
   AIログ
===================== */

export function getEnemyMessage({

  enemy

}) {

  const messages = [

    `${enemy.name} が様子を見ている...`,

    `${enemy.name} が攻撃の隙を狙っている！`,

    `${enemy.name} が力を溜めている！`,

    `${enemy.name} が唸り声を上げた！`

  ];

  const randomIndex =

    Math.floor(
      Math.random()
      *
      messages.length
    );

  return messages[
    randomIndex
  ];
}
