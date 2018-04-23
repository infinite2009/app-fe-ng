import {MenuItem} from '../../../interface/aside-nav-item';

export const ANALYSIS_MENU: MenuItem[] = [
    {
        'id': 200,
        'title': '应用概况',
        'uri': 'analysis/overview',
        'collapsed': false,
        'icon': 'icon-yingyonggaikuang',
        'type': 'new'
    },
    {
        'id': 300,
        'title': '基本指标',
        'collapsed': false,
        'icon': 'icon-jichuzhibiao',
        'children': [
            {
                'id': 301,
                'title': '趋势分析',
                'uri': 'analysis/new-user',
            },
            {
                'id': 302,
                'title': '活跃用户',
                'uri': 'analysis/activity-degree',
            },
            {
                'id': 303,
                'title': '新增留存',
                'uri': 'analysis/retaineduser',
            },
            {
                'id': 304,
                'title': '首次留存用户',
                'uri': 'analysis/firstretain',
            },
            {
                'id': 306,
                'title': '用户活跃留存',
                'uri': 'analysis/retained_active_user',
            },
        ]
    },
    {
        'id': 400,
        'title': '用户分析',
        'collapsed': false,
        'icon': 'icon-yonghufenxi',
        'children': [
            {
                'id': 401,
                'title': '地域分布',
                'uri': 'analysis/region',
            },
            {
                'id': 402,
                'title': '终端分析',
                'uri': 'analysis/terminal',
            },
            {
                'id': 403,
                'title': '用户属性',
                'uri': 'analysis/visit_attribute',
            },
            {
                'id': 404,
                'title': '实时抽样',
                'uri': 'analysis/sample',
            },
        ],
    },
    {
        'id': 500,
        'title': '使用分析',
        'collapsed': false,
        'icon': 'icon-shiyonghangwei',
        'children': [
            {
                'id':
                    501,
                'title':
                    '访问页面',
                'uri':
                    'visit_page',
            },
            {
                'id':
                    502,
                'title':
                    '访问路径',
                'uri':
                    'visit_path',
            },
            {
                'id':
                    507,
                'title':
                    '用户忠诚度',
                'uri':
                    'character',
            },
        ]
    },
    {
        'id': 600,
        'title': '渠道和版本',
        'collapsed': false,
        'icon': 'icon-qudaofenxi',
        'children': [
            {
                'id': 601,
                'title': '渠道分布',
                'uri': 'analysis/channel'
            },
            {
                'id': 602,
                'title': '版本分布',
                'uri': 'analysis/version',
            },
            {
                'id': 603,
                'title': '渠道来源细分',
                'uri': 'analysis/channel_source'
            },
        ]
    },
    {
        'id': 1500,
        'title': '事件分析',
        'collapsed': false,
        'icon': 'icon-zidingyishijian',
        'children': [
            {
                'id': 1501,
                'title': '埋点事件',
                'uri': 'analysis/event'
            },
            {
                'id': 1502,
                'title': '无埋点事件',
                'uri': 'analysis/auto_event'
            }
        ]
    },
    {
        'id': 1400,
        'title': '转化分析',
        'uri': 'analysis/conversion',
        'collapsed': false,
        'icon': 'icon-zhuanhuafenxi'
    }];
