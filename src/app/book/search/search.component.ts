import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
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
      //Definindo as variaveis às quais receberão os valores importantes (busca e resultados) 
                
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
                //Dados que receberá da API - Nome, Autor, e url
                results.innerHTML += "<h1>"+data.items[i].volumeInfo.title + "</h1>"
                results.innerHTML += "<h2>"+data.items[i].volumeInfo.authors + "</h2> "
                results.innerHTML += ('<a href=' + data.items[i].volumeInfo.infoLink +
                '><button id="imagebutton" class="btn gradient dark cyan aligning">Read More</button></a>' +
                '<button id="addLivro" class="btn gradient red aligning">Adicionar Livro</button><br><br>')

              }

          },
          type:'GET'
      })
      console.log(results)
    }
  document.getElementById('button').addEventListener('click', bookSearch, false)
 }
    

}
