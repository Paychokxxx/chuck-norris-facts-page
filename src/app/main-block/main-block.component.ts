import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.css']
})

export class MainBlockComponent {

  private apiUrl = 'https://api.chucknorris.io/jokes/random';
  data: any = {};
  randomQuote: string = '';

  constructor (private http: Http) {
    console.log('http is working');
    //this.getCall();
    this.getData();
    //this.makeTweet();
  }

  getCall () {
    console.log('function getCall is also working');
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getData () {
    console.log('function getData is also working');
    this.getCall().subscribe(data => {
      console.log(data.value);
      this.data = data;
      this.randomQuote = data.value;
    });
  }

  makeTweet() {
    console.log('function makeTweet is also working');
    let myUrl = 'https://twitter.com/intent/tweet?text=' + this.randomQuote + ' -  ' + 'Chuck Norris';
    window.open(myUrl, 'twitter');
    return false;

  };

  myEvent(click) {
    this.getData();
  }

  myEvent2(click) {
    this.makeTweet();

  }
}




  /*
        myEvent(click) {
        console.log(event);
      }


/*      let randomQuote = "";
      let theQuote = '';
      let theAuthor = '';

      function getQuote (){

        const url= 'https://api.chucknorris.io/jokes/random';
        $.getJSON(url, function(data){
          $('.quote'').html("data.value");
          theQuote = data.value;
          theAuthor = "Chuck Norris";

        });
        let randomQuote = $(".author")+$(".quote");

      };
      /*$("#tweet").on("click", function (){
        let myUrl = 'https://twitter.com/intent/tweet?text=' + theQuote + ' -  ' + theAuthor;
        window.open(myUrl, 'twitter');
        return false;
      });

      $('#newQuote'').on('click', function(){
        getQuote();
      });*/

