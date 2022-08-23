declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  childrens?: RouteInfo[];
  id?: string;
  permittedTo: string[];
}

export const ROUTES: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    icon: 'dashboard',
    class: '',
    id: 'dashboard',
    permittedTo: ['CLIENT', 'CLIENT_USER'],
  },
  {
    path: '#',
    title: 'Profiles',
    icon: 'content_paste',
    class: '',
    id: 'profiles',
    permittedTo: ['CLIENT', 'VENDOR'],
    childrens: [
      {
        path: '/user/profiles',
        title: 'View Profile',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['CLIENT', 'VENDOR'],
      },
      {
        path: '/user/viewVUserProfileCnt',
        title: 'Vendor Users Profile Count',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['VENDOR'],
      },
      {
        path: '/user/noticeperiod',
        title: 'Notice Period',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['VENDOR'],
      },
      {
        path: '/user/profile-status-summary',
        title: 'Profiles Current Status Summary',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['VENDOR'],
      },
      {
        path: '/user/changescreener',
        title: 'Change Screener',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['VENDOR'],
      },
    ],
  },
  {
    path: '/user/screening-pending',
    title: 'Screening Pending',
    icon: 'person',
    class: '',
    id: 'screening-pending',
    permittedTo: ['VENDOR'],
  },
  {
    path: '/user/screening-complete',
    title: 'Screening Complete',
    icon: 'person',
    class: '',
    id: 'screening-complete',
    permittedTo: ['VENDOR'],
  },
  {
    path: '/user/query-response',
    title: 'Query Response',
    icon: 'person',
    class: '',
    id: 'query-response',
    permittedTo: ['VENDOR'],
  },
  {
    path: '#',
    title: 'JDs',
    icon: 'content_paste',
    class: '',
    id: 'jds',
    permittedTo: ['CLIENT', 'CLIENT_USER', 'VENDOR'],
    childrens: [
      {
        path: '/user/create-jd',
        title: 'Create JD',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['CLIENT', 'CLIENT_USER'],
      },
      {
        path: '/user/open-jds',
        title: 'All Open JDs',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['CLIENT', 'CLIENT_USER', 'VENDOR'],
      },
    ],
  },
  {
    path: '#',
    title: 'Users',
    icon: 'library_books',
    class: '',
    id: 'users',
    permittedTo: ['CLIENT'],
    childrens: [
      {
        path: '/user/vendor-users',
        title: 'All Vendor Users',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['CLIENT'],
      },
      {
        path: '/user/client-users',
        title: 'All Client Users',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['CLIENT'],
      },
      {
        path: '/user/screeners',
        title: 'All Screeners',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['CLIENT'],
      },
    ],
  },
  {
    path: '/user/stkhr-cmnn',
    title: 'Stakeholder Communication',
    icon: 'person',
    class: '',
    permittedTo: ['CLIENT'],
    id: 'stkhrCmnn',
  },
  {
    path: '#',
    title: 'User Requisition',
    icon: 'notifications',
    class: '',
    id: 'requisition',
    permittedTo: ['CLIENT','VENDOR'],
    childrens: [
      {
        path: '/user/register-vendor',
        title: 'Register Vendor',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['CLIENT'],
      },
      {
        path: '/user/register-user',
        title: 'Register Other Users',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['CLIENT'],
      }, {
        path: '/user/register-vendoruser',
        title: 'Register Other Users',
        icon: 'bubble_chart',
        class: '',
        permittedTo: ['VENDOR'],
      },
    ],
  },
];
