import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  
  // Apps & Pages
  {
    id: 'apps',
    type: 'section',
    title: 'Menú',
    icon: 'home',
    children: [
      
      {
        id: 'pages',
        title: 'Paginas',
        type: 'collapsible',
        icon: 'file-text',
        children: [
          {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapsible',
            icon: 'circle',
            children: [
              {
                id: 'login-v1',
                title: 'Login V1',
                type: 'item',
                url: 'pages/authentication/login-v1',
                openInNewTab: true
              },
              {
                id: 'login-v2',
                title: 'Login V2',
                type: 'item',
                url: 'pages/authentication/login-v2',
                openInNewTab: true
              },
              {
                id: 'register-v1',
                title: 'Register V1',
                type: 'item',
                url: 'pages/authentication/register-v1',
                openInNewTab: true
              },
              {
                id: 'register-v2',
                title: 'Register V2',
                type: 'item',
                url: 'pages/authentication/register-v2',
                openInNewTab: true
              },
              {
                id: 'forgot-password-v1',
                title: 'Forgot Password V1',
                type: 'item',
                url: 'pages/authentication/forgot-password-v1',
                openInNewTab: true
              },
              {
                id: 'forgot-password-v2',
                title: 'Forgot Password V2',
                type: 'item',
                url: 'pages/authentication/forgot-password-v2',
                openInNewTab: true
              },
              {
                id: 'reset-password-v1',
                title: 'Reset Password V1',
                type: 'item',
                url: 'pages/authentication/reset-password-v1',
                openInNewTab: true
              },
              {
                id: 'reset-password-v2',
                title: 'Reset Password V2',
                type: 'item',
                url: 'pages/authentication/reset-password-v2',
                openInNewTab: true
              }
            ]
          },
          {
            id: 'account-settings',
            title: 'Account Settings',
            type: 'item',
            icon: 'circle',
            url: 'pages/account-settings'
          },
          {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            icon: 'circle',
            url: 'pages/profile'
            // collapsed: true
          },

        ]
      },
     {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            icon: 'circle',
            url: 'pages/profile'
            // collapsed: true
          },
    
    ]
  },

  
];
