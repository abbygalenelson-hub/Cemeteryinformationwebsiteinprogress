import { createBrowserRouter } from 'react-router';
import { RootLayout } from './pages/root-layout';
import { CemeteryMap } from './pages/cemetery-map';
import { PlotDetail } from './pages/plot-detail';
import { PersonDetail } from './pages/person-detail';
import { AllPlots } from './pages/all-plots';
import { AllDeceased } from './pages/all-deceased';
import { History } from './pages/history';
import { FamilyTrees } from './pages/family-trees';
import { GroundPenetratingRadar } from './pages/ground-penetrating-radar';
import { Gallery } from './pages/gallery';
import { NotFound } from './pages/not-found';
import { PlotPlacementTool } from './pages/plot-placement-tool';
import { Contact } from './pages/contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: CemeteryMap },
      { path: 'plot/:plotId', Component: PlotDetail },
      { path: 'person/:personId', Component: PersonDetail },
      { path: 'plots', Component: AllPlots },
      { path: 'deceased', Component: AllDeceased },
      { path: 'gallery', Component: Gallery },
      { path: 'history', Component: History },
      { path: 'family-trees', Component: FamilyTrees },
      { path: 'ground-penetrating-radar', Component: GroundPenetratingRadar },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
  // Hidden admin tool — not linked from the nav
  { path: '/admin/place-plots', Component: PlotPlacementTool },
]);