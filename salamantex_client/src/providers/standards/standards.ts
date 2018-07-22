import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AlertController, PopoverController, ToastController, ModalController, MenuController,
  LoadingController
} from "ionic-angular";

@Injectable()
export class StandardsProvider {
  alert;
  toast;
  popover;
  modal;
  loading;

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private popoverCtrl: PopoverController,
              private modalCtrl: ModalController, private menu: MenuController, private loadingCtrl: LoadingController) {
    console.log('Hello StandardsProvider Provider');
  }

  public presentLoadingDefault() {
    if(this.loading == null) {
      this.loading = this.loadingCtrl.create({
        content: 'Bitte warten...'
      });

      this.loading.present();
      this.loading.onDidDismiss(() => {
        this.loading = null;
      });
    }

  }

  dismissLoadingDefault() {
    if(this.loading != null)
      this.loading.dismiss();
  }

  public showAlert(title, subTitle, callback) {
    if(this.alert == null) {
      this.alert = this.alertCtrl.create({
        title: title,
        subTitle: subTitle,
        buttons: ['OK']
      });
      this.alert.present();
      this.alert.onDidDismiss(()=> {
        this.alert = null;
        callback();
      })
    }
  }

  public showToast(message, duration, position) {
    if(this.toast == null) {
      this.toast = this.toastCtrl.create({
        message: message,
        duration: duration,
        position: position
      });
      this.toast.present();
      this.toast.onDidDismiss(() => {
        this.toast = null;
      })
    }
  }

  presentPopover(myEvent, page) {
    let popover = this.popoverCtrl.create(page);
    popover.present({
      ev: myEvent
    });
  }

  openModal(page, params, enableBackdrop, dismissOnBackdrop, callback) {
    if(this.modal == null) {
      this.modal = this.modalCtrl.create(page, params, {showBackdrop: enableBackdrop, enableBackdropDismiss: dismissOnBackdrop});
      this.modal.onDidDismiss((data) => {
        this.modal = null;
        callback(data);
      });
      this.modal.present();
    }
  }
}
