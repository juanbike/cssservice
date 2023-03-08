import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { AboutusComponent } from './components/layout/aboutus/aboutus.component';
import { WatchOurVideoComponent } from './components/layout/watch-our-video/watch-our-video.component';
import { ContainerVideoComponent } from './components/layout/container-video/container-video.component';
import { WhyChooseUsComponent } from './components/layout/why-choose-us/why-choose-us.component';
import { FunFatsComponent } from './components/layout/fun-fats/fun-fats.component';
import { OurServicesComponent } from './components/layout/our-services/our-services.component';
import { HowweDidItComponent } from './components/layout/howwe-did-it/howwe-did-it.component';
import { AreYouExitedStartYouProjectComponent } from './components/layout/are-you-exited-start-you-project/are-you-exited-start-you-project.component';
import { RecentProyectsComponent } from './components/layout/recent-proyects/recent-proyects.component';
import { WantToseeMoreOurWorksComponent } from './components/layout/want-tosee-more-our-works/want-tosee-more-our-works.component';
import { MeetTheTeamComponent } from './components/layout/meet-the-team/meet-the-team.component';
import { ClienttestimonialsComponent } from './components/layout/clienttestimonials/clienttestimonials.component';
import { OurPricesComponent } from './components/layout/our-prices/our-prices.component';
import { SlidersBrandsComponent } from './components/layout/sliders-brands/sliders-brands.component';
import { BlogComponent } from './components/layout/blog/blog.component';
import { SuscribeComponent } from './components/layout/suscribe/suscribe.component';
import { ContactComponent } from './components/layout/contact/contact.component';
import { FootWidgetsComponent } from './components/layout/foot-widgets/foot-widgets.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SkeletonComponent } from './components/layout/skeleton/skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    AboutusComponent,
    WatchOurVideoComponent,
    ContainerVideoComponent,
    WhyChooseUsComponent,
    FunFatsComponent,
    OurServicesComponent,
    HowweDidItComponent,
    AreYouExitedStartYouProjectComponent,
    RecentProyectsComponent,
    WantToseeMoreOurWorksComponent,
    MeetTheTeamComponent,
    ClienttestimonialsComponent,
    OurPricesComponent,
    SlidersBrandsComponent,
    BlogComponent,
    SuscribeComponent,
    ContactComponent,
    FootWidgetsComponent,
    FooterComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
