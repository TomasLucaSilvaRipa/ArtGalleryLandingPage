import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ArtPiece } from '../../interfaces/artpiece';



@Component({
  selector: 'art-piece',
  imports: [],
  templateUrl: './ArtPiece.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArtPieceComponent{
  
 imageUrl = input.required<string>();
 alt = input.required<string>(); 
}
