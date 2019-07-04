import * as R from './routes';

export interface RouteParamsState {
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export default interface State {
  route: R.Route;
  routeParams: RouteParamsState;
} // eslint-disable-line semi
