import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { FeaturedArtwork } from '../../components/featuredArtwork/featuredArtwork';
import { Gallery } from '../../components/gallery/gallery';
import { Artist } from '../../components/artist/artist';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-landing-page',
  imports: [FeaturedArtwork,Gallery, Navbar, Contact, Artist, Footer],
  templateUrl: './landingPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage { }
