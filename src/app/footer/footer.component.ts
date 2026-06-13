import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
    selector: 'app-footer',
    imports: [SocialMediaComponent],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    currentYear: number = new Date().getFullYear();
}
