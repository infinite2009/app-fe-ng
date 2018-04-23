import {SystemConfig} from './system.config';
import {PageInfoConfig} from './page-info.config';
import {UserInfoConfig} from './user-info.config';
export interface GlobalConfig {
    systemConfig: SystemConfig;
    pageInfo?: PageInfoConfig;
    userInfo: UserInfoConfig;
}
