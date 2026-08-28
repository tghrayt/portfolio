import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { NavBarItem } from '../dto/NavBarItem';
import { ThemeService } from '../services/theme.service';

@Component({
    selector: 'app-nav-bar',
    imports: [RouterLink, RouterLinkActive, SocialMediaComponent],
    templateUrl: './nav-bar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
    themeService = inject(ThemeService);
    isMobileMenuOpen = false;

    menuItems: NavBarItem[] = [
        { label: 'Home', link: '/', exact: true },
        { label: 'Projects', link: '/projects', exact: false },
    ];

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    closeMobileMenu() {
        this.isMobileMenuOpen = false;
    }

    toggleDarkMode() {
        this.themeService.toggleTheme();
    }
}
