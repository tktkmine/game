import {

  startGauge,

  stopGauge,

  getGaugeMultiplier

}
from "./systems/gauge.js";

import {

  setBattleLog,

  showStopResult

}
from "./ui/battleUI.js";

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
   タイトル
===================== */

document.getElementById(
  "start-btn"
).onclick = () => {

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

  initializeBattle();
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
   戻る
===================== */

const backButtons =
  document.querySelectorAll(
    ".back-btn"
  );

backButtons.forEach(button => {

  button.onclick = () => {

    stopGauge();

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
   バトル初期化
===================== */

function initializeBattle() {

  setBattleLog(

    "戦闘開始！"
  );

  const gaugeBar =
    document.getElementById(
      "gauge-bar"
    );

  const gaugeText =
    document.getElementById(
      "gauge-text"
    );

  startGauge({

    gaugeBar,

    gaugeText

  });
}

/* =====================
   STOP
===================== */

document.getElementById(
  "stop-btn"
).onclick = () => {

  stopGauge();

  const multiplier =
    getGaugeMultiplier();

  showStopResult({

    multiplier
  });

  /* 再開 */

  setTimeout(() => {

    const gaugeBar =
      document.getElementById(
        "gauge-bar"
      );

    const gaugeText =
      document.getElementById(
        "gauge-text"
      );

    startGauge({

      gaugeBar,

      gaugeText

    });

  }, 1000);
};
