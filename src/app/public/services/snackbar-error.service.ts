import {ApplicationRef, ComponentRef, createComponent, Injectable, Injector} from '@angular/core';
import {ErrorSnackbar} from '../components/error-snackbar/error-snackbar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarErrorService {
  constructor(private appRef: ApplicationRef, private injector: Injector) {}

  show(message: string, duration: number = 3000): void {
    const componentRef: ComponentRef<ErrorSnackbar> = createComponent(ErrorSnackbar, {
      environmentInjector: this.appRef.injector,
      elementInjector: this.injector
    });

    componentRef.instance.message = message;
    componentRef.instance.duration = duration;

    this.appRef.attachView(componentRef.hostView);
    document.body.appendChild(componentRef.location.nativeElement);

    setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, duration + 500); // margen para animación
  }
}
