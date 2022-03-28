import { AppStoreLoadingStatesModel } from '../../core/store/store.model';

export interface ProfileModel {
  id: string;
  authToken: string;
  email: string;
  password: string;
}

export interface ProfileStateModel extends AppStoreLoadingStatesModel {
  listData: ProfileModel | null;
}

export interface ProfilePageStateModel {
  profile: ProfileStateModel;
}
