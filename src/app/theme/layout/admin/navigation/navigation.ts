import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Home',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: 'feather icon-home',
        classes: 'nav-item',
      }
    ]
  },
  {
    id: 'forms',
    title: 'Administrador',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms-element',
        title: 'Clientes',
        type: 'item',
        url: '/clientes',
        classes: 'nav-item',
        icon: 'feather icon-user-check'
      },
      {
        id: 'tables',
        title: 'Reservas',
        type: 'item',
        url: '/reservas',
        classes: 'nav-item',
        icon: 'feather icon-check-circle'
      }
    ]
  },
  {
    id: 'orcamento',
    title: 'Cliente',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'realiza-orcamento',
        title: 'Realizar Orçamento',
        type: 'item',
        url: '/realiza-orcamento',
        classes: 'nav-item',
        icon: 'feather icon-feather'
      },
      {
        id: 'reservar-data',
        title: 'Reservar/Agendar Visita',
        type: 'item',
        url: '/reservar-data',
        classes: 'nav-item',
        icon: 'feather icon-edit'
      },
    ]
  },
  {
    id: 'images',
    title: 'Fotos',
    type: 'group',
    icon: 'icon-charts',
    children: [
      {
        id: 'fotos',
        title: 'Fotos',
        type: 'item',
        url: '/fotos',
        classes: 'nav-item',
        icon: 'feather icon-camera'
      }
    ]
  },
  {
    id: 'informacoes',
    title: 'Informações',
    type: 'group',
    icon: 'icon-pages',
    children: [
          {
            id: 'contato',
            title: 'Contato',
            type: 'item',
            url: '/contato',
            classes: 'nav-item',
            icon: 'feather icon-phone-call'
          },
          {
            id: 'social',
            title: 'Sobre nós',
            type: 'item',
            url: '/social',
            classes: 'nav-item',
            icon: 'feather icon-layers'
          }
        ]
      }
    ];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
