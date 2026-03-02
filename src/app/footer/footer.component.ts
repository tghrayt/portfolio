import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
    selector: 'app-footer',
    imports: [SocialMediaComponent, NgOptimizedImage],
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    currentYear: number = new Date().getFullYear();

    constructor() {}
}
