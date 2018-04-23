/**
 * @file
 * @author luodongyang(luodongyang@baidu.com)
 * @date 2017/7/29.
 */
import {MenuItem} from './aside-nav-item';

export interface ModuleMenu {
    id: number;
    label: string;
    url: string;
    menu: Array<MenuItem>;
}
