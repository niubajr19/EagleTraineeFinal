import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit 
{

  constructor() { }

  ngOnInit() 
  {
    
    function bookSearch()
    {
      let search = (<HTMLInputElement>document.getElementById('search')).value 
      let results = document.getElementById('results')
      $('#results').html("");
      $.ajax
      ({
          url:"https://www.googleapis.com/books/v1/volumes?q=" + search
          ,dataType:"json",
  
          success:function(data)
          {
              for(var i=0;i<data.items.length;i++)  
              { 
                results.innerHTML += "<h1>"+data.items[i].volumeInfo.title + "</h1>"
                results.innerHTML += "<h2>"+data.items[i].volumeInfo.authors + "</h2><br><br> "
                results.innerHTML += ('<a href=' + data.items[i].volumeInfo.infoLink +'><button id="imagebutton" class="btn red aligning">Read More</button></a>')
              }
          },
          type:'GET'
      });
    }
  
  document.getElementById('button').addEventListener('click', bookSearch, false)
  }
    

}
