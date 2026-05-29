/* =====================
   画面取得
===================== */

const screens = {

  title:
    document.getElementById(
      "title-screen"
    ),

  menu:
    document.getElementById(
      "menu-screen"
    ),

  tame:
    document.getElementById(
      "tame-screen"
    ),

  territory:
    document.getElementById(
      "territory-screen"
    ),

  training:
    document.getElementById(
      "training-screen"
    ),

  home:
    document.getElementById(
      "home-screen"
    )
};

/* =====================
   画面切り替え
===================== */

function hideAllScreens() {

  Object.values(
    screens
  ).forEach(screen => {

    screen.classList.remove(
      "active"
    );
  });
}

function showScreen(screen) {

  hideAllScreens();

  screen.classList.add(
    "active"
  );
}

/* =====================
   タイトル開始
===================== */

const startBtn =
  document.getElementById(
    "start-btn"
  );

startBtn.onclick = () => {

  showScreen(
    screens.menu
  );
};

/* =====================
   メニュー遷移
===================== */

document.getElementById(
  "menu-tame"
).onclick = () => {

  showScreen(
    screens.tame
  );
};

document.getElementById(
  "menu-territory"
).onclick = () => {

  showScreen(
    screens.territory
  );
};

document.getElementById(
  "menu-training"
).onclick = () => {

  showScreen(
    screens.training
  );
};

document.getElementById(
  "menu-home"
).onclick = () => {

  showScreen(
    screens.home
  );
};

/* =====================
   戻るボタン
===================== */

const backButtons =
  document.querySelectorAll(
    ".back-btn"
  );

backButtons.forEach(button => {

  button.onclick = () => {

    showScreen(
      screens.menu
    );
  };
});

/* =====================
   タイトル演出
===================== */

const gameTitle =
  document.querySelector(
    ".game-title"
  );

gameTitle.animate(

  [

    {
      transform:
        "scale(1)"
    },

    {
      transform:
        "scale(1.05)"
    },

    {
      transform:
        "scale(1)"
    }

  ],

  {

    duration:
      2000,

    iterations:
      Infinity

  }
);

/* =====================
   STOPゲージ
===================== */

const gaugeBar =
  document.getElementById(
    "gauge-bar"
  );

const gaugeText =
  document.getElementById(
    "gauge-text"
  );

const stopBtn =
  document.getElementById(
    "stop-btn"
  );

let gaugeValue = 0;

let gaugeDirection = 1;

let gaugeAnimation = null;

/* =====================
   ゲージ開始
===================== */

function startGauge() {

  clearInterval(
    gaugeAnimation
  );

  gaugeValue = 0;

  gaugeDirection = 1;

  gaugeAnimation = setInterval(() => {

    gaugeValue +=
      gaugeDirection * 2;

    /* 往復 */

    if (gaugeValue >= 100) {

      gaugeValue = 100;

      gaugeDirection = -1;
    }

    if (gaugeValue <= 0) {

      gaugeValue = 0;

      gaugeDirection = 1;
    }

    /* UI更新 */

    gaugeBar.style.width =
      `${gaugeValue}%`;

    /* 倍率 */

    const multiplier =

      (
        1 +
        gaugeValue / 25
      ).toFixed(1);

    gaugeText.textContent =
      `x${multiplier}`;

  }, 16);
}

/* =====================
   STOP
===================== */

stopBtn.onclick = () => {

  clearInterval(
    gaugeAnimation
  );

  const multiplier =

    (
      1 +
      gaugeValue / 25
    ).toFixed(1);

  const battleLog =
    document.getElementById(
      "battle-log"
    );

  battleLog.innerHTML =

    `
    STOP！
    <br>
    攻撃倍率 :
    x${multiplier}
    `;

  /* 1秒後再開 */

  setTimeout(() => {

    startGauge();

  }, 1000);
};

/* =====================
   モンスターテイム開始時
===================== */

document.getElementById(
  "menu-tame"
).addEventListener(

  "click",

  () => {

    startGauge();
  }
);
