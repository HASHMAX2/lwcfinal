import { LightningElement } from "lwc";
//const url = "https://www.googleapis.com/books/v1/volumes?q=man";

export default class Books extends LightningElement {
  books;
  query = 'fish';
  timer;
  url = "https://www.googleapis.com/books/v1/volumes?q="
  connectedCallback() {

    //this.fetchData();
  }

  fetchData() 
  { 

    fetch(this.url+ this.query).then((response) => response.json()
).then((data) =>{    console.log('new codeD')
console.log(data)

this.books = data} ).catch((error) => console.error(error))


  }

  changeHandler(event)
    {   this.query = event.target.value
        window.clearTimeout(this.timer)
        this.timer = setTimeout(()=> {this.fetchData()}, 2000)
       // this.timer = setTimeout(this.fetchData(), 2000)
    }

  

}
