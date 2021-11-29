 $(document).ready(function() { setTimeout(function(){ var nameinput = '[name="login"]'; for (let ig = 0; ig < $(nameinput).length; ig++) { let eg = '#' + $(nameinput).eq(ig).closest('.t-rec').attr('id'); $(eg).on('input focusin focusout', function(e) { e.preventDefault(); for (let i = 0; i < $(eg+' :-webkit-autofill').length; i++) { $(eg+' :-webkit-autofill').eq(i).val($(eg+' :-webkit-autofill').eq(i).val()); } }); } },700); });

 $(document).ready(function() { setTimeout(function(){ var nameinput = '[name="password"]'; for (let ig = 0; ig < $(nameinput).length; ig++) { let eg = '#' + $(nameinput).eq(ig).closest('.t-rec').attr('id'); $(eg).on('input focusin focusout', function(e) { e.preventDefault(); for (let i = 0; i < $(eg+' :-webkit-autofill').length; i++) { $(eg+' :-webkit-autofill').eq(i).val($(eg+' :-webkit-autofill').eq(i).val()); } }); } },700); }); 

login();
 function login(){
 		$('#authorization').submit(function(e){
            e.preventDefault();
            let login2 = $('[name="login"]').val();
            let password2 = $('[name="password"]').val();
            let formsend = $(this);
            console.log(`https://2nolim.ru/api.php?act=login&email=${login2}&passsword=${password2}`);
            $(this).find('button').addClass('nlsending');
        $.ajax({
            type: 'POST', 
            url: `https://2nolim.ru/api.php?act=login&email=${login2}&password=${password2}`, 
            data: { page: 1 }, 
            dataType: 'json',
            success: function (data) {
                console.log("success")
                console.log(data)
                formhandler(formsend,data,login2,password2);
            },
            error: function(data) {
                console.log("error")
                console.log(data);
            }
        });
        });
 }

 function formhandler(form,data,login2,password2){
    console.log(form)
    $(form).find('button').removeClass('nlsending');
    console.log(data.error_code)
    switch(data.error_code){
        case 11:
            $(form).find('.error_box').show().text(data.message);
        break;
        case 0:
            if(data.userdata.fields["Дней осталось"] <= 0){
                timerstartnull();
                $('.authorization_screen').hide();
                $('.account_screen').show();
                $('.account_name').text(data.userdata.fields["Имя"]);
                chrome.storage.local.set({
                    "save_login": login2
                });
                chrome.storage.local.set({
                    "save_password": password2
                });
                chrome.storage.local.set({
                    "nolim_session": data.session
                });
                chrome.storage.local.set({
                    "nolim_auth": false
                });
                chrome.storage.local.set({
                    "nolim_name": data.userdata.fields["Имя"]
                });
                chrome.storage.local.set({
                    "nolim_expdate": data.userdata.fields["Дата окончания периода"]
                });
            } else {
                $('.authorization_screen').hide();
                $('.account_screen').show();
                $('.account_name').text(data.userdata.fields["Имя"]);
                timerstart(data.userdata.fields["Дата окончания периода"])
                chrome.storage.local.set({
                    "save_login": login2
                });
                chrome.storage.local.set({
                    "save_password": password2
                });
                chrome.storage.local.set({
                    "nolim_session": data.session
                });
                chrome.storage.local.set({
                    "nolim_auth": true
                });
                chrome.storage.local.set({
                    "nolim_name": data.userdata.fields["Имя"]
                });
                chrome.storage.local.set({
                    "nolim_expdate": data.userdata.fields["Дата окончания периода"]
                });
            }
        break;
        default:
            $(form).find('.error_box').show().text('Произошла неизвестная ошибка, попробуйте еще раз.');
        break;
    }
 }

//load();
 function load() {
    chrome.storage.local.get("save_login", t => $("[name='login']")
        .val(t.save_login));
    chrome.storage.local.get("save_password", t => $("[name='password']")
        .val(t.save_password));
}
//loadauth()
function loadauth(){
    chrome.storage.local.get("nolim_session", function(t){
        if(t.nolim_session){
            $('.authorization_screen').hide();
            $('.account_screen').show();
            chrome.storage.local.get("nolim_expdate", function(tim){
                timerstart(tim.nolim_expdate)
            });
            chrome.storage.local.get("nolim_name", function(tim){
                $('.account_name').text(tim.nolim_name);
            });
        } else {

        }
    });
}



checkauth()
function checkauth(){
    chrome.storage.local.get("nolim_session", function(t){
        if(t.nolim_session){
            $.ajax({
            type: 'POST', 
            url: `https://2nolim.ru/api.php?act=verify&session=${t.nolim_session}`, 
            data: { page: 1 }, 
            dataType: 'json',
            success: function (data) {
                if(data.error_code == 0){
                    if(data.userdata.fields["Дней осталось"] <= 0){
                        chrome.storage.local.set({
                            "nolim_auth": false
                        });
                        chrome.storage.local.get("nolim_name", function(tim){
                            $('.account_name').text(tim.nolim_name);
                        });
                        $('.preloader').hide();
                        $('.authorization_screen').hide();
                        $('.account_screen').show();
                        timerstartnull();
                    } else {
                        chrome.storage.local.set({
                            "nolim_auth": true
                        });
                        console.log("success");
                        console.log(data);
                        loadauth();
                        $('.preloader').hide();
                    }
                } else {
                    chrome.storage.local.set({
                            "nolim_auth": false
                        });
                        chrome.storage.local.get("nolim_name", function(tim){
                            $('.account_name').text(tim.nolim_name);
                        });
                        $('.preloader').hide();
                        $('.authorization_screen').show();
                        $('.account_screen').hide();
                }
                
            },
            error: function(data) {
                console.log("error")
                console.log(data);
                load();
                $('.preloader').hide();
                $('.authorization_screen').show();
            }
        });
        } else {
            $('.preloader').hide();
            $('.authorization_screen').show();
            load();
        }
    });
}

logout()
function logout(){
    $('.logout').click(function(){
        $('.authorization_screen').show();
        $('.account_screen').hide();
        load();
        
        chrome.storage.local.get("nolim_session", function(t){
            if(t.nolim_session){
                $.ajax({
                    type: 'POST', 
                    url: `https://2nolim.ru/api.php?act=logout&session=${t.nolim_session}`, 
                    data: { page: 1 }, 
                    dataType: 'json',
                    success: function (data) {
                        console.log("success");
                        console.log(data);
                        chrome.storage.local.set({
                            "nolim_session": ''
                        });
                        chrome.storage.local.set({
                            "nolim_auth": false
                        });
                    },
                    error: function(data) {
                    }
                });
            }
        });

        chrome.storage.local.set({
                "nolim_session": ''
            });
            chrome.storage.local.set({
                "nolim_auth": false
            });

    })
}



function timerstart(t){
	timeend= new Date(t);
    today = new Date();
    today = Math.floor((timeend-today)/1000); 
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24); if(thour<10)thour='0'+thour;
    if(today<10)today='0'+today;

    timestr='<span class="today">'+today+'</span>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<span class="thour">'+thour+'</span>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<span class="tmin">'+tmin+'</span>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<span class="tsec">'+tsec+'</span>';

    $('.account_timer').html(timestr);
    setTimeout(function(){
			timerstart(t)
		},1000);
}

function timerstartnull(){

    var timestr='<span class="today">00</span>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<span class="thour">00</span>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<span class="tmin">00</span>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<span class="tsec">00</span>';

    $('.account_timer').html(timestr);
}
$(".popup_close")
    .click(function() {
        window.close();
    })


    chrome.storage.local.get("nolim_expdate", function(t){
        if(t.nolim_expdate){
            console.log(t.nolim_expdate);
        }
    })


