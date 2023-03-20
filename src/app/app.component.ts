import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  protected myBankName = 'Aboba';

  protected clickEvent(): void{
    console.log('Нажал')
  }
}
