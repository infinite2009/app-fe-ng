/**
 * @file
 * @date 10/15/2017
 * @author luodongyang(infinite2010@yeah.net)
 */
import {MenuItem} from '../../../interface/aside-nav-item';

export const SETTING_MENU: Array<MenuItem> = [
    {
        'id': 900,
        'title': '设置',
        'collapsed': false,
        'icon': 'home-settings',
        'children': [
            {
                'id': 902,
                'title': '渠道管理',
                'uri': 'home_channel'
            },
            {
                'id': 903,
                'title': '权限管理',
                'uri': 'home_account'
            },
            {
                'id':
                    904,
                'title':
                    '新增权限帐户',
                'uri':
                    'home_account_add',
            },
            {
                'id':
                    905,
                'title':
                    '用户类型管理',
                'uri':
                    'home_usertype'
            },
            {
                'id':
                    906,
                'title':
                    '版本管理',
                'uri':
                    'home_version'
            },
            {
                'id': 907,
                'title': '渠道来源管理',
                'uri': 'home_channel_source'
            },
            {
                'id': 908,
                'title': '关卡设置管理',
                'uri': 'home_task'
            }
        ]
    }
];
