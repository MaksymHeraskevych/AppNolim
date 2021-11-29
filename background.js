function injectScript(file, node, id) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    s.setAttribute('id', "nolim_script");
    if (id != undefined) {
        s.setAttribute("id", id)
    }
    th.appendChild(s);
}

function injectCss(file, node, id) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('link');
    s.setAttribute('href', file);
    s.setAttribute('rel', "stylesheet");
    s.setAttribute('id', "nolim_css");
    if (id != undefined) {
        s.setAttribute("id", id)
    }
    th.appendChild(s);
}

function injectCssWithCode(code, clas) {
    // clas == class
    var th = document.getElementsByTagName("body")[0];
    var s = document.createElement("style");
    s.innerText = code;
    s.setAttribute("class", clas);
    th.appendChild(s);

}







$(document).ready(function() {
loadauth();
});


console.log("достарт");
function loadauth(){
    console.log("старт");
    chrome.storage.local.get(["nolim_auth","nolim_session"], function(t){
        if(t.nolim_auth){
            $.ajax({
                type: 'POST', 
                url: `https://2nolim.ru/api.php?act=verify&session=${t.nolim_session}`, 
                data: { page: 1 }, 
                dataType: 'json',
                success: function (data) {
                    if(data.error_code == 0){
                        if(data.userdata.fields["Дней осталось"] <= 0){
                            //
                        } else {
                            injectScript(chrome.extension.getURL('nolimBlocks.js'), 'body','nolimBlocks')
                            injectScript(chrome.extension.getURL('app.js'), 'body','nolimApp')
                            injectCss(chrome.extension.getURL('app.css'), 'body','nolimAppCss')
                        }
                    }
                    console.log(data);
                    
                },
                error: function(data) {
                    console.log("error")
                    console.log(data);
                }
            });
                

        } else {

        }
    });
}




injectCssWithCode(`@font-face{
font-family: 'Nolim';
src: url(${chrome.extension.getURL("/fonts/KyivTypeSans-Regular.woff")}) format("woff");
font-weight:400;
}
@font-face{
  font-family: 'Nolim';
src: url(${chrome.extension.getURL("/fonts/KyivTypeSans-Medium.woff")}) format("woff");
font-weight:500;
}
@font-face{
  font-family: 'Nolim';
src: url(${chrome.extension.getURL("/fonts/KyivTypeSans-Bold.woff")}) format("woff");
font-weight:700;
}`, "nolim_popup_fonts");

setTimeout(function() {
   // injectScript(chrome.extension.getURL('/popup/subscription_ended.js'), 'body','nolimPopup');
},500);
