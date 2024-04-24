import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class Utilities {
  hide: boolean = false;

  constructor(private router: Router) {}

  redirect(page: string, params: any = null): void {
    this.router.navigate(['/' + page], { queryParams: params });
  }

  hasErrors(field: string, typeError: string, form: FormGroup) {
    return (
      form.get(field)?.hasError(typeError) &&
      form.get(field)?.touched
    );
  }

  async showLoading(message: string) {
    this.hide = false;
    // await this.loadingCtrl.create({
    //     message: message,
    // }).then( load => {
    //     load.present();
    //     if (this.hide) load.dismiss();
    // });
  }

  async hideLoading() {}
}
