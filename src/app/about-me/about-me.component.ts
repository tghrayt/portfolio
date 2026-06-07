import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-about-me',
    imports: [NgOptimizedImage],
    templateUrl: './about-me.component.html',
    styles: [
        `
            .cursor {
                display: inline-block;
                width: 3px;
                background-color: currentColor;
                animation: blink 1s step-end infinite;
                margin-left: 4px;
                height: 1.2em;
                vertical-align: middle;
                margin-bottom: -0.1em;
            }
            @keyframes blink {
                0%,
                100% {
                    opacity: 1;
                }
                50% {
                    opacity: 0;
                }
            }
        `,
    ],
})
export class AboutMeComponent implements OnInit, OnDestroy {
    titles: string[] = [
        'Software Engineer',
        'Backend Developer',
        'Cloud Enthusiast',
        'System Architect',
    ];
    currentTitle: string = '';
    private titleIndex: number = 0;
    private charIndex: number = 0;
    private isDeleting: boolean = false;
    private typingTimer: any;

    ngOnInit() {
        if (typeof window !== 'undefined') {
            this.type();
        } else {
            this.currentTitle = this.titles[0];
        }
    }

    ngOnDestroy() {
        if (typeof window !== 'undefined' && this.typingTimer) {
            window.clearTimeout(this.typingTimer);
        }
    }

    private type() {
        const currentFullTitle = this.titles[this.titleIndex];

        if (this.isDeleting) {
            this.currentTitle = currentFullTitle.substring(
                0,
                this.charIndex - 1
            );
            this.charIndex--;
        } else {
            this.currentTitle = currentFullTitle.substring(
                0,
                this.charIndex + 1
            );
            this.charIndex++;
        }

        let typeSpeed = this.isDeleting ? 40 : 100;

        if (!this.isDeleting && this.charIndex === currentFullTitle.length) {
            typeSpeed = 2000; // Pause at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.titleIndex = (this.titleIndex + 1) % this.titles.length;
            typeSpeed = 500; // Pause before typing new word
        }

        if (typeof window !== 'undefined') {
            this.typingTimer = window.setTimeout(() => this.type(), typeSpeed);
        }
    }
}
