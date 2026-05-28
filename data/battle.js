import {

  calculateDamage,

  applyDamage,

  isDead

}
from "./damage.js";

import {

  startGauge,

  stopGauge

}
from "./gauge.js";

import {

  getElementText

}
from "./elements.js";

/* =====================
   戦闘開始
===================== */

export function initializeBattle({

  player,

  enemy,

  gaugeBarId,

  multiplierTextId

}) {

  /* 現在HP */

  player.currentHp =
    player.hp;

  enemy.currentHp =
    enemy.hp;

  /* SPD比較 */

  const firstAttacker =

    player.spd >= enemy.spd
      ? player
      : enemy;

  return {

    player,

    enemy,

    turn:
      firstAttacker.id
  };
}

/* =====================
   プレイヤー攻撃
===================== */

export function playerAttack({

  battleData,

  logElementId

}) {

  /* ゲージ停止 */

  const multiplier =
    stopGauge();

  const damage =

    calculateDamage({

      attacker:
        battleData.player,

      defender:
        battleData.enemy,

      gaugeMultiplier:
        multiplier

    });

  /* ダメージ適用 */

  applyDamage({

    target:
      battleData.enemy,

    damage

  });

  /* ログ */

  const elementText =

    getElementText({

      attacker:
        battleData.player,

      defender:
        battleData.enemy

    });

  addBattleLog({

    logElementId,

    text:

      `${battleData.player.name}
       の攻撃！
       ${damage} ダメージ！
       ${elementText}`

  });

  /* 勝利 */

  if (
    isDead(
      battleData.enemy
    )
  ) {

    return {

      finished: true,

      winner: "player"
    };
  }

  return {

    finished: false
  };
}

/* =====================
   敵攻撃
===================== */

export function enemyAttack({

  battleData,

  logElementId

}) {

  /* AI倍率 */

  const multiplier =

    1 +
    Math.random() * 4;

  const damage =

    calculateDamage({

      attacker:
        battleData.enemy,

      defender:
        battleData.player,

      gaugeMultiplier:
        multiplier

    });

  /* ダメージ */

  applyDamage({

    target:
      battleData.player,

    damage

  });

  /* ログ */

  const elementText =

    getElementText({

      attacker:
        battleData.enemy,

      defender:
        battleData.player

    });

  addBattleLog({

    logElementId,

    text:

      `${battleData.enemy.name}
       の攻撃！
       ${damage} ダメージ！
       ${elementText}`

  });

  /* 敗北 */

  if (
    isDead(
      battleData.player
    )
  ) {

    return {

      finished: true,

      winner: "enemy"
    };
  }

  return {

    finished: false
  };
}

/* =====================
   ログ追加
===================== */

export function addBattleLog({

  logElementId,

  text

}) {

  const logElement =

    document.getElementById(
      logElementId
    );

  const log =
    document.createElement(
      "p"
    );

  log.textContent = text;

  logElement.prepend(log);
}

/* =====================
   ゲージ開始補助
===================== */

export function beginPlayerGauge({

  gaugeBarId,

  multiplierTextId

}) {

  startGauge({

    gaugeBarId,

    multiplierTextId

  });
}
