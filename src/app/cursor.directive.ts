import { Directive, HostBinding, HostListener } from '@angular/core'


@Directive({
	selector: '[cursor]'
})
export class CursorDirective {
	@HostBinding('style.cursor') cursor;
	@HostListener('mouseenter') mouseEnter(){
		this.cursor = "pointer";
	}
}