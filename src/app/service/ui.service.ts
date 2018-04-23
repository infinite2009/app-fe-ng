import {Injectable} from '@angular/core';
import {MenuItem} from '../interface/aside-nav-item';
import {ModuleMenu} from '../interface/module-menu';

@Injectable()
export class UiService {

    constructor() {
    }

    static getActivatedModuleAndMenu(url: string, moduleMenus: ModuleMenu[]): { activeModuleId: number, activeMenuItem: MenuItem } {
        const urlSegment = url.split('/');
        const urlPath = urlSegment[urlSegment.length - 2] + '/' + urlSegment[urlSegment.length - 1].split('?')[0];
        for (let i = 0, l = moduleMenus.length; i < l; i++) {
            const menu = moduleMenus[i].menu;
            for (let j = 0, ll = menu.length; j < ll; j++) {
                if (menu[j].uri) {
                    if (menu[j].uri === urlPath) {
                        return {
                            activeModuleId: i,
                            activeMenuItem: moduleMenus[i].menu[j]
                        };
                    }
                }
                else if (menu[j].children && menu[j].children.length) {
                    for (let k = 0, lll = menu[j].children.length; k < lll; k++) {
                        if (menu[j].children[k].uri === urlPath) {
                            return {
                                activeModuleId: i,
                                activeMenuItem: moduleMenus[i].menu[j]
                            };
                        }
                    }
                }
            }
        }
    }
}
