import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoolComponentComponent } from './cool-component/cool-component.component'
import { NiceComponentComponent } from './nice-component/nice-component.component'


const appRoutes: Routes = [
	{ path: "cool", component: CoolComponentComponent },
	{ path: "nice", component: NiceComponentComponent },
	{ path: "", component: CoolComponentComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class MyRoutes {

}