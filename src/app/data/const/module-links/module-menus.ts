/**
 * @file
 * @author luodongyang(luodongyang@baidu.com)
 * @date 2017/7/29.
 */
import { ModuleMenu } from '../../../interface/module-menu';
import {DEV_MENU} from './dev-url-group';
import {PLAYGROUND_MENU} from './playground-url-group';
import {SETTING_MENU} from './setting-url-group';
import {USER_MANAGEMENT_MENU} from './user-management-url-group';
import {MARKETING_MENU} from './marketing-url-group';
import {ANALYSIS_MENU} from './analysis-url-group';

export const MODULE_MENUS: ModuleMenu[] = [
    {
        id: 0,
        label: '分析',
        url: 'analysis',
        menu: ANALYSIS_MENU
    },
    {
        id: 1,
        label: '营销',
        url: 'addashboard',
        menu: MARKETING_MENU
    },
    {
        id: 2,
        label: '开发',
        url: 'error',
        menu: DEV_MENU
    },
    {
        id: 3,
        label: '用户管理',
        url: '',
        menu: USER_MANAGEMENT_MENU
    },
    {
        id: 4,
        label: '设置',
        url: 'app-info',
        menu: SETTING_MENU
    },
    {
        id: 5,
        label: '组件试验场',
        url: 'playground',
        menu: PLAYGROUND_MENU
    }

];
