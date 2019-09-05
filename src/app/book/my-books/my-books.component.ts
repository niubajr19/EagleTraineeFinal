import { Component, OnInit, HostListener, ViewChild} from '@angular/core';
@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent{
  elements: any = [
  {
    id: 1, heading1: 'Cell',
    heading2: 'Cell',
    heading3: 'Cell',
    heading4: 'Cell',
    heading5: 'Cell',
    heading6: 'Cell',
    heading7: 'Cell',
    heading8: 'Cell',
    heading9: 'Cell'
  },
  {
    id: 2, heading1: 'Cell',
    heading2: 'Cell',
    heading3: 'Cell',
    heading4: 'Cell',
    heading5: 'Cell',
    heading6: 'Cell',
    heading7: 'Cell',
    heading8: 'Cell',
    heading9: 'Cell'
  },
  {
    id: 3, heading1: 'Cell',
    heading2: 'Cell',
    heading3: 'Cell',
    heading4: 'Cell',
    heading5: 'Cell',
    heading6: 'Cell',
    heading7: 'Cell',
    heading8: 'Cell',
    heading9: 'Cell'
  },
];
headElements = ['ID', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading'];
}