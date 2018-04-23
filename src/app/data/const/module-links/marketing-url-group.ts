import {MenuItem} from '../../../interface/aside-nav-item';

export const MARKETING_MENU: MenuItem[] = [
    {
        'id': 1600,
        'title': '基本指标',
        'collapsed': false,
        'icon': 'icon-jichuzhibiao',
        'children': [
            {
                'id': 1601,
                'title': '趋势分析',
                'uri': 'new-user',
            },
            {
                'id': 1602,
                'title': '活跃用户',
                'uri': 'activity-degree',
            },
            {
                'id': 1603,
                'title': '新增留存',
                'uri': 'retaineduser',
            },
            {
                'id': 1604,
                'title': '首次留存用户',
                'uri': 'firstretain',
            },
            {
                'id': 1606,
                'title': '用户活跃留存',
                'uri': 'retained_active_user',
            },
        ]
    }
];
