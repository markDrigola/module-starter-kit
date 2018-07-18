import {CONFIG as systemMainConfig} from "./system/main";
import {CONFIG as systemBackgroundWorkerConfig} from "./system/background_worker";
import {CoreConfigRegistration} from 'md-core-test-first-version';

export const REGISTRATION = new CoreConfigRegistration({
    '/system/main/': systemMainConfig,
    '/system/background_worker/': systemBackgroundWorkerConfig
});
