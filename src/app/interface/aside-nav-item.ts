import { AsideNavItemChild } from './aside-nav-item-child';

export interface MenuItem {
    id: number;
    title: string;
    uri?: string;
    selected?: boolean;
    collapsed?: boolean;
    type?: string;
    icon: string;
    children?: Array<AsideNavItemChild>;
}
