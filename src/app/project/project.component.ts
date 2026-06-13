import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../services/data.service';

import { ProjectItem } from '../dto/ProjectItem';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [],
})
export class ProjectComponent implements OnInit {
    projects: ProjectItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService
            .loadData<ProjectItem[]>('projects')
            .subscribe((data) => {
                this.projects = data;
            });
    }
}
