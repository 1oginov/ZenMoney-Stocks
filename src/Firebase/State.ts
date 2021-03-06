import { Repository } from 'redux-repository/lib/interfaces';

import * as C from 'Constants';
import { Position } from 'Portfolio/lib';

import VibrantPalette from './lib/Functions/VibrantPalette';

export interface AuthState {
  isEmpty: boolean;
  isLoaded: boolean;
  uid?: string;
}

export interface FunctionsState {
  vibrantPalettes: Repository<VibrantPalette, string>;
}

export interface ProfileState {
  avatarUrl?: string;
  displayName?: string;
  email?: string;
  isEmpty: boolean;
  isLoaded: boolean;
}

export default interface State {
  firebase: {
    auth: AuthState;
    profile: ProfileState;
  };
  firestore: {
    data: {
      [C.STATE_FIREBASE_POSITIONS_KEY]?: {
        // `null` used by `react-redux-firebase` when document deleted.
        [positionId: string]: Omit<Position, 'id'> | null;
      };
    };
  };
  functions: FunctionsState;
} // eslint-disable-line semi
