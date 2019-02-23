import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';

import { NzSiderComponent } from 'ng-zorro-antd';

@Component({
    selector: 'app-default-layout',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent {

    @ViewChild(NzSiderComponent) public siderComponent: NzSiderComponent;

    public isCollapsed = true;

    public toggleSider() {
        this.siderComponent.toggleCollapse();
    }

    public onCollapseChange(collapseState: boolean): void {
        this.isCollapsed = collapseState;
    }

}
