import { lazy } from 'react';

export const Pages = {
  TeamData: lazy(() => import('./TeamData')),
  Home: lazy(() => import('./Home')),
  Error: lazy(() => import('./Error')),
  BingoBoard: lazy(() => import('./BingoBoard')),
  BingoRules: lazy(() => import('./BingoRules')),
  BingoScores: lazy(() => import('./BingoScores')),
  AdminPanel: lazy(() => import('./AdminPanel')),
  BingoBuilder: lazy(()=> import('./AdminPanel'))
  TeamDrafter: lazy(()=> import('./AdminPanel'))
  BoardBuilder: lazy(()=> import('./AdminPanel'))
  // ScreenshotSubmissions: lazy(()=> import('./AdminPanel'))

};
