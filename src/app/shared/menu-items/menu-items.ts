import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}


const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'login', type: 'link', name: 'User', icon: 'person' },
  { state: 'order', type: 'link', name: 'Restaurant', icon: 'food_bank' },
  { state: 'booking', type: 'link', name: 'Bookings Managment', icon: 'view_comfy' },
  { state: 'room', type: 'link', name: 'Rooms Managment', icon: 'domain' },
  { state: 'foyer', type: 'link', name: 'dorm-front', icon: 'blur_circular' },

  { state: 'forum', type: 'link', name: 'Forum', icon: 'forum' },
  { state: 'reclamation', type: 'link', name: 'Reclamation', icon: 'assignment' },

  // { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
  // { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
  // { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
  // { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  // { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
  // { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
  // { state: 'expansion', type: 'link', name: 'Expansion Panel', icon: 'vertical_align_center'},
  // { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
  // { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  // { state: 'progress-snipper', type: 'link', name: 'Progress snipper', icon: 'border_horizontal'},
  // { state: 'progress', type: 'link', name: 'Progress Bar', icon: 'blur_circular'},
  // { state: 'dialog', type: 'link', name: 'Dialog', icon: 'assignment_turned_in'},
  // { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  // { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  // { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  // { state: 'slide-toggle', type: 'link', name: 'Slide Toggle', icon: 'all_inclusive'}
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
