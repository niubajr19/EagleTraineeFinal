import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    function bookSearch(){
      let search = (<HTMLInputElement>document.getElementById('search')).value 
      let results = document.getElementById('results')
  
      $.ajax({
          url:"https://www.googleapis.com/books/v1/volumes?q=" + search
          ,dataType:"json",
  
          success:function(data){
            if (search =="")
            {
              alert("Por favor, insira algo antes de efetuar a pesquisa")
            }else{
              var title =''
              var author = ''
              var img = ''
              var url = ''
              
              for(var i=0;i<data.items.length;i++){
                title = ('<h5 class"center-align white text">' + data.items[i].volumeInfo.title + '</h5>')
                author = ('<h5 class"center-align white text">' + data.items[i].volumeInfo.authors + '</h5>')
                img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + data.items[i].volumeInfo.infoLink +'><button id="imagebutton" class="btn red aligning">Read More</button></a>')
                url = ('<h2><a href=' + data.items[i].volumeInfo.infoLink + '<button id="imagebutton" class="btn red aligning">Read More</button> </h2></a>')
                author = ( data.items[i].volumeInfo.description)
                results.innerHTML += title

                results.innerHTML += author
                results.innerHTML += img
                results.innerHTML += title
                results.innerHTML += url
                /*
                results.innerHTML += "<h1>"+data.items[i].volumeInfo.title + "</h1>"
                results.innerHTML += "<h2>"+data.items[i].volumeInfo.authors + "</h2>"
                results.innerHTML += "<h3>"+data.items[i].volumeInfo.thumbnail + "</h3>"
                results.innerHTML += "<h3>"+data.items[i].volumeInfo.infoLink + "</h3>"*/
              }
            }
          },
          type:'GET'
      });
  }
  
  document.getElementById('button').addEventListener('click', bookSearch, true)
  }
    

}
