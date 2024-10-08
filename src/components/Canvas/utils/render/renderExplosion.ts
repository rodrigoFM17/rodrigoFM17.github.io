import explosion from '../../../../assets/images/tank_explosion.webp'
import { Position } from '../../../../models/Position';
import { renderGrid } from './renderGrid';
import { renderTroops } from './renderTroops';

export const renderExplosion = (ctx: CanvasRenderingContext2D, pointToAttack: Position, matrixA:Position[][], matrixB: Position[][]) => {
  const imgExplosion = new Image();
  let i = 0;
  const radiusExplosion = parseInt(import.meta.env.VITE_RADIUS_EXPLOSION);

  const interval = setInterval(() => {
    if (i <= 1) {
      i += 0.1;
      ctx.globalAlpha = i;
      imgExplosion.addEventListener("load", () => {
        ctx.drawImage(
          imgExplosion,
          pointToAttack.x - radiusExplosion,
          pointToAttack.y - radiusExplosion,
          radiusExplosion * 2,
          radiusExplosion * 2
        );
      });
      imgExplosion.src = explosion;
    } else {
      clearInterval(interval);
      ctx.clearRect(
        pointToAttack.x - radiusExplosion,
        pointToAttack.y - radiusExplosion,
        radiusExplosion * 2,
        radiusExplosion * 2
      );
      renderGrid(ctx, 1280, 720)
      renderTroops(ctx, matrixA, matrixB)
    }
  }, 100);
};
