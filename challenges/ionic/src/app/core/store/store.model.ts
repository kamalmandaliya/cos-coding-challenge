import { RouterStateModel } from '@ngxs/router-plugin';
import { MainPageStateModel } from '../../tabs/main/main.model';
import { ProfilePageStateModel } from '../../tabs/profile/profile.model';
import { AuthStateModel } from '../auth-guard/auth-guard.models';

export interface AppStoreModel {
  auth: AuthStateModel;
  main: MainPageStateModel;
  profile: ProfilePageStateModel;
  router: RouterStateModel;
}

export interface AppStoreLoadingStatesModel {
  isLoading: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  error: string;
}
