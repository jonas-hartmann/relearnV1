import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { BookmarkedPage } from '../pages/bookmarked/bookmarked';
import { CategoryPage } from '../pages/category/category';
import { CourcedetailsPage } from '../pages/courcedetails/courcedetails';
import { CoursePage } from '../pages/course/course';
import { DesignPage } from '../pages/design/design';
import { FiltersPage } from '../pages/filters/filters';
import { HomePage } from '../pages/home/home';
import { LecturerprofilePage } from '../pages/lecturerprofile/lecturerprofile';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { NotificationPage } from '../pages/notification/notification';
import { OngoingcoursesPage } from '../pages/ongoingcourses/ongoingcourses';
import { SearchPage } from '../pages/search/search';
import { SignupPage } from '../pages/signup/signup';
import { SinginPage } from '../pages/singin/singin';
import { SupportPage } from '../pages/support/support';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
 
@NgModule({
  declarations: [
    MyApp,
    BookmarkedPage,
    CategoryPage,
    CourcedetailsPage,
    CoursePage,
    DesignPage,
    FiltersPage,
    HomePage,
    LecturerprofilePage,
    MyprofilePage,
    NotificationPage,
    OngoingcoursesPage,
    SearchPage,
    SignupPage,
    SinginPage,
    SupportPage
  ], 
   imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookmarkedPage,
    CategoryPage,
    CourcedetailsPage,
    CoursePage,
    DesignPage,
    FiltersPage,
    HomePage,
    LecturerprofilePage,
    MyprofilePage,
    NotificationPage,
    OngoingcoursesPage,
    SearchPage,
    SignupPage,
    SinginPage,
    SupportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
