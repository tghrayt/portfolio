import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { NavBarItem } from '../dto/NavBarItem';

@Component({
    selector: 'app-nav-bar',
    imports: [RouterLink, RouterLinkActive, SocialMediaComponent],
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    menuItems: NavBarItem[] = [
        { label: 'Home', link: '/', exact: true },
        { label: 'Projects', link: '/projects', exact: false },
        { label: 'Blogs', link: '/blogs', exact: false },
    ];

    isDarkMode = false;

    ngOnInit() {
        if (typeof document !== 'undefined') {
            this.isDarkMode = document.documentElement.classList.contains('dark');
        }
    }

    toggleDarkMode() {
        if (typeof document !== 'undefined') {
            const html = document.documentElement;
            html.classList.toggle('dark');
            this.isDarkMode = html.classList.contains('dark');
        }
    }
}
