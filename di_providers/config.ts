import {REGISTRATION as CONFIG_REGISTRATION} from '../configs/registration';

export const Providers = [
    {
        provide: 'CONFIG_REGISTRATIONS',
        useValue: CONFIG_REGISTRATION,
        multi: true
    }
];
