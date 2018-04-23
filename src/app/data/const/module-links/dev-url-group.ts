/**
 * @file
 * @author luodongyang(infinite2010@yeah.net)
 * @date 10/15/2017
 */
import {MenuItem} from '../../../interface/aside-nav-item';

export const DEV_MENU: MenuItem[] = [
    {
        'id': 800,
        'title': '错误分析',
        'collapsed': false,
        'icon': 'error-analysis',
        'children': [
            {
                'id': 702,
                'title': '错误报告',
                'uri': 'visit_error'
            },
            {
                'id': 703,
                'title': '错误明细',
                'uri': 'visit_errortype'
            },
            {
                'id': 704,
                'title': '错误详情',
                'uri': 'visit_errordetail'
            },
            {
                'id': 705,
                'title': '错误路径',
                'uri': 'visit_errorpath'
            },
            {
                'id': 706,
                'title': '文件管理',
                'uri': 'home_file'
            }
        ]
    }
];
