import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { ArtPieceComponent } from './../ArtPiece/ArtPiece';
import { artWorks } from '../../data/artworks.data';

@Component({
  selector: 'art-gallery',
  imports: [ArtPieceComponent],
  templateUrl: './gallery.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Gallery {

  artworks = artWorks;

  currentPage = 0;
  pageSize = 9;
  totalPages = Math.ceil(this.artworks.length / this.pageSize);

  get visibleArtWorks(){
    const start = this.currentPage * this.pageSize;
    return this.artworks.slice(start,start + this.pageSize);
  }
  
  next(){
    if(this.currentPage < this.totalPages - 1){
      this.currentPage++;
    }
  }

  prev(){
    if(this.currentPage > 0){
      this.currentPage--;
    }
  }

}
