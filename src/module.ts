import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app-component/app.component';

import {Config, CoreConfigProviders} from 'md-core-test-first-version';
import {CoreBootstrapProviders} from 'md-core-test-first-version';
import {BackgroundWorkerProviders} from 'md-core-test-first-version';
import {EventManagementProviders} from 'md-core-test-first-version';
import {DateTimeProviders} from 'md-core-test-first-version';
import {CoreGeneralProviders} from 'md-core-test-first-version';
import {LoggerProviders} from 'md-core-test-first-version';
import {CoreMetadataProviders} from 'md-core-test-first-version';
import {BackendProviders} from 'md-core-test-first-version';
import {ErrorProviders} from 'md-core-test-first-version';
import {EnvironmentProviders} from 'md-core-test-first-version';
import {CoreMaterialModule} from 'md-core-test-first-version';

import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreDisplayModule} from 'md-core-test-first-version';

import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Providers as TestConfigProviders} from '../di_providers/config';
import {Providers as TestMetadataProviders} from '../di_providers/metadata';

import {Module} from "./Module/module";
import {AppRoutingModule} from "./app-routing.module";

declare var Promise;

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreMaterialModule,
        CoreDisplayModule,
        FormsModule,
        AppRoutingModule,

        Module
    ],
    providers: [
        CoreConfigProviders,
        CoreBootstrapProviders,
        EventManagementProviders,
        BackgroundWorkerProviders,
        DateTimeProviders,
        CoreMetadataProviders,
        CoreGeneralProviders,
        ErrorProviders,
        LoggerProviders,
        BackendProviders,
        EnvironmentProviders,

        TestMetadataProviders,
        TestConfigProviders
    ],
    entryComponents: [
        AppComponent
    ]
})
export class AppModule {
    ngDoBootstrap(app) {
        this.getBootstrapRootComponentName()
            .then((name) => {
                this.bootstrapRootComponent(app, name);
            });
    }

    getBootstrapRootComponentName() {
        return new Promise((resolve, reject) => {
            resolve('app-root');
        });
    }

    bootstrapRootComponent(app, name) {
        const options = {
            'app-root': AppComponent,
        };

        const componentElement = document.createElement(name);
        document.body.insertBefore(componentElement, document.body.firstChild);

        const component = options[name];
        app.bootstrap(component);
    }
}

