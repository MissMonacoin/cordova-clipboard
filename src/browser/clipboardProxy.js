require("cordova/exec/proxy").add("Clipboard", {
  copy:function(win,fail,args){
    var data = args[0];
    var temp = document.createElement('textarea');
    temp.setAttribute('readonly', '')
    temp.textContent = data;
    
    var s = temp.style;
    s.position = 'absolute';
    s.border="0";
    s.padding="0";
    s.margin="0";
    s.left = '-999px';
    s.top=(window.pageYOffset || document.documentElement.scrollTop)+"px"

    document.body.appendChild(temp);
    temp.select()
    temp.setSelectionRange(0, temp.value.length);

    var result = document.execCommand('copy');

    document.body.removeChild(temp);
  },
  paste:function(win,fail){
    console.log("Paste is not supported in browser")
  }
});
