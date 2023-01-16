import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class JarvisAutocompleteService {
    constructor() { }
}
JarvisAutocompleteService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: JarvisAutocompleteService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
JarvisAutocompleteService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: JarvisAutocompleteService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: JarvisAutocompleteService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class JarvisAutocompleteComponent {
    constructor() { }
    ngOnInit() { }
}
JarvisAutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: JarvisAutocompleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
JarvisAutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: JarvisAutocompleteComponent, selector: "lib-jarvis-autocomplete", ngImport: i0, template: ` <p>jarvis-autocomplete works!</p> `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: JarvisAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-jarvis-autocomplete', template: ` <p>jarvis-autocomplete works!</p> ` }]
        }], ctorParameters: function () { return []; } });

class JarvisAutocompleteModule {
}
JarvisAutocompleteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: JarvisAutocompleteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
JarvisAutocompleteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: JarvisAutocompleteModule, declarations: [JarvisAutocompleteComponent], exports: [JarvisAutocompleteComponent] });
JarvisAutocompleteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: JarvisAutocompleteModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: JarvisAutocompleteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        JarvisAutocompleteComponent
                    ],
                    imports: [],
                    exports: [
                        JarvisAutocompleteComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of jarvis-autocomplete
 */

/**
 * Generated bundle index. Do not edit.
 */

export { JarvisAutocompleteComponent, JarvisAutocompleteModule, JarvisAutocompleteService };
//# sourceMappingURL=jarvis-autocomplete.mjs.map
