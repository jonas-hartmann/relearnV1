import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyprofilePage } from '../pages/myprofile/myprofile';
import { OngoingcoursesPage } from '../pages/ongoingcourses/ongoingcourses';
import { BookmarkedPage } from '../pages/bookmarked/bookmarked';
import { SupportPage } from '../pages/support/support';
import { SinginPage } from '../pages/singin/singin';
import { HomePage } from '../pages/home/home';
import { NotificationPage } from '../pages/notification/notification';
import { TranslateService } from '../../node_modules/@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = SinginPage;
    
 pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, public translate:TranslateService) {
    this.initializeApp();

    // used for an example of ngFor and navigation

  }

 initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
       this.translate.setDefaultLang('en');
      this.translate.use('en');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
    myprofile(){
        this.nav.setRoot(MyprofilePage)
    } 
    notification(){
        this.nav.setRoot(NotificationPage)
    }  
    home(){
        this.nav.setRoot(HomePage)
    }  
    ongoingcourses(){
        this.nav.setRoot(OngoingcoursesPage)
    }  
    bookmarked(){
        this.nav.setRoot(BookmarkedPage)
    } 
    support(){
        this.nav.setRoot(SupportPage)
    }  
    singin(){
        this.nav.setRoot(SinginPage)
    } 
}
