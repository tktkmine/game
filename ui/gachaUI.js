/* =====================
   ガチャ結果表示
===================== */

export function showGachaResult({

  monster

}) {

  const resultBox =

    document.getElementById(
      "gacha-result"
    );

  resultBox.innerHTML = `

    <div class="gacha-card">

      <div class="gacha-rank">

        ${monster.rank.toUpperCase()}

      </div>

      <h3>

        ${monster.name}

      </h3>

      <p>

        ${monster.world}

      </p>

      <p>

        ${monster.description}

      </p>

      <div class="gacha-stats">

        <p>
          HP:
          ${monster.hp}
        </p>

        <p>
          ATK:
          ${monster.atk}
        </p>

        <p>
          DEF:
          ${monster.def}
        </p>

        <p>
          SPD:
          ${monster.spd}
        </p>

      </div>

    </div>

  `;

  /* レア演出 */

  if (
    monster.rank === "a"
  ) {

    playRareEffect();
  }
}

/* =====================
   レア演出
===================== */

export function playRareEffect() {

  document.body.classList.add(
    "rare-effect"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "rare-effect"
    );

  }, 1000);
}

/* =====================
   ガチャ結果削除
===================== */

export function clearGachaResult() {

  document.getElementById(
    "gacha-result"
  ).innerHTML = "";
}

/* =====================
   ガチャ画面表示
===================== */

export function showGachaScreen() {

  document.getElementById(
    "gacha-screen"
  ).classList.add(
    "active"
  );
}

/* =====================
   ガチャ画面非表示
===================== */

export function hideGachaScreen() {

  document.getElementById(
    "gacha-screen"
  ).classList.remove(
    "active"
  );
}
