import { Injectable, Inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    isDarkMode = signal<boolean>(false);

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.initializeTheme();
    }

    private initializeTheme(): void {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            this.setDarkMode(true);
        } else {
            this.setDarkMode(false);
        }
    }

    toggleTheme(): void {
        this.setDarkMode(!this.isDarkMode());
    }

    private setDarkMode(isDark: boolean): void {
        this.isDarkMode.set(isDark);
        if (isDark) {
            this.document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            this.document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
}
