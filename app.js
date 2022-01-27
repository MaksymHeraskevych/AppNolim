var nolimCategories = [];
nolimCategories.push({
    id: "99",
    title: "Nolim ",
    title_ru: "Nolim",
    sort: "0",
    is_email: "",
    kind: "",
});

    $(document).ready(function() {
        setTimeout(function() {
            nolim_AddWishlistButtons();
            nolimAddCategories();
            nolimEditRecordContentClick();
            nolimSearchDomBackground();
            Nolim_add_actionsToRightIcons();
            nolim_icon_for_bottom();
            tp__record__addEditUi = function(t, i) {
                nolim_tp__record__addEditUi(t, i);
            }
        nolimAddFolderBack();
        
        
        },500);
});

function nolimCategorieLoad(){
    NolimAddDeleHideRecordsButton();
    nolim_AddWishlistButtons2Mods();
    nolimNavigationSector();
}


    $(window).click(function(e){
        if ($(e.target).parents('.tp-library__tpl-wrapper').find('.tp-library__tpl-cod').text().substr(0,3) == 'NLM' || ($(e.target).attr('class') == "tp-library__tpl-wrapper" && $(e.target).find('.tp-library__tpl-cod').text().substr(0,3) == 'NLM')){
            var modcontent = $(e.target).parents('.tp-library__tpl-wrapper').find('.tp-library__tpl-cod').text();
            modcontent == '' && (modcontent = $(e.target).find('.tp-library__tpl-cod').text());
            let code2 = modcontent;
            let modid = modcontent;
            
            let defaultsettings = nolimBlocks.find(code => code.cod === modcontent).moddefaultsettings;
            let modindex = nolimBlocks.indexOf(nolimBlocks.find(code => code.cod === modcontent));

            modcontent = nolimBlocks.find(code => code.cod === modcontent).modcontent(defaultsettings,modindex);
            nolimHideStandartSettings();
            var recids = [];
            $('.record').each(function(index){
                recids.push($('.record').eq(index).attr('recordid'));
            });
            var checkblock = setInterval(function() {
            var recidsnew = [];
            $('.record').each(function(index){
                recidsnew.push($('.record').eq(index).attr('recordid'));
            });
            if (nolimrecdiff(recids,recidsnew) != '') {
                clearInterval(checkblock);
                var id = nolimrecdiff(recids,recidsnew);
                edrec__editRecordContent(id);

                nolimAddBackground2Block(id,code2);
                var tn = setInterval(function() {
                    if ($('#formbox'+id).length == 1) {
                        clearInterval(tn);

                        ace.edit('aceeditor'+id).setValue(`<!--NOLIM--><!--${modid}--><!--settings${defaultsettings}settingsend-->`+modcontent);

                        $('#formbox'+id+' .tbtn-primary').trigger('click');
                    }
                },50);
            }
            },100);
        }
    });




function nolimEditRecordContentClick(){
    $(window).click(function(e){
        if ($(e.target).parents(".tp-record-edit-icons-left__three").length > 0) {
        if ($(e.target).parents('[data-record-cod="T123"]').find('pre').text().substr(0,12) == '<!--NOLIM-->'){

            nolimStandartSettingsHide(); 
            let blockid = $(e.target).parents('[data-record-cod="T123"]').find('pre').text().substr(16,6);
            let loadetsetting = $(e.target).parents('[data-record-cod="T123"]').find('pre').text();
            loadetsetting = nolimSearch(loadetsetting,'<!--settings','settingsend-->');
            if(typeof loadetsetting == "undefined" || loadetsetting == ""){
                loadetsetting = [""];
            } else {
                loadetsetting = JSON.parse(loadetsetting);
            }
            var gth = setInterval(function() {
                if($("#editformsxl > div").length == 1){
                    nolimRecordOpen();
                    clearInterval(gth);
                    let modindex = nolimBlocks.indexOf(nolimBlocks.find(code => code.cod === blockid));

                    let modsetting = nolimBlocks.find(code => code.cod === blockid).modsettings;
                    let mod = nolimBlocks.find(code => code.cod === blockid);
                    modsetting = JSON.parse(modsetting);
                    let id = $(e.target).parents('.record').attr('recordid');
                    let instruction = nolimBlocks.find(code => code.cod === blockid).instruction;
                    let nolimvideo = nolimBlocks.find(code => code.cod === blockid).video;
    
                    $('.pe-form-group__help-content').remove();
                    nolimCreateInputs(modsetting,id,modindex,loadetsetting, mod);
                    
                    typeof instruction != "undefined" && nolimCreateInstruction(instruction);
                    typeof nolimvideo != "undefined" && nolimVideoMini(nolimvideo);
                    
                }
            },50);
        }
    }
    });

}


function nolimCreateInstruction(instruction){

let txt = `<div class="pe-form-group-title-wrapper" data-tpl-group="bheader" id="grouptitle_bheader">     <span class="pe-form-group-title tsgrouptitle">Инструкция</span>       <span class="pe-form-group-arrow"></span>   </div> <div class="pe-form-group-wrapper" id="group_bheader" style="display: none;">
<div class="pe-form-group-close-wrapper"><div class="pe-form-group-close"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.354 4.293L.707.646 0 1.354 3.646 5 0 8.646l.707.708 3.647-3.647L8 9.354l.707-.708L5.061 5l3.646-3.646L8 .646 4.354 4.293z" fill="#555"></path></svg></div></div>  

${instruction}
</div>
`
$('.edrec__wrapper').prepend(txt);
$('.pe-form-group-title-wrapper').click(function(){
    $('.pe-form-group__help-content').show();
})


}




function nolimRecordOpen(){
    $('.pe-content__savebtns-table-nolim').remove();
    $('.pe-content__savebtns-table').append(`<table class="pe-content__savebtns-table-nolim" style="width:100%;"><tbody><tr><td style="width:50%;">
        <button class="tbtn nolim-save" nolim-save="0" style="width:100%; display: table-cell;" >Сохранить</button>
        </td>
        <td style="width:50%;">
        <button class="tbtn nolim-save nolim-save-button" nolim-save="1" style="width:100%; display: table-cell;">Сохранить и закрыть</button></td>              </tr>               </tbody></table>`);
}


function nolimCreateInputs(modsetting,id,blockid,loadetsetting,mod){
    let torecreate1 = modsetting;
    let torecreate2 = id;
    let torecreate3 = blockid;
    let torecreate4 = loadetsetting;


    let inputsnew = modsetting.reverse();
    let loadetsettings = loadetsetting.reverse();
    let settingloaded = nolimInputLoadData(loadetsetting);
    inputsnew.forEach(function(item,index) {
        switch (item.type) {
            case "block":
                $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid"><label class="pe-label">${item.title}</label><div class="pe-field-recids">    
                    <input nolim-type="text" type="text" name="${item.id}" class="pe-input pe-field-recids-input-link noliminput" value="" placeholder=""> 
                    <span class="pe-field-recids-link-an nolimblockselect" style="padding-right:15px; font-size:11px; cursor:context-menu;">Выбрать блок</span> 
                    </div><div class="pe-hint" style="margin-top: -10px; padding: 0px;"></div></div>`);


                $(`.edrec__wrapper [name="${item.id}"] + .nolimblockselect`).unbind("click").click(function(e) {
                    edme__RecordPiker__show($(e.target).prev());
                });

                break;

            case "blocks":
                $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid"><label class="pe-label">${item.title}</label><div class="pe-field-recids">    
                    <input type="text" nolim-type="text" name="${item.id}" class="pe-input pe-field-recids-input-link noliminput" value="" placeholder=""> 
                    <span class="pe-field-recids-link-an nolimblockselect" style="padding-right:15px; font-size:11px; cursor:context-menu;">Выбрать блоки</span> 
                    </div><div class="pe-hint" style="margin-top: -10px; padding: 0px;"></div></div>`);


    
                $(`.edrec__wrapper [name="${item.id}"] + .nolimblockselect`).unbind("click").click(function(e) {
                    nolimEdlink__RecordsidsPiker__show($(e.target).prev());
                });

                break;

            case "button_piker":
                $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid"><label class="pe-label">${item.title}</label><div class="pe-field-recids">    
                    <input type="text" nolim-type="text" name="${item.id}" class="pe-input pe-field-recids-input-link noliminput" value="" placeholder=""> 
                    <span class="pe-field-recids-link-an nolimblockselect" style="padding-right:15px; font-size:11px; cursor:context-menu;">Выбрать кнопку</span> 
                    </div><div class="pe-hint" style="margin-top: -10px; padding: 0px;"></div></div>`);


    
                $(`.edrec__wrapper [name="${item.id}"] + .nolimblockselect`).unbind("click").click(function(e) {
                    nolimEdlink__CustomPiker__show($(e.target).prev(),'[data-elem-type=\'button\']',"Кликните на нужную кнопку, чтобы ее отметить","Select button",true);
                });

                break;


            case "buttons_piker":
                    $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid"><label class="pe-label">${item.title}</label><div class="pe-field-recids">    
                        <input type="text" nolim-type="text" name="${item.id}" class="pe-input pe-field-recids-input-link noliminput" value="" placeholder=""> 
                        <span class="pe-field-recids-link-an nolimblockselect" style="padding-right:15px; font-size:11px; cursor:context-menu;">Выбрать кнопки</span> 
                        </div><div class="pe-hint" style="margin-top: -10px; padding: 0px;"></div></div>`);
    
    
        
                    $(`.edrec__wrapper [name="${item.id}"] + .nolimblockselect`).unbind("click").click(function(e) {
                        nolimEdlink__CustomPiker__show($(e.target).prev(),'[data-elem-type=\'button\']',"Кликните на нужную кнопку, чтобы ее отметить","Select buttons");
                    });
    
                    break;

            case "text_piker":
                $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid"><label class="pe-label">${item.title}</label><div class="pe-field-recids">    
                    <input type="text" nolim-type="text" name="${item.id}" class="pe-input pe-field-recids-input-link noliminput" value="" placeholder=""> 
                    <span class="pe-field-recids-link-an nolimblockselect" style="padding-right:15px; font-size:11px; cursor:context-menu;">Выбрать текст</span> 
                    </div><div class="pe-hint" style="margin-top: -10px; padding: 0px;"></div></div>`);


    
                $(`.edrec__wrapper [name="${item.id}"] + .nolimblockselect`).unbind("click").click(function(e) {
                    nolimEdlink__CustomPiker__show($(e.target).prev(),'[data-elem-type=\'text\']',"Кликните на нужный текст, чтобы его отметить","Select text",true);
                });

                break;

            case "shape_piker":
                    $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid"><label class="pe-label">${item.title}</label><div class="pe-field-recids">    
                        <input type="text" nolim-type="text" name="${item.id}" class="pe-input pe-field-recids-input-link noliminput" value="" placeholder=""> 
                        <span class="pe-field-recids-link-an nolimblockselect" style="padding-right:15px; font-size:11px; cursor:context-menu;">Выбрать шейп</span> 
                        </div><div class="pe-hint" style="margin-top: -10px; padding: 0px;"></div></div>`);
    
    
        
                    $(`.edrec__wrapper [name="${item.id}"] + .nolimblockselect`).unbind("click").click(function(e) {
                        nolimEdlink__CustomPiker__show($(e.target).prev(),'[data-elem-type=\'shape\']',"Кликните на нужный шейп, чтобы его отметить","Select shape",true);
                    });
    
                    break;

            case "input2":
                $('.edrec__wrapper').prepend(`<div class="form-group pe-form-group nolim-input-grid" data-tpl-field="text">    <label class="pe-label">Текст</label>    <div class="pe-redactor ">       <textarea nolim-type="${item.type}" name="${item.id}" class="pe-textarea noliminput" rows="10" placeholder="" style="display: none;">© All Rights Reserved. Acme Design Co. hello@mysite.com</textarea><div class="edrec__wrapper__editor ql-container" quill-name="text"><div class="ql-editor" data-gramm="false" contenteditable="true"><p>© All Rights Reserved. adsfasdfAasasdadssadsadadssdasadadsasddsasdcme Design Co. hello@mysite.com</p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div></div>    </div><div class="pe-hint" style="padding: 0px;"></div></div>`);
                break;
            case "text":
                $('.edrec__wrapper').prepend(`<div class="pe-form-group" data-lfield="li_title">    <label class="pe-label" style="font-weight: 600;font-size: 14px;">${item.title}</label>
                
                <input class="pe-input noliminput" nolim-type="text" style="display: none" type="text" readonly>
                </div>`);
                break;

            case "input":
                $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid" data-lfield="li_title">    <label class="pe-label">${item.title}</label>    <input type="text" name="li_title" nolim-type="text" id="${item.id}" class="pe-input noliminput" value="${item.value}" placeholder="${item.placeholder}"></div>`);
                break;

            case "number":
                $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid" data-lfield="li_title">    <label class="pe-label">${item.title}</label>    <input type="number" name="li_title" nolim-type="text" id="${item.id}" class="pe-input noliminput" value="${item.value}" placeholder="${item.placeholder}"></div>`);
                break;


            case "color":
                $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid" data-tpl-field="">    <label class="pe-label">${item.title}</label>    <div class="pe-color">        <div class="minicolors minicolors-theme-default minicolors-position-bottom"><input nolim-type="text" id="${item.id}" type="text" name="" class="pe-input pe-minicolors minicolors-input noliminput color" placeholder="#ffffff" value="${loadetsettings[index]}"></div>       <div class="pe-hint" style="padding: 0px;"></div>   </div></div>`);

                        $(`.edrec__wrapper [id="${item.id}"]`).minicolors({
                            defaultValue: "transparent",
                            keywords: "transparent"
                        });
                break;
            case "colorrgba":
                $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid" data-tpl-field="">    <label class="pe-label">${item.title}</label>    <div class="pe-color">        <div class="minicolors minicolors-theme-default minicolors-position-bottom"><input nolim-type="text" id="${item.id}" type="text" name="" class="pe-input pe-minicolors minicolors-input noliminput color" placeholder="#ffffff" value="${loadetsettings[index]}"></div>       <div class="pe-hint" style="padding: 0px;"></div>   </div></div>`);

                        $(`.edrec__wrapper [id="${item.id}"]`).minicolors({
                            defaultValue: "transparent",
                            keywords: "transparent",
                            format: "rgb"
                        });
                break;
            case "colorrgbaopacity":
                $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid" data-tpl-field="">    <label class="pe-label">${item.title}</label>    <div class="pe-color">        <div class="minicolors minicolors-theme-default minicolors-position-bottom"><input nolim-type="text" id="${item.id}" type="text" name="" class="pe-input pe-minicolors minicolors-input noliminput color" placeholder="#ffffff" value="${loadetsettings[index]}"></div>       <div class="pe-hint" style="padding: 0px;"></div>   </div></div>`);
                        $(`.edrec__wrapper [id="${item.id}"]`).minicolors({
                            defaultValue: "transparent",
                            keywords: "transparent",
                            opacity: true,
                            format: "rgb"
                        });
                break;

            case "checkbox":
                $('.edrec__wrapper').prepend(`<label class="pe-label pe-form-group" "><input class="noliminput" type="checkbox" nolim-type="text" id="${item.id}" value="${item.value}" checked="checked"> ${item.title}</label>`);
                $(`.noliminput[id="${item.id}"]`).unbind("click").click(function(){
                    if ($(this).is(':checked')) {
                        $(this).val('1');
                    } else {
                        $(this).val('0');
                    }
                    });
                break;

            case "select":
                let modsetting3 = nolimBlocks[blockid].modsettings;
                modsetting3 = JSON.parse(modsetting3);
                modsetting3 = modsetting3.reverse();
                let selectsoptions = Object.entries(modsetting3[index].options);
                let optionvsdiv = ``;
                for (var i = 0; i < selectsoptions.length; i++) {
                        optionvsdiv += `<option value="${selectsoptions[i][1]}">${selectsoptions[i][0]}</option>`;
                }
                $('.edrec__wrapper').prepend(`<div class="pe-form-group nolim-input-grid" data-lid="" data-lfield="li_rows"><label class="pe-label">${item.title}</label><div class="pe-select"><select type="select" nolim-type="${item.type}" id="${item.id}" class="pe-input pe-select noliminput" name="li_rows">${optionvsdiv}</select></div></div>`);
                break;
            case "image":
                var tpl = {
                    record: {
                        id: "326629346",
                        img: "https://static.tildacdn.com/tild3736-3037-4334-b863-353562353039/d946dbce69a24e0288d5.jpg",
                        pageid: window.pageid,
                    },
                    tpl: {
                        fields: "",
                    }
                }
                nolimEdrec__drawUI__image({
                            type: "im",
                            label: item.title
                        }, loadetsettings[index], tpl, "img",$('.edrec__wrapper '), item, 'noliminput','prepend');
                break;


            case "groupCards":
                nolimCreateGroupCards(item,loadetsettings[index]);
            break;

            case "groupInputs":
                nolimCreateGroupInputs(item,loadetsettings[index]);
            break;

        }

    });


    loadetsettings = loadetsetting.reverse();
    nolimInputLoadData(loadetsetting);

    $('.pe-content__form-wrapper').on('input', function(){
        typeof mod.modInputChange != "undefined" && mod.modInputChange();
    });

    $('.edrec__wrapper').length
    typeof mod.moddemolive != "undefined" && $('.edrec__wrapper').append(mod.moddemolive)

    typeof mod.grid != "undefined" && mod.grid == "yes" && nolimInputCreateGrid();






    let nomer = blockid;
    nolimCloseLayer();
$('.nolim-save').click(function(e){
    $(document).off("keyup", edrec__keyUpFunc);
    let setoptions = []
    for (var i = 0; i < $('.noliminput').length; i++) {
        let inval
         switch ($('.noliminput').eq(i).attr('nolim-type')) {
            case "text":
                inval = $('.noliminput').eq(i).val();
                setoptions.push(inval);
            break;
            case "image":
                if($('.noliminput').eq(i).parents('.js-img-card').css('display') != 'none'){
                    inval = $('.noliminput').eq(i).attr('href');
                    setoptions.push(inval);
                } else {
                    inval = '';
                    setoptions.push(inval);
                }
            break;
            case "groupCards":
                let grouplength = $('.noliminput').eq(i).find('.pe-list-item').length;
                let grouparray = [];
                    for (let ii = 0; ii < grouplength; ii++) {
                        let cardLength = $('.noliminput').eq(i).find('.pe-list-item').eq(ii).find('.nolimgroupinput').length;
                        let cardarray = [];
                        for (let iii = 0; iii < cardLength; iii++) {
                            inval = '';
                                switch ($('.noliminput').eq(i).find('.pe-list-item').eq(ii).find('.nolimgroupinput').eq(iii).attr('nolim-type')) {
                                    case "text":
                                        
                                        inval = $('.noliminput').eq(i).find('.pe-list-item').eq(ii).find('.nolimgroupinput').eq(iii).val();
                                        cardarray.push(inval);

                                    break;
                                    case "select":
                                        inval = $('.noliminput').eq(i).find('.pe-list-item').eq(ii).find('.nolimgroupinput').eq(iii).val();
                                        cardarray.push(inval);
                                    break;
                                    case "image":
                                        if($('.noliminput').eq(i).find('.pe-list-item').eq(ii).find('.nolimgroupinput').eq(iii).parents('.js-img-card').css('display') != 'none'){
                                            inval = $('.noliminput').eq(i).find('.pe-list-item').eq(ii).find('.nolimgroupinput').eq(iii).attr('href');
                                            cardarray.push(inval);
                                        } else {
                                            inval = '';
                                            cardarray.push(inval);
                                        }
                                    break;
                                }
                        }
                        grouparray.push(cardarray);
                }
                setoptions.push(grouparray);
            break;
            case "groupInputs":
                let grouplength2 = $('.noliminput').eq(i).find('.nolimgroupinput').length;
                let grouparray2 = [];
                    for (let ii = 0; ii < grouplength2; ii++) {
                        
                        let cardarray2 = [];
                        let cardarray = ''
                        inval = '';
                            switch ($('.noliminput').eq(i).find('.nolimgroupinput').eq(ii).attr('nolim-type')) {
                                case "text":
                                    
                                    inval = $('.noliminput').eq(i).find('.nolimgroupinput').eq(ii).val();
                                    
                                    cardarray += inval;

                                break;
                                case "select":
                                    inval = $('.noliminput').eq(i).find('.nolimgroupinput').eq(ii).val();
                                    cardarray += inval;
                                break;
                                case "image":
                                    if($('.noliminput').eq(i).find('.nolimgroupinput').eq(ii).parents('.js-img-card').css('display') != 'none'){
                                        inval = $('.noliminput').eq(i).find('.nolimgroupinput').eq(ii).attr('href');
                                        cardarray += inval;
                                    } else {
                                        inval = '';
                                        cardarray += inval;
                                    }
                                break;
                            }
                    grouparray2.push(cardarray);
                }
                setoptions.push(grouparray2);
                
            break;
            default:
                inval = $('.noliminput').eq(i).val();
                setoptions.push(inval);
            break;
         }
    }



    
    ace.edit('aceeditor'+id).setValue(`<!--NOLIM--><!--${nolimBlocks[blockid].cod}--><!--settings${JSON.stringify(setoptions)}settingsend-->`+nolimBlocks[blockid].modcontent(setoptions,blockid));

    if($(this).attr('nolim-save') == '1'){
        edrec__content__sendform();
        var gthcle = setInterval(function() {
            if($("#editformsxl > div").length == 0){
                nolimStandartSettingsShow();
                clearInterval(gthcle);
            }
        },100);
    } else {


            edrec__content__sendform();
            var gthcle = setInterval(function() {
                if($("#editformsxl > div").length == 0){
                    nolimStandartSettingsShow();
                    clearInterval(gthcle);
                    edrec__editRecordContent(torecreate2);
                    
                    var gth5 = setInterval(function() {
                        if($("#editformsxl > div").length == 1){
                            nolimRecordOpen();
                            clearInterval(gth5);
                            torecreate4 = torecreate4;
                            torecreate1 = torecreate1.reverse();
                            nolimCreateInputs(torecreate1,torecreate2,torecreate3,setoptions);
                            $('.pe-form-group__help-content').remove();
                            nolimStandartSettingsHide();
                        }
                    },50)
                }
            },100);
    }
});

}


function nolimCloseLayer(){
    $('#closelayer').unbind("click").click(function(e){
        e.preventDefault();
        if (confirm("Изменения не сохранены. Закрыть панель?")) {
            e.preventDefault();
            edrec__closeEditForm();
            nolimStandartSettingsShow();
            $('#closelayer').unbind("click");
            $(document).off("keyup", edrec__keyUpFunc);
        } else {}
    })
    $(document).off("keyup");
    $(document).keyup(function(e) {
        if (e.keyCode == 27 && $('.noliminput').length > 0 && $('.pe-recordpiker').length == 0){
            if (confirm("Изменения не сохранены. Закрыть панель?")) {
            edrec__closeEditForm();
            nolimStandartSettingsShow();
            $('#closelayer').unbind("click");
            $(document).off("keyup", edrec__keyUpFunc);
        }
        }
    });
}











































function nolimSearch(whole_str, str1, str2){
   if (whole_str.indexOf(str1) === -1 || whole_str.indexOf(str2) === -1) {
       return undefined; // or ""
  }
  strlength1 = str1.length;
  return whole_str.substring(
                whole_str.indexOf(str1) + strlength1, 
                whole_str.indexOf(str2)
               );

   }


function nolimStandartSettingsHide(){
    $('body').append(`<div class="nolimHideUiStandartRecordContent"><style> 
.pe-form-group__help-content, [data-tpl-field="code"] { 
    display:none;
}

.pe-content__savebtns-table > tbody {
    display:none;
}
</style></div> 
`);
}

function nolimStandartSettingsShow(){
    $('.nolimHideUiStandartRecordContent').remove();
    $('#nolimInputGrid').remove();
}

    function nolimrecdiff(a,b){
        let difference = b
                 .filter(x => !a.includes(x))
                 .concat(a.filter(x => !b.includes(x)));
                 return difference.toString();
    }


    function nolimAddBackground2Block(id,code2) {
        
        let code = nolimBlocks.find(code => code.cod === code2).cod;
        let title = nolimBlocks.find(code => code.cod === code2).title;
        let image = nolimBlocks.find(code => code.cod === code2).icon;

if($(`[id="#nolimrecback${id}"]`).length == 0){

        $('body').append(`<style id="#nolimrecback${id}"> 
#record${id}:not([off="y"]) #rec${id} { 
    background-image: url(https://static.tildacdn.com/tild3966-3431-4132-b464-353465353938/logo.svg), url(${image}), url(https://static.tildacdn.com/tild3936-3163-4238-b338-626332346436/background_dots.png);
    background-repeat: no-repeat;
    background-size: 120px 32.54px, 400px 208px, 733px 452px;
    background-position: calc((100vw / 2) - 488px) 60px, calc((100vw / 2) + 50px) 46px, 473px -60px;
    height: 300px;
    background-color: #F8F7F8;
    
    margin: auto;
    height: 300px;
}  
#record${id}:not([off="y"]) #rec${id}:before {
    content: '${title}';
    position: absolute;
    top: 191px;
    left: calc((100vw / 2) - 488px);
    color: #221E1E;
    font-family: "tfutura";
    max-width: 400px;
    font-weight: 450;
    font-size: 26px;
    line-height: 33px;
}

#record${id}:not([off="y"]) #rec${id}:after {
    content: '${code}';
    position: absolute;
    top: 144px;
    left: calc((100vw / 2) - 488px);
    color: #ffffff;
    font-family: "tfutura";
    max-width: 400px;
    font-weight: 450;
    font-size: 26px;
    line-height: 33px;
    background-color: #BBBBBB;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
}



#record${id}:not([off="y"]) .r div{
display:none;
}
</style> 
`)
    }
}


function nolimAddBackground2BlockPreview(id,code2) {
        let code = nolimBlocks.find(code => code.cod === code2).cod;
        let title = nolimBlocks.find(code => code.cod === code2).title;
        let image = nolimBlocks.find(code => code.cod === code2).icon;
        
if($(`[id="#nolimrecback${id}"]`).length == 0){

        $('body').append(`<style id="#nolimrecback${id}"> 
#${id} { 
    background-image: url(https://static.tildacdn.com/tild3966-3431-4132-b464-353465353938/logo.svg), url(${image}), url(https://static.tildacdn.com/tild3936-3163-4238-b338-626332346436/background_dots.png);
    background-repeat: no-repeat;
    background-size: 120px 32.54px, 400px 208px, 733px 452px;
    background-position: calc((100vw / 2) - 488px) 60px, calc((100vw / 2) + 50px) 46px, 473px -60px;
    height: 300px;
    background-color: #F8F7F8;
    position: relative;
    margin: auto;
    height: 300px;
}  
#${id}:before {
    content: '${title}';
    position: absolute;
    top: 191px;
    left: calc((100vw / 2) - 488px);
    color: #221E1E;
    font-family: "tfutura";
    max-width: 400px;
    font-weight: 450;
    font-size: 26px;
    line-height: 33px;
}

#${id}:after {
    content: '${code}';
    position: absolute;
    top: 144px;
    left: calc((100vw / 2) - 488px);
    color: #ffffff;
    font-family: "tfutura";
    max-width: 400px;
    font-weight: 450;
    font-size: 26px;
    line-height: 33px;
    background-color: #BBBBBB;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

#${id}.r div{
display:none;
}
</style> 
`)
    }
}


nolimBackgroundClicker()
function nolimBackgroundClicker(){
    $(window).click(function(e){
        if ($(e).attr('title') == 'NLM'){

        }
    })
}



 function nolimAddCategories(){
var categoryCheck = setInterval(function(){
            if ($(".tp-library__type-body").length > 0) {
                clearInterval(categoryCheck);
                nolimCategories.forEach(function(Categorie) {
    $('[data-library-type-id="1"]').before(`<div class="tp-library__type-body nolim_library_type-body" data-library-type-id="${Categorie.id}">       <div class="tp-library__type">          <div class="tp-library__type-title-wrapper"><div class="tp-library__type-title" style="font-weight:600;">${Categorie.title}</div></div>            <div class="tp-library__type-icon-wrapper"><div class="tp-library__type-icon-plus"><img src="/tpl/img/page/tp-12-down.svg"></div><div class="tp-library__type-icon-minus"><img src="/tpl/img/page/tp-14-line.svg" style="opacity:0.3;"></div></div>     </div>  </div>`);

        var gth = tp__library__getTplsList_for_type(Categorie.id);
        $(".tp-library-rightside").append(gth);
        $(".tp-library__type-body").click(function() {
        var t = $(this)
          , e = t.attr("data-library-type-id");
        $(".tp-library__tpls-list-body").removeClass("tp-library__tpls-list-body_active"),
        $("#tplslist" + e).addClass("tp-library__tpls-list-body_active"),
        $(".tp-library__tpls-list-body_active").css("opacity", "0"),
        $(".tp-library").addClass("tp-library_rightsideopened"),
        $(".tp-library__type-body").removeClass("tp-library__type-body_active"),
        t.addClass("tp-library__type-body_active"),
        $(".tp-library-rightside").animate({
            scrollTop: 0
        }, 0),
        $(".tp-library-rightside").scrollGuard(),
        setTimeout(function() {
            $(".tp-library__tpls-list-body").css("margin-top", "30px"),
            $(".tp-library__tpls-list-body").animate({
                opacity: "1",
                "margin-top": "0px"
            }, 500, "easeOutCirc", function() {})
        }, 100),
        setTimeout(function() {
            $(".tp-library__tpls-list-body_active").find(".tp-library__tpl-icon").each(function() {
                var t = $(this);
                "" == t.attr("src") && void 0 !== t.attr("data-src") && "" != t.attr("data-src") && t.attr("src", t.attr("data-src"))
            })
        }, 50)
    })
    }),
    
    nolimBlocks.forEach(function(block) {
    $("#tplslist99").append(`<div class="tp-library__tpl-body" data-tpl-id="131">   <div class="tp-library__tpl-wrapper" style="opacity:1">     <div>           <div style=" width:320px; padding-left:10px; padding-right:10px;margin-bottom:10px; text-align:center;"><img class="tp-library__tpl-icon" src="${block.icon}" data-src="${block.icon}">             <div class="tp-library__tpl-bottom-wrapper"><div class="tp-library__tpl-caption"><span class="tp-library__tpl-cod">${block.cod}</span>&nbsp;&nbsp;<span class="tp-library__tpl-title">${block.title}</span></div>             </div>          </div>      </div>  </div></div>`);
});
    setTimeout(function () {
        tp__library__addEvents__toCards();
    },500);
    

    nolimCategorieLoad();

}
            
},200);
}

    function nolimHideStandartSettings(){
        $('body').append(`<div class="nolimHideStandartSettings"><style> 
            #editformsxl { 
                display:none;
            }
            </style></div> 
            `);
        setTimeout(function() {
            var gth = setInterval(function() {
                if($("#editformsxl div").length == 0){
                    $('.nolimHideStandartSettings').remove();
                    clearInterval(gth);
                }
            },100);
        },500);
    }


    

function nolimInputLoadData(loadetsetting){
    for (var i = 0; i < $('.noliminput').length; i++) {
        switch ($('.noliminput').eq(i).attr('type')) {
            case "checkbox":
                if(loadetsetting[i] == '0') {
                    $('.noliminput').eq(i).prop('checked', false);
                    $('.noliminput').eq(i).val('0');
                } else {
                    $('.noliminput').eq(i).prop('checked', true);
                    $('.noliminput').eq(i).val('1');
                }
            break; 
            case "text":
                if($('.noliminput').eq(i).hasClass('color')){
                    $('.noliminput').eq(i).val(loadetsetting[i]);
                } else {
                    $('.noliminput').eq(i).val(loadetsetting[i]);
                }
                
            break;
            case "select":
                
            
                $('.noliminput').eq(i).val(loadetsetting[i]).change();
                setTimeout(function(){
                    $('.noliminput').eq(i).parent().trigger('input');
                },50);
            
            break;
            default:
            $('.noliminput').eq(i).val(loadetsetting[i]);
            break;
            
        }
    }
}


function nolimEdrec__drawUI__image(e, t, a, o, l, item,inputclass,direction) {
    var i = "";
    i += '<div class="pe-form-group" data-tpl-field="' + o + '">',
    i += '\t<label class="pe-label">' + e.label + "</label>",
    i += "\t<br>",
    i += '\t<div class="js-image-box js-image-box__' + o + '">',
    i += '\t\t<table style="width:100%;">',
    i += "\t\t<tr>",
    i += '\t\t<td style="width:240px; vertical-align:top;">',
    i += '\t\t<div style="width:100%;">',
    i += '\t\t<input type="text" name="' + o + '-tubutton" class="js-img-button" value="" data-tu-is-image="yes" id="tuwidget' + a.record.id + o + '" />',
    i += '\t\t<input type="hidden" name="' + o + '-tuinfo-uuid" class="js-img-uuid" value="" />',
    i += '\t\t<input type="hidden" name="' + o + '-tuinfo-cdnurl" class="js-img-cdnurl" value=""/>',
    i += '\t\t<input type="hidden" name="' + o + '-tuinfo-name" class="js-img-name" value=""/>',
    i += '\t\t<input type="hidden" name="' + o + '-tuinfo-width" class="js-img-width" value=""/>',
    i += '\t\t<input type="hidden" name="' + o + '-tuinfo-height" class="js-img-height" value=""/>',
    i += '\t\t<input type="hidden" name="' + o + '-tuinfo-size" class="js-img-size" value=""/>',
    i += '\t\t<input type="hidden" name="' + o + '-uploadmethod" value="tu"/>',
    i += '\t\t<input type="hidden" name="' + o + '-del" class="js-img-del" value=""/>',
    i += "\t\t</div>",
    i += "\t\t</td>",
    i += '\t\t\t<td class="pe-imagesearch-td-wrapper">',
    i += '\t\t\t\t<div class="pe-imagesearch-btn">',
    i += '\t\t\t\t\t<img src="https://tilda.ws/img/linea/basic_magnifier.svg" style="padding:10px" width="20px">',
    i += '\t\t\t\t\t<span style="vertical-align: middle">' + ("RU" == window.lang ? "Искать в библиотеке" : "Search photos") + "</span>",
    i += "\t\t\t\t</div>",
    i += "\t\t\t</td>",
    i += "\t\t</tr>",
    i += "\t\t</table>",
    i += "\t\t<br><br>",
    i += '\t\t<div class="js-img-card js-' + o + '-div" style="display:' + ("" != t ? "block" : "none") + ';">',
    i += '\t\t\t<table class="pe-imagebox__tabel">',
    i += '\t\t\t<tr class="pe-imagebox__tr">',
    i += '\t\t\t<td class="pe-imagebox__td pe-imagebox__td-thumb"><img src="' + t + '" class="pe-imagebox__img" width="135" id="rec' + a.record.id + o + 'id" style="max-height:300px;"></td>',
    i += '\t\t\t<td class="pe-imagebox__td pe-imagebox__td-name" style="padding-left:20px; padding-right:20px; width:500px; font-size:12px; color:#333;" id="' + o + '-name"><a href="' + t + `" target="_blank" type="image" class="js-img-title ${inputclass}" nolim-type="image" data-img-href="">... ` + t.slice(-30) + "</a></td>",
    -1 !== a.tpl.fields.indexOf(o + "_alt") && (i += '\t\t\t<td class="pe-imagebox__td" style="white-space: nowrap;"><span class="js-edrec-img-showmore" style="cursor:pointer;">...</span>&nbsp;&nbsp;&nbsp;&nbsp;</td>'),
    -1 === t.indexOf(".svg") && (i += '\t\t\t<td class="pe-imagebox__td" style="white-space: nowrap; padding-right: 10px;"><a href="javascript:tui_editimage(' + a.record.id + ",'rec" + a.record.id + o + 'id\');" id="rec' + a.record.id + "edit" + o + 'item" class="js-edit-img"><span class="glyphicon glyphicon-pencil"></span></a></td>'),
    i += '\t\t\t<td class="pe-imagebox__td"><span class="js-edrec-img-delbtn glyphicon glyphicon-trash" style="cursor:pointer;"></span></td>',
    i += "\t\t\t</tr>",
    i += "\t\t\t</table>",
    i += '\t\t\t<div class="js-img-more" style="display:none;" id="rec' + a.record.id + o + '_more">',
    i += '\t\t\t\t<br><label class="pe-label">' + ("RU" == window.lang ? "SEO: Альт-текст для изображения" : "SEO: Image alt text") + "</label>",
    i += '\t\t\t\t<input type="text" name="' + o + '_alt" class="pe-input js-img-alt" value="' + (void 0 !== a.record[o + "_alt"] ? a.record[o + "_alt"] : "") + '">',
    i += "\t\t\t</div>",
    i += "\t\t</div>",
    i += "\t</div>",
    i += '\t<div class="pe-hint"></div>',
    i += "</div>",
    direction == 'prepend' && l.prepend(i);
    direction == 'append' && l.append(i);
    i = l.find('.pe-form-group[data-tpl-field="' + o + '"]');
    i.find(".pe-imagesearch-btn").click(function() {
        var e = $("#tuwidget" + a.record.id + o).data("tildaupload");
        openImageSearchPopup(e, "rec" + a.record.id + o + "id")
    }),
    i.find("[name=" + o + "-tubutton]").each(function() {
        var e = $(this)
          , i = e.attr("id");
        i || (i = "tuwidget" + parseInt(Math.floor(Math.random() * (9e5 + 1)) + 99999),
        e.attr("id", i)),
        TUWidget.init(e).done(function(e) {
            var t;
            void 0 !== e.tuInfo && ((t = l.find(".js-image-box__" + o)).find("#rec" + a.record.id + o + "id").attr("src", e.tuInfo.cdnUrl),
            t.find("#" + o + "-name").html('<a href="' + e.tuInfo.cdnUrl + `" target="_blank" type="image" nolim-type="image" class="js-img-title ${inputclass}">... ` + e.tuInfo.name + "</a>"),
            t.find("[name=" + o + "-tuinfo-uuid]").val(e.tuInfo.uuid),
            t.find("[name=" + o + "-tuinfo-cdnurl]").val(e.tuInfo.cdnUrl),
            t.find("[name=" + o + "-tuinfo-name]").val(e.tuInfo.name),
            t.find("[name=" + o + "-tuinfo-width]").val(e.tuInfo.width),
            t.find("[name=" + o + "-tuinfo-height]").val(e.tuInfo.height),
            -1 === e.tuInfo.name.indexOf(".svg") ? t.find(".js-edit-img").css("display", "inline") : t.find(".js-edit-img").css("display", "none"),
            t.find(".js-img-card").css("display", "block"),
            setTimeout(function() {
                $("#" + i + "-previews").removeClass("tu-popup-progressbar-completed").removeClass("tu-processing").removeClass("tu-image-preview").removeClass("tu-success").removeClass("tu-complete").addClass("tu-popup-progressbar-start")
            }, 3e3))
        }).fail(function(e, t) {})
    }),
    i.find(".js-edrec-img-delbtn").click(function() {
        var e = $(this).closest(".js-image-box");
        e.find(".js-img-card").css("display", "none"),
        e.find(".js-img-del").val("yes"),
        e.find(".js-img-alt").val(""),
        e.find(".js-img-cdnurl").val("")
    }),
    i.find(".js-edrec-img-showmore").click(function() {
        var e = $(this).closest(".js-image-box").find(".js-img-more");
        "block" == e.css("display") ? e.css("display", "none") : e.css("display", "block")
    })
}



function nolimEdli__drawUI__gallery(e, l, n) {
    var t = $(".editlist__wrapper").find("[data-listitem-id=" + n + "]");
    void 0 === e && (e = "");
    var a = l;
    "li_gallery" == a && (a = "RU" == window.lang ? "Список изображений" : "Images list");
    var o = "";
    if (o += '<div class="pe-form-group" data-lid="' + n + '" data-lfield="' + l + '">',
    o += '    <label class="pe-label">' + a + "</label>",
    o += "\t<br>",
    o += '    <div class="js-gallery-upload-widget">',
    o += '    \t<textarea name="' + l + '" class="js-gallery-json" style="display:none;" rows="1">' + e + "</textarea>",
    o += '\t    <table style="width:100%;">',
    o += "\t\t<tr>",
    o += '\t\t<td style="width:240px; vertical-align:top;">',
    o += '\t\t<div style="width:100%;">',
    o += '\t\t<input type="text" name="li-tubutton" class="js-imgs-button" value="" data-tu-is-image="yes" data-tu-multiple="yes"   id="tuwidget' + n + "_" + l + '" /><br>',
    o += "\t\t</div>",
    o += "\t\t</td>",
    o += '\t\t<td style="vertical-align:top; text-align:right;">',
    o += "\t\t</td>",
    o += "\t\t</tr>",
    o += "\t    </table>",
    o += '\t\t<div class="js-gallery-items"></div>',
    o += "\t</div>",
    o += "</div>",
    t.append(o),
    "" != e)
        try {
            var r = $.parseJSON(e);
            "object" == typeof r && $.each(r, function(e, t) {
                void 0 !== t.img && "" != t.img && edli__drawUI__gallery__drawitem(t.img, t.alt, l, n)
            })
        } catch (e) {}
    t.find("[data-lfield=" + l + "]").find(".js-imgs-button").each(function() {
        var e = $(this)
          , o = e.attr("id");
        o || (o = "tuwidget" + parseInt(Math.floor(Math.random() * (9e5 + 1)) + 99999),
        e.attr("id", o)),
        TUWidget.init(e).done(function(e) {
            if (this.options.uploadMultiple) {
                for (i in e) {
                    var t = e[i].tuInfo.cdnUrl
                      , a = e[i].tuInfo.uuid;
                    void 0 !== t ? edli__drawUI__gallery__drawitem(t, "", l, n, a) : console.log("hmm, src is undefined")
                }
                edli__drawUI__gallery__updatejsonvalue(l, n)
            } else
                console.log("HMMM..!!");
            setTimeout(function() {
                $("#" + o + "-previews").removeClass("tu-popup-progressbar-completed").removeClass("tu-processing").removeClass("tu-image-preview").removeClass("tu-success").removeClass("tu-complete").addClass("tu-popup-progressbar-start")
            }, 500)
        }).fail(function(e, t) {})
    }),
    edli__drawUI__gallery__sortable(l, n)
}

function nolimEdlink__RecordsidsPiker__show(i) {
    $("body").addClass("pe-recordpiker-body"),
    $(".record").addClass("pe-recordpiker"),
    $("body").append('<div id="select_records_toolbar" style="opacity: 1; top: 0px;"><div class="select_records_toolbar__left">' + ("RU" == lang ? "Кликните на нужный блок, чтобы его отметить" : "Select blocks") + '</div><div class="select_records_toolbar__right"><a href="javascript:edlink__RecordsidsPiker__close();" style="padding:14px 20px;background-color:#ff855D;color:#fff;font-weight:500;border-radius:30px;">' + ("RU" == lang ? "Сохранить и закрыть" : "Save and close") + "</a></div></div>"),
    $(".record").removeClass("record_selected").removeClass("active");
    var e = i.val();
    if (void 0 !== e && "" != e)
        for (var t = e.split(","), a = 0; a < t.length; a++) {
            var o = t[a];
            0 < o && ((o = $("#record" + o)).length && o.addClass("record_selected").addClass("active"))
        }
    $(".pe-recordpiker").bind("click.recpikerevent", function(e) {
        e.preventDefault(),
        e.stopPropagation();
        e = $(this);
        e.hasClass("active") ? e.removeClass("record_selected").removeClass("active") : e.addClass("record_selected").addClass("active");
        var t = "";
        $(".record_selected").each(function() {
            var e = '#' + $(this).find('.r').attr('id');
            t = "" == t ? e : t + "," + e
        }),
        i.val(t)
    })
}

function nolimEdlink__CustomPiker__show(i,selectors,rus,eng,single) {
    $("body").addClass("pe-recordpiker-body"),
    $(selectors).addClass("pe-recordpiker"),
    $("body").append('<div id="select_records_toolbar" style="opacity: 1; top: 0px;"><div class="select_records_toolbar__left">' + ("RU" == lang ? rus : eng) + `</div><div class="select_records_toolbar__right"><a href="javascript:edlink__NolimCustomPiker__close(\`${selectors}\`);" style="padding:14px 20px;background-color:#ff855D;color:#fff;font-weight:500;border-radius:30px;">` + ("RU" == lang ? "Сохранить и закрыть" : "Save and close") + `</a></div>
    ${single!=true ? `<div class="select_records_toolbar__right"><a href="javascript:edlink__NolimCustomPiker__SelectAll(\`${i.attr('name')}\`,\`${selectors}\`);" style="padding:14px 20px;background-color: unset; color: #0058ff; font-weight:600;border-radius:30px;">Выбрать все</a></div>

    <div class="select_records_toolbar__right"><a href="javascript:edlink__NolimCustomPiker__unSelectAll(\`${i.attr('name')}\`,\`${selectors}\`);" style="padding:14px 20px;background-color: unset; color: #0058ff; font-weight:500;border-radius:30px;">Снять выделение</a></div>` : ''}
    
    
    </div>`),

    
    $(selectors).removeClass("record_selected").removeClass("active");
    if(single!=true){
    var e = i.val();
    if (void 0 !== e && "" != e)
        for (var t = e.split(","), a = 0; a < t.length; a++) {
            var o = t[a];
            o = o.replace('tn-elem__','')
            0 < o && ((o = $(".tn-elem__"+o)).length && o.addClass("record_selected").addClass("active"))
        }
    }
    $(".pe-recordpiker").bind("click.recpikerevent", function(e) {
        
        e.preventDefault(),
        e.stopPropagation();
        e = $(this);
        e.hasClass("active") ? e.removeClass("record_selected").removeClass("active") : e.addClass("record_selected").addClass("active");
        var t = "";
        $(".record_selected").each(function() {
            var e = $(this).attr('class');
            e = e.replace('t396__elem ','').replace('tn-elem ','').replace('pe-recordpiker ','').replace('record_selected ','').replace('active','').replace(' ','');
            t = "" == t ? e : t + "," + e
        }),
        i.val(t);
        if(single==true){
            edlink__NolimCustomPiker__close(`${selectors}`);
        }
        
    })
}


function edlink__NolimCustomPiker__close(t) {
    $(".pe-recordpiker").unbind("click.recpikerevent"),
    $("body").removeClass("pe-recordpiker-body"),
    $(t).removeClass("pe-recordpiker").removeClass("record_selected").removeClass("active"),
    $("#select_records_toolbar").remove()
}

function edlink__NolimCustomPiker__SelectAll(i,c){
    $(c).addClass("pe-recordpiker").addClass("record_selected").addClass("active");
    var t = "";
    $(".record_selected").each(function() {
        var e = $(this).attr('class');
        e = e.replace('t396__elem ','').replace('tn-elem ','').replace('pe-recordpiker ','').replace('record_selected ','').replace('active','').replace(' ','');
        t = "" == t ? e : t + "," + e
    }),
    
    $(`.pe-form-group [name="${i}"]`).val(t)
}

function edlink__NolimCustomPiker__unSelectAll(i,c){
    $(c).removeClass("record_selected").removeClass("active");
    var t = "";
    $(".record_selected").each(function() {
        var e = $(this).attr('class');
        e = e.replace('t396__elem ','').replace('tn-elem ','').replace('pe-recordpiker ','').replace('record_selected ','').replace('active','').replace(' ','');
        t = "" == t ? e : t + "," + e
    }),
    
    $(`.pe-form-group [name="${i}"]`).val(t)
}


function removeBreaks(code) {
    code = code.replace(/(\r\n|\n|\r)/gm, "<1br />");
    re1 = /<1br \/><1br \/>/gi;
    code = code.replace(re1, " ");
    re2 = /\<1br \/>/gi;
    code = code.replace(re2, " ");
    re3 = /\s+/g;
    code = code.replace(re3, " ");
    re4 = /<2br \/>/gi;
    code = code.replace(re4, "\n\n");
    return code;
}

function nolimSearchDomBackground(){
    var searcht = setInterval(function() {
        if($("#editformsxl div").length == 0){
            clearInterval(searcht);
            $(".tp-library-rightside").on('DOMSubtreeModified', "#tplslistsearch", function(){
                let sTpl = $('#tplslistsearch .tp-library__tpl-body').map(function() {return $(this).text()}).get();;
                sTpl.forEach(function(item,index) {
                    if($('#tplslistsearch .tp-library__tpl-body').eq(index).find('.tp-library__tpl-cod').text().substr(0,3) == 'NLM'){
                        let modcontent = $('#tplslistsearch .tp-library__tpl-body').eq(index).find('.tp-library__tpl-cod').text();
                        let iconsrc = nolimBlocks.find(code => code.cod === modcontent).icon;
                        $('#tplslistsearch .tp-library__tpl-body').eq(index).find('.tp-library__tpl-icon').attr('src',iconsrc);
                    }
                })
            });
        }
    },100);
}






































function nolimCreateGroupCards(item,loaditems){
    let txt = `<div class="pe-form-group-title-wrapper" nolim-group-id="${item.type+item.id}" data-tpl-group="${item.type+item.id}" id="grouptitle_${item.type+item.id}">     <span class="pe-form-group-title tsgrouptitle">${item.title}</span>       <span class="pe-form-group-arrow"></span>   </div>
    <div class="pe-form-group-wrapper noliminput" nolim-type="groupCards" nolim-group-id="${item.type+item.id}" id="group_${item.type+item.id}" style="display: none;">
    <div class="pe-form-group-close-wrapper"><div class="pe-form-group-close"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.354 4.293L.707.646 0 1.354 3.646 5 0 8.646l.707.708 3.647-3.647L8 9.354l.707-.708L5.061 5l3.646-3.646L8 .646 4.354 4.293z" fill="#555"></path></svg></div></div>  
<div class="form-group pe-form-group" data-tpl-field="list"> 

<div class="editlist__wrapper" data-ui-type="edli" data-lfields="input,input" data-init-status="inited">



<a nolim-data-add='${JSON.stringify(item.options)}' href='javascript:addInputsGroup("group_${item.type+item.id}")' class="editlist__addbtn" style="font-size:14px; width:720px; font-weight:600; text-align:center; text-transform:uppercase; background-color:#000; color:#fff !important; display:block; padding:20px 0px;">Добавить элемент</a>
</div>
   
    </div>
    `
    $('.edrec__wrapper').prepend(txt);
    $('.pe-form-group-title-wrapper').click(function(){
        $('.pe-form-group__help-content').show();
    })

    let inputsnew = item.options;
    loaditems = loaditems;
    let groupCards = ``
    
    for (let i = 1; i <= loaditems.length; i++) {
       let cardscr = `<div class="pe-list-item" nolim-data-sort="${i}" data-listitem-id="${i}" data-listitem-sort="10" data-listitem-off="" style="background-color:#efefef; padding:40px; margin:10px 0px; ">
        <div class="pe-list-item-title" style="padding:0px 0px 35px 0px;"><table style="width:100%; font-size:12px;"><tbody><tr><td style="width:100%;letter-spacing:1px;white-space:nowrap;"><b>КАРТОЧКА <span class="pe-list-item-i">${i}</span></b></td>
        <td class="pe-list-item-btn-del" style="padding:0 10px;"><a href="javascript:nolimEdli__del(${i})">Удалить</a></td>
        </tr></tbody></table></div>
        
        </div>
        </div>`;
   $(`[id="group_${item.type+item.id}"] .form-group .editlist__addbtn`).before(cardscr); 
   let list = i;
   
    inputsnew.forEach(function(item5,index) {
        switch (item5.type) {
            case "input":
                groupCards = `<div class="pe-form-group" data-lfield="li_title">    <label class="pe-label">${item5.title}</label>    <input nolim-type="text" type="text" name="li_title" id="" class="pe-input nolimgroupinput" value="${loaditems[list-1][index]}" placeholder="${item5.placeholder}"></div>`;


                $(`[nolim-type="groupCards"].pe-form-group-wrapper#group_${item.type+item.id} [nolim-data-sort="${list}"] .pe-list-item-title`).append(groupCards);


                break;
            case "select":
                let item10 = Object.keys(item5.options).map((key) => [key, item5.options[key]]);
                let optionvsdiv = ``;
                for (let i = 0; i < item10.length; i++) {
                        optionvsdiv += `<option value="${item10[i][1]}">${item10[i][0]}</option>`;
                }
                
                
                let myselectr = $(`<div class="pe-form-group" data-lid="" data-lfield="li_rows"><label class="pe-label">${item5.title}</label><div class="pe-select"><select type="select" nolim-type="${item5.type}" class="pe-input pe-select nolimgroupinput" name="li_rows">${optionvsdiv}</select></div></div>`).appendTo(`[nolim-type="groupCards"].pe-form-group-wrapper#group_${item.type+item.id} [nolim-data-sort="${list}"] .pe-list-item-title`);

                
                
                myselectr.find('.nolimgroupinput').val(loaditems[list-1][index]).change();
                setTimeout(function(){
                    myselectr.find('.nolimgroupinput').trigger('input');
                },100);
            
                break;
            case "image":
                var tpl = {
                    record: {
                        id: `${$('.js-image-box').length+1}`,
                        img: "https://static.tildacdn.com/tild3736-3037-4334-b863-353562353039/d946dbce69a24e0288d5.jpg",
                        pageid: window.pageid,
                    },
                    tpl: {
                        fields: "",
                    }
                }
                nolimEdrec__drawUI__image({
                            type: "im",
                            label: item5.title
                        }, loaditems[list-1][index], tpl, `img${$('.js-image-box').length+1}`,$(`[nolim-type="groupCards"].pe-form-group-wrapper#group_${item.type+item.id} [nolim-data-sort="${list}"] .pe-list-item-title`), inputsnew,'nolimgroupinput','append');
                break;
        }
    });
     }
}




function addInputsGroup(sel){
    let intlength = $(`[id='${sel}'] .pe-list-item`).length;
    if(intlength == 15){
        return;
    }

    let inputsnew = $(`[id='${sel}']`).find('.editlist__addbtn').attr('nolim-data-add');
    inputsnew = JSON.parse(inputsnew);

       let cardscr = `<div class="pe-list-item" nolim-data-sort="${intlength+1}" data-listitem-id="${intlength+1}" data-listitem-sort="10" data-listitem-off="" style="background-color:#efefef; padding:40px; margin:10px 0px; ">
        <div class="pe-list-item-title" style="padding:0px 0px 35px 0px;"><table style="width:100%; font-size:12px;"><tbody><tr><td style="width:100%;letter-spacing:1px;white-space:nowrap;"><b>КАРТОЧКА <span class="pe-list-item-i">${intlength+1}</span></b></td>
        <td class="pe-list-item-btn-del" style="padding:0 10px;"><a href="javascript:nolimEdli__del(${intlength+1})">Удалить</a></td>
        </tr></tbody></table></div>
        
        </div>
        </div>`;
   $(`[id='${sel}'] .form-group .editlist__addbtn`).before(cardscr);

    let groupCards
    inputsnew.forEach(function(item,index) {
        
        switch (item.type) {
            case "input":
                groupCards = `<div class="pe-form-group" data-lfield="li_title">    <label class="pe-label">${item.title}</label>    <input nolim-type="text" type="text" name="li_title" id="" class="pe-input nolimgroupinput" value="" placeholder="${item.placeholder}"></div>`
                $(`.pe-form-group-wrapper [nolim-data-sort="${intlength+1}"] .pe-list-item-title`).append(groupCards);
                break;

            case "select":
                item.options = Object.keys(item.options).map((key) => [key, item.options[key]]);
                let optionvsdiv = ``;
                for (var i = 0; i < item.options.length; i++) {
                        optionvsdiv += `<option value="${item.options[i][1]}">${item.options[i][0]}</option>`;
                }
                
                
                $(`.pe-form-group-wrapper [nolim-data-sort="${intlength+1}"] .pe-list-item-title`).append(`<div class="pe-form-group" data-lid="" data-lfield="li_rows"><label class="pe-label">${item.title}</label><div class="pe-select"><select type="select" nolim-type="${item.type}" class="pe-input pe-select nolimgroupinput" name="li_rows">${optionvsdiv}</select></div></div>`);
                break;

                
            
            case "image":
                var tpl = {
                    record: {
                        id: `${$('.js-image-box').length+1}`,
                        img: "https://static.tildacdn.com/tild3736-3037-4334-b863-353562353039/d946dbce69a24e0288d5.jpg",
                        pageid: window.pageid,
                    },
                    tpl: {
                        fields: "",
                    }
                }
                nolimEdrec__drawUI__image({
                            type: "im",
                            label: item.title
                        }, '', tpl, `img${$('.js-image-box').length+1}`,$(`.pe-form-group-wrapper [nolim-data-sort="${intlength+1}"] .pe-list-item-title`), inputsnew,'nolimgroupinput','append');
                break;
        }
    });
}


function nolimEdli__allitems__Resort() {
    var t, e = $(".editlist__wrapper"), i = 0;
    e.find(".pe-list-item").each(function() {
        var e = $(this);
        t = 10 * ++i,
        e.attr("data-listitem-sort", t),
        e.attr("data-listitem-id", i),
        e.find(".pe-list-item-i").html(i),
        e.find(".pe-list-item-btn-del a").attr('href','javascript:nolimEdli__del('+i+')')
        
    })
}

function nolimEdli__del(e) {
    var t = $(".editlist__wrapper").find("[data-listitem-id=" + e + "]");
    t.slideUp("fast", function() {
        t.remove(),
        nolimEdli__allitems__Resort(),  
        edli__allitems__getData__inJson()
    })
}

function nolimCreateGroupInputs(item,loaditems){
    let txt = `<div class="pe-form-group-title-wrapper" nolim-group-id="${item.type+item.id}" data-tpl-group="${item.type+item.id}" id="grouptitle_${item.type+item.id}">     <span class="pe-form-group-title tsgrouptitle">${item.title}</span>       <span class="pe-form-group-arrow"></span>   </div>
    <div class="pe-form-group-wrapper noliminput" nolim-type="groupInputs" nolim-group-id="${item.type+item.id}" id="group_${item.type+item.id}" style="display: none;">
    <div class="pe-form-group-close-wrapper"><div class="pe-form-group-close"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.354 4.293L.707.646 0 1.354 3.646 5 0 8.646l.707.708 3.647-3.647L8 9.354l.707-.708L5.061 5l3.646-3.646L8 .646 4.354 4.293z" fill="#555"></path></svg></div></div>  
<div class="form-group pe-form-group" data-tpl-field="list"> 

<div class="editlist__wrapper" data-ui-type="edli" data-lfields="input,input" data-init-status="inited">

</div>
   
    </div>`;

    $('.edrec__wrapper').prepend(txt);
    $('.pe-form-group-title-wrapper').click(function(){
        $('.pe-form-group__help-content').show();
    })

    
    let inputsnew = item.options;
    loaditems = loaditems;
    let groupCards = ``
    
    
    
    let list = 1;
    
    inputsnew.forEach(function(item5,index) {
        switch (item5.type) {
            case "input":
                groupCards = `<div class="pe-form-group" data-lfield="li_title">    <label class="pe-label">${item5.title}</label>    <input nolim-type="text" type="text" name="li_title" id="" class="pe-input nolimgroupinput" value="${loaditems[index]}" placeholder="${item5.placeholder}"></div>`;
                $(`[nolim-type="groupInputs"].pe-form-group-wrapper#group_${item.type+item.id} .editlist__wrapper`).append(groupCards);

                break;

            case "color":

                groupCards = `<div class="pe-form-group" data-tpl-field="">    <label class="pe-label">${item5.title}</label>    <div class="pe-color">        <div class="minicolors minicolors-theme-default minicolors-position-bottom"><input nolim-type="text" id="${item.id}" type="text" name="" class="pe-input pe-minicolors minicolors-input nolimgroupinput color" placeholder="#ffffff" value="${loaditems[index]}"></div>       <div class="pe-hint" style="padding: 0px;"></div>   </div></div>`;

                groupCards = $(groupCards).appendTo(`[nolim-type="groupInputs"].pe-form-group-wrapper#group_${item.type+item.id} .editlist__wrapper`);

                        $(groupCards).find('.nolimgroupinput').minicolors({
                            defaultValue: "transparent",
                            keywords: "transparent"
                        });
                break;

            case "select":
                let item10 = Object.keys(item5.options).map((key) => [key, item5.options[key]]);
                let optionvsdiv = ``;
                for (let i = 0; i < item10.length; i++) {
                        optionvsdiv += `<option value="${item10[i][1]}">${item10[i][0]}</option>`;
                }
                
                
                let myselectr = $(`<div class="pe-form-group" data-lid="" data-lfield="li_rows"><label class="pe-label">${item5.title}</label><div class="pe-select"><select type="select" nolim-type="${item5.type}" class="pe-input pe-select nolimgroupinput" name="li_rows">${optionvsdiv}</select></div></div>`).appendTo(`[nolim-type="groupInputs"].pe-form-group-wrapper#group_${item.type+item.id} .editlist__wrapper`);

                
                myselectr.find('.nolimgroupinput').val(loaditems[index]).change();
                setTimeout(function(){
                    myselectr.find('.nolimgroupinput').trigger('input');
                },100);
            
                break;
            case "image":
                var tpl = {
                    record: {
                        id: `${$('.js-image-box').length+1}`,
                        img: "https://static.tildacdn.com/tild3736-3037-4334-b863-353562353039/d946dbce69a24e0288d5.jpg",
                        pageid: window.pageid,
                    },
                    tpl: {
                        fields: "",
                    }
                }
                
                nolimEdrec__drawUI__image({
                            type: "im",
                            label: item5.title
                        }, loaditems[index], tpl, `img${$('.js-image-box').length+1}`,$(`[nolim-type="groupInputs"].pe-form-group-wrapper#group_${item.type+item.id} .editlist__wrapper`), inputsnew,'nolimgroupinput','append');
                break;
            case "text":
                $(`[nolim-type="groupInputs"].pe-form-group-wrapper#group_${item.type+item.id} .editlist__wrapper`).append(`<div class="pe-form-group" data-lfield="li_title">    <label class="pe-label" style="font-weight: 600;font-size: 14px;">${item.title}</label></div>`);
                break;
            case "number":
                $(`[nolim-type="groupInputs"].pe-form-group-wrapper#group_${item.type+item.id} .editlist__wrapper`).append(`<div class="pe-form-group" data-lfield="li_title">    <label class="pe-label">${item5.title}</label>    <input type="number" name="li_title" nolim-type="text" class="pe-input nolimgroupinput " value="${loaditems[index]}" placeholder="${item5.placeholder}"></div>`);
                break;
            case "checkbox":
                let mycheck = $(`<label class="pe-label pe-form-group" "><input class="nolimgroupinput" type="checkbox" nolim-type="text" id="${item.id}" value="${loaditems[index]}" checked="checked"> ${item5.title}</label>`).appendTo(`[nolim-type="groupInputs"].pe-form-group-wrapper#group_${item.type+item.id} .editlist__wrapper`);
                mycheck.unbind("click").click(function(){
                    if ($(this).is(':checked')) {
                        $(this).val('1');
                    } else {
                        $(this).val('0');
                    }
                    });
                break;
            
        }
    });
     
}
























































var lo10 =setInterval(function() {
    if(document.readyState=='complete'){
         clearInterval(lo10);
        nolim_addBackgroundsAll();
    }
})

function nolim_addBackgroundsAll(){
    $("[data-record-type=131]").each(function(i, rec) {
        if ($(rec).find('pre').text().substr(0,12) == '<!--NOLIM-->'){
            let code = $(rec).find('pre').text().substr(16,6);
            let id = $(rec).attr('recordid');
             nolimAddBackground2Block(id,code)

             if($.urlParam('previewmode') == "yes"){
                let id = $(rec).attr('id').replace('#rec','');
                nolimAddBackground2BlockPreview(id,code);
             }

        }
})
}


$(window).click(function(e) {
    if ($(e.target).parents(".tp-record-edit-icons-right__items").length > 0) {
                    let kid = $(e.target).parents('[data-record-cod="T123"]').attr('id');
                    var tn10 = setInterval(function() {
                    if ($(`#${kid}`).find('.t-col').length > 0){
                        clearInterval(tn10);
                        if ($(`#${kid}`).find('pre').text().substr(0,12) == '<!--NOLIM-->'){
                            let b1 = document.body.scrollHeight;
                            nolim_addBackgroundsAll()
                            var tn1 = setInterval(function() {
                            if (b1 < document.body.scrollHeight) {
                                clearInterval(tn1);
                                nolim_addBackgroundsAll()
                            }
                            setTimeout(function() {
                                nolim_addBackgroundsAll()
                            },300);
                        },50)
                    }
}
},50);
                };
});




function n2i(name,off){
    if(name != ""){
        return name
    } else {
        return off;
    }
}









$(document).ready(function() {
        setTimeout(function() {
            
        },1000);
});



function nolimSupportBadge(){
    $('#tplslist99 div:eq(0)').after(`
<div class="nolimSupportBadge">
<div class="nolimSupportBadgeText"><span style="font-weight: 700;color:#FC0D1B;">Внимание! Tilda Publishing </span><span style="color:#FC0D1B;">не оказывает техническую поддержку</span>, связанную с работой Nolim.<br> У нас есть своя
</div>
<a href="https://t.me/nolimsupport_bot" style="text-decoration: none;" target="_blank"><div class="nolimSupportBadgeButton">ТЕХПОДДЕРЖКА</div></a>
</div>
<style id="nolimSupportBadge">
.nolimSupportBadge {
border: 1px solid #0058FF;
border-radius: 3px;
padding-top:15px;
padding-bottom:15px;
padding-left:10px;
padding-right:10px;
margin-top: 10px;
}

.nolimSupportBadgeText {
    font-family: 'Nolim';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
    padding-bottom: 15px;
}

.nolimSupportBadgeButton {
background: #0058FF;
/* кнопка */

box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
border-radius: 3px;
    text-align: center;
    padding: 9px 0px 9px 0px;
font-weight: bold;
    font-size: 16px;
    font-family: 'tfutura';
    color: #fff;
}
.nolimSupportBadgeButton {
    background-image: url(https://static.tildacdn.com/tild3061-3063-4536-a136-316632616261/Vector.svg);
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: left 69px center;
    background-origin: padding-box;
    background-position-y: center;
}

.nolimSupportBadgeText:after {
content: '';
    background-image: url(https://static.tildacdn.com/tild6534-6631-4534-a634-343666613737/image_27.png);
    background-size: 20px;
    display: inline-block;
    position: absolute;
    top: 78px;
    left: 151px;
    background-repeat: no-repeat;
    height: 20px;
    width: 20px;
}



</style>



        `);
}



function nolimVideoMini(idvideo){
$('.edrec__wrapper div:eq(1)').after(`
<a href="#nolimvideo"><label class="pe-label">Видеоинструкция</label></a>
<script>
$('[href="#nolimvideo"]').click(function(){
    $('[data-tooltip-hook="#popup:nolimvideo"]').show();
})

</script>
    `);


$('.edrec__wrapper').after(`

<div class="t-popup t-popup_show" data-tooltip-hook="#popup:nolimvideo" style="display: none;">
    <div class="t-popup__close">
      <div class="t-popup__close-wrapper">
      <svg class="t-popup__close-icon" width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd">
          <rect transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
          <rect transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
        </g>
      </svg>
      </div>    
    </div>
    <div class="t-popup__container t-width t-width_10 t-popup__container-animated">
        <div class="t331__youtube" data-content-popup-video-url-youtube="lM02vNMRRB0">
            
              <div class="t331__video-carier t-width t-width_10" data-video-width="960" data-video-height="" style="height:500px;"><iframe id="youtubeiframe366935841" class="t331__iframe" width="100.5%" height="100.5%" src="https://www.youtube.com/embed/${idvideo}?autoplay=0&amp;rel=0" frameborder="0" allowfullscreen=""></iframe></div>
              
        </div>
      </div>
  </div>
  <script>
  $('.t-popup__close, .t-popup').click(function(){
    $('.t-popup').hide();
  })

  </script>
  `);
}




$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    } else {
       return decodeURI(results[1]) || 0;
    }
}



function Nolim_upRecord(t) {
    var e, o = $("#record" + t);
    o.prev().attr("recordid") && (e = o.clone(),
    $('#allrecords').prepend(e),
    o.remove(),
    tp__scrollTo(t),
    tp__record__addEditFieldEvents(t),
    tp__record__addEditOnReady(t),
    tp__record__onBordersdragmode(t),
    clearTimeout(autosavesort_timer),
    autosavesort_timer = setTimeout(function () {
        tp__saveRecordsSort()
    }, 4e3))
}


function Nolim_downRecord(t) {
    var e, o = $("#record" + t);
    o.next().attr("recordid") && (e = o.clone(),
    $('#allrecords').append(e),
    o.remove(),
    tp__scrollTo(t),
    tp__record__addEditFieldEvents(t),
    tp__record__addEditOnReady(t),
    tp__record__onBordersdragmode(t),
    clearTimeout(autosavesort_timer),
    autosavesort_timer = setTimeout(function () {
        tp__saveRecordsSort()
    }, 4e3))
}




$('.tp-record-edit-icons-right__item-icon.dropdown-toggle').length

function Nolim_add_actionsToRightIcons(){
    $('.tp-record-edit-icons-right__item-icon.dropdown-toggle + .dropdown-menu').each(function(i,item){
        if($(item).find('.nolim_right_icons_up').length == 0){
            $(item).append(`<li class="nolim_right_icons_up"><a href="javascript:Nolim_upRecord('${$(item).parents('.record').attr('recordid')}');" style="padding-left:0px;color:#000;">На самый верх</a></li>`);
            $(item).append(`<li class="nolim_right_icons_down"><a href="javascript:Nolim_downRecord('${$(item).parents('.record').attr('recordid')}');" style="padding-left:0px;color:#000;">В самый низ</a></li>`)
        }
    });
}



function nolim_tp__record__addEditUi(t, i) {
    "object" != typeof $tpls && (console.log("ERROR! $tpls is not set"),
    $tpls = []);
    var r = [];
    $tpls.forEach(function(t, e, o) {
        t.id == i && (r = t)
    });
    var e = 300
      , o = $("#record" + t)
      , d = ""
      , d = '<div class="recordbordertop"></div>';
    o.prepend(d),
    d = '<div class="recordborderbottom"></div>',
    d += '<div class="insertafterrecorbutton"><center><a href="javascript:tp__library__open(\'' + t + '\');"><img src="/tpl/img/page/tp-08-add.svg"></a></center></div>',
    o.append(d),
    void 0 === r.id && (r.id = i,
    void 0 !== o.attr("data-record-category") && (r.type = o.attr("data-record-category")),
    void 0 !== o.attr("data-record-cod") && (r.cod = o.attr("data-record-cod")),
    r.editnotpublish = "",
    r.title = ""),
    d = '<div class="recordediticons mainleft" id="mainleft">',
    d += '<div class="tp-record-edit-icons-left__wrapper">',
    "396" !== i && "421" !== i && "121" !== i && void 0 !== r.type && "" !== r.type && void 0 !== r.cod && "" !== r.cod && (d += '<div class="tp-record-edit-icons-left__one">',
    d += '<div class="tp-record-edit-icons-left__item">',
    d += '<div class="tp-record-edit-icons-left__dropdown-toggle" onclick="javascript:tp__record__showLefdropdown(\'' + t + "');\">",
    void 0 !== r.cod && "" !== r.cod && (d += '<div class="tp-record-edit-icons-left__item-tplcod">' + r.cod + "</div>"),
    d += '<div class="tp-record-edit-icons-left__item-dropicon"><span class="caret"></span></div>',
    d += "</div>",
    d += '<div class="tp-record-edit-icons-left__dropdown-menu">',
    d += "</div>",
    d += "</div>",
    d += "</div>"),
    d += '<div class="tp-record-edit-icons-left__one-right-space">',
    d += "</div>",
    d += '<div class="tp-record-edit-icons-left__two">',
    d += '<div class="tp-record-edit-icons-left__item" onclick="edrec__editRecordSettings(\'' + t + "');\">",
    d += '<div class="tp-record-edit-icons-left__item-icon"><span class="glyphicon glyphicon-cog"></span></div>',
    d += '<div class="tp-record-edit-icons-left__item-title"><span class="recordedit_mainleft_but_settings_title">' + ("RU" == lang ? "Настройки" : "Settings") + "</span></div>",
    d += "</div>",
    d += "</div>",
    d += '<div class="tp-record-edit-icons-left__three">',
    "396" !== i && "421" !== i ? (d += '<div class="tp-record-edit-icons-left__item" onclick="edrec__editRecordContent(\'' + t + "');\">",
    d += '<div class="tp-record-edit-icons-left__item-icon"><img src="/tpl/img/page/tp-03-edit.svg"></div>',
    d += '<div class="tp-record-edit-icons-left__item-title"><span class="recordedit_mainleft_but_settings_title">' + ("RU" == lang ? "Контент" : "Content") + "</span></div>") : (d += '<div class="tp-record-edit-icons-left__item" onclick="tp__openZero(\'' + t + "');\">",
    d += '<div class="tp-record-edit-icons-left__item-icon"><img src="/tpl/img/page/tp-03-edit.svg"></div>',
    d += '<div class="tp-record-edit-icons-left__item-title"><span class="recordedit_mainleft_but_settings_title">' + ("RU" == lang ? "Редактировать блок" : "Block Editor") + "</span></div>"),
    d += "</div>",
    d += "</div>",
    "754" !== i && "776" !== i && "778" !== i && "786" !== i && "951" !== i && 973 != i || 0 < $("#rec" + t).find(".t-store").length && 0 < $("#rec" + t).find(".t-store").attr("data-storepart") && (e = 400,
    $("#rec" + t).find(".t-store").attr("data-storepart"),
    d += '<div class="tp-record-edit-icons-left__four">',
    d += "<a href='https://tilda.cc/identity/gostore/?projectid=" + window.projectid + "' target='_blank'>",
    d += '<div class="tp-record-edit-icons-left__item">',
    d += '<div class="tp-record-edit-icons-left__item-icon"><img src="/tpl/img/page/tp-16-products.svg" width="14px" style="width:14px;"></div>',
    d += '<div class="tp-record-edit-icons-left__item-title"><span class="recordedit_mainleft_but_settings_title">' + ("RU" == lang ? "Товары" : "Products") + "</span></div>",
    d += "</div>",
    d += "</a>",
    d += "</div>"),
    "896" !== i && "897" !== i && "915" !== i && "924" !== i && "925" !== i || 0 < $("#rec" + t).find(".t-feed").length && ("" == $("#rec" + t).find(".t-feed").attr("data-feedpart") || "5d9725a245f86259476957" != (n = $("#rec" + t).find(".t-feed").attr("data-feedpart")) && "5d971e17b674f464032195" != n && (e = 385,
    d += '<div class="tp-record-edit-icons-left__four">',
    d += "<a href='https://tilda.cc/identity/gofeeds/?projectid=" + window.projectid + "&feeduid=" + n + "' target='_blank'>",
    d += '<div class="tp-record-edit-icons-left__item">',
    d += '<div class="tp-record-edit-icons-left__item-icon"><img src="/tpl/img/page/tp-17-news.svg" width="12px" style="width:12px;"></div>',
    d += '<div class="tp-record-edit-icons-left__item-title"><span class="recordedit_mainleft_but_settings_title">' + ("RU" == lang ? "Посты" : "Posts") + "</span></div>",
    d += "</div>",
    d += "</a>",
    d += "</div>")),
    void 0 !== r.editnotpublish && "y" == r.editnotpublish && (d += '<div class="tp-record-edit-icons-left__four">',
    d += '<div class="tp-record-edit-icons-left__item" onclick="showCornerNotice(\'' + ("RU" == lang ? "Примечание: Вид данного блока и его поведение в режиме редактирования может отличаться от вида в режиме предпросмотра или публикации." : "Appearance of this block in the editing mode might be different from its appearance on preview and on published page.") + "',8000);\">",
    d += '<div class="tp-record-edit-icons-left__item-icon"><span class="fa fa-comment" style="color:#ffcf5d;"></span></div>',
    d += "</div>",
    d += "</div>"),
    d += " </div>",
    d += "</div>",
    void 0 === r.title && void 0 === r.title_ru || (d += '<div class="recordediticons secondleft tp-record-edit-icons-left__item-tpltitle">' + ("RU" == lang && void 0 !== r.title_ru && "" != r.title_ru ? r.title_ru : void 0 !== r.title && "" != r.title ? r.title : "") + "</div>"),
    o.prepend(d),
    d = '<div class="recordediticons mainright" id="rightbuttons">',
    d += '<div class="tp-record-edit-icons-right__wrapper">',
    d += '<div class="tp-record-edit-icons-right__one">',
    d += '<div class="tp-record-edit-icons-right__items">',
    d += '<div class="tp-record-edit-icons-right__item-icon tp-record-edit-icons-right__item-icon_right-border" onclick="tp__dublicateRecord(\'' + t + '\');" data-toggle="tooltip" data-placement="top" title="' + ("RU" == lang ? "Дублировать" : "Duplicate") + '" ><img src="/tpl/img/page/tp-04-duplicate.svg"></div>',
    d += '<div class="tp-record-edit-icons-right__item-icon tp-record-edit-icons-right__item-icon_right-border" onclick="tp__delRecord(\'' + t + '\');" data-toggle="tooltip" data-placement="top" title="' + ("RU" == lang ? "Удалить" : "Delete") + '"><img src="/tpl/img/page/tp-05-delete-3.svg"></div>',
    d += '<div class="tp-record-edit-icons-right__item-icon tp-record-edit-icons-right__item-icon_right-border " onclick="tp__offRecord(\'' + t + '\');" data-toggle="tooltip" data-placement="top" title="' + ("RU" == lang ? "Спрятать/Показать" : "Hide/Show") + '"><img src="/tpl/img/page/tp-05-off.svg"></div>',
    d += '<div type="button" class="tp-record-edit-icons-right__item-icon dropdown-toggle" style="padding-top:2px; padding-right:3px;width:24px;" data-toggle=""><span class="caret"></span></div>',
    d += '<ul class="dropdown-menu">',
    d += "<li><a href=\"javascript:tp__record__bufCut('" + t + '\');" style="padding-left:0px;color:#000;">' + ("RU" == lang ? "Вырезать" : "Cut") + "</a></li>",
    d += "<li><a href=\"javascript:tp__record__bufCopy('" + t + '\');" style="padding-left:0px;color:#000;">' + ("RU" == lang ? "Копировать" : "Copy") + "</a></li>",
    d += "<li><a href=\"javascript:tp__record__bufPaste('" + t + '\');" style="padding-left:0px;color:#000;">' + ("RU" == lang ? "Вставить" : "Paste") + "</a></li>",
    d += "<li><a href=\"javascript:tp__selectModeOn('" + t + '\');" style="padding-left:0px;color:#000;">' + ("RU" == lang ? "Выделить" : "Select") + "</a></li>",
    d += "<li class='nolim_right_icons_up'><a href=\"javascript:Nolim_upRecord('" + t + '\');" style="padding-left:0px;color:#000;">' + ("RU" == lang ? "На самый верх" : "Move to top") + "</a></li>",
    d += "<li class='nolim_right_icons_down'><a href=\"javascript:Nolim_downRecord('" + t + '\');" style="padding-left:0px;color:#000;">' + ("RU" == lang ? "В самый низ" : "Move to bottom") + "</a></li>",
    d += "</ul>",
    d += "</div>",
    d += "</div>",
    d += '<div class="tp-record-edit-icons-right__one-right-space">',
    d += "</div>",
    d += '<div class="tp-record-edit-icons-right__two">',
    d += '<div class="tp-record-edit-icons-right__items">',
    d += '<div class="tp-record-edit-icons-right__item-icon btn-sort-recup" style="display:table-cell !important; border-right:1px #ccc solid;" onclick="tp__upRecord(\'' + t + '\');" data-toggle="tooltip" data-placement="top" title="' + ("RU" == lang ? "Переместить вверх" : "Move up") + '"><span class="glyphicon glyphicon-arrow-up"></span></div>',
    d += '<div class="tp-record-edit-icons-right__item-icon btn-sort-recdown" style="display:table-cell !important;"  onclick="tp__downRecord(\'' + t + '\');" data-toggle="tooltip" data-placement="top" title="' + ("RU" == lang ? "Переместить вниз" : "Move down") + '"><span class="glyphicon glyphicon-arrow-down"></span></div>',
    d += "</div>",
    d += "</div>",
    d += "</div>",
    d += "</div>",
    o.prepend(d),
    "4" !== i && "124" !== i && "251" !== i && "378" !== i && "259" !== i && "368" !== i || t_video_lazyload_add_video();
    var a, n, c = o.find(".r");
    void 0 === c.attr("data-screenmin") && void 0 === c.attr("data-screenmax") || (n = a = "",
    void 0 !== c.attr("data-screenmin") && "" != c.attr("data-screenmin") && (a = c.attr("data-screenmin")),
    void 0 !== c.attr("data-screenmax") && "" != c.attr("data-screenmax") && (n = c.attr("data-screenmax")),
    d = "",
    d += '<img src="https://static.tildacdn.com/lib/linea/bd5071b9-9e2d-2fa7-4562-c8c427f961ba/basic_eye.svg" style="width:18px; padding-right:8px;">',
    "RU" == lang ? d += "от " : d += " ",
    d += "" == a ? "0px" : a,
    "RU" == lang ? d += " до " : d += " - ",
    d += "" == n ? "&infin;" : n,
    o.prepend('<div class="recordediticons" style="z-index:1000;left:' + e + 'px;background:yellow;padding:6px 15px;cursor:default;" title="' + ("RU" == lang ? "Установлено ограничение на отображение на различных размерах экрана. Блок будет отображаться на экранах заданной ширины." : "There's a display restriction applied to this block. This block will appear only on screens with the specified width.") + '">' + d + "</div>")),
    "0px" == c.css("padding-top") && o.find(".recordbordertop").css("height", "10px"),
    "0px" == c.css("padding-bottom") && o.find(".recordborderbottom").css("height", "10px").css("margin-top", "-10px"),
    "y" == o.attr("off") && tp__minifyRecord(t),
    void 0 !== o.attr("data-record-trash") && "y" == o.attr("data-record-trash") && (o.prepend('<div class="recordediticons" style="display:block;z-index:1001;left:20px;background:yellow;padding:6px 15px;cursor:pointer;font-weight:500;" title="" onclick="tp__recoverRecord(\'' + t + "');\">" + ("RU" == lang ? "Восстановить из корзины" : "Recover from Trash") + "</div>"),
    o.find(".mainright").remove(),
    o.find(".mainleft").remove()),
    tp__record__onBordersdragmode(t),
    o.height() < 1 && o.css("min-height", "100px")
}




function nolim__library__open(){
    tp__library__open('');
    $('[data-library-type-id="99"]').click();
}

function nolim_icon_for_bottom(){
    let nlm = `<div class="tp-shortcuttools__space">			</div><div class="tp-shortcuttools__one tp-shortcuttools__one_white tp-shortcuttools__zero">				<div class="tp-shortcuttools__one-item" onclick="nolim__library__open();">					<div class="tp-shortcuttools__one-item-icon"><img src="https://static.tildacdn.com/tild3864-3533-4265-a563-646432663738/nolim_log.svg" style="height: 20px;"></div>					<div class="tp-shortcuttools__one-item-title">Nolim</div>				</div>			</div>`;

    $('.tp-shortcuttools__space').eq(1).before(nlm);
}


function nolimAddFolderBack(){
    if($('.tp-menu__leftdrop-list-folder__pages a[style="font-weight:600;"]').parent().prev('.tp-menu__leftdrop-list-folder__title').length > 0){

        
    let ssl = $('.tp-menu__leftdrop-list-folder__pages a[style="font-weight:600;"]').parent().prev('.tp-menu__leftdrop-list-folder__title').attr('onclick').replace('tp_leftdrop_folder_toggle(\'','').replace('\');','')
    

    $('.tp-menu__leftdrop').after(`<div title="${"RU" == lang ? "В папку страницы" : "To page folder"}" style="display: table-cell;vertical-align: middle;padding-left:15px;"><a href="/projects/?projectid=${projectid}&folderid=${ssl}" ><img class="nolimFolder" src="https://front.tildacdn.com/ccdashboard/img/td-icon-folder.svg" style="height: 35px;"></a></div>`)


    }

}




     
function NolimColorPicker(){
    
    if ("EyeDropper" in window) {
        $('.minicolors-input:not([class*="gradient"])').each(function(i,item){
            if($(item).next('.nolim_picker').length == 0){
              $(item).after('<div nolim-data-hover="Пипетка Нолим" class="nolim_picker"></div>')
              let picker = $(item).next('.nolim_picker');
              picker.off('click').click(async function(){
                  $('#closelayer').addClass('nolim_closelayer_off');
                  const eyeDropper = new EyeDropper();
                  try {
                    const selectedColor = await eyeDropper.open();
                    if($(item).attr('id')=='minigradients__colors-controls__hex'){
                        $(item).val(selectedColor.sRGBHex);
                        $(item).keydown()
                        $(item).focus()
                        $(item).keypress()
                        $(item).keyup();
                    } else {
                        $(item).minicolors('value',selectedColor.sRGBHex).trigger("change");
                    }
                    $('#closelayer').removeClass('nolim_closelayer_off');
                  } catch (err) {
                    console.log("color selection cancelled");
                  }
              });
            }
    
        })

        
    
        }
}
    


setInterval(function(){
    NolimColorPicker();
},200);


// function NolimT123Hide(){
//     $('[data-record-type="131"]').hide();
// }

// function NolimT123Show(){
//     $('[data-record-type="131"]').hide();
// }

// function NolimDeleteHideRecords() {
//     if(confirm("Удаление скрытых блоков. Вы уверены?")){
//         $('[off="y"]').each(function(i,item){
//             tp__delRecord($(item).attr('recordid'));    
//         })
//     }
// }

// function NolimAddDeleHideRecordsButton(){
    
//     $('.tp-menu__item.dropdown').before(`<li class="tp-menu__item dropdown nolimdropdown">
//     <a class="dropdown-toggle" data-toggle="">Нолим <b class="caret"></b></a>
//     <ul class="dropdown-menu">

//     <li style="cursor:pointer;" onclick="NolimDeleteHideRecords();" class="tp-menu__item-drop nolim_no_close">
//     <a>Удалить скрытые блоки</a></li>
        
    

//     <li style="cursor:pointer;" class="tp-menu__item-drop nolim_no_close">
//     <a class="nolimFlexBlocksButton">Включить три колонки</a>
//     </li>
    

//     </ul>
//     </li>`);
//     $('.tp-menu__item.dropdown .dropdown-toggle').off('click').click(function(e){
//         setTimeout(function() {
//         $(e.target).parent().prev('.dropdown').removeClass('open');
//         $(e.target).parent().next('.dropdown').removeClass('open');
//         },50)
        
//     });
//     $('.tp-menu__item-drop.nolim_no_close').click(function(e){
//         $(e.target).parents('.tp-menu__item.dropdown').find('.dropdown-menu').css('display', 'block');
//         setTimeout(function() {
//         $(e.target).parents('.tp-menu__item.dropdown').find('.dropdown-menu').removeAttr('style');
//         $(e.target).parents('.tp-menu__item.dropdown').addClass('open');
//         },50);
        
//     })

//     $('.nolimFlexBlocksButton').click( function(e){
//         if(localStorage.getItem('nolimFlexBlocks') == 'off'){
//         nolimAddFlexBlocks()
//         $('.nolimFlexBlocksButton').text('Выключить три колонки');
//         } else {
//             nolimRemoveFlexBlocks();
//             $('.nolimFlexBlocksButton').text('Включить три колонки');
//         }
//     });
//     if(localStorage.getItem('nolimFlexBlocks') == 'on'){
//     nolimAddFlexBlocks()
//     $('.nolimFlexBlocksButton').text('Выключить три колонки');
//     } else {
//         nolimRemoveFlexBlocks();
//         $('.nolimFlexBlocksButton').text('Включить три колонки');
//     }

//     $(document).on('pointerup mouseup', (function (e) {
//     if ($('.tp-menu__item.dropdown').has(e.target).length === 0 && $('.tp-menu__item.dropdown').has(e.target).length === 0 && !$('.tp-menu__item.dropdown').is(e.target)) {
//         $('.tp-menu__item.dropdown').removeClass('open');
//     };
// }));


// }

function NolimDeleteHideRecords() {
    if(confirm("Удаление скрытых блоков. Вы уверены?")){
        $('[off="y"]').each(function(i,item){
            tp__delRecord($(item).attr('recordid'));    
        })
    }
}

function NolimAddDeleHideRecordsButton(){
    
    $('.tp-menu__item.dropdown').before(`<li class="tp-menu__item dropdown nolimdropdown">
    <a class="dropdown-toggle" data-toggle="">Нолим <b class="caret"></b></a>
    <ul class="dropdown-menu">

        <li style="cursor:pointer;" onclick="NolimDeleteHideRecords();" class="tp-menu__item-drop nolim_no_close">
            <a>Удалить скрытые блоки</a>
        </li>
        
        <li style="cursor:pointer;" class="tp-menu__item-drop nolim_no_close">
            <a class="nolimFlexBlocksButton">Включить три колонки</a>
        </li>

        <li style="cursor:pointer;" class="tp-menu__item-drop nolim_no_close">
            <a class="nolimHideBlocksT123">Скрыть все блоки с кодом</a>
        </li>

    </ul>
    </li>`);
    $('.tp-menu__item.dropdown .dropdown-toggle').off('click').click(function(e){
        setTimeout(function() {
        $(e.target).parent().prev('.dropdown').removeClass('open');
        $(e.target).parent().next('.dropdown').removeClass('open');
        },50)
        
    });
    $('.tp-menu__item-drop.nolim_no_close').click(function(e){
        $(e.target).parents('.tp-menu__item.dropdown').find('.dropdown-menu').css('display', 'block');
        setTimeout(function() {
            $(e.target).parents('.tp-menu__item.dropdown').find('.dropdown-menu').removeAttr('style');
            $(e.target).parents('.tp-menu__item.dropdown').addClass('open');
        },50);
    })

    $('.nolimFlexBlocksButton').click( function(e){
        if(localStorage.getItem('nolimFlexBlocks') == 'off'){
            nolimAddFlexBlocks()
            $('.nolimFlexBlocksButton').text('Выключить три колонки');
        } else {
            nolimRemoveFlexBlocks();
            $('.nolimFlexBlocksButton').text('Включить три колонки');
        }
    });
    if(localStorage.getItem('nolimFlexBlocks') == 'on'){
        nolimAddFlexBlocks()
        $('.nolimFlexBlocksButton').text('Выключить три колонки');
    } else {
        nolimRemoveFlexBlocks();
        $('.nolimFlexBlocksButton').text('Включить три колонки');
    }

    $('.nolimHideBlocksT123').click( function(e){

        // if(localStorage.getItem('nolimHideT123Blocks') == 'off'){
        //     nolimHideT123();
        //     $('.nolimHideBlocksT123').text('Показать все блоки с кодом');
        // } else {
        //     nolimShowT123();
        //     $('.nolimHideBlocksT123').text('Скрыть все блоки с кодом');
        // }

        if($('.nolimHideBlocksT123').text() == 'Скрыть все блоки с кодом'){
            nolimHideT123();
            $('.nolimHideBlocksT123').text('Показать все блоки с кодом');
        }else if($('.nolimHideBlocksT123').text() == 'Показать все блоки с кодом'){
            nolimShowT123();
            $('.nolimHideBlocksT123').text('Скрыть все блоки с кодом');
        }
    });

    // if(localStorage.getItem('nolimHideT123Blocks') == 'on'){
    //     nolimHideT123();
    //     $('.nolimHideBlocksT123').text('Показать все блоки с кодом');
    // } else {
    //     nolimShowT123();
    //     $('.nolimHideBlocksT123').text('Скрыть все блоки с кодом');
    // }

    $(document).on('pointerup mouseup', (function (e) {
    if ($('.tp-menu__item.dropdown').has(e.target).length === 0 && $('.tp-menu__item.dropdown').has(e.target).length === 0 && !$('.tp-menu__item.dropdown').is(e.target)) {
        $('.tp-menu__item.dropdown').removeClass('open');
    };
}));

}

function nolimHideT123() {
    $('#nolimHideT123Blocks').remove();
    if($('#nolimHideT123Blocks').length == 0){
        $('body').append(`
        <style id="nolimHideT123Blocks">
            [data-record-cod="T123"]{
                display: none;
            }
        </style>`)
    }
    // localStorage.setItem('nolimHideT123Blocks', 'on');
}

function nolimShowT123() {
    $('#nolimHideT123Blocks').remove();
    // localStorage.setItem('nolimHideT123Blocks', 'off');
}


function nolimAddFlexBlocks(){
    if($('#nolimFlexBlocks').length == 0){
        
    $('body').append(`
    <style id="nolimFlexBlocks">
    .tp-library_rightsideopened[style*="left: 0px;"] .tp-library-rightside {
        width: 1040px;
    }
    
    .tp-library__tpls-list-body_active {
        display: flex;
        flex-wrap: wrap;
    }
    
    .tp-library__tpls-list-body_active .tp-library__tpl-body {
        display: inline-flex;
    }
    
    .tp-library__tpl-icon {
        max-height: 200px;
    }5

    #tplslist999.tp-library__tpls-list-body_active{
        display:block;
    }
    </style>
    
    `)
    $('#nolimFlexBlocksMobile').remove();
    localStorage.setItem('nolimFlexBlocks', 'on');
}
}

function nolimRemoveFlexBlocks(){
    $('#nolimFlexBlocks').remove();
    localStorage.setItem('nolimFlexBlocks', 'off');
    $('body').append(`
    <style id="nolimFlexBlocksMobile">
        .nolimNavigationSectorHeader {
            display: flex;
        }

        .nolimNavigationButton {
            margin: 4px;
        }
    </style>
    
    `)
}


function nolimInputCreateGrid() {
    if($('#nolimInputGrid').length == 0){
        $('body').append(`
        <style id="nolimInputGrid">
            .nolim-input-grid {
                display: inline-table;
                width: 45%;
                margin-right: 30px;
            }

        </style>
        
        `);
    }
}






















window.nolimBlocksWishlist = [];


function nolim_AddWishlistButtons(){
    $('[nolim-tpl-wishlist]').remove();
    if(localStorage.getItem('nolimBlocksWishlist') ){
        var string = localStorage.getItem('nolimBlocksWishlist');
        window.nolimBlocksWishlist = string.split(",");
        setTimeout(function() {
            nolimAddWishlistCategorie();
        },1000)
        
    }
$('.tp-library__tpls-list-body:not([id="tplslist999"]):not([data-tpls-for-type="99"]) .tp-library__tpl-body').each(function(i,item){
    let tplid = $(item).attr('data-tpl-id');
    $(item).wrap('<div hehe style="position:relative; display: inline-flex;"></div>');
    $(item).before(`<a class="nolim_wishlistBlocks_addBtn" nolim-tpl-wishlist="${tplid}"><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6.32647C20 11.4974 10.5 17 10.5 17C10.5 17 1 11.4974 1 6.32647C1 -0.694364 10.5 -0.599555 10.5 5.57947C10.5 -0.599555 20 -0.507124 20 6.32647Z" stroke="black" stroke-linejoin="round"></path></svg></a>`)
})

$('.nolim_wishlistBlocks_addBtn').click(function(e){
    $(this).toggleClass('nolim_wishlistBlocks_addBtn_active');
    $(this).hasClass('nolim_wishlistBlocks_addBtn_active') ? window.nolimBlocksWishlist.push($(this).attr('nolim-tpl-wishlist')) : nolim_removeWishlistItemBlock($(this).attr('nolim-tpl-wishlist'))
    localStorage.setItem('nolimBlocksWishlist',window.nolimBlocksWishlist);
    nolimAddWishlistCategorieBlocks();
    if(window.nolimBlocksWishlist.length == 0){
        $("#tplslist909, [data-library-type-id='909']").remove();
        $('[data-library-type-id="1"]').click();
    }
});

window.nolimBlocksWishlist.forEach(function(item,index){
    $(`[nolim-tpl-wishlist="${item}"]`).addClass('nolim_wishlistBlocks_addBtn_active')
})
}

function nolim_removeWishlistItemBlock(i){
    window.nolimBlocksWishlist
    const index = window.nolimBlocksWishlist.indexOf(i);
if (index > -1) {
  return window.nolimBlocksWishlist.splice(index, 1);
}
}

function nolimAddWishlistCategorie(){
    var nolimWishlistCategorie = [];
    nolimWishlistCategorie.push({
        id: "909",
        title: "Избранное",
        title_ru: "Избранное",
        sort: "0",
        is_email: "",
        kind: "",
    });

    nolimWishlistCategorie.forEach(function(Categorie) {
        $('[data-library-type-id="1"]').before(`<div class="tp-library__type-body nolim_library_type-body" data-library-type-id="${Categorie.id}">       <div class="tp-library__type">          <div class="tp-library__type-title-wrapper"><div class="tp-library__type-title" style="font-weight:600;">${Categorie.title}</div></div>            <div class="tp-library__type-icon-wrapper"><div class="tp-library__type-icon-plus"><img src="/tpl/img/page/tp-12-down.svg"></div><div class="tp-library__type-icon-minus"><img src="/tpl/img/page/tp-14-line.svg" style="opacity:0.3;"></div></div>     </div>  </div>`);
    
            var gth = tp__library__getTplsList_for_type(Categorie.id);
            $(".tp-library-rightside").append(gth);
            $(".tp-library__type-body").click(function() {
            var t = $(this)
              , e = t.attr("data-library-type-id");
            $(".tp-library__tpls-list-body").removeClass("tp-library__tpls-list-body_active"),
            $("#tplslist" + e).addClass("tp-library__tpls-list-body_active"),
            $(".tp-library__tpls-list-body_active").css("opacity", "0"),
            $(".tp-library").addClass("tp-library_rightsideopened"),
            $(".tp-library__type-body").removeClass("tp-library__type-body_active"),
            t.addClass("tp-library__type-body_active"),
            $(".tp-library-rightside").animate({
                scrollTop: 0
            }, 0),
            $(".tp-library-rightside").scrollGuard(),
            setTimeout(function() {
                $(".tp-library__tpls-list-body").css("margin-top", "30px"),
                $(".tp-library__tpls-list-body").animate({
                    opacity: "1",
                    "margin-top": "0px"
                }, 500, "easeOutCirc", function() {})
            }, 100),
            setTimeout(function() {
                $(".tp-library__tpls-list-body_active").find(".tp-library__tpl-icon").each(function() {
                    var t = $(this);
                    "" == t.attr("src") && void 0 !== t.attr("data-src") && "" != t.attr("data-src") && t.attr("src", t.attr("data-src"))
                })
            }, 50)
        })
        }),
        

        
        nolimAddWishlistCategorieBlocks();
    
    }


function nolimAddWishlistCategorieBlocks(){
    if($('[data-tpls-for-type="909"]').length == 0){
        nolimAddWishlistCategorie();
        return
    }
    $('[data-tpls-for-type="909"] .tp-library__tpl-body').remove();
    window.nolimBlocksWishlist.forEach(function(block) {

        let modindex = $tpls.indexOf($tpls.find(code => code.id === block));
        
        $("#tplslist909").append(`<div class="tp-library__tpl-body" data-tpl-id="${block}">   <div class="tp-library__tpl-wrapper" style="opacity:1">     <div>           <div style=" width:320px; padding-left:10px; padding-right:10px;margin-bottom:10px; text-align:center;"><img class="tp-library__tpl-icon" src="${$tpls[modindex].icon2}" data-src="${$tpls[modindex].icon2}">             <div class="tp-library__tpl-bottom-wrapper"><div class="tp-library__tpl-caption"><span class="tp-library__tpl-cod">${$tpls[modindex].cod}</span>&nbsp;&nbsp;<span class="tp-library__tpl-title">${$tpls[modindex].title}</span></div>             </div>          </div>      </div>  </div></div>`);
    });
    setTimeout(function () {
        tp__library__addEvents__toCards();
    },500);

    $('[data-tpls-for-type="909"] [nolim-tpl-wishlist]').remove();
    $('[data-tpls-for-type="909"]:not([data-tpls-for-type="99"]) .tp-library__tpl-body').each(function(i,item){
        let tplid = $(item).attr('data-tpl-id');
        $(item).wrap('<div style="position:relative; display: inline-flex;"></div>');
        $(item).before(`<a class="nolim_wishlistBlocks_addBtn" nolim-tpl-wishlist="${tplid}"><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6.32647C20 11.4974 10.5 17 10.5 17C10.5 17 1 11.4974 1 6.32647C1 -0.694364 10.5 -0.599555 10.5 5.57947C10.5 -0.599555 20 -0.507124 20 6.32647Z" stroke="black" stroke-linejoin="round"></path></svg></a>`)
    });
    
    $('[data-tpls-for-type="909"] .nolim_wishlistBlocks_addBtn').click(function(e){
        $(this).toggleClass('nolim_wishlistBlocks_addBtn_active');
        
        if(!$(this).hasClass('nolim_wishlistBlocks_addBtn_active')){
            let tdlt = $(this).attr('nolim-tpl-wishlist');
            $(`[data-tpls-for-type="909"] [data-tpl-id="${tdlt}"]`).remove();
            $(`[data-tpls-for-type="909"] [nolim-tpl-wishlist="${tdlt}"]`).remove();
            $(`[nolim-tpl-wishlist="${tdlt}"]`).removeClass('nolim_wishlistBlocks_addBtn_active');
            nolim_removeWishlistItemBlock($(this).attr('nolim-tpl-wishlist'))
        } else {
            window.nolimBlocksWishlist.push($(this).attr('nolim-tpl-wishlist'))
        }
        localStorage.setItem('nolimBlocksWishlist',window.nolimBlocksWishlist);
        if(window.nolimBlocksWishlist.length == 0){
            $("#tplslist909, [data-library-type-id='909']").remove();
            $('[data-library-type-id="1"]').click();
        }
    });
    
    window.nolimBlocksWishlist.forEach(function(item,index){
        $(`[nolim-tpl-wishlist="${item}"]`).addClass('nolim_wishlistBlocks_addBtn_active');
    })

}

window.nolimModsWishlist = [];
function nolim_AddWishlistButtons2Mods(){
    $('[nolim-tpl-wishlist-mod]').remove();
    if(localStorage.getItem('nolimModsWishlist') ){
        let string = localStorage.getItem('nolimModsWishlist');
        window.nolimModsWishlist = string.split(",");
        setTimeout(function() {
            $('.nolimNavigationWishlistButton').click();
            $('.nolimNavigationWishlistButton').css('display','inline-block');
        },1000)
        
    }
$('[data-tpls-for-type="99"] .tp-library__tpl-body').each(function(i,item){
    let tplid = $(item).find('.tp-library__tpl-cod').text();
    $(item).wrap('<div class="nolim-mod-library" style="position:relative; display: inline-flex;"></div>');
    $(item).before(`<a class="nolim_wishlistMods_addBtn" nolim-tpl-wishlist-mod="${tplid}"><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6.32647C20 11.4974 10.5 17 10.5 17C10.5 17 1 11.4974 1 6.32647C1 -0.694364 10.5 -0.599555 10.5 5.57947C10.5 -0.599555 20 -0.507124 20 6.32647Z" stroke="black" stroke-linejoin="round"></path></svg></a>`)
})

$('.nolim_wishlistMods_addBtn').click(function(e){
    $(this).toggleClass('nolim_wishlistMods_addBtn_active');
    $(this).hasClass('nolim_wishlistMods_addBtn_active') ? window.nolimModsWishlist.push($(this).attr('nolim-tpl-wishlist-mod')) : nolim_removeWishlistItemMod($(this).attr('nolim-tpl-wishlist-mod'))
    localStorage.setItem('nolimModsWishlist',window.nolimModsWishlist);
    nolimAddWishlistCategorieMods();
    if(window.nolimModsWishlist.length == 0){
        $(".nolimNavigationWishlistButton").hide();
        $('.nolimNavigationButton.nolimfisrt').click();
    }
});


window.nolimModsWishlist.forEach(function(item,index){
    $(`[nolim-tpl-wishlist-mod="${item}"]`).addClass('nolim_wishlistMods_addBtn_active');
    nolimAddWishlistCategorieMods();
})
}

function nolim_removeWishlistItemMod(i){
    window.nolimModsWishlist
    const index = window.nolimModsWishlist.indexOf(i);
    let forfilter = $('.nolimNavigationButton.n-active').text();
if(forfilter == '\n\n\n'){
    $(`[nolim-tpl-wishlist-mod=${i}]`).parent().hide();
}
if (index > -1) {
  return window.nolimModsWishlist.splice(index, 1);
}

}

function nolimAddWishlistCategorieMods(){
    $('.nolimNavigationWishlistButton').css('display','inline-block');
}

function nolimNavigationSector(){
    $('#tplslist99 div:eq(0)').after(`
    <div class="nolimNavigationElement">
<div class="nolimNavigationSectorHeader">

<a class="nolimNavigationSupport" href="https://t.me/nolimsupport_bot" style="text-decoration: none;" target="_blank"><div class="nolimSupportBadgeButton">ТЕХПОДДЕРЖКА</div></a>

</div>


<div class="nolimNavigationSector">
<div class='nolimNavigationButton nolimNavigationWishlistButton' style="display:none;">
<svg style="position: relative;top: 5px;" width="20" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6.32647C20 11.4974 10.5 17 10.5 17C10.5 17 1 11.4974 1 6.32647C1 -0.694364 10.5 -0.599555 10.5 5.57947C10.5 -0.599555 20 -0.507124 20 6.32647Z" stroke="black" stroke-linejoin="round"></path></svg>

</div>
<div class='nolimNavigationButton nolimfisrt n-active'>Все</div>
<div class='nolimNavigationButton'>Популярные</div>
<div class='nolimNavigationButton'>Кнопки</div>
<div class='nolimNavigationButton'>Корзина и товары</div>
<div class='nolimNavigationButton'>Меню</div>
<div class='nolimNavigationButton'>Текст</div>
<div class='nolimNavigationButton'>Формы</div>
<div class='nolimNavigationButton'>Эффекты</div>
<div class='nolimNavigationButton'>Прочее</div>



</div>

</div>

<style>

.nolimNavigationFilters {
    margin-top: 10px;
}

.nolimNavigationFilter{
    display: inline-block;
    padding: 1px 4px 1px 3px;
    border: 2px solid #ebebeb;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    font-family: 'Nolim';
}

.nolimNavigationButton {
    display: inline-block;
    background-color: #ebebeb;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    font-family: 'Nolim';
}

.nolimNavigationSectorHeader {
    margin-bottom: 20px;
}

.nolimNavigationElement {
    display: block;
    width: 100%;
    margin-bottom: 15px;
}

.nolimSearch {
    width: 30%;
    display: inline-block;
}

.nolimNavigationSupport {
    text-decoration: none;
    display: inline-block;
    width: 170px;
    float: right;
    margin-top: 15px;
    margin-right: 10px;
}

.nolimSupportBadgeButton {
    background: #0058FF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    text-align: center;
    padding: 4px 0px 4px 22px;
    font-weight: bold;
    font-size: 16px;
    font-family: 'tfutura';
    color: #fff;
    margin-top: 4px;
    }
    .nolimSupportBadgeButton {
        background-image: url(https://static.tildacdn.com/tild3061-3063-4536-a136-316632616261/Vector.svg), linear-gradient(145.24deg, #0058FF 27.69%, #F8F7F8 152.77%);
        background-repeat: no-repeat,no-repeat;
        background-size: 20px, 100%;
        background-position: left 9px center,left 9px center;
        background-origin: padding-box,padding-box;
        background-position-y: center,center;
    }


</style>



        `);
    


        $('.nolimNavigationButton').click(function() {
            $('.nolimNavigationButton').removeClass('n-active');
            $(this).addClass('n-active');
            nolimFilterSort();
        });

        $('.nolimNavigationButton').eq(2).click();

}




function nolimFilterSort(){
    let forfilter = $('.nolimNavigationButton.n-active').text();
    if(forfilter == "Все"){
        $('.nolim-mod-library').css('display','inline-flex');
        return
    }
    if(forfilter == '\n\n\n'){
        nolimFilterSortWishlist();
        return
    }
    $('.nolim-mod-library').hide();
    
    let newarr = []
    nolimBlocks.find((o, i) => {
        if (o.filter && o.filter.includes(forfilter)) {
            newarr.push(nolimBlocks[i])
        }
    });
    
    newarr.forEach(function(item) {
        $(`[nolim-tpl-wishlist-mod=${item.cod}]`).parent().css('display','inline-flex');
    })
}


function nolimFilterSortWishlist(){
    $('.nolim-mod-library').hide();
    window.nolimModsWishlist.forEach(function(item) {
        $(`[nolim-tpl-wishlist-mod=${item}]`).parent().css('display','inline-flex');
    })
}

