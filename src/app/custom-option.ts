import {ToastOptions} from 'ng2-toastr';

export class CustomOption extends ToastOptions {
  animate = 'flyLeft'; // you can override any options available
  newestOnTop = true;
  showCloseButton = true;
  positionClass = 'toast-top-left';
  toastLife = 2000;
  maxShown = 1;
}
