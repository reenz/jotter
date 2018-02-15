function Note(){
  this.fullText = "";
  this.abbreviatedText = "";

}

Note.prototype.createNote = function(text){
  this.fullText = text;
  this.abbreviatedText = this._abbreviateText(text);

};

Note.prototype.returnText = function(){
  return this.fullText;
};

Note.prototype.returnAbbreviatedText = function(){
  return this.abbreviatedText;
};


Note.prototype._abbreviateText = function(text){
  return text.substring(0,20);
};
