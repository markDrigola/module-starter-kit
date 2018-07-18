import {REGISTRATION as BOOTSTRAP_REGISTRATION} from '../bootstrap_tasks';
import {BOOTSTRAP_REGISTRATIONS, BOOTSTRAP_TASKS} from 'md-core-test-first-version';

import {InjectionToken} from '@angular/core';
import {CoreBootstrapRegistration} from 'md-core-test-first-version';

export const Providers = [
    {
        provide: BOOTSTRAP_REGISTRATIONS,
        useValue: BOOTSTRAP_REGISTRATION,
        multi: true
    }
];
