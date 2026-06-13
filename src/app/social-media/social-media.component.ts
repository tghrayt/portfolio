import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../services/data.service';
import { SocialMediaItem } from '../dto/SocialMediaItem';

@Component({
    selector: 'app-social-media',
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './social-media.component.html',
})
export class SocialMediaComponent implements OnInit {
    socialMediaItems: SocialMediaItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService
            .loadData<SocialMediaItem[]>('social-media')
            .subscribe((data) => {
                this.socialMediaItems = data;
            });
    }
}
