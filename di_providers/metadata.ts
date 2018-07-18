import {METADATA} from '../metadata';
import {ObjectWrapperFactory} from 'md-core-test-first-version';
import {CoreMetadataFactory} from 'md-core-test-first-version';

export function AngularFactoryFunctionMetadata(objectWrapperFactory: ObjectWrapperFactory, metadata) {
    return new CoreMetadataFactory(
        objectWrapperFactory
    ).create(metadata);
}

export const Providers = [
    {
        provide: 'SKELETON_METADATA_DATA',
        useValue: METADATA
    },
    {
        provide: 'SKELETON_METADATA',
        useFactory: AngularFactoryFunctionMetadata,
        deps: [ObjectWrapperFactory, 'SKELETON_METADATA_DATA']
    },
];
