import Ember from "ember";

export default Ember.Component.extend({
  value: '',
  shift: 0,

  /* Code mercilessly stolen from
   *
   * http://www.java2s.com/Code/JavaScript/Security/CaesarCipherinJavaScript.htm
   *
   * Thanks very much for the help!
   */
  text: function(){
    var abc = "abcdefghijklmnopqrstuvwxyz";
    var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var r1 = "";
    var r2 = "";
    var shf = this.get("shift");
    var text = this.get("value");
    var character;
    var pos;

    for(var i = 0; i < text.length; i++){
      character = text.charAt(i);
      pos = ABC.indexOf(character);
      if(pos >= 0){
        r1 += ABC.charAt((pos+shf)%26);
      }
      else{
        r1 += character;
      }
    }

    for(i = 0; i < r1.length; i++){
      character = r1.charAt(i);
      pos = abc.indexOf(character);
      if(pos >= 0){
        r2 += abc.charAt((pos+shf)%26);
      }
      else{
        r2 += character;
      }
    }
    return r2;
  }.property()
});
