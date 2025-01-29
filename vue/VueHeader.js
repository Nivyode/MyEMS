class VueHeader{
  constructor(){
    this.html = document.getElementById("html-vue-header").innerHTML;
    this.afficher();
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
  }

}
