import accordion from './accordion';
import autocomplete from './autocomplete';
import avatar from './avatar';
import avatargroup from './avatargroup';
import badge from './badge';
import badgedirective from './badgedirective';
import button from './button';
import calendar from './calendar';
import card from './card';
import checkbox from './checkbox';
import chip from './chip';
import chips from './chips';
import dialog from './dialog';
import dropdown from './dropdown';
import fieldset from './fieldset';
import global from './global';
import inlinemessage from './inlinemessage';
import inputnumber from './inputnumber';
import inputswitch from './inputswitch';
import inputtext from './inputtext';
import menu from './menu';
import message from './message';
import overlaypanel from './overlaypanel';
import panel from './panel';
import progressbar from './progressbar';
import ripple from './ripple';
import selectbutton from './selectbutton';
import sidebar from './sidebar';
import slider from './slider';
import tabview from './tabview';
import tag from './tag';
import toast from './toast';
import tooltip from './tooltip';

export default {
    global,
    directives: {
        badge: badgedirective,
        ripple,
        tooltip
    },

    //forms
    autocomplete,
    dropdown,
    inputnumber,
    inputtext,
    calendar,
    checkbox,
    inputswitch,
    slider,
    chips,

    //buttons
    button,
    selectbutton,

    //panels
    accordion,
    panel,
    fieldset,
    card,
    tabview,

    //menu
    menu,

    //overlays
    dialog,
    overlaypanel,
    sidebar,

    //messages
    message,
    inlinemessage,
    toast,

    //misc
    badge,
    avatar,
    avatargroup,
    tag,
    chip,
    progressbar
};
