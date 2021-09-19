import { createBrowserHistory } from 'history';
import { Eichenwalde } from './pages/Eichenwalde/Eichenwalde';

export interface AppRoute {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
  label?: string;
}

export interface AppRouteParameters {
  /**
   * <EXAMPLE> Room Id. Short version (without the organization ID)
   */
  id: string;
}

// type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export const appHistory = createBrowserHistory();

export const appRoutes: AppRoute[] = [
    { path: '/eichenwalde', label: 'Eichenwalde', component: Eichenwalde, exact: true }
];