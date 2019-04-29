import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#BlogRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#BlogCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#BlogLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#BlogDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#BlogTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#BlogEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#BlogJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#BlogJobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogEntityModule {}
