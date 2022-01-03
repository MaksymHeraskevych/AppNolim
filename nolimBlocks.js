nolimBlocks = [];

nolimBlocks.push({
video: "egTeJzQhM3M",
name: "",
cod: "NLM001",
filter: "Популярные, Формы",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6263-3661-4164-a438-626532653032/Frame_11.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "Cвоя уникальная форма в Zero Block",
modsettings: `[
{
    "id": "1",
    "title": "Введите id зеро блока",
    "type": "block",
    "placeholder": "#rec0012324",
    "value": ""
},
{
    "id": "2",
    "title": "Введите id BF204N блока",
    "type": "block",
    "placeholder": "#rec0012345",
    "value": ""
},
{
    "id": "3",
    "title": "Введите ссылку для кнопки",
    "type": "input",
    "placeholder": "#linkbtn",
    "value": ""
},
{
    "id": "4",
    "title": "Я хочу сам указать нужные поля",
    "type": "checkbox",
    "value": ""
},
{
    "id": "5",
    "title": "Введите приписку к названиям полей",
    "type": "input",
    "value": "",
    "placeholder": "Form"
}
]`,
moddefaultsettings: '["","","","0",""]',
modcontent: function modcontentfunc(name) {
  return `

<script> $(document).ready(function(){ let sI = setInterval(function() { if ($("${name[0]}").length > 0) { clearInterval(sI); var redid1 = "${name[0]}"; var redid2 = "${name[1]}"; var postscript = "${name[4]}"; var postbool = ${name[3]}; var hurl = "${name[2]}"; if(postbool==0){ var postscript = ''; } $(redid2+' .t-form__inputsbox .t-input-group').remove(); $(redid1+' .js-tilda-rule').each(function(index) { var inputname = $(this).attr('name'); if(inputname.includes(postscript)){ var inp = inputname.replace(postscript,""); var gg = '<div class="t-input-group t-input-group_in"> <div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no"></div> <div class="t-input-block"> <input type="text" name="'+inp+'" class="t-input js-tilda-rule " value="" placeholder="'+inp+'" style="color:#000000; border:1px solid #000000; "> <div class="t-input-error"></div> </div> </div>'; if($(redid1+' .js-tilda-rule').eq(index).attr('type') == 'radio' && $(redid2+' [name="'+inp+'"]').length >= 1){} else { $(redid2+' .t-form__inputsbox').prepend(gg); } } }); $(redid1+' [type="hidden"][tabindex="-1"]:not(.js-tilda-rule)').each(function(index) { var inputname = $(this).attr('name'); var inp = inputname.replace(postscript,""); var gg = '<div class="t-input-group t-input-group_in"> <div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no"></div> <div class="t-input-block"> <input type="text" name="'+inp+'" class="t-input js-tilda-rule " value="" placeholder="'+inp+'" style="color:#000000; border:1px solid #000000; "> <div class="t-input-error"></div> </div> </div>'; $(redid2+' .t-form__inputsbox').prepend(gg); }); $('${n2i(name[0],'#rec000000')} [href="'+hurl+'"]').click(function(){ var a = redid1.replace("#rec",""); a = $('[name="form'+a+'"]'); window.tildaForm.hideErrors(a); o = window.tildaForm.validate(a); window.tildaForm.showErrors(a, o); if(tildaForm.showErrorInPopup(a, o)){ } else { $(redid1+' .js-tilda-rule').each(function(index) { var inputname = $(this).attr('name'); var inp = inputname.replace(postscript,""); if ($(redid1+' .js-tilda-rule').eq(index).attr('type') == 'checkbox'){ $(redid2+' [name="'+inp+'"]').val($(redid1+' [name="'+inputname+'"]:checked').val()); } else if ($(redid1+' .js-tilda-rule').eq(index).hasClass('t-radio')){ $(redid2+' [name="'+inp+'"]').val($(redid1+' [name="'+inputname+'"]:checked').val()); } else if ($(redid1+' .js-tilda-rule').eq(index).hasClass('t-checkbox')){ $(redid2+' [name="'+inp+'"]').val($(redid1+' [name="'+inputname+'"]:checked').val()); } else if ($(redid1+' .js-tilda-rule').eq(index).hasClass('t-img-select')){ $(redid2+' [name="'+inp+'"]').val($(redid1+' [name="'+inputname+'"]:checked').val()); } else { $(redid2+' [name="'+inp+'"]').val($(redid1+' [name="'+inputname+'"]').val()); } }); $(redid1+' [type="hidden"][tabindex="-1"]:not(.js-tilda-rule)').each(function(index) { var inputname = $(this).attr('name'); var inp = inputname.replace(postscript,""); $(redid2+' [name="'+inp+'"]').val($(redid1+' [name="'+inputname+'"]').val()); }); $(redid2 + ' .t-submit').click(); } }); var zeroForma = function ($form) { if(window.NolimSuccessFunction${name[1].replace('#rec','')} == 1){
var st = $(redid2+' .js-successbox').html(); window.tildaForm.showSuccessPopup(); $('#tildaformsuccesspopuptext').html(st); var successUrl = $form.attr('data-success-url'); if (successUrl !== undefined && successUrl !== '') { window.location.href = successUrl; } } }; if(typeof window.NolimSuccessFunction${name[1].replace('#rec','')} == 'undefined') { window.NolimSuccessFunction${name[1].replace('#rec','')} = []; window.NolimSuccessFunction${name[1].replace('#rec','')}[0] = zeroForma} else { window.NolimSuccessFunction${name[1].replace('#rec','')}.push(zeroForma)}; window.mySuccessFunction${name[1].replace('#rec','')} = function ($form) { for (var i = 0; i < window.NolimSuccessFunction${name[1].replace('#rec','')}.length; i++) { window.NolimSuccessFunction${name[1].replace('#rec','')}[i]($form) }; };setInterval(function() { $(redid2+' .js-form-proccess').each(function () { $(this).data('success-callback', 'window.mySuccessFunction${name[1].replace('#rec','')}'); }); }, 1000); $(redid1).on('keyup keypress', function(e) { var keyCode = e.keyCode || e.which; if (keyCode === 13) { e.preventDefault(); $('[href="'+hurl+'"]').click(); return false; } }); }; }, 50); }); </script> <style> ${n2i(name[0],'#rec000000')} .t-submit, ${n2i(name[1],'#rec000000')} { display:none!important; } </style>

  `;
},

instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br>
1. Создаем зеро блок с полями. Ставим их как нам нужно. Создаем кнопку/шейп со своей ссылкой;<br>
2. Создаем на странице стандартный блок BF204N. В нем <b>НЕ ВАЖНЫ</b> поля - они будут браться из зеро блока. Нужно настроить только приемщики данных;<br>
3. В настройках модификации выбираем соответствующие блоки в 1 и 2 поле;<br>
4. В поле "ВВЕДИТЕ ССЫЛКУ ДЛЯ КНОПКИ" вписываем ссылку для своей кнопки/шейпа;<br>
5. Если из формы нужно получать только некоторые поля, ставим галку в генераторе и пишем в поле ниже любое текстовое значение, к примеру From, дальше просто указываем в нужных полях это значение в формате nameForm, emailForm, phoneForm;<br>
6. Нажимаем кнопку "Сохранить и закрыть";<br><br>
<b>ВАЖНО: Модификация не работает с полями для загрузки файлов Google Drive, Yandex Disk, DropBox! Работаем над исправлением этого момента. Пока что работает только с загрузкой файлов в Uploadcare</b>
</div>`
});



function nolimSplitString(str) {
    var str=str.split(',');
    str=str.map(arr=> arr+=" > [id*=nav]");
    str=str.join();
    return str;
};

nolimBlocks.push({
name: "",
cod: "NLM002",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6264-6262-4033-a438-333931616334/Frame_2.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты",
title: "Добавляем свой фон в любой блок",
modsettings: `[
{
    "id": "1",
    "title": "Введите id блока",
    "type": "blocks",
    "placeholder": "#rec0012324",
    "value": ""
},
{
    "id": "2",
    "title": "Эффект при скролле:",
    "type": "select",
    "options": {
        "Без эффекта": "0",
        "С фиксацией": "1"
    },
    "value": ""
},
{
    "id": "3",
    "title": "Ссылка на изображение",
    "type": "image",
    "value": ""
}
]`,
moddefaultsettings: '["","0",""]',
modcontent: function modcontentfunc(name) {

  return `

<style> 
${name[0]}, ${nolimSplitString(name[0])} { background-color: unset !important; background-image:url("${name[2]}");background-repeat:no-repeat;background-position:center;-webkit-background-size:cover;-moz-background-size: cover;-o-background-size: cover;background-size:cover;background-attachment:${name[1] == "1" ? 'fixed' : 'initial'}} </style>

  `;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br>
1. В первом поле выбираем блок или несколько блоков, где нужно заменить фон. У этих блоков не должен стоять цвет в настройках блока.(Модификация сработает и для зеро блока, если в нем удалить цвет фона);<br>
2. Выбираем эффект при скролле - он может быть с фиксацией и у нескольких блоков может быть один фиксированный фон.<br>
3. Загружаем или выбираем картинку для фона;<br>
4. Нажимаем кнопку "Сохранить и закрыть";<br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM003",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3632-3133-4263-a538-323332323535/Frame_3.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты",
title: "Cпектральный фон из 3х цветов",
modsettings: `[
{
    "id": "1",
    "title": "Тип фона:",
    "type": "select",
    "options": {
        "На отдельный блок": "0",
        "На всю страницу": "1"
    },
    "value": ""
},
{
    "id": "2",
    "title": "id блока",
    "type": "block",
    "placeholder": "#rec0012345",
    "value": ""
},
{
    "id": "3",
    "title": "Направление линии градиента",
    "type": "select",
    "options": {
        "По умолчанию": "0",
        "Верх": "1",
        "Низ": "2",
        "Лево": "3",
        "Право": "4",
        "Лево Верх": "5",
        "Право Верх": "6",
        "Лево Низ": "7",
        "Право Низ": "8"
    },
    "value": ""
},
{
    "id": "4",
    "title": "Цвет",
    "type": "color",
    "value": ""
},
{
    "id": "5",
    "title": "Направление линии градиента",
    "type": "select",
    "options": {
        "По умолчанию": "0",
        "Верх": "1",
        "Низ": "2",
        "Лево": "3",
        "Право": "4",
        "Лево Верх": "5",
        "Право Верх": "6",
        "Лево Низ": "7",
        "Право Низ": "8"
    },
    "value": ""
},
{
    "id": "6",
    "title": "Цвет",
    "type": "color",
    "value": ""
},
{
    "id": "7",
    "title": "Направление линии градиента",
    "type": "select",
    "options": {
        "По умолчанию": "0",
        "Верх": "1",
        "Низ": "2",
        "Лево": "3",
        "Право": "4",
        "Лево Верх": "5",
        "Право Верх": "6",
        "Лево Низ": "7",
        "Право Низ": "8"
    },
    "value": ""
},
{
    "id": "8",
    "title": "Цвет",
    "type": "color",
    "value": ""
},
{
    "id": "9",
    "title": "Фильтр для цвета",
    "type": "select",
    "options": {
        "Без фильтра": "0",
        "Screen": "1",
        "Darken": "2",
        "Difference": "3",
        "Multiply": "4",
        "Color-dodge": "5"
    },
    "value": ""
}
]`,

moddefaultsettings: '["","","0","","0","","0","","0"]',
modcontent: function modcontentfunc(name) {
  return `

<style> ${name[0] == "0" ? `${name[1]}` : 'body'}{background:linear-gradient(${name[2] == "0" ? 'to body' : name[2] == "1" ? 'to top' : name[2] == "2" ? 'to bottom' : name[2] == "3" ? 'to left' : name[2] == "4" ? 'to right' : name[2] == "5" ? 'to top left' : name[2] == "6" ? 'to top right' : name[2] == "7" ? 'to bottom left' : name[2] == "8" ? 'to bottom right' : 'body'},${name[3]},transparent),linear-gradient(${name[4] == "0" ? 'to body' : name[4] == "1" ? 'to top' : name[4] == "2" ? 'to bottom' : name[4] == "3" ? 'to left' : name[4] == "4" ? 'to right' : name[6] == "5" ? 'to top left' : name[4] == "6" ? 'to top right' : name[4] == "7" ? 'to bottom left' : name[4] == "8" ? 'to bottom right' : 'body'},${name[5]},transparent),linear-gradient(${name[6] == "0" ? 'to body' : name[6] == "1" ? 'to top' : name[6] == "2" ? 'to bottom' : name[6] == "3" ? 'to left' : name[6] == "4" ? 'to right' : name[6] == "5" ? 'to top left' : name[6] == "6" ? 'to top right' : name[6] == "7" ? 'to bottom left' : name[6] == "8" ? 'to bottom right' : 'body'},${name[7]},transparent); ${name[8] == "0" ? '' : name[8] == "1" ? 'background-blend-mode: screen;' : name[8] == "2" ? 'background-blend-mode: darken;' : name[8] == "3" ? 'background-blend-mode: difference;' : name[8] == "4" ? 'background-blend-mode: multiply;' : 'background-blend-mode: color-dodge;'}} </style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>
1. Выбираем будет ли действовать градиент на всю страницу, либо на один блок;<br>
2. Если выбрали отдельный блок, выбираем блок;<br>
3. Выбираем направлении для каждой линии градиента и цвет;<br>
4. Нажимаем кнопку "Сохранить и закрыть";<br>
</div>`
});


nolimBlocks.push({
name: "",
cod: "NLM004",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3036-3635-4033-a466-303931323863/Frame_4.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты, Текст",
title: "Градиент для текста в Zero Block",
modsettings: `[
{
    "id": "1",
    "title": "Класс элемента",
    "type": "input",
    "placeholder": "textgradient",
    "value": ""
},
{
    "id": "2",
    "title": "Угол наклона градиента",
    "type": "number",
    "placeholder": "0",
    "value": ""
},
{
    "id": "3",
    "title": "Цвет 1",
    "type": "color",
    "value": ""
},
{
    "id": "4",
    "title": "Цвет 2",
    "type": "color",
    "value": ""
},
{
    "id": "5",
    "title": "Цвет 3",
    "type": "color",
    "value": ""
}
]`,

moddefaultsettings: '["","","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> .${name[0]} { background: -webkit-linear-gradient(${name[1]}deg, ${name[2]} 0%, ${name[3]} 50%, ${name[4]} 100%); -webkit-background-clip: text; -moz-background-clip: text; -webkit-text-fill-color: rgba(255, 255, 255, 0); -moz-text-fill-color: rgba(255, 255, 255, 0); } .textgradient .tn-atom { display: inline; } @supports (-ms-ime-align:auto) { .textgradient { -webkit-text-fill-color: unset!important; }  }   </style>

`;

},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>
1. Вписываем в первое поле класс и этот же класс ставим текстовому элементу в зеро блоке;<br>
2. Вписываем угол наклона градиента;<br>
3. Выбираем направлении для каждой линии градиента и цвет;<br>
4. Нажимаем кнопку "Сохранить и закрыть";<br>
</div>`
});







nolimBlocks.push({
    name: "",
    cod: "NLM005",
    descr: "",
    descr_ru: "",
    disableforplan0: "y",
    icon: "https://static.tildacdn.com/tild3566-6466-4239-a435-383962663236/Frame_5.jpg",
    icon2: "/files/tplsthumbs/other-block-02.png",
    id: "131",
    inlib: "y",
    filter: "Формы,Популярные",
    title: "Делаем своё поле загрузки файлов в любой форме",
    grid: "yes",
    modsettings: `[
    {
        "id": "1",
        "title": "id блока с формой",
        "type": "block",
        "placeholder": "#rec000000",
        "value": ""
    },
    {
        "id": "2",
        "title": "Цвет текста",
        "type": "color",
        "placeholder": "#bc8680",
        "value": ""
    },
    {
        "id": "3",
        "title": "Цвет фона",
        "type": "color",
        "placeholder": "#ffffff",
        "value": ""
    },
    {
        "id": "4",
        "title": "Цвет бордера",
        "type": "color",
        "placeholder": "#000000",
        "value": ""
    },
    {
        "id": "5",
        "title": "Толщина бордера (px)",
        "type": "number",
        "placeholder": "2",
        "value": ""
    },
    {
        "id": "6",
        "title": "Тип border",
        "type": "select",
        "options": {
            "solid": "solid",
            "dotted": "dotted",
            "dashed": "dashed",
            "none": "none"
        },
        "value": ""
    },
    {
        "id": "7",
        "title": "border-radius (px)",
        "type": "number",
        "placeholder": "20",
        "value": ""
    },
    {
        "id": "8",
        "title": "Размер шрифта (px)",
        "type": "number",
        "placeholder": "16",
        "value": ""
    },
    {
        "id": "9",
        "title": "Насыщенность",
        "type": "select",
        "options": {
            "thin": "thin",
            "light": "light",
            "normal": "normal",
            "medium": "medium",
            "semi-bold": "semi-bold",
            "bold": "bold"
        },
        "value": ""
    },
    {
        "id": "10",
        "title": "Дополнительный текст",
        "type": "groupInputs",
        "options": [
            {
                "title": "Текст",
                "type": "input",
                "placeholder": "Файлы .doc, .docx, .txt, .rtf, .odt, .pdf до 2Мб.",
                "value": ""
            },
            {
                "title": "Цвет текста",
                "type": "color",
                "placeholder": "#b6babd",
                "value": ""
            },
            {
                "title": "Размер шрифта (px)",
                "type": "number",
                "placeholder": "14",
                "value": ""
            },
            {
                "title": "Насыщенность",
                "type": "select",
                "options": {
                    "thin": "thin",
                    "light": "light",
                    "normal": "normal",
                    "medium": "medium",
                    "semi-bold": "semi-bold",
                    "bold": "bold"
                }
            }
        ],
        "limit": "14",
        "placeholder": "class",
        "value": ""
    },
    {
        "id": "11",
        "title": "Добавить иконку",
        "type": "groupInputs",
        "options": [
            {
                "title": "Ссылка на иконку",
                "type": "image",
                "value": ""
            }
        ],
        "limit": "14",
        "placeholder": "class",
        "value": ""
    },
    {
        "id": "12",
        "title": "Стили при наведении",
        "type": "groupInputs",
        "options": [
            {
                "title": "Цвет текста",
                "type": "color",
                "placeholder": "#000",
                "value": ""
            },
            {
                "title": "Цвет фона",
                "type": "color",
                "placeholder": "#000",
                "value": ""
            },
            {
                "title": "Цвет border",
                "type": "color",
                "placeholder": "#000",
                "value": ""
            },
            {
                "title": "Тип border",
                "type": "select",
                "options": {
                    "solid": "solid",
                    "dotted": "dotted",
                    "dashed": "dashed",
                    "none": "none"
                }
            },
            {
                "title": "Цвет доп. текста",
                "type": "color",
                "placeholder": "#000",
                "value": ""
            }
        ],
        "limit": "14",
        "placeholder": "class",
        "value": ""
    },
    {
        "title": "При статусе 'Файл загружен'",
        "type": "text"
    },
    {
        "id": "13",
        "title": "Цвет текста",
        "type": "color",
        "placeholder": "#bc8680",
        "value": ""
    },
    {
        "id": "14",
        "title": "Цвет фона",
        "type": "color",
        "placeholder": "#ffffff",
        "value": ""
    },
    {
        "id": "15",
        "title": "Цвет бордера",
        "type": "color",
        "placeholder": "#000",
        "value": ""
    },
    {
        "id": "16",
        "title": "Размер бордера (px)",
        "type": "number",
        "placeholder": "16",
        "value": ""
    },
    {
        "id": "17",
        "title": "Тип border",
        "type": "select",
        "options": {
            "solid": "solid",
            "dotted": "dotted",
            "dashed": "dashed",
            "none": "none"
        },
        "value": ""
    },
    {
        "id": "18",
        "title": "Цвет доп. элементов",
        "type": "color",
        "placeholder": "#сecece",
        "value": ""
    },
    {
        "id": "19",
        "title": "Ссылка на иконку справа",
        "type": "image",
        "placeholder": "#сecece",
        "value": ""
    }
    ]`,
moddefaultsettings: '["","","","","","solid","","","thin", ["","","","thin"], [""], ["","","","dotted",""],"","","","","","dashed","",""]',
modInputChange: function modcontentfunc() {

    if($('[id="group_groupInputs10"] .nolimgroupinput').eq(0).val() != ''){
        $('[id="group_groupInputs12"] .pe-form-group').eq(5).css('display', 'block');
    } else if($('[id="group_groupInputs10"] .nolimgroupinput').eq(0).val() == ''){
        $('[id="group_groupInputs12"] .pe-form-group').eq(5).css('display', 'none');
    }

},
modcontent: function modcontentfunc(name) {
    return `

<style>
    ${name[0]} .t-upwidget-container__button:not(.t-upwidget-container__button_fileholder) {
        color: ${n2i(name[1], '#000')} !important;
        background-color: ${name[2]} !important;
        max-width: 100% !important;
        display: block !important;
        font-size: ${name[7]}px !important;
        font-weight: ${name[8]} !important;
        border-radius: ${name[6]}px !important;
        border: ${name[4]}px ${name[5]} ${name[3]} !important;
    }

    ${name[11][0] == '' ? '' : `
    ${name[0]} .t-upwidget-container__button:not(.t-upwidget-container__button_fileholder):hover {
        color: ${name[11][0]} !important;
        background-color: ${name[11][1]} !important;
        border: ${name[4]}px ${name[11][3]} ${name[11][2]} !important;
    }`}

    ${name[0]} .t-upwidget-container__button {
        color: ${name[13]} !important;
        background-color: ${name[14]} !important;
        max-width: 100% !important;
        display: block !important;
        font-size: ${name[7]}px !important;
        font-weight: ${name[8]} !important;
        border-radius: ${name[6]}px !important;
        border: ${name[16]}px ${name[17]} ${name[15]} !important;
        border-radius: 10px !important;
    }

    ${name[0]} .t-upwidget-container__button_fileholder:first-child:after {
        content: "";
        padding-left: 10px;
        left: 7px;
        top: 6px;
        width: 24px;
        display: inline-block;
        height: 24px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${name[19]});
        position: relative;
    }

    ${name[0]} .t-upwidget-container__button.t-upwidget-container__button_fileholder {
        text-align: center !important;
    }

    ${name[10][0] == '' ? '' : `
    ${name[0]} .t-upwidget-container__button:first-child:before {
        content: '';
        padding-right: 10px;
        right: 7px;
        top: 6px;
        width: 24px;
        display: inline-block;
        height: 24px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${name[10][0]});
        position: relative;
    }`}

    ${name[9][0] == '' ? '' : `
    ${name[0]} .t-upwidget-container__button.t-text:not(.t-upwidget-container__button_fileholder):after {
        content: "${name[9][0]}";
        display: block;
        white-space: normal;
        text-align: center;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 100% !important;
        color: ${name[9][1]} !important;
        background-color: inherit !important;
        max-width: 100% !important;
        font-size: ${name[9][2]}px !important;
        font-weight: ${name[9][3]} !important;
        font-family: inherit;
        padding-top: 5px;
        padding-bottom: 10px;
    }

    ${name[0]} .t-upwidget-container__button.t-text:not(.t-upwidget-container__button_fileholder):hover:after {
        content: "${name[9][0]}";
        ${name[11][4] != '' ? `color: ${name[11][4]} !important;` : ''}
    }`}

    ${name[0]} .t-upwidget-container__button:first-child {
        padding: 10px 20px !important;
    }

    ${name[0]} .t-upwidget-container__button:last-child {
        line-height: 100% !important;
    }

    ${name[0]} .t-upwidget-container__button_fileholder:first-child:before {
        content: '' !important;
        background-image: none !important;
    }

    ${name[0]} .t-upwidget-container__button_fileholder {
        font-weight: 700 !important;
    }

    ${name[0]} .t-upwidget-container__image-done {
        display: none !important;
    }

    ${name[0]} .t-upwidget__show-files.t-upwidget-container__data {
        width: 100% !important;
    }

    ${name[0]} .t-upwidget-container__data_table_actions_remove g g {
        fill: ${name[18]};
    }

    ${name[0]} .t-upwidget-container__button-indiv {
        background-color: ${name[18]} !important;
        width: 150px;
        height: 30px;
        margin: 0 0 20px 20px !important;
    }

    ${name[0]} .t-upwidget-container__data_table {
        margin: 0 15px 15px !important;
    }
</style>

`;

},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>ВАЖНО: Модификация не работает с Uploadcare!</b>
Как это работает:<br>
1. Выбираем id блока где находится форма. Если нужно что бы все поля загрузки во всех формах на сайте были одинаковыми, то можно не указывать id блока формы или Zero блока в которой находится форма;<br>
2. Настраиваем стили кнопки: цвет текста, фона, бордера, толщина и тип обводки, радиус скругления, размер и насыщенность текста внутри кнопки;<br>
3. Настраиваем дополнительный текст кнопки, сам текст, цвет, размер и насыщенность;<br>
4. Настраиваем стили кнопки при наведении;<br>
5. Настраиваем стиль кнопки при статусе "Файл загружен";<br>
6. Загружаем иконку;<br>
7. Нажимаем кнопку "Сохранить и закрыть";<br><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM006",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3236-3533-4036-b166-343165646330/Frame_6.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "Добавляем свои иконки в поле любой формы",
modsettings: `[
{
    "id": "1",
    "title": "Название поля",
    "type": "input",
    "placeholder": "name",
    "value": ""
},
{
    "id": "2",
    "title": "Положение",
    "type": "select",
    "options": {
        "Слева": "left",
        "Справа": "right"
    },
    "value": ""
},
{
    "id": "3",
    "title": "При вводе",
    "type": "select",
    "options": {
        "Пропадает (placeholder)": "0",
        "Остается": "1"
    },
    "value": ""
},
{
    "id": "4",
    "title": "Отступы от иконки",
    "type": "select",
    "options": {
        "20px": "20px",
        "18px": "18px",
        "15px": "15px",
        "12px": "12px",
        "10px": "10px"
    },
    "value": ""
},
{
    "id": "5",
    "title": "Добавить border",
    "type": "groupInputs",
    "options": [
        {
            "title": "Размер",
            "type": "select",
            "options": {
                "1px": "1px",
                "2px": "2px",
                "3px": "3px",
                "4px": "4px",
                "5px": "5px"
            }
        },
        {
            "title": "Цвет бордера",
            "type": "color",
            "placeholder": "#000000",
            "value": ""
        },
        {
            "title": "Заливать фон?",
            "type": "select",
            "options": {
                "Нет": "0",
                "Да": "1"
            }
        }
    ],
    "limit": "14",
    "placeholder": "class",
    "value": ""
},
{
    "id": "6",
    "title": "Цвет фона",
    "type": "color",
    "placeholder": "#ffffff",
    "value": ""
},
{
    "id": "7",
    "title": "Opacity фона",
    "type": "select",
    "options": {
        "100%": "100",
        "90%": "90",
        "80%": "80",
        "70%": "70",
        "60%": "60",
        "50%": "50",
        "40%": "40",
        "30%": "30",
        "20%": "20",
        "10%": "10"
    },
    "value": ""
},
{
    "id": "8",
    "title": "Иконка",
    "type": "image",
    "value": ""
}
]`,

moddefaultsettings: '["","left","0","20px", ["1px","","0"], "","100",""]',
modInputChange: function modcontentfunc() {

    $('.noliminput[id="4"]').parents('.pe-form-group').hide();
    $('[id="grouptitle_groupInputs5"]').hide();
    $('.noliminput[id="6"]').parents('.pe-form-group').hide();
    $('.noliminput[id="7"]').parents('.pe-form-group').hide();

    if($('.noliminput[id="3"]').val() == '0'){
        $('.noliminput[id="4"]').parents('.pe-form-group').hide();
        $('[nolim-group-id="groupInputs5"]').hide();
    } else {
        $('.noliminput[id="4"]').parents('.pe-form-group').show();
        $('[nolim-group-id="groupInputs5"]').show();
    }

    if($('[id="group_groupInputs5"] .nolimgroupinput').eq(2).val() == '0' && $('.noliminput[id="3"]').val() == '0'){
        $('.noliminput[id="6"]').parents('.pe-form-group').hide();
        $('.noliminput[id="7"]').parents('.pe-form-group').hide();
    } else if($('[id="group_groupInputs5"] .nolimgroupinput').eq(2).val() == '1' && $('.noliminput[id="3"]').val() == '1') {
        $('.noliminput[id="6"]').parents('.pe-form-group').show();
        $('.noliminput[id="7"]').parents('.pe-form-group').show();
    }
},
modcontent: function modcontentfunc(name) {
  return `

${name[2] == '0' ?  `
    <style> [name="${name[0]}"]::placeholder { background-image: url(${name[7]}); background-repeat: no-repeat; background-size: 24px; line-height:24;  padding: ${name[1] == 'left' ? '0 20px 0 42px' : '0px'} !important; background-position: ${name[1]} 0px center;  background-origin: padding-box; }  </style> 
` : name[2] == '1' && name[4][1] != '' ? `
    <style> 
        [name="${name[0]}"] {  
            ${name[4][2] == '0' ? `
                background: url(${name[7]}), linear-gradient(left, ${name[4][1]}, ${name[4][1]}); 
                background: url(${name[7]}), -webkit-linear-gradient(left, ${name[4][1]}, ${name[4][1]}); 
                background: url(${name[7]}), -moz-linear-gradient(left, ${name[4][1]}, ${name[4][1]}); 
                background: url(${name[7]}), -ms-linear-gradient(left, ${name[4][1]}, ${name[4][1]}); 
                background: url(${name[7]}), -o-linear-gradient(left, ${name[4][1]}, ${name[4][1]});  
            ` : `
                background: url(${name[7]}), linear-gradient(right, ${name[4][1]}, ${name[4][1]}), linear-gradient(right, ${name[5]}${name[6] != '100' ? `${name[6]}` : ''}, ${name[5]}${name[6] != '100' ? `${name[6]}` : ''}); 
                background: url(${name[7]}), -webkit-linear-gradient(right, ${name[4][1]}, ${name[4][1]}), -webkit-linear-gradient(right, ${name[5]}${name[6] != '100' ? `${name[6]}` : ''}, ${name[5]}${name[6] != '100' ? `${name[6]}` : ''}); 
                background: url(${name[7]}), -o-linear-gradient(right, ${name[4][1]}, ${name[4][1]}), -o-linear-gradient(right, ${name[5]}${name[6] != '100' ? `${name[6]}` : ''}, ${name[5]}${name[6] != '100' ? `${name[6]}` : ''}); 
                background: url(${name[7]}), -moz-linear-gradient(right, ${name[4][1]}, ${name[4][1]}), -moz-linear-gradient(right, ${name[5]}${name[6] != '100' ? `${name[6]}` : ''}, ${name[5]}${name[6] != '100' ? `${name[6]}` : ''}); 
                background: url(${name[7]}), -ms-linear-gradient(right, ${name[4][1]}, ${name[4][1]}), -ms-linear-gradient(right, ${name[5]}${name[6] != '100' ? `${name[6]}` : ''}, ${name[5]}${name[6] != '100' ? `${name[6]}` : ''});
            `}
            background-size: 24px, ${name[4][0]} 100%, ${name[3] == '20px' ? '65px' : name[3] == '18px' ? '61px' : name[3] == '15px' ? '55px' : name[3] == '12px' ? '48px' : '45px'} 100%; background-repeat: no-repeat; 
            padding: ${name[1] == 'left' ? (name[3] == '20px' ? '0 20px 0 85px' : name[3] == '18px' ? '0 20px 0 76px' : name[3] == '15px' ? '0 20px 0 71px' : name[3] == '12px' ? '0 20px 0 65px' : '0 20px 0 60px') : (name[3] == '20px' ? '0 85px 0 20px' : name[3] == '18px' ? '0 76px 0 20px' : name[3] == '15px' ? '0 71px 0 20px' : name[3] == '12px' ? '0 65px 0 20px' : '0 60px 0 20px')} !important; 
            background-position: ${name[1]} ${name[3]} center,${name[1]} ${name[3] == '20px' ? '64px' : name[3] == '18px' ? '60px' : name[3] == '15px' ? '54px' : name[3] == '12px' ? '47px' : '44px'} center, ${name[1] == 'left' ? 'left' : 'right, 0px center'};  
            background-origin: padding-box; 
        }  
    </style> 
` : name[2] == '1' && name[4][1] == '' ? `
    <style>  [name="${name[0]}"] { background-image: url(${name[7]}); background-repeat: no-repeat; background-size: 24px; padding: 0 ${name[1] == 'left' ? (name[3] == '20px' ? '20px 0 65px' : name[3] == '18px' ? '20px 0 61px' : name[3] == '15px' ? '20px 0 55px' : name[3] == '12px' ? '20px 0 48px' : '20px 0 45px') : (name[3] == '20px' ? '65px 0 20px' : name[3] == '18px' ? '61px 0 20px' : name[3] == '15px' ? '55px 0 20px' : name[3] == '12px' ? '48px 0 20px' : '45px 0 20px')} !important; background-position:${name[1]} ${name[3]} center;  background-origin: padding-box; background-position-y: center; }  </style>
` : ''}

    <script> $(document).ready(function() { setTimeout(function(){ var nameinput = '[name="${name[0]}"]'; for (let ig = 0; ig < $(nameinput).length; ig++) { let eg = '#' + $(nameinput).eq(ig).closest('.t-rec').attr('id'); $(eg).on('input focusin focusout', function(e) { e.preventDefault(); for (let i = 0; i < $(eg+' :-webkit-autofill').length; i++) { $(eg+' :-webkit-autofill').eq(i).val($(eg+' :-webkit-autofill').eq(i).val()); } }); } }, 700); }); </script> 

`;

},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>ВАЖНО:</b><br>
1. Иконки подставляются только в типы полей:<br>
&bull; Имя (Name);<br>
&bull; Email (Email);<br>
&bull; Телефон (Phone);<br>
&bull; Поле для ввода одну строку (One line input field);<br>
&bull; Поле для ввода в несколько строк (Multi-line text field);<br>
&bull; Выпадающий список (Dropdown);<br>
&bull; Дата (Date);<br>
&bull; Время (Time);<br>
&bull; Ссылка (Website);<br>
2. Если в форме есть тип поля "Телефон (Phone)", то нужно отключить функцию "Автоматическая маска с кодом страны (Auto mask with country code)";<br>
3. Если в форме есть тип поля "Дата (Date)" то нужно настроить в форме цвет стандартной иконки такой же как и цвет поля, а расположение нашей иконки должно быть только слева иначе стандартная иконка будет перекрывать нашу иконку;<br>
4. Если работаете со стандартной формой, нужно отключить функцию "Оставлять подсказку видимой при клике на поле" иначе работать код не будет;<br><br>

<b>Вариант #1 «При вводе текста в поле иконка пропадает»</b><br>
1. Добавляем стандартную форму или форму в Zero Block на страницу и добавляем поле;<br>
2. В настройках указываем имя поля (VARIABLE NAME) и вставляем его в форму;<br>
3. Загружаем свою иконку;<br>
4. Выбираем расположение: слева или справа;<br>
5. Нажимаем кнопку "Сохранить и закрыть";<br><br>

<b>Вариант #2 «При вводе текста в поле иконка НЕ пропадает»</b><br>
1. Повторяем шаги из Варианта #1 c 1 по 4;<br>
2. В выпадающем списке выбираем "При вводе остается";<br>
3. Настраиваем отступ иконки внутри поля от краёв;<br>
4. Настраиваем бордер и фон;<br>
5. Нажимаем кнопку "Сохранить и закрыть";

</div>`
});



nolimBlocks.push({
video: "ea3oi15KnTQ",
name: "",
cod: "NLM007",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3338-6431-4332-b137-373531663536/NLM007.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
filter: "Популярные,Корзина и товары, Меню",
inlib: "y",
title: "Добавить корзину в стандартное меню",
modsettings: `[
{
    "id": "1",
    "title": "Ссылка для корзины",
    "type": "input",
    "placeholder": "#cart_menu",
    "value": ""
},
{
    "id": "2",
    "title": "Ссылка при пустой корзине",
    "type": "input",
    "placeholder": "#cartinfo",
    "value": ""
},
{
    "id": "3",
    "title": "Цвет фона у количества",
    "type": "color",
    "value": ""
},
{
    "id": "4",
    "title": "Цвет текста у количества",
    "type": "color",
    "value": ""
},
{
    "id": "5",
    "title": "Размер корзины(px)",
    "type": "select",
    "options": {
        "30x30": "0",
        "40x40": "1"
    },
    "value": ""
},
{
    "id": "6",
    "title": "Показывать цену при наведении",
    "type": "select",
    "options": {
        "Да": "0",
        "Нет": "1"
    },
    "value": ""
},
{
    "id": "7",
    "title": "Цена показывается",
    "type": "select",
    "options": {
        "Слева": "0",
        "Справа": "1"
    },
    "value": ""
},
{
    "id": "8",
    "title": "Ссылка для иконки корзины",
    "type": "image",
    "placeholder": "https://image.flaticon.com/icons/png/512/891/891407.png",
    "value": ""
}
]`,

modoptions: [function modcontentfunc(name) {
    return `[href="${name}"] .t706__carticon-text { right: initial; left: 130%; } [href="${name}"] .t706__carticon-text:after { left: -20px; -webkit-transform: translateY(-50%) rotate(180deg); transform: translateY(-50%) rotate(180deg); }`
}, function modcontentfunc(name) {
    return  `@media screen and (min-width: 960px) { [href="${name}"]:hover .t706__carticon-text { opacity:1!important; cursor: pointer; pointer-events: initial } }`
}, function modcontentfunc(name) {
    return  `$('.t706__carticon-text').clone().appendTo($('[href="${name}"]'));`
}

],
moddefaultsettings: '["","","","","","","",""]',
modcontent: function modcontentfunc(name, i) {
  return `

<style> ${name[6] == "1" && name[5] == "0" ? nolimBlocks[i].modoptions[0]([name[0]]) : ''} [href="${name[0]}"] svg { background-image:url(${name[7]}); background-position:center center; background-size:cover; transition:all .1s ease; width: ${name[4] == "0" ? '30px' : '40px'}; height: ${name[4] == "0" ? '30px' : '40px'}; } [href="${name[0]}"] svg *{ display:none; } [href="${name[0]}"] svg:hover{ transform:scale(1.05); background-image:relative; } .t706__carticon-counter { font-size: 12px; padding: 0px 6px 0px 5px; width: inherit; height: 15px; line-height: 16px; } @media screen and (min-width: 981px){ [href="${name[0]}"] { position: relative; display: block !important; } .t706__carticon { display: none !important; } } @media screen and (max-width: 980px){ [href="${name[0]}"] { display: none !important; } } [href="${name[0]}"][count]:after { content: attr(count); font-size: 12px; padding: 0px 6px 0px 5px; width: inherit; height: 15px; line-height: 16px; background-color:${name[2]}; color: ${name[3]}; border-radius: 30px; position: absolute; right: -3px; top: -3px; text-align: center; display: inherit; font-family: Arial,Helvetica,sans-serif; } .blkElem{ pointer-events:none; } .cartcopyanim { -webkit-animation: t706__pulse-anim 0.6s; animation: t706__pulse-anim 0.6s; } .cartcopy_elem .tn-atom , .cartprice_elem .tn-atom { display:none; }  ${name[5] == "0" ? nolimBlocks[i].modoptions[1]([name[0]]) : ""}</style> <script> $(document).ready(function() { ${name[5] == "0" ? nolimBlocks[i].modoptions[2]([name[0]]) : ""}$('[href="${name[0]}"]').click(function(e){ e.preventDefault(); if(window.tcart.total == 0){ $('[href="${name[1]}"]')[0].click(); } else { tcart__openCart(); } }); $(".t706").on('DOMSubtreeModified', ".t706__carticon-counter", function() { let nlcount = window.tcart.total; if (nlcount==0){ $('[href="${name[0]}"]').removeAttr('count'); } else { $('[href="${name[0]}"]').attr('count', nlcount); } $('[href="${name[0]}"]').addClass('cartcopyanim'); setTimeout(function(){ $('[href="${name[0]}"]').removeClass('cartcopyanim');}, 1000); }); }); </script> <a href="${name[1]}" style="display:none"></a>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>
ВАЖНО:<br><br>
<b>
Работает с блоками: ME203A, ME301, ME302, ME303, ME303A, ME304, ME405;<br>
Модификация не работает на разрешениях экрана меньше 981px, по этому в блоке корзины (ST100) советуем продублировать настройки цветов и загрузить свою иконку и туда тоже;</b><br><br>

1. Копируем ссылку #cart из генератора и вставляем в меню на любую соцсеть;<br>
2. Создаем попап и вписываем во второе поле ссылку на него, он будет открываться при пустой корзине;<br>
3. Настраиваем цвет фона и текста у количества;<br>
Настраиваем показ цены при наведении. Цвет фона плашки под ценой и цвет цены настраиваются в блоке корзины (ST100);<br>
4. Настраиваем размер корзины:<br>
30х30px - такая же как иконки<br>
40х40px - больше чем иконки<br>
5. Загружаем или выбираем иконку для корзины:<br>
6. Устанавливаем блок корзины (ST100) на страницу и настраиваем ее для расширений до 981px;<br>
7. Нажимаем кнопку "Сохранить и закрыть";<br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM008",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3438-3936-4161-b234-626563653039/Frame_8.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные,Меню,Эффекты",
title: "Как добавить иконки мессенджеров в стандартное меню или подвал TILDA?",
modsettings: `[
{
    "id": "1",
    "title": "+ Добавить иконку",
    "type": "groupCards",
    "options": [
    {
        "title": "Ваша ссылка",
        "type": "input",
        "placeholder": "name",
        "value": ""
    },
    {
        "title": "Увеличение при наведении (scale)",
        "type": "select",
        "options": {
            "Без увеличения": "1",
            "5%": "1.05",
            "10%": "1.1",
            "15%": "1.15",
            "20%": "1.2",
            "25%": "1.25"
        },
        "value": ""
    },
    {
        "title": "Ссылка на иконку",
        "type": "image",
        "placeholder": "",
        "value": ""
    },   
    {
        "title": "Ссылка на иконку при наведении (если не нужна оставьте поле пустым)",
        "type": "image",
        "placeholder": "",
        "value": ""
    }
],
"limit": "14",
"placeholder": "class",
"value": "1"
}
]`,
moddefaultsettings: '["", ["","1","",""] ]',
modoptions: [function modcontentfunc(nameCard) {
    let linkCode = ``;

    for(let i = 0; i < nameCard.length; i++){
        if(nameCard[i][0] != ''){
            linkCode += `[href="${nameCard[i][0]}"] svg{background-image:url("${nameCard[i][2]}");background-position:center center;background-size:cover;transition:all .1s ease}[href="${nameCard[i][0]}"] svg *{display:none}[href="${nameCard[i][0]}"] svg:hover{transform:scale(${nameCard[i][1]}); background-image:url("${nameCard[i][3]}")};
            `;
        }
    }
    return linkCode
}],
modcontent: function modcontentfunc(name, i) {
    return `

    <style> 

    ${nolimBlocks[i].modoptions[0](name[0])}
    
    </style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>ВАЖНО:</b><br>
<b>Не Работает</b> с блоками: FT501, FT401, FT204;<br><br>

<b>Работает</b> с блоками:<br>
<b>Меню</b> ME203A, ME301, ME302, ME303, ME304, ME401, ME403, ME405;<br>
<b>Подвалы</b> FT201, FT203, FT305;<br<br>

Как это работает:<br>
1. Вписываем ссылку в генератор на соцсеть, мессенджер или любой другой сервис, который имеет ссылку;<br>
2. Эту же ссылку вставляем в меню или в подвал на любую соц. сеть;<br>
3. Загружаем свои иконки "статичная" и "при наведении"(Если не нужно, не загружайте);<br>
4. Выбираем размер увеличения в %;<br>
6. Нажимаем кнопку "Сохранить и закрыть";<br>

</div>`
});



nolimBlocks.push({
video: "wEQuHwk-Mhs",
name: "",
cod: "NLM009",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6464-3766-4934-a364-646535636431/Frame_9.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные,Меню",
title: "Фиксированное меню из Zero block",
modsettings: `[
{
    "id": "1",
    "title": "id zero блока",
    "type": "block",
    "placeholder": "#rec38000000",
    "value": ""
},
{
    "id": "2",
    "title": "Показывать в мобилке",
    "type": "select",
    "options": {
        "Нет": "false",
        "Да": "true"
    },
    "value": ""
},
{
    "id": "3",
    "title": "Появление при прокрутке от начала страницы",
    "type": "number",
    "placeholder": "0",
    "value": ""
},
{
    "id": "4",
    "title": "Фиксация меню",
    "type": "select",
    "options": {
        "Сверху": "0",
        "Снизу": "1"
    },
    "value": ""
},
{
    "id": "5",
    "title": "Анимация появления меню",
    "type": "select",
    "options": {
        "Плавная": "0",
        "Слайдом": "1"
    },
    "value": ""
}
]`,

moddefaultsettings: '["","false","","0","0"]',
modcontent: function modcontentfunc(name) {
  return `

<script>

    $(document).ready(function() { 
        var id = "${name[0]}";
        ${Number(name[2]) > 0 && name[4] == '1' ? `$(id).hide();` : ``}
            if ($(id).length > 0) { 
                var newMenu = $(id).addClass("fixed${name[0].replace('#rec','')} ${name[4] == '1' ? `unpinned${name[0].replace('#rec','')}` : ''}"); 
                ${Number(name[2]) <= 0 && name[4] == '0' ? `$("${name[0]}").addClass("op${name[0].replace('#rec','')}");` : ``}
                var needMobile = ${name[1]};
                $('[nolim-search-state]').attr('nolim-search-state', '0');
                if (!isMobile || (isMobile && needMobile)) { 
                    ${Number(name[2]) <= 0 && name[4] == '1' ? `newMenu.removeClass("unpinned${name[0].replace('#rec','')}"); newMenu.addClass("pinned${name[0].replace('#rec','')}");` : ``}
                    $(window).scroll(function() { 
                        var top = $(window).scrollTop();  
                        if (top >= ${Number(name[2]) <= 0 ? '-1000' : name[2]}) {
                            ${Number(name[2]) > 0 && name[4] == '1' ? '$(id).slideDown();' : ''}
                            $('.nolim_forMenu').attr('nolim-search-state', '0'); 
                            ${name[4] == '1' ? `newMenu.removeClass("unpinned${name[0].replace('#rec','')}"); 
                            newMenu.addClass("pinned${name[0].replace('#rec','')}");` : `$("${name[0]}").addClass("op${name[0].replace('#rec','')}");`}
                        } else{
                            $('.nolim_forMenu').hide();
                            $('.nolim_forMenu').attr('nolim-search-state', '1');
                            ${name[4] == '1' ? `newMenu.addClass("unpinned${name[0].replace('#rec','')}"); 
                            newMenu.removeClass("pinned${name[0].replace('#rec','')}");` : `$("${name[0]}").removeClass("op${name[0].replace('#rec','')}");`}
                        }    
                    });
                } else {
                    newMenu.hide();
            }
        }
    });

</script> 

<style> 

    ${name[4] == '1' ? `
    .fixed${name[0].replace('#rec','')} { position: fixed; ${name[3] == "0" ? 'top' : 'bottom'}: 0; width: 100%; transition: transform 250ms linear; z-index: 998; } 
    .pinned${name[0].replace('#rec','')} { transform: translateY(0%); } 
    .unpinned${name[0].replace('#rec','')} { transform: translateY(${name[3] == '0' ? '-100%' : '100%'}); } 
    ` : `
    ${name[0]} {transition: opacity 1s ease-in-out; opacity:0;}
    .fixed${name[0].replace('#rec','')} { position: fixed; ${name[3] == "0" ? 'top' : 'bottom'}: 0; width: 100%; z-index: 998; pointer-events: none;} 
    .op${name[0].replace('#rec','')} { opacity:1 !important; pointer-events: auto!important; } 
    `}

</style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>
Вариант #1 «Меню всегда зафиксировано на экране»
</b><br><br>
1. Создаём своё меню в Zero block. Если в нем есть элементы, которые должны "вылазить" за края высоты Zero block, изучите функцию <a href="https://blog.tilda.cc/tpost/upla91i0v1-razbiraem-funktsiyu-overflow-v-zero-bloc" target="_blank">Overflow</a>;<br>
2. В настройках выбираем Zero block или вставляем его id;<br>
3. Настраиваем показ на мобильных устройствах;<br>
4. Выбираем фиксацию: сверху или снизу;<br>
5. Появление при прокруте от начала страницы оставляем 0;<br>
6. Нажимаем кнопку "Сохранить и закрыть";<br><br>

<b>
Вариант #1 «Меню всегда зафиксировано на экране»
</b><br><br>
1. Повторяем шаги из Варианта #1 c 1 по 4;<br>
2. Указываем нужное количество пикселей, после которых появится меню;<br>
3. Нажимаем кнопку "Сохранить и закрыть";<br><br>

<b>
ВАЖНО: В случае если выбрали фиксацию меню снизу, а у Вас на сайте есть внизу плашка "Made on Tilda", меню будет автоматически скрываться.
</b><br>
Это сделано для того, что бы не нарушать пользовательское соглашение Тильды, где вкратце говорится о запрете скрытия лейбла любыми способами. Официально ее можно убрать оплатив любой из предложенных тарифов на год.
Подробнее <a href="https://tilda.cc/ru/answers/a/white-label/" target="_blank">тут</a>
</div>`
});



nolimBlocks.push({

video: "rHf9q3Ru5Mk",
name: "",
cod: "NLM010",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6337-6661-4234-b336-356335663731/Frame_10.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные,Корзина и товары, Меню",
title: "Добавить корзину в меню Zero block",
modsettings: `[
{
    "id": "1",
    "title": "Класс для корзины",
    "type": "input",
    "placeholder": "mycart",
    "value": ""
},
{
    "id": "2",
    "title": "Класс для цены",
    "type": "input",
    "placeholder": "myprice",
    "value": ""
},
{
    "id": "3",
    "title": "Класс для кол-ва",
    "type": "input",
    "placeholder": "mycount",
    "value": ""
},
{
    "id": "4",
    "title": "Ссылка при пустой корзине",
    "type": "input",
    "placeholder": "#popup",
    "value": ""
},
{
    "id": "5",
    "title": "Текст до цены",
    "type": "input",
    "placeholder": "Сумма заказа",
    "value": ""
},
{
    "id": "6",
    "title": "Показывать количество при 0 товаров",
    "type": "select",
    "options": {
        "Да": "0",
        "Нет": "1"
    },
    "value": ""
},
{
    "id": "7",
    "title": "Показывать цену при 0 товаров",
    "type": "select",
    "options": {
        "Да": "0",
        "Нет": "1"
    },
    "value": ""
},
{
    "id": "8",
    "title": "Показывать иконку корзины на экранах меньше 980px",
    "type": "select",
    "options": {
        "Нет": "0",
        "Да": "1"
    },
    "value": ""
}
]`,

modoptions: [function modcontentfunc(name) {
    return `<a href="${name}" style="display:block"></a>`
}
],

moddefaultsettings: '["","","","","","0","0","0"]',
modcontent: function modcontentfunc(name, i) {
  return `

<style> .${name[0]}{ height: inherit; cursor: pointer; } ${name[7] == "0" ? "@media screen and (min-width: 981px) {" : ""} .t706__carticon-wrapper, .t706__carticon{ display:none; } ${name[7] == "0" ? "}" : ""} .nolimElem{ pointer-events:none; } .cartcopyanim { -webkit-animation: t706__pulse-anim 0.6s; animation: t706__pulse-anim 0.6s; } </style> <script> $( document ).ready(function() { var hideMode = false; var counthide = ${name[5] == "0" ? '0' : '1'}; var pricehide = ${name[6] == "0" ? '0' : '1'}; function chkNum(){ let chCounter = window.tcart.total; let chPrice = window.tcart.prodamount; if (chPrice==0){ if(counthide == 1){ $('.${name[2]}').hide(); } else {$('.${name[2]}').show();} if(pricehide == 1){ $('.${name[1]}').hide(); } else {$('.${name[1]}').show();} $('.${name[1]} .tn-atom').html('${name[4]} '+ ' 0' + window.tcart.currency_txt_r); }else{$('.${name[1]}').show();$('.${name[2]}').show();}; $('.${name[2]} .tn-atom').html(chCounter); if(chCounter==0){ $('.${name[1]} .tn-atom').addClass('nolimElem'); } else { $('.${name[1]} .tn-atom').removeClass('nolimElem'); }; if(chCounter==''){ $('.${name[2]} .tn-atom').html('${name[5] == "0" ? '0' : ''}'); }; }; $('.${name[0]} .tn-atom').click(function(e){ e.preventDefault(); if(window.tcart.total == 0){ $('[href="${name[3]}"]')[0].click(); } else { tcart__openCart(); } }); setTimeout(function(){ chkNum(); if ($('.${name[1]} .tn-atom').text() == 'Click to order'){ $('.${name[1]} .tn-atom').text(''); }; }, 550); $(".t706").on('DOMSubtreeModified', ".t706__carticon-counter", function() { setTimeout(function(){chkNum();}, 300); $('.${name[0]} .tn-atom').addClass('cartcopyanim'); setTimeout(function(){ $('.${name[0]} .tn-atom').removeClass('cartcopyanim');}, 1000); }); $(".t706").on('DOMSubtreeModified', ".t706__carticon-text", function() { var textprice = $('.t706 .t706__carticon-text').text().replace('= ','');$('.${name[1]} .tn-atom').text('${name[4]} '+textprice);let chPrice = window.tcart.prodamount; if (chPrice == 0) {$('.${name[1]} .tn-atom').html('${name[4]} '+ '0' + window.tcart.currency_txt_r);}}); }); </script> ${typeof name[3] != "undefined" && name[3] != '' ? nolimBlocks[i].modoptions[0]([name[3]]) : ''}

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>

1. Указываем классы для корзины(шейп), цены и количества(текстовые элементы) и ставим их в соответствующие элементы в зеро блоке;<br>
2. Создаем попап и вписываем во второе поле ссылку на него, он будет открываться при пустой корзине;<br>
3. Выбираем показывать ли количество при пустой корзине;<br>
4. Выбираем показывать ли цену при пустой корзине;<br>
7. Нажимаем кнопку "Сохранить и закрыть";<br><br>

</div>`
});



nolimBlocks.push({
video: "hUk_NWa-_kw",
name: "",
cod: "NLM011",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6534-3366-4734-a433-636664343530/nlm_11.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные, Эффекты, Прочее",
title: "SBS анимация «Шторка»",
modsettings: `[
{
    "id": "1",
    "title": "Применить:",
    "type": "select",
    "options": {
        "Ко всем элементам на странице": "0",
        "К конкретному классу": "1"
    },
    "value": ""
},
{
    "id": "2",
    "title": "Впишите класс",
    "type": "input",
    "placeholder": "mycls",
    "value": ""
}
]`,

modoptions: [function modcontentfunc(name) {
    return `<style> .${name}{ overflow:hidden!important; } </style>`
}
],

moddefaultsettings: '["",""]',
modcontent: function modcontentfunc(name, i) {
  return `

${name[0] == "1" ? nolimBlocks[i].modoptions[0]([name[1]]) : '<style> [data-elem-type="text"], [data-elem-type="image"], [data-elem-type="shape"], [data-elem-type="html"], [data-elem-type="button"], [data-elem-type="form"] { overflow:hidden!important; } </style>'}

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>ВАЖНО: Работает со всеми элементами в Zero Block кроме:<br>
&bull; Галереи (gallery);<br>
&bull; Форм (form);<br>
&bull; Тултипов (tooltip)!<br>
</b><br>
Как это работает:<br><br>

1. Добавляем элементы в Zero block и настраиваем step-by-step анимацию;<br>
Как настроить анимацию можно посмотреть по <a href="https://help-ru.tilda.cc/zero-advanced-animation" target="_blank">ссылке</a><br>
2. В генераторе выбираем к чему применяем:<br>
-Ко всем элементам на странице у которых настроена step-by-step анимация;<br>
-К конкретным элементам и указываем класс у них такой же как и в генераторе;<br>
(Что бы указать класс у элемента, нажимаешь на него правой кнопкой мыши и выбираем из списка предпоследнюю строку "Add CSS Class Name", далее, справа в настройках указываем тот же класс что и в генераторе;)<br>
3. Нажимаем кнопку "Сохранить и закрыть";<br><br>

</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM012",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3364-6538-4461-b034-326665333037/Frame_12.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Формы,Эффекты,Прочее",
title: "Добавляем изображения в выпадающий список",
modsettings: `[
{
    "id": "1",
    "title": "Имя поля",
    "type": "input",
    "placeholder": "nolimDropdown",
    "value": ""
},
{
    "id": "2",
    "title": "Цвет пункта при наведении",
    "type": "color",
    "value": ""
},
{
    "id": "3",
    "title": "Цвет активного пункта",
    "type": "color",
    "value": ""
},
{
    "id": "4",
    "title": "Толщина border",
    "type": "select",
    "options": {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px"
    },
    "value": ""
},
{
    "id": "5",
    "title": "border - radius (px)",
    "type": "number",
    "placeholder": "10",
    "value": ""
},
{
    "id": "6",
    "title": "Цвет border",
    "type": "color",
    "value": ""
},
{
    "id": "7",
    "title": "Шрифт",
    "type": "select",
    "options": {
        "Для заголовков": "0",
        "Для текста": "1"
    },
    "value": ""
},
{
    "id": "8",
    "title": "Цвет текста",
    "type": "color",
    "value": ""
},
{
"id": "9",
"title": "+ Добавить изображение",
"type": "groupCards",
"options": [
    {
        "title": "Ссылка на изображение",
        "type": "image",
        "placeholder": "",
        "value": ""
    }
    ],
"limit": "14",
"placeholder": "class",
"value": "1"
}  
]`,
moddefaultsettings: '["nolimDropdown","","","1px","","","0","", [ [""] ] ]',
modoptions: [function modcontentfunc(name,nameCard) {
    let linkCode = ``;

    for(let i = 0; i < nameCard.length; i++){
        if(nameCard[i][0] != ''){
            linkCode += `.select2-results .select2-results__option[id*="${name}"]:nth-child(${i+1}) { background-image: url(${nameCard[i]}); }
            `;
        }
    }
    return linkCode
}
],
modcontent: function modcontentfunc(name, i) {
    return `

    <link href='https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css' rel='stylesheet' type='text/css' media="all"> <script src='https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js'></script> <script> $(document).ready(function () { $('[name="${n2i(name[0],'nolimDropdown')}"]').select2({ templateResult: formatState, templateSelection: formatStateMain }); $('[name="${n2i(name[0],'nolimDropdown')}"]').parents('[data-elem-type="form"]').each(function (i, form) { $(form).on('render', function() { $('[name="${n2i(name[0],'nolimDropdown')}"]').select2({ templateResult: formatState, templateSelection: formatStateMain }); }); }); }); function formatState(state) { if (!state.id) { return state.text; } var $state = $('<span><div class="${n2i(name[0],'nolimDropdown')}" my-data="' + state.id + '" class="t-${name[6] == "0" ? "title" : "text"}" style="display: inline-block; height: 50px; padding-left: 50px; vertical-align: middle; vertical-align: -webkit-baseline-middle;"></div> ' + state.text + '</span>'); return $state; }; function formatStateMain(state) { if (!state.id) { return state.text; } var $state = $('<span><div my-data="' + state.id + '" class="t-${name[6] == "0" ? "title" : "text"}" style="display: inline-block; height: 50px; vertical-align: middle;"></div> ' + state.text + '</span>'); return $state; }; </script> <style> .select2-search--dropdown { display: none; } .select2-selection.select2-selection--single { border: none; } .select2-selection.select2-selection--single[aria-labelledby *="${n2i(name[0],'nolimDropdown')}"] { border: ${n2i(name[3],'1px')} solid ${n2i(name[5],'#0059ff')}; border-radius: ${n2i(name[4],'5')}px; } .select2-container--default .select2-selection--single .select2-selection__rendered { line-height: 50px; } .select2-container .select2-selection--single { height: 50px; } .select2-selection__arrow { display: none; } .select2-container--default .select2-results__option--highlighted[id*="${n2i(name[0],'nolimDropdown')}"][aria-selected] { background-color: ${n2i(name[1],'#ffe5e5')}; } .select2-container--default .select2-results__option[id *="${n2i(name[0],'nolimDropdown')}"][aria-selected=true] { background-color: ${n2i(name[2],'#cecece')}; color: ${n2i(name[7],'#000000')} !important; } ul.select2-results__options { -ms-overflow-style: none; scrollbar-width: none; overflow: -moz-scrollbars-none; } ul.select2-results__options::-webkit-scrollbar { width: 0 !important; height: 0 !important; } ul { scrollbar-color: #8a8a8a #fff; scrollbar-width: thin; -webkit-overflow-scrolling: auto; } ul::-webkit-scrollbar { width: 4px !important; -webkit-appearance: none !important; -webkit-overflow-scrolling: auto; overflow: auto; } ul::-webkit-scrollbar:vertical { width: 4px !important; } ul::-webkit-scrollbar:horizontal { height: 4px !important; } ul::-webkit-scrollbar-track { background: #fff !important; } ul::-webkit-scrollbar-thumb { background: #8a8a8a !important; -webkit-border-radius: 10px !important; } ul::-webkit-scrollbar-thumb:hover { background: #000 !important; } .select2 results>.select2-results__options { max-height: 240px !important; } @media screen and(max-width: 1200 px) { ul.select2-results__options { -ms-overflow-style: none; scrollbar-width: none; overflow: -moz-scrollbars-none; } ul.select2-results__options::-webkit-scrollbar { width: 0 !important; height: 0 !important; } } span { outline: none; } .select2-results .select2-results__option { background-repeat: no-repeat; background-position: left 6px center; background-size: 40px; height: 40px; } ${nolimBlocks[i].modoptions[0](name[0],name[8])} </style>
    
`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>ВАЖНО:<br>
&bull; Не забудьте настроить бордер для поля, так как данная модификация не подтягивает настройки полей Вашей формы;<br>
&bull; Максимальное количество загружаемых картинок - 15 штук;<br>
&bull; Очередность картинок соответствует очередности их загрузки, т.е. к примеру в списке пять пунктов, вставляя ссылку на первую картинку в генератор, она будет соответствовать первому пункту в выпадающем списке;</b><br><br>

Как это работает:<br>
1. Добавляем стандартную форму или форму в Zero Block на страницу и добавляем поле Выпадающий список (Dropdown);<br>
2. В настройках модификации указываем имя поля (VARIABLE NAME) и вставляем его в вашу форму в поле Выпадающий список (Dropdown);<br>
3. Настраиваем цвет фона активного пункта и при наведении;<br>
4. Настраиваем бордер, толщину, скругление и цвет;<br>
5. Настраиваем тип текста и цвет;<br>
6. Загружаем свои иконки;<br>
7. Нажимаем кнопку "Сохранить и закрыть";<br>

</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM013",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3335-3839-4361-b231-323161343139/Frame_13.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты, Прочее",
title: "Cвоя иконка «Наверх»",
modsettings: `[
{
    "id": "1",
    "title": "Ширина(px)",
    "type": "number",
    "placeholder": "50",
    "value": ""
},
{
    "id": "2",
    "title": "Высота(px)",
    "type": "number",
    "placeholder": "50",
    "value": ""
},
{
    "id": "3",
    "title": "Ссылка на иконку:",
    "type": "image",
    "placeholder": "https://cdn-icons-png.flaticon.com/512/622/622669.png",
    "value": ""
}
]`,

moddefaultsettings: '["","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> .t190 a svg,.t890 svg{background-image:url(${name[2]});width:${name[0]}px;height:${name[1]}px;background-position:center center;background-size:cover}.t190 a svg path,.t890 div path,.t890 div rect{display:none}.t890__arrow{box-shadow:unset!important;border-radius:unset!important} </style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>Работает с блоками: BF702 и BF702A<br>
</b><br>
Как это работает:<br><br>

1. Настраиваем размер иконки. Расположение и отступы настраиваются в настройках блока;<br>
2. Загружаем или выбираем иконку для кнопки наверх;<br>
3. Нажимаем кнопку "Сохранить и закрыть";<br><br>

</div>`
});


nolimBlocks.push({
video: "SIG-Qgxf5-U",
name: "",
cod: "NLM014",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3137-3636-4730-b630-336561306161/Frame_14.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты, Прочее",
title: "Прелоадер с процентами загрузки в Zero Block",
modsettings: `[
{
    "id": "1",
    "title": "id зеро блока",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Класс элемента (%)",
    "type": "input",
    "placeholder": "preloadpercent",
    "value": ""
},
{
    "id": "3",
    "title": "Текст после:",
    "type": "input",
    "placeholder": "%",
    "value": ""
},
{
    "id": "4",
    "title": "Элемент с точками (...)",
    "type": "text"
},
{
    "id": "5",
    "title": "Класс элемента",
    "type": "input",
    "placeholder": "preloadtext",
    "value": ""
},
{
    "id": "6",
    "title": "Текст до:",
    "type": "input",
    "placeholder": "Загрузка",
    "value": ""
},
{
    "id": "7",
    "title": "Шаг 1",
    "type": "text"
},
{
    "id": "8",
    "title": "Значение %",
    "type": "number",
    "placeholder": "40",
    "value": ""
},
{
    "id": "9",
    "title": "За сколько секунд",
    "type": "number",
    "placeholder": "5",
    "value": ""
},
{
    "id": "10",
    "title": "Шаг 2",
    "type": "text"
},
{
    "id": "11",
    "title": "Значение %",
    "type": "number",
    "placeholder": "80",
    "value": ""
},
{
    "id": "12",
    "title": "За сколько секунд",
    "type": "number",
    "placeholder": "3",
    "value": ""
}
]`,

moddefaultsettings: '["","","","","","","","","","","",""]',
modcontent: function modcontentfunc(name) {
  return `
<script> var wload=0, wfirst=${n2i(name[6],'5')}, wfirstp=${n2i(name[5],'40')}, wsec=${n2i(name[8],'3')}, wsecp=${n2i(name[7],'80')}, recid="${n2i(name[0],'#rec000000')}", i=1, gg=0, pt=0, wloadc="${n2i(name[1],'preloadpercent')}"; ${typeof name[3] != "undefined" && name[3] == "" ? `` : `function pretext() { var o="${name[4]}", t="${name[3]}"; wload<=100&&setTimeout(function() { 0==pt?($("."+t+" .tn-atom").html(o+"."), pt=1):1==pt?($("."+t+" .tn-atom").html(o+".."), pt=2):2==pt&&($("."+t+" .tn-atom").html(o+"..."), pt=0), pretext() } , 400) }`}function myLoop3() { 1==gg&&setTimeout(function() { (wload+=1)>=100&&(wload=100), $("."+wloadc+" .tn-atom").html(wload+"${n2i(name[2],'%')}"), wload<100?myLoop3():($("."+wloadc+" .tn-atom").html("100${n2i(name[2],'%')}""), $(recid).delay(0).fadeOut(), $("body").css("overflow", "auto")) } , 8) } function myLoop2() { 0==gg&&setTimeout(function() { let o=(wsecp-wfirstp)/wsec; o=o<1?Math.ceil(o):Math.round(o), wload+=o, $("."+wloadc+" .tn-atom").html(wload+"%"), wload<=wsecp&&myLoop2() } , 1000) } function myLoop() { 0==gg&&setTimeout(function() { let o=wfirstp/wfirst; o=o<1?Math.ceil(o):Math.round(o), wload+=o, $("."+wloadc+" .tn-atom").html(wload+"%"), wload<=wfirstp?myLoop():myLoop2() } , 1000) } ${typeof name[3] != "undefined" && name[3] == "" ? `` : `pretext(),`} myLoop(), $("."+wloadc+" .tn-atom").html(wload+"%"), $(recid).show(), $(window).on("load", function() { gg=1, myLoop3() } ); </script> <style> ${n2i(name[0],'#rec000000')}{position:fixed;left:0;top:0;right:0;bottom:0;z-index:100005} </style>
`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>
1. Выбираем зеро блок из которого делаем прелоадер;<br>
2. Добавляем свой текстовый элемент в Зеро Блок, в котором будет значение от 0 до 100 и указываем класс к нему такой же как и в настройках модификации;<br>
Что бы указать класс у элемента, нажимаешь на него правой кнопкой мыши и выбираешь из списка последнюю строку "Add CSS Class Name", далее, справа в настройках указываешь тот же класс что и в генераторе;<br>
3. Прописываем текст после текстового элемента, к примеру "%";<br>
4. Если нужно, указываем текстовый элемент с точками и указываем класс к нему, прописываем его в настройках модификации и текст до точек загрузки;<br>
5. В случае если сайт тяжелый, вы можете указать в первом шаге время загрузки от 0 до указанного значения и во втором шаге время от первого указанного значения до второго;<br>
3. Нажимаем кнопку "Сохранить и закрыть";<br><br>
<b>ВАЖНО:</b>
Если сайт "легкий" то настройки времени не сработают, можете указать любые, сайт загрузится быстро;<br>
Код для прелоадера нужно поставить в самом верху страницы, сам Зеро Блок с прелоадером под ним;<br><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM015",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3263-3530-4132-b536-633964373430/Frame_15.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Меню, Эффекты, Прочее",
title: "Активный пункт меню в ZERO BLOCK",
modsettings: `[
{
    "id": "1",
    "title": "id зеро меню",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Класс элемента",
    "type": "input",
    "placeholder": "custommenuitem",
    "value": ""
},
{
    "id": "3",
    "title": "Активный пункт меню:",
    "type": "text",
    "value": ""
},
{
    "id": "3",
    "title": "Цвет текста",
    "type": "color",
    "value": ""
},
{
    "id": "4",
    "title": "Насыщенность (font-weight)",
    "type": "select",
    "options": {
        "100": "100",
        "200": "200",
        "300": "300",
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
        "900": "900"
    },
    "value": ""
},
{
    "id": "5",
    "title": "Непрозрачность",
    "type": "select",
    "options": {
        "100%": "100%",
        "95%": "95%",
        "90%": "90%",
        "80%": "80%",
        "70%": "70%",
        "60%": "60%",
        "50%": "50%",
        "40%": "40%",
        "30%": "30%",
        "20%": "20%",
        "10%": "10%",
        "0%": "0%"
    },
    "value": ""
},
{
    "id": "6",
    "title": "Подчеркнуть пункт меню",
    "type": "select",
    "options": {
        "Без подчерекивания": "0",
        "1px": "1",
        "2px": "2",
        "3px": "3",
        "4px": "4",
        "5px": "5"
    },
    "value": ""
},
{
    "id": "7",
    "title": "Цвет подчеркивания",
    "type": "color",
    "value": ""
},
{
    "id": "8",
    "title": "При наведении:",
    "type": "text",
    "value": ""
},
{
    "id": "8",
    "title": "Цвет текста",
    "type": "color",
    "value": ""
},
{
    "id": "9",
    "title": "Непрозрачность",
    "type": "select",
    "options": {
        "100%": "100%",
        "95%": "95%",
        "90%": "90%",
        "80%": "80%",
        "70%": "70%",
        "60%": "60%",
        "50%": "50%",
        "40%": "40%",
        "30%": "30%",
        "20%": "20%",
        "10%": "10%",
        "0%": "0%"
    },
    "value": ""
},
{
    "id": "10",
    "title": "Подчеркнуть пункт меню",
    "type": "select",
    "options": {
        "Без подчерекивания": "0",
        "1px": "1",
        "2px": "2",
        "3px": "3",
        "4px": "4",
        "5px": "5"
    },
    "value": ""
},
{
    "id": "11",
    "title": "Цвет подчеркивания",
    "type": "color",
    "value": ""
}
]`,

moddefaultsettings: '["","","","100","100%","0","","","","100%","0",""]',
modcontent: function modcontentfunc(name) {
  return `

<script src="https://static.tildacdn.com/js/tilda-menusub-1.0.min.js" charset="utf-8" async=""></script> <script> function t_menusub_highlight2() { var url = window.location.href , pathname = window.location.pathname; "/" == url.substr(url.length - 1) && (url = url.slice(0, -1)), "/" == pathname.substr(pathname.length - 1) && (pathname = pathname.slice(0, -1)), "/" == pathname.charAt(0) && (pathname = pathname.slice(1)), "" == pathname && (pathname = "/"),  cutommenu = ".${name[1]}", $(cutommenu+' a[href="' + url + '"]').addClass("t-active"), $(cutommenu+' a[href="' + url + '/"]').addClass("t-active"), $(cutommenu+' a[href="' + pathname + '"]').addClass("t-active"), $(cutommenu+' a[href="/' + pathname + '"]').addClass("t-active"), $(cutommenu+' a[href="' + pathname + '/"]').addClass("t-active"), $(cutommenu+' a[href="/' + pathname + '/"]').addClass("t-active") } function t_menusub_checkAnchorLinks2(recid) { if ($(window).width() >= 960) { var navLinks = $("#rec" + recid).find('.${name[1]} a:not(.tooltipstered)[href*="#"]'); navLinks.length > 0 && t_menusub_catchScroll(navLinks) } } $(document).ready(function(){ t_menusub_highlight2(); setTimeout(function(){ t_menusub_highlight2(); t_menusub_checkAnchorLinks2("${name[0].replace('#rec','')}"); },600); }); </script> 

<style> 

    .${name[1]} .tn-atom { -webkit-transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out; transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out; } 
    .${name[1]} .tn-atom:after { content: ''; position: absolute; left: 0; bottom: 20%; opacity: 0; width: 100%; height: 100%; border-bottom: ${name[9] == "2" ? "1" : name[9] == "3" ? "2" : name[9] == "4" ? "3" : name[9] == "5" ? "4" : "0"}px solid ${name[10]}; 
    -webkit-box-shadow: inset 0px -1px 0px 0px ${name[10]}; 
    -moz-box-shadow: inset 0px -1px 0px 0px ${name[10]}; box-shadow: inset 0px -1px 0px 0px ${name[10]}; 
    -webkit-transition: all 0.3s ease; transition: all 0.3s ease; } 
    .${name[1]} .tn-atom.t-active{ color: ${name[2]} !important; font-weight: ${name[3]} !important; opacity: ${name[4]} !important; } 
    .${name[1]} .tn-atom.t-active:after { opacity: 1; bottom: -1px; border-bottom: ${name[5] == "2" ? "1" : name[5] == "3" ? "2" : name[5] == "4" ? "3" : name[5] == "5" ? "4" : "0"}px solid ${name[6]}; 
    -webkit-box-shadow: inset 0px -1px 0px 0px ${name[6]}; 
    -moz-box-shadow: inset 0px -1px 0px 0px ${name[6]}; box-shadow: inset 0px -1px 0px 0px ${name[6]}; } 
    .${name[1]} .tn-atom:not(.t-active):not(.tooltipstered):hover { color: ${name[7]} !important; opacity: ${name[8]}; } 
    .${name[1]} .tn-atom:not(.t-active):not(.tooltipstered):hover::after { opacity: 1; bottom: -1px; } 

</style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>ВАЖНО: Работает на экранах шириной больше 960px<br>
&bull; Если указали в пунктах меню и ссылку и id блока или якорную ссылку, то будет выделяться несколько пунктов одновременно. Советуем так не делать)<br>
&bull; Порядок пунктов меню в слоях зеро блока должен быть поочередным, если вы их используете якорные ссылки. Если что-то не работает с ними, пересоздайте их поочередно от первого к последнему. Это важный нюанс.<br>
</b><br>
Как это работает:<br><br>

1. Выбираем зеро блок с меню;<br>
2. Вписываем класс элемента и добавляем его ко всем кнопкам(Можно кнопки, можно текст);<br>
3. Настраиваем стили для активного пункта и при наведении;<br>
4. Нажимаем кнопку "Сохранить и закрыть";<br><br>

</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM016",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6164-6537-4063-b561-616637666263/Frame_16.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные, Эффекты, Прочее",
title: "Анимируем числа в Zero Block",
modsettings: `[
{
    "id": "1",
    "title": "Время анимации (сек.)",
    "type": "number",
    "placeholder": "5",
    "value": ""
},
{
    "id": "2",
    "title": "Текст в начале",
    "type": "input",
    "placeholder": "До",
    "value": ""
},
{
    "id": "3",
    "title": "Текст в конце",
    "type": "input",
    "placeholder": "руб.",
    "value": ""
},
{
    "id": "4",
    "title": "Разделение тысячных",
    "type": "select",
    "options": {
        "1 000 000": "0",
        "1.000.000": "1",
        "1,000,000": "2",
        "1000000": "3"
    },
    "value": ""
},
{
    "id": "5",
    "title": "Добавить цифру",
    "type": "groupCards",
    "options": [
        {
        "title": "Класс элемента",
        "type": "input",
        "placeholder": "name",
        "value": ""
        },
        {
        "title": "Цифра в начале",
        "type": "input",
        "placeholder": "1",
        "value": ""
        },
        {
        "title": "Цифра в конце",
        "type": "input",
        "placeholder": "99",
        "value": ""
        }
    ],
    "limit": "14",
    "placeholder": "class",
    "value": "1"
}
]`,
modoptions: [function modcontentfunc(name) {

let strurl16 = [];
let keurkl16 
console.log(name)
for(let i = 0; i < name[0].length; i++){
    if(name[0][i][0] != ''){
        keurkl16 = name[0][i][0]
    
        keurkl16 = '".'+keurkl16+'"';
        strurl16.push(keurkl16);
    }
}; 

return strurl16.join(",");
}, function modcontentfunc(name) {
let strurl16 = [];
let keurkl16 
for(let i = 0; i < name[0].length; i++){
    if(name[0][i][0] != ''){
        keurkl16 = name[0][i][1]
        
        keurkl16 = '"'+keurkl16+'"';
        strurl16.push(keurkl16);
    }
}; 

return strurl16.join(",");
}, function modcontentfunc(name) {
let strurl16 = [];
let keurkl16 
for(let i = 0; i < name[0].length; i++){
    if(name[0][i][0] != ''){
        keurkl16 = name[0][i][2]
    
        keurkl16 = '"'+keurkl16+'"';
        strurl16.push(keurkl16);
    }
}; 

return strurl16.join(",");
}, function modcontentfunc(name) {
    let strurl16 = [];
    let keurkl16 
            keurkl16 = name[0][0][0]
        
            keurkl16 = ''+keurkl16+'';
            strurl16.push(keurkl16);
    
    return strurl16
}
],
moddefaultsettings: '["","","","0",["","",""] ]',
modcontent: function modcontentfunc(name,i) {
    return `

<script> function numberWithSpaces(x, srt) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, srt); } $(document).ready(function () { let checkCls = setInterval(function(){ if($('.${nolimBlocks[i].modoptions[3]([name[4]])}').length > 0) { clearInterval(checkCls); var number = [${nolimBlocks[i].modoptions[0]([name[4]])}]; var numberstart = [${nolimBlocks[i].modoptions[1]([name[4]])}]; var numberfinish = [${nolimBlocks[i].modoptions[2]([name[4]])}]; var blockStatus = ["0", "0", "0"]; var scrollEvent = []; var digit_block = []; $(window).scroll(function () { for (let i = 0; i < number.length; i++) { digit_block[i] = number[i] + ' .tn-atom'; var n1 = Number(numberstart[i]); var n2 = Number(numberfinish[i]); scrollEvent[i] = ($(window).scrollTop() > ($(number[i]).offset().top - $(window).height())); if (scrollEvent[i] && blockStatus[i] == '0') { console.log(blockStatus[i]); blockStatus[i] = '1'; $({ numberValue: n1 }).animate({ numberValue: n2 }, { duration: ${n2i(name[0], '5')}000, easing: "swing", step: function (val) { let op = Math.ceil(val); op = numberWithSpaces(op, '${name[3] == "0" ? " " : name[3] == "1" ? "." : name[3] == "2" ? "," : ""}'); $(digit_block[i]).html('${n2i(name[1], 'До')}' + op + '${n2i(name[2], 'руб.')}'); } }); } }; }); $(window).scroll(); } },50); }); </script> 

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br>
1. В генераторе настраиваем время анимации, т.е. сколько секунд пройдет от начальной цифры до нужной;<br>
2. Можно указать текст в начале числа и после него;<br>
3. Выбираем тип разделения тысячных;<br>
4. Пишем в генераторе класс текстового элемента и вставляем его в Зеро Блок;<br>
Что бы указать класс у элемента, нажимаем на него правой кнопкой мыши и выбираем из списка последнюю строку "Add CSS Class Name", далее, справа в настройках указываем тот же класс что и в генераторе;<br>
5. Указываем начальную цифру и конечную цифру;<br>
Совет: начальная цифра в генераторе должна совпадать с начальной в тексте, тогда визуально не будет видно "подёргиваний" в цифрах;<br>
6. Можно добавить до 15 элементов (цифр) в одном коде;<br>
7. В анимации используется настройка "swim" - т.е. кривая скорости анимации стоит по стандарту. медленное начало, к середине ускоряется и к концу опять замедляется;<br>
8. Нажимаем кнопку "Сохранить и закрыть";<br>

</div>`
});



nolimBlocks.push({
video: "5tUBFschccU",
name: "",
cod: "NLM018",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6436-3730-4362-b130-313562393266/Frame_18.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "Вставляем свои иконки на фото карточки товара",
grid: "yes",
modsettings: `[
{
    "title": "На Планшет и Пк (от 640px)",
    "type": "text"
},
{
    "id": "1",
    "title": "Отступ от верхнего края (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "2",
    "title": "Отступ от правого края (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "3",
    "title": "Направление отображения",
    "type": "select",
    "options": {
        "Горизонтально": "0",
        "Вертикально": "1"
    },
    "value": ""
},
{
    "id": "4",
    "title": "Ширина иконки (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "5",
    "title": "Высота иконки (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "6",
    "title": "Отступы между иконок (px)",
    "type": "number",
    "placeholder": "5",
    "value": ""
},
{
    "title": "Мобильная версия (до 640px)",
    "type": "text"
},
{
    "id": "7",
    "title": "Отступ от верхнего края (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "8",
    "title": "Отступ от правого края (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "9",
    "title": "Направление отображения",
    "type": "select",
    "options": {
        "Горизонтально": "0",
        "Вертикально": "1"
    },
    "value": ""
},
{
    "id": "10",
    "title": "Ширина иконки (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "11",
    "title": "Высота иконки (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "12",
    "title": "Отступы между иконок (px)",
    "type": "number",
    "placeholder": "5",
    "value": ""
},
{
    "id": "13",
    "title": "Метки",
    "type": "groupCards",
    "options": [
        {
            "title": "Название иконки",
            "type": "input",
            "placeholder": "",
            "value": ""
        },
        {
            "title": "Изображение",
            "type": "image",
            "placeholder": "",
            "value": ""
        }
    ],
    "limit": "14",
    "placeholder": "class",
    "value": ""
}
]`,
moddefaultsettings: '["","","","0","","","","","","","0","","",[["",""]]]',
modoptions: [function modcontentfunc(name) {
    
    let strurl2 = [];
    let keurkl2 

    for(let i = 0; i < name[0].length; i++){
        if(name[0][i][0] != ''){
            keurkl2 = name[0][i][0]
            keurkl2 = '"'+keurkl2+'"';
            strurl2.push(keurkl2);
        }
    }; 

    return strurl2.join(",");
}, function modcontentfunc(name) {s
    let strurl2 = [];
    let keurkl2 
    for(let i = 0; i < name[0].length; i++){
        if(name[0][i][0] != ''){
            keurkl2 = name[0][i][1]
            keurkl2 = '"'+keurkl2+'"';
            strurl2.push(keurkl2);
        }
    }; 

    return strurl2.join(",");
}
],
modcontent: function modcontentfunc(name, i) {
return `
<script>

function createmarks(str) {
    var nlkeys = [${nolimBlocks[i].modoptions[0]([name[14]])}];
    var nlimgs = [${nolimBlocks[i].modoptions[1]([name[14]])}];
    str=str.split(',');
    var s='';
    s+='<div class="nl_marwrapper">';

    for(let i=0; i < 3; i++) {
        for(let ins=0; ins < nlkeys.length; ins++) {
            if(str[i]==nlkeys[ins]) {
                s+='<div class="nl_markimg" style="background-image:url('+nlimgs[ins]+')"'+">";
                s+="</div>";
            }
        }
    }

    s+="</div>";
    return s;
}

function t_store_get_productCard_mark_html2(t, e) {
    if ( !t.mark) return "";
    var r="";
    r+=e.markColor ? "color:"+e.markColor+";": "", r +=e.markBgColor ? "background-color:"+ e.markBgColor + ";": "";
    var o=r ? 'style="'+r+'"': "", s="";
    s=createmarks(t.mark);
    return s
}

$(window).on("load", function() {
    setTimeout(function() {
            for (let i=0; i < $('.t-store__card__mark-wrapper').length; i++) {
                let valstr=$('.t-store__card__mark-wrapper').eq(i).text().replace(/\\s/g, ''); $('.t-store__card__mark-wrapper').eq(i).before(createmarks(valstr));
            }
            t_store_get_productCard_mark_html=t_store_get_productCard_mark_html2;
    }, 700);
});

</script>

<style>
.nl_markimg {
    background-size: cover;
    width: ${name[4]}px;
    height: ${name[5]}px;
    margin-right: ${name[6]}px;
    display: ${name[3] == '0' ? 'inline-' : ''}block;
}

.nl_marwrapper {
    position: absolute;
    right: ${name[2]}px;
    top: ${name[1]}px;
    z-index: 5;
    display: table;
}

@media screen and (max-width: 640px) {
    .nl_markimg {
        width: ${name[11]}px;
        height: ${name[12]}px;
        margin-right: ${name[13]}px;
        display: ${name[11] == '0' ? 'inline-' : ''}block;
    }

    .nl_marwrapper {
        right: ${name[9]}px;
        top: ${name[8]}px;
    }
}

.t-store__card__mark-wrapper {
    display: none !important;
}

</style>
`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>
ВАЖНО:</b> Если у вас в форме установлен радиус скругления, то при выборе поля "Цвет" в генераторе, укажите такой же радиус скругления<br><br>

Как это работает:<br><br>

1. Добавляем стандартную форму или форму в Zero Block на страницу. В форме создаем поле "Поле для ввода в одну строку" (One line input field);<br>
2. В настройках модификации выбираем тип поля: Число, Цвет или Как в поиске;<br>
3. Указываем имя поля (VARIABLE NAME) и вставляем его в вашу форму в поле "Поле для ввода в одну строку" (One line input field);<br>
4. Нажимаем кнопку "Сохранить и закрыть";<br><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM019",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6666-3764-4761-a330-623237383435/Frame_19.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные, Эффекты, Прочее",
title: "Делаем свой видеовиджет",
grid: "yes",
modsettings: `[
{
    "id": "1",
    "title": "Ссылка на видео",
    "type": "input",
    "placeholder": "https://dl.dropboxusercontent.com/s/5a2edkmo1z859en/Juice%20WRLD%20-%20Lucid%20Dreams%20%28Directed%20by%20Cole%20Bennett%29.webm?dl=0",
    "value": ""
},
{
    "id": "2",
    "title": "Ссылка для кнопки",
    "type": "input",
    "placeholder": "#action",
    "value": ""
},
{
    "id": "3",
    "title": "Открыть ссылку в новой вкладке?",
    "type": "select",
    "options": {
        "Да": "0",
        "Нет": "1"
    },
    "value": ""
},
{
    "id": "4",
    "title": "Положение",
    "type": "select",
    "options": {
        "Лево Верх": "0",
        "Право Верх": "1",
        "Лево Низ": "2",
        "Право Низ": "3"
    },
    "value": ""
},
{
    "id": "5",
    "title": "Цвет крестика",
    "type": "color",
    "placeholder": "#000000",
    "value": ""
},
{
    "id": "6",
    "title": "Кол-во до повторного появления",
    "type": "number",
    "placeholder": "-1",
    "value": ""
},
{
    "id": "7",
    "title": "Отступ слева/справа (px)",
    "type": "number",
    "placeholder": "25",
    "value": ""
},
{
    "id": "8",
    "title": "Отступ сверху/снизу (px)",
    "type": "number",
    "placeholder": "25",
    "value": ""
},
{
    "id": "9",
    "title": "Увеличение при наведении",
    "type": "select",
    "options": {
        "0%": "0",
        "5%": "1",
        "10%": "2"
    },
    "value": ""
},
{
    "title": "Border видеовиджета",
    "type": "text"
},
{
    "id": "10",
    "title": "border-radius (px)",
    "type": "number",
    "placeholder": "10",
    "value": ""
},
{
    "id": "11",
    "title": "Ширина border (px)",
    "type": "number",
    "placeholder": "1",
    "value": ""
},
{
    "id": "12",
    "title": "Цвет border",
    "type": "color",
    "placeholder": "#000",
    "value": ""
},
{
    "id": "13",
    "title": "Цвет border при наведении",
    "type": "color",
    "placeholder": "#828282",
    "value": ""
},
{
    "title": "Видеовиджет в развернутом виде",
    "type": "text"
},
{
    "id": "14",
    "title": "Размер при клике (px)",
    "type": "select",
    "options": {
        "230x380px": "0",
        "280x500px": "1"
    },
    "value": ""
},
{
    "id": "15",
    "title": "Цвет bordera",
    "type": "color",
    "placeholder": "#000",
    "value": ""
},
{
    "id": "16",
    "title": "Цвет кнопки",
    "type": "color",
    "placeholder": "#cc000a",
    "value": ""
},
{
    "id": "17",
    "title": "Текст кнопки",
    "type": "input",
    "placeholder": "Заявка",
    "value": ""
},
{
    "id": "18",
    "title": "Цвет текста",
    "type": "color",
    "placeholder": "#b0b0b0",
    "value": ""
},
{
    "id": "19",
    "title": "border-radius кнопки (px)",
    "type": "number",
    "placeholder": "15",
    "value": ""
},

{
    "id": "20",
    "title": "Шрифт",
    "type": "select",
    "options": {
        "Для заголовков": "0",
        "Для текста": "1"
    },
    "value": ""
},
{
    "id": "21",
    "title": "Жирность шрифта",
    "type": "select",
    "options": {
        "100": "100",
        "200": "200",
        "300": "300",
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
        "900": "900"
    },
    "value": ""
},
{
    "id": "22",
    "title": "Размер шрифта",
    "type": "select",
    "options": {
        "10px": "10px",
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px"
    },
    "value": ""
},
{
    "id": "23",
    "title": "Размер шрифта в моб. версии (px)",
    "type": "select",
    "options": {
        "8px": "8px",
        "10px": "10px",
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px"
    },
    "value": ""
},
{
    "id": "24",
    "title": "Добавить цель Яндекс.Метрики при клике на кнопку",
    "type": "groupInputs",
    "options": [
        {
            "title": "Идентификатор цели",
            "type": "input",
            "placeholder": "",
            "value": ""
        },
        {
            "title": "Номер счетчика",
            "type": "input",
            "placeholder": "",
            "value": ""
        }
    ],
    "limit": "14",
    "placeholder": "class",
    "value": ""
},
{
    "id": "25",
    "title": "Добавить цель Google Analytics при клике на кнопку",
    "type": "groupInputs",
    "options": [
        {
            "title": "Категория",
            "type": "input",
            "placeholder": "",
            "value": ""
        },
        {
            "title": "Действие",
            "type": "input",
            "placeholder": "",
            "value": ""
        },
        {
            "title": "Ярлык",
            "type": "input",
            "placeholder": "",
            "value": ""
        },
        {
            "title": "Ценность",
            "type": "input",
            "placeholder": "",
            "value": ""
        }
    ],
    "limit": "14",
    "placeholder": "class",
    "value": ""
}
]`,
moddefaultsettings: '["","","0","0","","","","","0","","","","","","","0","","","","","","0","100","10px","8px", ["",""], ["","","",""] ]',
modcontent: function modcontentfunc(name) {
    return `

<div class="video-widget" data-state="default">
    <div class="video-widget__container"> <video id="video-widget__video" loop="" autoplay="" playsinline="" preload="auto" muted="muted" controlslist="nodownload" disablepictureinpicture="" class="video-widget__video" src="https://dl.dropboxusercontent.com${name[0].replace('https://www.dropbox.com', '')}">
            <source src="https://dl.dropboxusercontent.com${name[0].replace('https://www.dropbox.com', '')}" type="video/mp4">
        </video>
        <div class="video-widget__close"></div> <a class="video-widget__button ${name[21] == '0' ? 't-title' : 't-text'}" ${name[2] == '0' ? 'target="_blank" ' : ''}href="${name[1]}">${name[18]}</a>
    </div>
</div>
<script>
    jQuery.cookie = function(name, value, options) {
        if (typeof value != 'undefined') {
            options = options || {};
            if (value === null) {
                value = '';
                options.expires = -1;
            };
            var expires = '';
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                } else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString();
            };
            var path = options.path ? '; path=' + (options.path) : '';
            var domain = options.domain ? '; domain=' + (options.domain) : '';
            var secure = options.secure ? '; secure' : '';
            document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
        } else {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
    };

    function nolimvideowidgetcookie() {
        $.cookie('nlvideowidget', 1, {
            expires: ${Number(name[5]) <= 0 ? '-1' : `${name[5]}`}
        });
    };
    $(document).ready(function() {
        var e = $(".video-widget"),
            a = document.getElementById("video-widget__video");
        $(".video-widget__close").click(function(t) {
            return t.preventDefault(), "default" == e.attr("data-state") ? e.hide() : (e.attr("data-state", "default"), a.muted = !0), !1
        }), $(".video-widget__container").on("click", function(t) {
            "default" == e.attr("data-state") ? (e.attr("data-state", "opened"), a.currentTime = 0, a.muted = !1) : (e.attr("data-state", "default"), a.muted = !0)
        }), 1024 < $(document).width() && $(".video-widget__container").on("touchstart", function(t) {
            "default" == e.attr("data-state") ? (e.attr("data-state", "opened"), a.currentTime = 0, a.muted = !1) : (e.attr("data-state", "default"), a.muted = !0)
        }), $(document).mouseup(function(t) {
            e.is(t.target) || 0 !== e.has(t.target).length || "default" == e.attr("data-state") || (e.attr("data-state", "default"), a.muted = !0)
        });
        $('.video-widget__close, .video-widget__button').click(function(e) {
            nolimvideowidgetcookie();
            ${name[25][0] != '' ? `ym('${name[25][1]}', 'reachGoal', '${name[25][0]}');` : ''}
            ${name[26][0] != '' ? `gtag('event', '${name[26][1]}', {
                'event_category': '${n2i(name[26][0], 'Категория')}',
                ${name[26][2] != '' ? `'event_label': '${name[26][2]}',` : ''}
                ${name[26][3] != '' ? `'value': '${name[26][3]}'` : ''}
            });` : ''}
        });
        if (Number($.cookie('nlvideowidget')) > 0) {
            $(".video-widget").hide();
        } else {
            $(".video-widget").show();
        }
    });
</script>
<style>
    .video-widget {
        display: none;
        position: fixed;
        ${name[3] == '0' ? 'left' : name[3] == '1' ? 'right' : name[3] == '2' ? 'left' : 'right'}: 0;
        z-index: 999999;
        ${name[3] == '0' ? 'top' : name[3] == '1' ? 'top' : name[3] == '2' ? 'bottom' : 'bottom'}: 0;
    }

    .video-widget__container {
        font-family: Helvetica;
        z-index: 999999;
        overflow: hidden;
        border-style: solid;
        background: #eee;
        -webkit-transition: width .3s ease-in-out 0s, height .3s ease-in-out 0s, bottom .3s ease-in-out 0s, border-color .2s ease-in-out 0s, opacity 1s ease-in-out 0s, -webkit-transform .2s ease-in-out 0s;
        transition: width .3s ease-in-out 0s, height .3s ease-in-out 0s, bottom .3s ease-in-out 0s, border-color .2s ease-in-out 0s, opacity 1s ease-in-out 0s, -webkit-transform .2s ease-in-out 0s;
        -o-transition: width .3s ease-in-out 0s, height .3s ease-in-out 0s, bottom .3s ease-in-out 0s, border-color .2s ease-in-out 0s, opacity 1s ease-in-out 0s, -o-transform .2s ease-in-out 0s;
        -moz-transition: transform .2s ease-in-out 0s, width .3s ease-in-out 0s, height .3s ease-in-out 0s, bottom .3s ease-in-out 0s, border-color .2s ease-in-out 0s, opacity 1s ease-in-out 0s, -moz-transform .2s ease-in-out 0s;
        transition: transform .2s ease-in-out 0s, width .3s ease-in-out 0s, height .3s ease-in-out 0s, bottom .3s ease-in-out 0s, border-color .2s ease-in-out 0s, opacity 1s ease-in-out 0s;
        transition: transform .2s ease-in-out 0s, width .3s ease-in-out 0s, height .3s ease-in-out 0s, bottom .3s ease-in-out 0s, border-color .2s ease-in-out 0s, opacity 1s ease-in-out 0s, -webkit-transform .2s ease-in-out 0s, -moz-transform .2s ease-in-out 0s, -o-transform .2s ease-in-out 0s;
        outline: 0;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-box-shadow: rgba(0, 0, 0, .2) 0 10px 20px;
        box-shadow: rgba(0, 0, 0, .2) 0 10px 20px;
        position: absolute;
        ${name[3] == '0' ? 'left' : name[3] == '1' ? 'right' : name[3] == '2' ? 'left' : 'right'}: ${name[6]}px;
        ${name[3] == '0' ? 'top' : name[3] == '1' ? 'top' : name[3] == '2' ? 'bottom' : 'bottom'}: ${name[7]}px;
        border-radius: ${name[10]}px;
        border-width: ${name[11]}px;
        width: 130px;
        height: 180px;
        border-color: ${name[12]};
    }

    .video-widget__container:hover {
        -webkit-transform: scale(1${name[8] == '0' ? '' : name[8] == '1' ? '.05' : '.1'}) translate(5px, -5px);
        -moz-transform: scale(1${name[8] == '0' ? '' : name[8] == '1' ? '.05' : '.1'}) translate(5px, -5px);
        -ms-transform: scale(1${name[8] == '0' ? '' : name[8] == '1' ? '.05' : '.1'}) translate(5px, -5px);
        -o-transform: scale(1${name[8] == '0' ? '' : name[8] == '1' ? '.05' : '.1'}) translate(5px, -5px);
        transform: scale(1${name[8] == '0' ? '' : name[8] == '1' ? '.05' : '.1'}) translate(5px, -5px);
        border-color: ${name[13]};
    }

    .video-widget__video {
        -o-object-fit: cover;
        object-fit: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        min-width: 100%;
        min-height: 100%;
        z-index: 200;
        -webkit-transition: opacity .4s ease-in-out 0s;
        -o-transition: opacity .4s ease-in-out 0s;
        -moz-transition: opacity .4s ease-in-out 0s;
        transition: opacity .4s ease-in-out 0s;
        opacity: .9;
    }

    .video-widget__close {
        position: absolute;
        top: 6px;
        right: 6px;
        width: 20px;
        height: 20px;
        z-index: 250;
        opacity: 0;
        -webkit-transition: opacity .2s ease-in-out 0s, -webkit-transform .3s ease-in-out 0s;
        transition: opacity .2s ease-in-out 0s, -webkit-transform .3s ease-in-out 0s;
        -o-transition: opacity .2s ease-in-out 0s, -o-transform .3s ease-in-out 0s;
        -moz-transition: transform .3s ease-in-out 0s, opacity .2s ease-in-out 0s, -moz-transform .3s ease-in-out 0s;
        transition: transform .3s ease-in-out 0s, opacity .2s ease-in-out 0s;
        transition: transform .3s ease-in-out 0s, opacity .2s ease-in-out 0s, -webkit-transform .3s ease-in-out 0s, -moz-transform .3s ease-in-out 0s, -o-transform .3s ease-in-out 0s;
    }

    .video-widget__close:after,
    .video-widget__close:before {
        position: absolute;
        left: 9px;
        top: 1px;
        content: "";
        height: 18px;
        width: 2px;
        background: ${name[4]};
        -webkit-box-shadow: rgba(0, 0, 0, .5) 1px 1px 10px;
        box-shadow: rgba(0, 0, 0, .5) 1px 1px 10px;
    }

    .video-widget__close:before {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .video-widget__close:after {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    .video-widget__container:hover .video-widget__close {
        opacity: .5;
    }

    .video-widget.video-widget[data-state=opened] .video-widget__container {
        width: ${name[15] == '0' ? '230px' : '280px'};
        height: ${name[15] == '0' ? '380px' : '500px'};
        border-radius: ${name[9]}px;
        border-color: ${name[16]};
    }

    .video-widget.video-widget[data-state=opened] .video-widget__close {
        opacity: .5;
    }

    .video-widget.video-widget[data-state=opened] .video-widget__close:before {
        display: none;
    }

    .video-widget.video-widget[data-state=opened] .video-widget__close:after {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .video-widget.video-widget[data-state=opened] .video-widget__close:hover {
        opacity: 1;
    }

    .video-widget__button {
        position: absolute;
        bottom: 20px;
        right: 20px;
        left: 20px;
        height: 65px;
        border-radius: ${name[20]}px;
        z-index: 300;
        -webkit-box-shadow: rgba(0, 0, 0, .25) 0 4px 15px;
        box-shadow: rgba(0, 0, 0, .25) 0 4px 15px;
        text-align: center;
        -webkit-transition: opacity .3s ease-in-out 0s, background-color .2s ease-in-out 0s, -webkit-transform .2s ease-in-out 0s;
        transition: opacity .3s ease-in-out 0s, background-color .2s ease-in-out 0s, -webkit-transform .2s ease-in-out 0s;
        -o-transition: opacity .3s ease-in-out 0s, background-color .2s ease-in-out 0s, -o-transform .2s ease-in-out 0s;
        -moz-transition: transform .2s ease-in-out 0s, opacity .3s ease-in-out 0s, background-color .2s ease-in-out 0s, -moz-transform .2s ease-in-out 0s;
        transition: transform .2s ease-in-out 0s, opacity .3s ease-in-out 0s, background-color .2s ease-in-out 0s;
        transition: transform .2s ease-in-out 0s, opacity .3s ease-in-out 0s, background-color .2s ease-in-out 0s, -webkit-transform .2s ease-in-out 0s, -moz-transform .2s ease-in-out 0s, -o-transform .2s ease-in-out 0s;
        visibility: hidden;
        background-color: ${name[17]};
        font-size: ${name[23]};
        font-weight: ${name[22]};
        color: ${name[19]} !important;
        text-align: center;
        vertical-align: middle;
        line-height: 65px;
        text-transform: uppercase;
        opacity: 0
    }

    @media screen and (max-width: 480px) {
        .video-widget__button {
            font-size: ${name[24]};
        }
    }

    .video-widget__button:hover {
        background-color: ${name[17]};
        text-decoration: none;
    }

    .video-widget.video-widget[data-state=opened] .video-widget__button {
        opacity: 1;
        visibility: visible;
    }

    @media only screen and (max-width:1023px) {
        .video-widget__close {
            opacity: .5;
        }
    }

    @media only screen and (max-width:480px) {
        .video-widget__container {
            ${name[3] == '0' ? 'left' : name[3] == '1' ? 'right' : name[3] == '2' ? 'left' : 'right'}: 15px;
            ${name[3] == '0' ? 'top' : name[3] == '1' ? 'top' : name[3] == '2' ? 'bottom' : 'bottom'}: 15px;
            width: 90px;
            height: 125px;
        }
    }
</style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br>
1. В генераторе настраиваем время анимации, т.е. сколько секунд пройдет от начальной цифры до нужной;<br>
2. Можно указать текст в начале числа и после него;<br>
3. Выбираем тип разделения тысячных;<br>
4. Пишем в генераторе класс текстового элемента и вставляем его в Зеро Блок;<br>
Что бы указать класс у элемента, нажимаем на него правой кнопкой мыши и выбираем из списка последнюю строку "Add CSS Class Name", далее, справа в настройках указываем тот же класс что и в генераторе;<br>
5. Указываем начальную цифру и конечную цифру;<br>
Совет: начальная цифра в генераторе должна совпадать с начальной в тексте, тогда визуально не будет видно "подёргиваний" в цифрах;<br>
6. Можно добавить до 15 элементов (цифр) в одном коде;<br>
7. В анимации используется настройка "swim" - т.е. кривая скорости анимации стоит по стандарту. медленное начало, к середине ускоряется и к концу опять замедляется;<br>
8. Нажимаем кнопку "Сохранить и закрыть";<br>

</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM020",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6161-3933-4561-b736-323863636131/Frame_20.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные, Прочее",
title: "Popup из Zero Block со своей кнопкой закрытия",
modsettings: `[
{
    "id": "1",
    "title": "Id zero блока",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Ссылка для открытия popup",
    "type": "input",
    "placeholder": "#open",
    "value": ""
},
{
    "id": "3",
    "title": "Класс для закрытия popup",
    "type": "input",
    "placeholder": "close",
    "value": ""
},
{
    "id": "4",
    "title": "Затемнение фона",
    "type": "select",
    "options": {
        "Да": "0",
        "Нет": "1"
    },
    "value": ""
}
]`,

moddefaultsettings: '["","","","0"]',
modcontent: function modcontentfunc(name) {
    return `

    <a href="${name[1]}" class="nolimpopupshow" style="display:none;"></a>
    <script>
        $(document).ready(function() {
            var o = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
                e = "${name[0]} .t396",
                c = '[href="${name[1]}"]';
            $("${name[0]} .t396" + " .t396__filter").click(function() {
                $("${name[0]} .t396").fadeOut(), $(".t-body").removeClass("nolimPopUp");
            }), $(c).click(function() {
                $("${name[0]} .t396").fadeIn(), $(".t-body").addClass("nolimPopUp");
                "y" === window.lazy && t_lazyload_update(), typeof t_slds_updateSlider != "undefined" && t_slds_updateSlider("${name[0].replace('#rec','')}"),
                t396_doResize('${name[0].replace('#rec','')}');
            });
            $('.${n2i(name[2],'popupclose')}').addClass("nolim_popup_close").click(function() {
                $("${name[0]} .t396").fadeOut(), $(".t-body").removeClass("nolimPopUp");
            })
        });
    </script>

    <style>
        ${name[0]} .t396 .t396__filter,
        .${n2i(name[2],'popupclose')} {
            cursor: pointer
        }

        ${name[0]} .t396 {
            display: none;
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
            overflow-y: auto;
        }

    ${name[3] == '0' ? `
        ${name[0]} .t396:before {
            content:'';
            background-color: #00000060;
            position: fixed;
            width: 110%;
            height: 110%;
        }
    ` : ''}

        .nolimPopUp {
            height: 100vh;
            min-height: 100vh;
            overflow: hidden;
        }
    </style>
`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>Как это работает:</b><br>
1. Создаём popup в Zero Block:<br>
&bull; Цвет фона - прозрачный.<br>
&bull; Window container height - 100%<br>
&bull; Ставим Шейп (на фон попапа), ширина и высота - 100%<br>
&bull; Container - Window container<br>
&bull; Выравнивание X - 0, Y - 0<br>
&bull; Opacity (Прозрачность) - 35% или любое другое значение<br>
&bull; Цвет #000000 <br><br>

2. Выбираем Zero Block или Вставляем в id Zero Block в котором сделали popup;<br>
3. Указываем ссылку через хештег (Например #open), затем привязываем ее к элементу, который будет "вызывать" (открывать) popup;<br>
4. Указываем класс для закрытия попапа, который будет привязан ко всем элементам, отвечающим за закрытие;<br>
Что бы указать класс у элемента в Тильда , нажимаем на него правой кнопкой мыши и выбираем из списка предпоследнюю строку "Add CSS Class Name", далее, справа в настройках указываем тот же класс что и в настройках мода;<br>
8. Нажимаем кнопку "Сохранить и закрыть";<br>

</div>`

});



nolimBlocks.push({
name: "",
cod: "NLM021",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3366-3135-4330-b861-303330343036/Frame_21.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные, Прочее, Формы",
title: "Кастомизация радиокнопок (radio button)",
grid: "yes",
modsettings: `[
{
    "id": "1",
    "title": "Id блока",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Тип radio button",
    "type": "select",
    "options": {
        "Стандарт (круг)": "0",
        "Кнопки": "1"
    },
    "value": ""
},
{
    "id": "3",
    "title": "Тип отметки",
    "type": "select",
    "options": {
        "Круг": "0",
        "Галочка": "1"
    },
    "value": ""
},
{
    "id": "4",
    "title": "Толщина border",
    "type": "select",
    "options": {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px"
    },
    "value": ""
},
{
    "id": "5",
    "title": "Тип border",
    "type": "select",
    "options": {
        "solid": "solid",
        "dashed": "dashed",
        "dotted": "dotted"
    },
    "value": ""
},
{
    "id": "6",
    "title": "Тип border (актив)",
    "type": "select",
    "options": {
        "solid": "solid",
        "dashed": "dashed",
        "dotted": "dotted"
    },
    "value": ""
},
{
    "id": "7",
    "title": "Цвет border (актив)",
    "type": "color",
    "placeholder": "#000000",
    "value": ""
},
{
    "id": "8",
    "title": "Цвет галочки",
    "type": "color",
    "placeholder": "#000000",
    "value": ""
},
{
    "id": "9",
    "title": "Отступы от кнопок",
    "type": "select",
    "options": {
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px"
    },
    "value": ""
},
{
    "id": "10",
    "title": "Цвет фона",
    "type": "color",
    "placeholder": "#cecece",
    "value": ""
},
{
    "id": "11",
    "title": "Цвет фона (актив)",
    "type": "color",
    "placeholder": "#cecece",
    "value": ""
},
{
    "id": "12",
    "title": "Толщина border",
    "type": "select",
    "options": {
        "0px": "0px",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px"
    },
    "value": ""
},
{
    "id": "13",
    "title": "Толщина border (актив)",
    "type": "select",
    "options": {
        "0px": "0px",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px"
    },
    "value": ""
},
{
    "id": "14",
    "title": "Border радиус (рх)",
    "type": "number",
    "placeholder": "10",
    "value": ""
},
{
    "id": "15",
    "title": "Border радиус - актив (рх)",
    "type": "number",
    "placeholder": "10",
    "value": ""
},
{
    "id": "16",
    "title": "Расположение",
    "type": "select",
    "options": {
        "В ряд": "0",
        "В столбик": "1"
    },
    "value": ""
}
]`,

moddefaultsettings: '["","0","0","1px","solid","solid","","","5px","","","0px","0px","","","0"]',
modInputChange: function modcontentfunc() {
    
    if($('.noliminput[id="2"]').val() == "0" && $('.noliminput[id="3"]').val() == "0"){
        $('[id="12"]').parents('.pe-form-group').hide();
        $('[id="13"]').parents('.pe-form-group').hide();
        $('[id="14"]').parents('.pe-form-group').hide();
        $('[id="15"]').parents('.pe-form-group').hide();
        $('[id="8"]').parents('.pe-form-group').hide();
        $('[id="10"]').parents('.pe-form-group').css('display', 'inline-block');
        $('[id="4"]').parents('.pe-form-group').css('display', 'inline-block');
        $('[id="11"]').parents('.pe-form-group').css('display', 'inline-block');
        $('[id="3"]').parents('.pe-form-group').css('display', 'inline-block');
    } else if($('.noliminput[id="2"]').val() == "0" && $('.noliminput[id="3"]').val() == "1"){
        $('[id="12"]').parents('.pe-form-group').hide();
        $('[id="13"]').parents('.pe-form-group').hide();
        $('.noliminput[id="14"]').parents('.pe-form-group').hide();
        $('.noliminput[id="15"]').parents('.pe-form-group').hide();
        $('.noliminput[id="4"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="10"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="11"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="8"]').parents('.pe-form-group').css('display', 'inline-block');
    } else if($('.noliminput[id="2"]').val() == "1"){
        $('.noliminput[id="12"]').parents('.pe-form-group').css('display', 'inline-block'); 
        $('.noliminput[id="13"]').parents('.pe-form-group').css('display', 'inline-block'); 
        $('.noliminput[id="14"]').parents('.pe-form-group').css('display', 'inline-block'); 
        $('.noliminput[id="15"]').parents('.pe-form-group').css('display', 'inline-block'); 
        $('.noliminput[id="8"]').parents('.pe-form-group').hide();
        $('.noliminput[id="4"]').parents('.pe-form-group').hide();
        $('.noliminput[id="10"]').parents('.pe-form-group').hide();
        $('.noliminput[id="11"]').parents('.pe-form-group').hide();
        $('.noliminput[id="3"]').parents('.pe-form-group').hide();
    }


},
modcontent: function modcontentfunc(name) {
    return `

    ${name[1] == '0' && name[2] == '0' ? ` <style> ${name[15] == '0' ? `${name[0]} .t-radio__control { display: inline-block; margin-right: ${name[8]} !important; }` : ''} ${name[0]} .t-radio__indicator { border-style: ${name[4]}; border-width: ${name[3]}; background: ${name[9]}; } ${name[0]} .t-radio__control .t-radio:checked~.t-radio__indicator { border: ${name[3]} ${name[5]} ${name[6]} !important; background: ${name[10]}; } </style> ` : ''}

    ${name[1] == '0' && name[2] == '1' ? ` <style> ${name[15] == '0' ? `${name[0]} .t-radio__control { display: inline-block; margin-right: ${name[8]} !important; }` : ''} ${name[0]} .t-radio__indicator { border-style: ${name[4]}; border-width: ${name[3]}; background: ${name[9]}; } ${name[0]} .t-radio__control .t-radio:checked~.t-radio__indicator { border: ${name[3]} ${name[5]} ${name[6]} !important; background: ${name[10]}; } ${name[0]} .t-radio__indicator:after { opacity: 0; content: ''; position: absolute; left: 1px; border-radius: 0%; top: -2px; width: 3px; height: 8px; border: solid ${name[7]}; border-width: 0 2px 2px 0; transform: rotate(45deg); background: transparent; } ${name[0]} .t-radio__control .t-radio:checked~.t-radio__indicator:after { opacity: 1; } </style> ` : ''}

    ${name[1] == '1' ? ` <style>  ${name[0]} .t-radio__control { padding: 4px 20px; ${name[15] == '0' ? 'display: inline-block;' : 'display: block; width: max-content;'}  margin-right: ${name[8]} !important; } ${name[0]} .t-radio__indicator { border-style:${name[4]}; border-width: ${name[11]}; position: absolute; height: 100%; left: 0; top: 0; width: 100%; border-radius: ${name[13]}px; opacity: 1; } ${name[0]} .t-radio__indicator:after { display: none; } ${name[0]} .t-radio__control .t-radio:checked ~ .t-radio__indicator { border: ${name[12]} ${name[5]} ${name[6]} !important; border-radius: ${name[14]}px; opacity: 1; }  </style> ` : ''}

`;
},
instruction: ``

});



nolimBlocks.push({
video: "5tUBFschccU",
name: "",
cod: "NLM022",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3531-3937-4030-b766-653435656265/Frame_22.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Формы, Прочее",
title: "Кастомные поля в формах",
modsettings: `[
{
    "id": "1",
    "title": "Имя поля",
    "type": "input",
    "placeholder": "nameinput",
    "value": ""
},
{
    "id": "2",
    "title": "Тип поля",
    "type": "select",
    "options": {
        "Число": "0",
        "Цвет": "1",
        "Как в поиске": "2"
    },
    "value": ""
},
{
    "id": "3",
    "title": "Радиус бордера (рх) - если цвет",
    "type": "number",
    "placeholder": "10",
    "value": ""
}

]`,

modoptions: [function modcontentfunc(name) {
    return `<script> $(document).ready(function(){ $('[name="${name}"]').attr('type','number'); setInterval(function(){ $('[name="${name}"]').attr('type','number'); }, 2000); }); </script> `
}, function modcontentfunc(name, name1) {
    return `<script> $(document).ready(function(){ $('[name="${name}"]').attr('type','color'); setInterval(function(){ $('[name="${name}"]').attr('type','color'); }, 2000); }); </script>  <style> [type="color"]{ padding: 0px !important; background-color: transparent !important ; border: 0px !important; } input[type="color"]::-webkit-color-swatch { border: 0; padding: 0px !important; border-radius: ${name1}px; } input[type="color"]::-moz-color-swatch { border: 0; padding: 0px !important; border-radius: ${name1}px; } </style>`
},function modcontentfunc(name) {
    return `<script> $(document).ready(function(){ $('[name="${name}"]').attr('type','search'); setInterval(function(){ $('[name="${name}"]').attr('type','search'); }, 2000); }); </script>`
}
],

moddefaultsettings: '["","",""]',
modcontent: function modcontentfunc(name, i) {
    return `

    ${name[1] == "0" ? nolimBlocks[i].modoptions[0]([name[0]]) : name[1] == "1" ? nolimBlocks[i].modoptions[1]([name[0]], [name[2]]) : name[1] == "2" ? nolimBlocks[i].modoptions[2]([name[0]]) : ""}

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>
ВАЖНО:</b> Если у вас в форме установлен радиус скругления, то при выборе поля "Цвет" в генераторе, укажите такой же радиус скругления<br><br>

Как это работает:<br><br>

1. Добавляем стандартную форму или форму в Zero Block на страницу. В форме создаем поле "Поле для ввода в одну строку" (One line input field);<br>
2. В настройках модификации выбираем тип поля: Число, Цвет или Как в поиске;<br>
3. Указываем имя поля (VARIABLE NAME) и вставляем его в вашу форму в поле "Поле для ввода в одну строку" (One line input field);<br>
4. Нажимаем кнопку "Сохранить и закрыть";<br><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM023",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3935-3939-4236-b038-313937363630/Frame_23.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные, Эффекты, Формы",
title: "Кастомные чекбоксы в формах",
grid: "yes",
modsettings: `[
{
    "id": "1",
    "title": "Id блока",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Тип checkbox",
    "type": "select",
    "options": {
        "Галочка (по умолчанию)": "0",
        "Квадратик": "1",
        "Чекбокс с текстом": "2",
        "Чекбокс 2 круглый": "3",
        "Чекбокс 3 круглый (меньший)": "4"
    },
    "value": ""
},
{
    "id": "3",
    "title": "Расположение checkbox",
    "type": "select",
    "options": {
        "По умолчанию": "0",
        "В ряд (кол-во чекбоксов определяет размер формы)": "1"
    },
    "value": ""
},
{
    "id": "4",
    "title": "Толщина border",
    "type": "select",
    "options": {
        "0px": "0px",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px"
    },
    "value": ""
},
{
    "id": "5",
    "title": "Border radius",
    "type": "select",
    "options": {
        "0px": "0px",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px"
    },
    "value": ""
},
{
    "id": "6",
    "title": "Цвет переключателя",
    "type": "color",
    "placeholder": "#70C767",
    "value": ""
},
{
    "id": "7",
    "title": "Opacity чекбокса",
    "type": "select",
    "options": {
        "100%": "1",
        "90%": "0.9",
        "80%": "0.8",
        "70%": "0.7",
        "60%": "0.6",
        "50%": "0.5",
        "40%": "0.4",
        "30%": "0.3",
        "20%": "0.2",
        "10%": "0.1"
    },
    "value": ""
},
{
    "id": "8",
    "title": "Opacity чекбокса (active)",
    "type": "select",
    "options": {
        "100%": "1",
        "90%": "0.9",
        "80%": "0.8",
        "70%": "0.7",
        "60%": "0.6",
        "50%": "0.5",
        "40%": "0.4",
        "30%": "0.3",
        "20%": "0.2",
        "10%": "0.1"
    },
    "value": ""
},
{
    "id": "9",
    "title": "Цвет фона",
    "type": "color",
    "placeholder": "#cecece",
    "value": ""
},
{
    "id": "10",
    "title": "Цвет фона (active)",
    "type": "color",
    "placeholder": "#ffffff",
    "value": ""
},
{
    "id": "11",
    "title": "Текст",
    "type": "select",
    "options": {
        "ON/OFF": "0",
        "ВКЛ/ВЫКЛ": "1"
    },
    "value": ""
},
{
    "id": "12",
    "title": "Цвет текста",
    "type": "color",
    "placeholder": "#000000",
    "value": ""
},
{
    "id": "13",
    "title": "Цвет текста (active)",
    "type": "color",
    "placeholder": "#000000",
    "value": ""
},
{
    "id": "14",
    "title": "Цвет переключателя",
    "type": "color",
    "placeholder": "#085cf7",
    "value": ""
},
{
    "id": "15",
    "title": "Цвет переключателя (active)",
    "type": "color",
    "placeholder": "#05ff37",
    "value": ""
},
{
    "id": "16",
    "title": "Цвет border",
    "type": "color",
    "placeholder": "#05ff37",
    "value": ""
},
{
    "id": "17",
    "title": "Цвет border (active)",
    "type": "color",
    "placeholder": "#000",
    "value": ""
},
{
    "id": "18",
    "title": "Тип border",
    "type": "select",
    "options": {
        "solid": "solid",
        "dashed": "dashed",
        "dotted": "dotted"
    },
    "value": ""
},
{
    "id": "19",
    "title": "Тип border (active)",
    "type": "select",
    "options": {
        "solid": "solid",
        "dashed": "dashed",
        "dotted": "dotted"
    },
    "value": ""
}
]`,

moddefaultsettings: '["","0","0","","0px","","1","1","","","0","","","","","","","solid","solid"]',
modInputChange: function modcontentfunc() {

    if($('.noliminput[id="2"]').val() == "0" && $('.noliminput[id="4"]').val() == "0px" || $('.noliminput[id="2"]').val() == "1" && $('.noliminput[id="4"]').val() == "0px"){
        $('.noliminput[id="4"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="5"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="6"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="11"]').parents('.pe-form-group').hide();
        $('.noliminput[id="12"]').parents('.pe-form-group').hide();
        $('.noliminput[id="13"]').parents('.pe-form-group').hide();
        $('.noliminput[id="14"]').parents('.pe-form-group').hide();
        $('.noliminput[id="15"]').parents('.pe-form-group').hide();
        $('.noliminput[id="16"]').parents('.pe-form-group').hide();
        $('.noliminput[id="17"]').parents('.pe-form-group').hide();
        $('.noliminput[id="18"]').parents('.pe-form-group').hide();
        $('.noliminput[id="19"]').parents('.pe-form-group').hide();
    } else if($('.noliminput[id="2"]').val() == "0" && $('.noliminput[id="4"]').val() != "0px" || $('.noliminput[id="2"]').val() == "1" && $('.noliminput[id="4"]').val() != "0px"){
        $('.noliminput[id="4"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="5"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="6"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="11"]').parents('.pe-form-group').hide();
        $('.noliminput[id="12"]').parents('.pe-form-group').hide();
        $('.noliminput[id="13"]').parents('.pe-form-group').hide();
        $('.noliminput[id="14"]').parents('.pe-form-group').hide();
        $('.noliminput[id="15"]').parents('.pe-form-group').hide();
        $('.noliminput[id="16"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="17"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="18"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="19"]').parents('.pe-form-group').css('display', 'inline-block');
    } else if($('.noliminput[id="2"]').val() == "2"){
        $('.noliminput[id="4"]').parents('.pe-form-group').hide();
        $('.noliminput[id="5"]').parents('.pe-form-group').hide();
        $('.noliminput[id="6"]').parents('.pe-form-group').hide();
        $('.noliminput[id="11"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="12"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="13"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="14"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="15"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="16"]').parents('.pe-form-group').hide();
        $('.noliminput[id="17"]').parents('.pe-form-group').hide();
        $('.noliminput[id="18"]').parents('.pe-form-group').hide();
        $('.noliminput[id="19"]').parents('.pe-form-group').hide();
    } else if($('.noliminput[id="2"]').val() == "3" || $('.noliminput[id="2"]').val() == "4"){
        $('.noliminput[id="4"]').parents('.pe-form-group').hide();
        $('.noliminput[id="5"]').parents('.pe-form-group').hide();
        $('.noliminput[id="6"]').parents('.pe-form-group').hide();
        $('.noliminput[id="11"]').parents('.pe-form-group').hide();
        $('.noliminput[id="12"]').parents('.pe-form-group').hide();
        $('.noliminput[id="13"]').parents('.pe-form-group').hide();
        $('.noliminput[id="14"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="15"]').parents('.pe-form-group').css('display', 'inline-block');
        $('.noliminput[id="16"]').parents('.pe-form-group').hide();
        $('.noliminput[id="17"]').parents('.pe-form-group').hide();
        $('.noliminput[id="18"]').parents('.pe-form-group').hide();
        $('.noliminput[id="19"]').parents('.pe-form-group').hide();
    }

},
modcontent: function modcontentfunc(name) {
    return `

    ${name[1] == '0' ? `<style> ${name[2] == '1' ? `${name[0]} .t-checkboxes__wrapper .t-checkbox__control{ display: inline-block; margin-right: 20px !important; } ` : ''} ${name[0]} .t-checkbox__indicator { border: ${name[3]} ${name[17]} ${name[15]}; border-radius: ${name[4]}; opacity: ${name[6]}; background-color: ${name[8]}; }  ${name[0]} .t-checkbox__indicator:after { border: ${name[17]} ${name[5]}; border-width: 0 2px 2px 0; left: 0px; top: 2px; position: relative; margin: 0px auto; } ${name[0]} .t-checkbox__control .t-checkbox:checked~.t-checkbox__indicator { opacity: ${name[7]}; background-color: ${name[9]}; border: ${name[3]} ${name[18]} ${name[16]}; } </style>` : ''}

    ${name[1] == '1' ? `<style> ${name[2] == '1' ? `${name[0]} .t-checkboxes__wrapper .t-checkbox__control{ display: inline-block; margin-right: 20px !important; } ` : ''} ${name[0]} .t-checkbox__indicator { border: ${name[3]} ${name[17]} ${name[15]}; border-radius: ${name[4]}; opacity: ${name[6]}; background-color: ${name[8]}; } ${name[0]} .t-checkbox__indicator:after { left: 50%; top: 50%; position: absolute; width: 10px; height: 10px; background-color: ${name[5]}; border-radius: ${name[4]}; border: none; transform: translate(-50%, -50%) !important; }  ${name[0]} .t-checkbox__control .t-checkbox:checked~.t-checkbox__indicator { opacity: ${name[7]}; background-color: ${name[9]}; border: ${name[3]} ${name[18]} ${name[16]}; } </style> ` : ''}

    ${name[1] == '2' ? `<style> ${name[2] == '1' ? `${name[0]} .t-checkbox__control{ display: inline-block; margin-right: 20px !important; } ` : ''} ${name[0]} label.t-checkbox__control { height: 28px; line-height: 28px; position: relative; border: 0px; } ${name[0]} .t-checkbox__control .t-checkbox__indicator { display: inline-block; opacity: ${name[6]}; border: 0px; height: 28px; width: 90px; box-sizing: border-box; position: relative; border-radius: 2px; background: ${name[8]}; transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1); } ${name[0]} .t-checkbox__control .t-checkbox__indicator:before { content: '${name[10] == '0' ? 'off' : 'Выкл'}'; display: inline-block; box-sizing: border-box; width: 45px; position: absolute; top: 0; left: 45px; text-transform: uppercase; text-align: center; color: ${name[11]}; font-size: 10px; line-height: 28px; } ${name[0]} .t-checkbox__control .t-checkbox__indicator:after { display: inline-block; box-sizing: border-box; width: 44px; height: 26px; border-radius: 1px; border: 0px; position: absolute; top: 1px; left: 1px; z-index: 5; text-transform: uppercase; text-align: center; background: ${name[13]}; line-height: 26px; font-size: 10px; transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1); transform: rotate(0deg); } ${name[0]} .t-checkbox__control input[type="checkbox"]:checked + .t-checkbox__indicator { background-color: ${name[9]}; opacity: ${name[7]}; } ${name[0]} .t-checkbox__control input[type="checkbox"]:checked + .t-checkbox__indicator:before { content: '${name[10] == '0' ? 'on' : 'Вкл'}'; color: ${name[12]}; left: 0; } ${name[0]} .t-checkbox__control input[type="checkbox"]:checked + .t-checkbox__indicator:after { background: ${name[14]}; transform: translate3d(44px, 0, 0); } ${name[0]} .t-checkbox__control input[type="checkbox"]:not(:disabled) + .t-checkbox__indicator:hover { cursor: pointer; } ${name[0]} .t-checkbox__control input[type="checkbox"]:not(:disabled) + .t-checkbox__indicator:hover:after { box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4); } </style>` : ''}

    ${name[1] == '3' ? `<style> ${name[2] == '1' ? `${name[0]} label.t-checkbox__control { display: inline-block; margin-right: 20px !important; }` : ''} ${name[0]} .t-checkbox__control .t-checkbox__indicator { display: inline-block; opacity: ${name[6]}; height: 28px; width: 56px; border: 1px solid #00000020; box-sizing: border-box; position: relative; border-radius: 20px; background: ${name[8]}; transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1); } ${name[0]} .t-checkbox__control .t-checkbox__indicator:before { box-sizing: border-box; width: 40px; position: absolute; top: 0; left: 45px; } ${name[0]} .t-checkbox__control .t-checkbox__indicator:after { display: inline-block; box-sizing: border-box; width: 24px; height: 24px; box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3); border-radius: 50%; border: solid ${name[13]}; position: absolute; top: 1px; left: 1px; background:${name[13]}; color: #eee; transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1); transform: rotate(0deg); } ${name[0]} .t-checkbox__control input[type="checkbox"]:checked + .t-checkbox__indicator { background-color: ${name[9]}; opacity: ${name[7]}; } ${name[0]} .t-checkbox__control input[type="checkbox"]:checked + .t-checkbox__indicator:after { background: ${name[14]}; transform: translate3d(28px, 0, 0); border: solid ${name[14]}; } ${name[0]} .t-checkbox__control input[type="checkbox"]:not(:disabled) + .t-checkbox__indicator:hover { cursor: pointer; }</style>` : ''}

    ${name[1] == '4' ? `<style> ${name[2] == '1' ? `${name[0]} label.t-checkbox__control { display: inline-block; margin-right: 20px !important; }` : ''} ${name[0]} .t-checkbox__control .t-checkbox__indicator { height: 14px; opacity: ${name[6]}; width: 36px; border: 0px; border-radius: 20px; background: ${name[8]}; transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1); } ${name[0]} .t-checkbox__control .t-checkbox__indicator:before { width: 20px; top: 0; left: 45px; } ${name[0]} .t-checkbox__control .t-checkbox__indicator:after { position: absolute; border: 0px; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); display: inline-block; box-sizing: border-box; width: 20px; height: 20px; border-radius: 20px; top: -3px; left: 1px; background: ${name[13]}; color: #777; transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1); } ${name[0]} .t-checkbox__control input[type="checkbox"]:checked + .t-checkbox__indicator { background-color: ${name[9]}; opacity: ${name[7]}; } ${name[0]} .t-checkbox__control input[type="checkbox"]:checked + .t-checkbox__indicator:after { background: ${name[14]}; transform: translate3d(16px, 0, 0); } ${name[0]} .t-checkbox__control input[type="checkbox"]:not(:disabled) + .t-checkbox__indicator:hover { cursor: pointer; } ${name[0]} .t-checkbox__control input[type="checkbox"]:not(:disabled) + .t-checkbox__indicator:hover:after { box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4); } ${name[0]} .t-checkbox__control input[type="checkbox"]:disabled + .t-checkbox__indicator { background: #0058ff; }</style>` : ''}

`;
},
instruction: ``

});



nolimBlocks.push({
name: "",
cod: "NLM025",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6530-6634-4562-b862-353639613733/Frame_25.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты, Прочее",
title: "Cвоя кнопка «Назад»",
modsettings: `[
{
    "id": "1",
    "title": "Ссылка для кнопки",
    "type": "input",
    "placeholder": "#back",
    "value": ""
}
]`,

moddefaultsettings: '[""]',
modcontent: function modcontentfunc(name) {
    return `

<script> $(document).ready(function(){ setTimeout(function(){ $('[href="${name[0]}"]').click(function(e){history.go(-1); event.preventDefault();}); },600); }) </script>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>
ВАЖНО:</b> Если у вас в форме установлен радиус скругления, то при выборе поля "Цвет" в генераторе, укажите такой же радиус скругления<br><br>

Как это работает:<br><br>

1. Cоздаём свою кнопку (картинка, шейп, кнопка, текст) в зеро блоке и указываем ей ссылку #back;<br>
2. Нажимаем кнопку "Сохранить и закрыть";<br><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM026",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6135-6633-4634-a365-623963653463/Frame_26.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты",
title: "Эффект рентгена для изображений",
modsettings: `[
{
    "id": "1",
    "title": "Class элемента image",
    "type": "input",
    "placeholder": "nolimxray",
    "value": ""
},
{
    "id": "2",
    "title": "Отображения эффекта на экранах",
    "type": "select",
    "options": {
        "От 1200 px": "0",
        "На всех экранах": "1"
    },
    "value": "0"
},
{
    "id": "3",
    "title": "Размер круга рентгена (без рх)",
    "type": "number",
    "placeholder": "50",
    "value": ""
},
{
    "id": "4",
    "title": "Добавить border кругу",
    "type": "checkbox",
    "value": ""
},
{
    "id": "5",
    "title": "Цвет border",
    "type": "color",
    "value": ""
},
{
    "id": "6",
    "title": "Толщина border (без px)",
    "type": "number",
    "value": ""
},
{
    "id": "7",
    "title": "Загружаем 2 фото",
    "type": "image",
    "placeholder": "https://images.unsplash.com/photo-1625285049426-5dbed0167ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
    "value": ""
}
]`,

moddefaultsettings: '["","0","","","","",""]',
modcontent: function modcontentfunc(name) {
    return `

<style> .svg-wr { position: relative; } .svg-wr img, .svg-wr image { width: 100%; } .svg-wr svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style> <script> function createxray(){ let svgWR = document.querySelectorAll(".svg-wr"); for( let i = 0; i < svgWR.length; i++){ let svgElement = document.querySelectorAll('.svg-wr svg')[i]; let imageElement = document.querySelectorAll('.svg-wr image')[i]; let maskedElement = document.querySelectorAll('.svg-wr .mask-circle')[i]; let circleFeedback = document.querySelectorAll('.svg-wr .circle-shadow')[i]; let svgPoint = svgElement.createSVGPoint(); function cursorPoint(e, svg) { svgPoint.x = e.clientX; svgPoint.y = e.clientY; return svgPoint.matrixTransform(svg.getScreenCTM().inverse()); } function update(svgCoords) { maskedElement.setAttribute('cx', svgCoords.x); maskedElement.setAttribute('cy', svgCoords.y); circleFeedback.setAttribute('cx', svgCoords.x); circleFeedback.setAttribute('cy', svgCoords.y); } window.addEventListener('resize', function() { imageElement.style.width = svgWR.offsetWidth; imageElement.style.height = svgWR.offsetHeight; }); window.addEventListener('mousemove', function(e) { update(cursorPoint(e, svgElement)); }, false); document.addEventListener('touchmove', function(e) { e.preventDefault(); let touch = e.targetTouches[0]; if (touch) { update(cursorPoint(touch, svgElement)); } }, false); } } $(document).ready(function(){  ${name[1] == "0" ? "if ($(window).width() >= 1200){" : ""}  $('.${name[0]}'+' img').wrap("<div class='svg-wr'></div>"); var strgn = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink"><defs><clipPath id="'+'${name[0]}'+'mask1"><circle class="mask-circle" cx="50%" cy="50%" r="'+'${n2i(name[2],'50')}px'+'" style="fill: #ffffff"/></clipPath></defs><g clip-path="url(#'+'${name[0]}'+'mask1)"><image xmlns:xlink= "http://www.w3.org/1999/xlink" xlink:href="'+'${name[6]}'+'" /></g><circle class="circle-shadow" cx="50%" cy="50%" r="'+'${n2i(name[2],'50')}px'+'" style="stroke: '+'${n2i(name[4],'#fff')}'+'; fill: transparent; stroke-width: '+'${n2i(name[5],'0')}'+';"/></svg>'; $('.${name[0]}'+' img').after(strgn); setTimeout(function(){ createxray(); },600);  ${name[1] == "0" ? "}" : ""}  }); </script> 

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>Как это работает:</b><br>
1. Если вам нужно использовать несколько изображений с этим эффектом на одной странице, пропишите уникальный класс для каждого изображения;<br>
2. Добавляем своё изображение элементом image (не шейп) в Зеро Блок и указываем класс к нему такой же как и в настройках модификации;<br>
Что бы указать класс у элемента, нажимаешь на него правой кнопкой мыши и выбираем из списка последнюю строку "Add CSS Class Name", далее, справа в настройках указываем тот же класс, что и в модификации;<br>
3. Загружаем второе изображение в настройках модификации;<br>
4. Настройте параметры эффекта (размер круга, размер и цвет бордера, отключение отображения на экранах до 1200px);<br>
6. Нажимаем кнопку "Сохранить и закрыть";<br>

</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM027",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3937-3963-4762-a561-663230643836/Frame_27.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты, Кнопки",
title: "Эффект побуквенной смены цвета текста",
modsettings: `[
{
    "id": "1",
    "title": "Class блок с текстом",
    "type": "input",
    "placeholder": "myclass",
    "value": ""
},
{
    "id": "2",
    "title": "Цвет второго текста:",
    "type": "color",
    "value": ""
},
{
    "id": "3",
    "title": "Отключить эффект на экранах до 1200рх",
    "type": "select",
    "options": {
        "Да": "0",
        "Нет": "1"
    },
    "value": "0"
}
]`,

moddefaultsettings: '["","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> .${n2i(name[0],'nolimtexteffect')} .tn-atom{ display: inline-block; overflow: hidden; white-space: nowrap; } ${name[2] == "0" ? "@media screen and (min-width: 1200px){" : ""} .${n2i(name[0],'nolimtexteffect')}:hover .letter, .${n2i(name[0],'nolimtexteffect')}.play .letter { transform: translateY(-100%); } .${n2i(name[0],'nolimtexteffect')} .block:last-child { color: ${n2i(name[1],'#000000')}; } .${n2i(name[0],'nolimtexteffect')} .letter { display: inline-block; transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1); } .letter:nth-child(1) { transition-delay: 0s; } .letter:nth-child(2) { transition-delay: 0.015s; } .letter:nth-child(3) { transition-delay: 0.03s; } .letter:nth-child(4) { transition-delay: 0.045s; } .letter:nth-child(5) { transition-delay: 0.06s; } .letter:nth-child(6) { transition-delay: 0.075s; } .letter:nth-child(7) { transition-delay: 0.09s; } .letter:nth-child(8) { transition-delay: 0.105s; } .letter:nth-child(9) { transition-delay: 0.12s; } .letter:nth-child(10) { transition-delay: 0.135s; } .letter:nth-child(11) { transition-delay: 0.15s; } .letter:nth-child(12) { transition-delay: 0.165s; } .letter:nth-child(13) { transition-delay: 0.18s; } .letter:nth-child(14) { transition-delay: 0.195s; } .letter:nth-child(15) { transition-delay: 0.21s; } .letter:nth-child(16) { transition-delay: 0.225s; } .letter:nth-child(17) { transition-delay: 0.24s; } .letter:nth-child(18) { transition-delay: 0.255s; } .letter:nth-child(19) { transition-delay: 0.27s; } .letter:nth-child(20) { transition-delay: 0.285s; } .letter:nth-child(21) { transition-delay: 0.3s; } .letter:nth-child(22) { transition-delay: 0.315s; } .letter:nth-child(23) { transition-delay: 0.33s; } .letter:nth-child(24) { transition-delay: 0.345s; } .letter:nth-child(25) { transition-delay: 0.36s; } .letter:nth-child(26) { transition-delay: 0.375s; } .letter:nth-child(27) { transition-delay: 0.39s; } .letter:nth-child(28) { transition-delay: 0.405s; } .letter:nth-child(29) { transition-delay: 0.42s; } .letter:nth-child(30) { transition-delay: 0.435s; } .letter:nth-child(31) { transition-delay: 0.45s; } .letter:nth-child(32) { transition-delay: 0.465s; } .letter:nth-child(33) { transition-delay: 0.48s; }.letter:nth-child(34) { transition-delay: 0.495s; } .letter:nth-child(35) { transition-delay: 0.51s; } .letter:nth-child(36) { transition-delay: 0.525s; } .letter:nth-child(37) { transition-delay: 0.54s; } .letter:nth-child(38) { transition-delay: 0.555s; } .letter:nth-child(39) { transition-delay: 0.57s; } .letter:nth-child(40) { transition-delay: 0.585s; } .letter:nth-child(41) { transition-delay: 0.6s; } .letter:nth-child(42) { transition-delay: 0.615s; } .letter:nth-child(43) { transition-delay: 0.63s; } .letter:nth-child(44) { transition-delay: 0.645s; } .letter:nth-child(45) { transition-delay: 0.66s; } .letter:nth-child(46) { transition-delay: 0.675s; } .letter:nth-child(47) { transition-delay: 0.69s; } .letter:nth-child(48) { transition-delay: 0.705s; } .letter:nth-child(49) { transition-delay: 0.72s; } .letter:nth-child(50) { transition-delay: 0.735s; } .letter:nth-child(51) { transition-delay: 0.75s; } .letter:nth-child(52) { transition-delay: 0.765s; } .letter:nth-child(53) { transition-delay: 0.78s; } .letter:nth-child(54) { transition-delay: 0.795s; } .letter:nth-child(55) { transition-delay: 0.810s; } .letter:nth-child(56) { transition-delay: 0.825s; } .letter:nth-child(57) { transition-delay: 0.84s; } .letter:nth-child(58) { transition-delay: 0.855s; } .letter:nth-child(59) { transition-delay: 0.87s; } .letter:nth-child(60) { transition-delay: 0.885s; } ${name[2] == "0" ? "}" : ""} </style> <script> ${name[2] == "0" ? "if ($(window).width() >= 1200){" : ""} function onresizeAnimText${n2i(name[0],'nolimtexteffect')}(){ let animtextheight = $('.${n2i(name[0],'nolimtexteffect')}'+' .tn-atom .block:eq(0)').css('height'); $('.${n2i(name[0],'nolimtexteffect')}'+' .tn-atom .block').css('height', animtextheight); } $(document).ready(function(){ var animtextheight = $('.${n2i(name[0],'nolimtexteffect')}'+' .tn-atom').css('height'); let elements = document.querySelectorAll('.${n2i(name[0],'nolimtexteffect')}'+' .tn-atom'); elements.forEach(element => { let innerText = element.innerText; element.innerHTML = ''; let textContainer = document.createElement('div'); textContainer.classList.add('block'); for (let letter of innerText) { let span = document.createElement('span'); span.innerText = letter.trim() === '' ? '\xa0': letter; span.classList.add('letter'); textContainer.appendChild(span); } element.appendChild(textContainer); element.appendChild(textContainer.cloneNode(true)); }); setTimeout(() => { elements.forEach(element => { element.classList.add('play'); }) }, 600); elements.forEach(element => { element.addEventListener('mouseover', () => { element.classList.remove('play'); }); }); $('.${n2i(name[0],'nolimtexteffect')}'+' .tn-atom').css('height', animtextheight); }); ${name[2] == "0" ? "}" : ""} </script>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>
ВАЖНО! Если используете два слова с разными размерами шрифтов, цветов, жирности - сгенерируйте на каждой слово код со своим уникальным классом.</b><br><br>

Как это работает:<br><br>

1. Добавляем свой текст в Зеро Блок и указываем класс к нему такой же как и в генераторе;<br><br>
Что бы указать класс у элемента, нажимаешь на него правой кнопкой мыши и выбираем из списка последнюю строку "Add CSS Class Name", далее, справа в настройках указываем тот же класс что и в генераторе;<br><br>
2. Выбираем цвет для смены;
2. Нажимаем кнопку "Сохранить и закрыть";<br><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM028",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3361-3930-4136-a330-316238323562/Frame_28.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты, Текст",
title: "Эффект неона для текста",
modsettings: `[
{
    "id": "1",
    "title": "Class текста",
    "type": "input",
    "placeholder": "myclass",
    "value": ""
},
{
    "id": "2",
    "title": "Цвет фона текста:",
    "placeholder": "#095efb",
    "type": "color",
    "value": ""
},
{
    "id": "3",
    "title": "Мерцание неона",
    "type": "select",
    "options": {
        "Включить": "0",
        "Выключить": "1"
    },
    "value": "0"
}
]`,
moddefaultsettings: '["","","0"]',
modcontent: function modcontentfunc(name) {
  return `

    <style> :root { --neon-text-color${name[1].replace('#','')}: ${name[1]}; } .${name[0]} { animation: flicker 1.5s infinite alternate; animation-play-state:${name[2] == "0" ? "running" : "paused"}; } .${name[0]}::-moz-selection {  color: var(--neon-text-color${name[1].replace('#','')}); } .${name[0]}::selection {  color: var(--neon-text-color${name[1].replace('#','')}); } .${name[0]}:focus { outline: none; } @keyframes flicker { 0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff, 0 0 2rem var(--neon-text-color${name[1].replace('#','')}), 0 0 4rem var(--neon-text-color${name[1].replace('#','')}); } 20%, 24%, 55% { text-shadow: none; box-shadow: none; } } </style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>Как это работает:</b><br>
1. Добавляем свой текст в Зеро Блок и указываем класс к нему такой же как и в настройках модификации;<br>
Что бы указать класс у элемента, нажимаешь на него правой кнопкой мыши и выбираем из списка последнюю строку "Add CSS Class Name", далее, справа в настройках указываем тот же класс что и в модификаии;<br>
2. Выбираем цвет свечения;<br>
3. Включаем эффект мерцания;<br>
4. Настраиваем бордер;<br>
6. Нажимаем кнопку "Сохранить и закрыть";<br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM031",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6533-3839-4935-b965-366463653431/Frame_31.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты, Прочее",
title: "Центрирование нижнего ряда иконок в блоке FR201",
modsettings: `[
{
    "id": "1",
    "title": "id блока",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Карточки в мобильной версии:",
    "type": "select",
    "options": {
        "Стандарт (1 в ряд)": "0",
        "2 в ряд": "1"
    },
    "value": ""
},
{
    "id": "3",
    "title": "Размер заголовка в блоке (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "4",
    "title": "Размер описания в блоке (px)",
    "type": "number",
    "placeholder": "18",
    "value": ""
},
{
    "id": "5",
    "title": "Размер заголовка в карточках (px)",
    "type": "number",
    "placeholder": "18",
    "value": ""
},
{
    "id": "6",
    "title": "Размер описания в карточках (px)",
    "type": "number",
    "placeholder": "14",
    "value": ""
},
{
    "id": "7",
    "title": "Расположение контента в карточке в мобилке",
    "type": "select",
    "options": {
        "Влево": "0",
        "Вправо": "1",
        "По центру": "2"
    },
    "value": ""
},
{
    "id": "8",
    "title": "Расположение последней карточки в мобилке",
    "type": "select",
    "options": {
        "Слева": "0",
        "По центру": "1"
    },
    "value": ""
}
]`,

moddefaultsettings: '["","","","","","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> ${n2i(name[0],'#rec000000')} .t490 { text-align: center !important; } ${n2i(name[0],'#rec000000')} .t490__separator ~ .t490__col:nth-last-child(1), ${n2i(name[0],'#rec000000')} .t490__separator ~ .t490__col:nth-last-child(2), ${n2i(name[0],'#rec000000')} .t490__separator ~ .t490__col:nth-last-child(3){ float: none !important; display: inline-block !important; vertical-align: top !important; } ${n2i(name[0],'#rec000000')} .t490 .t490__separator ~ .t490__col.t-col_3:nth-last-child(4) { float: left !important; display: inline !important; } ${n2i(name[0],'#rec000000')} .t490 .t490__separator ~ .t490__col.t-col_3:nth-last-child(4) ~ .t490__col:nth-last-child(3) { float: left !important; display: inline !important; } ${n2i(name[0],'#rec000000')} .t490 .t490__separator ~ .t490__col.t-col_3:nth-last-child(4) ~ .t490__col:nth-last-child(2) { float: left !important; display: inline !important; } ${n2i(name[0],'#rec000000')} .t490 .t490__separator ~ .t490__col.t-col_4:nth-last-child(3) { float: left !important; display: inline !important; } ${n2i(name[0],'#rec000000')} .t490 .t490__separator ~ .t490__col.t-col_4:nth-last-child(3) ~ .t490__col:nth-last-child(2) { float: left !important; display: inline !important; } ${n2i(name[0],'#rec000000')} .t490 .t490__separator ~ .t490__col.t-col_6:nth-last-child(2) { float: left !important; display: inline !important; } ${n2i(name[0],'#rec000000')} .t490 .t490__separator ~ .t490__col.t-col_6:nth-last-child(2) ~ .t490__col:nth-last-child(1) { float: left !important; display: inline !important; } @media screen and (max-width: 960px){ ${name[1] == "0" && name[6] == "0" ? `${n2i(name[0],'#rec000000')} .t490__col.t-col { text-align: left; }` : name[1] == "0" && name[6] == "1" ? `${n2i(name[0],'#rec000000')} .t490__col.t-col { text-align: right; }` : name[1] == "0" && name[6] == "2" ? `${n2i(name[0],'#rec000000')} .t490__col.t-col { text-align: center; }` : name[1] == "1" && name[7] == "0" && name[6] == "0" ? `${n2i(name[0],'#rec000000')} .t490 { text-align: left !important; } ${n2i(name[0],'#rec000000')} .t-container { max-width: 100%; } ${n2i(name[0],'#rec000000')} .t-clear.t490__separator { display: none; } ${n2i(name[0],'#rec000000')} .t490__col.t-col { display: inline-block; max-width: 49%; vertical-align: top; text-align: left; padding-left: 10px; padding-right: 10px; }` : name[1] == "1" && name[7] == "0" && name[6] == "1" ? `${n2i(name[0],'#rec000000')} .t490 { text-align: left !important; } ${n2i(name[0],'#rec000000')} .t-container { max-width: 100%; } ${n2i(name[0],'#rec000000')} .t-clear.t490__separator { display: none; } ${n2i(name[0],'#rec000000')} .t490__col.t-col { display: inline-block; max-width: 49%; vertical-align: top; text-align: right; padding-left: 10px; padding-right: 10px; }` : name[1] == "1" && name[7] == "0" && name[6] == "2" ? `${n2i(name[0],'#rec000000')} .t490 { text-align: left !important; } ${n2i(name[0],'#rec000000')} .t-container { max-width: 100%; } ${n2i(name[0],'#rec000000')} .t-clear.t490__separator { display: none; } ${n2i(name[0],'#rec000000')} .t490__col.t-col { display: inline-block; max-width: 49%; vertical-align: top; text-align: center; padding-left: 10px; padding-right: 10px; }` : name[1] == "1" && name[7] == "1" && name[6] == "0" ? `${n2i(name[0],'#rec000000')} .t-container { max-width: 100%; } ${n2i(name[0],'#rec000000')} .t-clear.t490__separator { display: none; } ${n2i(name[0],'#rec000000')} .t490__col.t-col { display: inline-block; max-width: 49%; vertical-align: top; text-align: left; padding-left: 10px; padding-right: 10px; }` : name[1] == "1" && name[7] == "1" && name[6] == "1" ? `${n2i(name[0],'#rec000000')} .t-container { max-width: 100%; } ${n2i(name[0],'#rec000000')} .t-clear.t490__separator { display: none; } ${n2i(name[0],'#rec000000')} .t490__col.t-col { display: inline-block; max-width: 49%; vertical-align: top; text-align: right; padding-left: 10px; padding-right: 10px; }` : name[1] == "1" && name[7] == "1" && name[6] == "2" ? `${n2i(name[0],'#rec000000')} .t-container { max-width: 100%; } ${n2i(name[0],'#rec000000')} .t-clear.t490__separator { display: none; } ${n2i(name[0],'#rec000000')} .t490__col.t-col { display: inline-block; max-width: 49%; vertical-align: top; text-align: center; padding-left: 10px; padding-right: 10px; }` : ""} ${n2i(name[0],'#rec000000')} .t490 .t-name, ${n2i(name[0],'#rec000000')} .t490 .t-heading, ${n2i(name[0],'#rec000000')} .t490 .t-name *, ${n2i(name[0],'#rec000000')} .t490 .t-heading * { font-size: ${n2i(name[4],'20')}px!important; } ${n2i(name[0],'#rec000000')} .t490 .t-descr, ${n2i(name[0],'#rec000000')} .t490 .t-descr * { font-size: ${n2i(name[5],'14')}px!important; } ${n2i(name[0],'#rec000000')} .t490 .t-title, ${n2i(name[0],'#rec000000')} .t490 .t-title * { font-size: ${n2i(name[2],'20')}px!important; } ${n2i(name[0],'#rec000000')}[data-record-type="490"] .t490 .t-section__descr, ${n2i(name[0],'#rec000000')}[data-record-type="490"] .t490 .t-section__descr * { font-size: ${n2i(name[3],'16')}px!important; } } </style> 

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>
ВАЖНО! Если используете два слова с разными размерами шрифтов, цветов, жирности - сгенерируйте на каждой слово код со своим уникальным классом.</b><br><br>

Как это работает:<br><br>

1. Добавляем свой текст в Зеро Блок и указываем класс к нему такой же как и в генераторе;<br><br>
Что бы указать класс у элемента, нажимаешь на него правой кнопкой мыши и выбираем из списка последнюю строку "Add CSS Class Name", далее, справа в настройках указываем тот же класс что и в генераторе;<br><br>
2. Выбираем цвет для смены;
2. Нажимаем кнопку "Сохранить и закрыть";<br><br>
</div>`
});



nolimBlocks.push({
video: "ws70iTlTFLs",
name: "",
cod: "NLM032",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3235-6165-4138-b038-383461346339/Frame_32.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты",
title: "Эффект лупы для изображений в Zero Block",
modsettings: `[
{
    "id": "1",
    "title": "Класс изображения",
    "type": "input",
    "placeholder": "myloupe",
    "value": ""
},
{
    "id": "2",
    "title": "Ширина лупы (px)",
    "type": "number",
    "placeholder": "150",
    "value": ""
},
{
    "id": "3",
    "title": "Высота лупы (px)",
    "type": "number",
    "placeholder": "150",
    "value": ""
},
{
    "id": "4",
    "title": "Радиус скругления",
    "type": "number",
    "placeholder": "75",
    "value": ""
},
{
    "id": "5",
    "title": "Толщина обводки (px)",
    "type": "number",
    "placeholder": "75",
    "value": ""
},
{
    "id": "6",
    "title": "Цвет обводки",
    "type": "color",
    "value": ""
},
{
    "id": "7",
    "title": "Цвет фона вне фото",
    "type": "color",
    "value": ""
},
{
    "id": "8",
    "title": "Тень: position-x (px)",
    "type": "number",
    "placeholder": "0",
    "value": ""
},
{
    "id": "9",
    "title": "Тень: position-y (px)",
    "type": "number",
    "placeholder": "0",
    "value": ""
},
{
    "id": "10",
    "title": "Тень: blur (px)",
    "type": "number",
    "placeholder": "0",
    "value": ""
},
{
    "id": "11",
    "title": "Тень: strech (px)",
    "type": "number",
    "placeholder": "0",
    "value": ""
},
{
    "id": "12",
    "title": "Тень: цвет",
    "type": "colorrgbaopacity",
    "value": ""
}
]`,

moddefaultsettings: '["","","","","","","","","","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<script> (function(a){a.fn.loupe=function(b){var c=a.extend({loupe:"loupe",width:${n2i(name[1],'150')},height:${n2i(name[2],'160')} },b||{});return this.length?this.each(function(){var j=a(this),g,k,f=j.is("img")?j:j.find("img:first"),e,h=function(){k.hide()},i;if(j.data("loupe")!=null){return j.data("loupe",b)}e=function(p){var o=f.offset(),q=f.outerWidth(),m=f.outerHeight(),l=c.width/2,n=c.height/2;if(!j.data("loupe")||p.pageX>q+o.left+10||p.pageX<o.left-10||p.pageY>m+o.top+10||p.pageY<o.top-10){return h()}i=i?clearTimeout(i):0;k.show().css({left:p.pageX-l,top:p.pageY-n});g.css({left:-(((p.pageX-o.left)/q)*g.width()-l)|0,top:-(((p.pageY-o.top)/m)*g.height()-n)|0})};k=a("<div />").addClass(c.loupe).css({width:c.width,height:c.height,position:"absolute",overflow:"hidden"}).append(g=a("<img />").attr("src",j.attr(j.is("img")?"src":"href")).css("position","absolute")).mousemove(e).hide().appendTo("body");j.data("loupe",true).mouseenter(e).mouseout(function(){i=setTimeout(h,10)})}):this}}(jQuery)); </script> <style> .demo { float:left; position:absolute; width:100%; top:0; } .loupe { background-color: ${name[6]}; background: ${name[6]}; border: ${n2i(name[4],'1')}px solid ${name[5]}; z-index: 9999999; border-radius: ${n2i(name[3],'75')}px; box-shadow: ${n2i(name[7],'10')}px ${n2i(name[8],'5')}px ${n2i(name[9],'5')}px ${n2i(name[10],'3')}px ${name[11]}; cursor:none; } </style> <script type="text/javascript"> $(document).ready(function(){ setTimeout(function(){ if ($(window).width() >= 960) { $('.${n2i(name[0],'myloupe')}[data-elem-type="image"] img').addClass('imgloupe'); for(let i = 0; i < $('.imgloupe').length; i++){  if( "y" === window.lazy ){ var imagelink = $('.imgloupe:eq(' + i + ')').attr('data-original'); } else { var imagelink = $('.imgloupe:eq(' + i + ')').attr('src'); } $('<img src=" '+imagelink+' " class="demo t-img">').insertAfter('.imgloupe:eq('+i+')'); }; $('.demo').loupe(); } }, 500); }); </script> 

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>ВАЖНО: Модификация не работает с элементом Shape!</b><br><br>
Как это работает:<br><br>

1. Добавляем своё изображение в Зеро Блок и указываем класс к нему такой же как и в настройках;<br>
&bull; Чтобы изображение увеличивалось, исходный файл изображения должен быть больше изображения в зеро блоке;<br>
2. Настраиваем размер лупы, радиус скругления, толщину и цвет обводки, цвет фона лупа вне фото;<br>
3. Настраиваем тень: позиционирование по X и Y, blur, strech и цвет;<br>
4. Нажимаем кнопку "Сохранить и закрыть";<br><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM033",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3430-6161-4634-b664-333363303435/Frame_33.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты, Прочее, Текст",
title: "Кастомизируем блок TX16N2",
modsettings: `[
{
    "id": "1",
    "title": "Ссылка на иконку",
    "type": "image",
    "placeholder": "",
    "value": ""
},
{
    "id": "2",
    "title": "Радиус бордера (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "3",
    "title": "Цвет фона иконки",
    "type": "color",
    "placeholder": "#bdd3ff",
    "value": ""
},
{
    "id": "4",
    "title": "Цвет фона активной иконки",
    "type": "color",
    "placeholder": "#bdd3ff",
    "value": ""
},
{
    "id": "5",
    "title": "Цвет фона активной вкладки",
    "type": "color",
    "placeholder": "#940000",
    "value": ""
},
{
    "id": "6",
    "title": "Цвет текста активной вкладки",
    "type": "color",
    "placeholder": "#9effc2",
    "value": ""
},
{
    "title": "Текст в мобильной версии:",
    "type": "text"
},
{
    "id": "7",
    "title": "Размер заголовка (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "8",
    "title": "Размер описания (px)",
    "type": "number",
    "placeholder": "18",
    "value": ""
}
]`,

moddefaultsettings: '["","","","","","","","",""]',
modcontent: function modcontentfunc(name) {
  return `

    <style> .t668__opened .t668__lines { -moz-transform: rotate(-180deg); -ms-transform: rotate(-180deg); -webkit-transform: rotate(-180deg); -o-transform: rotate(-180deg); transform: rotate(-180deg); } .t668__lines svg { display: none; } .t668__lines::after { content: " "; width: 24px; height: 24px; position: absolute; left: 0; background-image:url(${n2i(name[0],'https://static.tildacdn.com/tild3265-3339-4162-b432-646566326363/svg-editor-image.svg')}); background-size: 100%; background-repeat: no-repeat; background-position: center; } .t668__accordion { border-radius: ${n2i(name[1],'0')}px !important; -moz-border-radius:${n2i(name[1],'0')}px !important; -webkit-border-radius:${n2i(name[1],'0')}px !important; -khtml-border-radius:${n2i(name[1],'0')}px !important; } .t668__wrapper { border-radius: ${n2i(name[1],'0')}px !important; -moz-border-radius:${n2i(name[1],'0')}px !important; -webkit-border-radius:${n2i(name[1],'0')}px !important; -khtml-border-radius:${n2i(name[1],'0')}px !important; } .t668__opened { background-color: ${name[4]} !important; border-radius: ${n2i(name[1],'0')}px ${n2i(name[1],'0')}px 0 0!important; -moz-border-radius:${n2i(name[1],'0')}px ${n2i(name[1],'0')}px 0 0 !important; -webkit-border-radius:${n2i(name[1],'0')}px ${n2i(name[1],'0')}px 0 0!important; -khtml-border-radius:${n2i(name[1],'0')}px ${n2i(name[1],'0')}px 0 0!important; }.t668__content{ border-radius: 0 0 ${n2i(name[1],'0')}px ${n2i(name[1],'0')}px !important; -moz-border-radius:0 0 ${n2i(name[1],'0')}px ${n2i(name[1],'0')}px !important; -webkit-border-radius:0 0 ${n2i(name[1],'0')}px ${n2i(name[1],'0')}px !important; -khtml-border-radius:0 0 ${n2i(name[1],'0')}px ${n2i(name[1],'0')}px !important; } .t668__text { padding-top: 5px; } .t668__header.t668__opened ~ .t668__content { background-color: ${name[4]} !important; } .t668__circle { background-color: ${name[2]} !important; } .t668__opened .t668__circle { background-color: ${name[3]} !important; } .t668__opened .t668__title { color: ${name[5]} !important; } .t668__header.t668__opened ~ .t668__content .t668__text{ color: ${name[5]} !important; } @media screen and (max-width: 640px){ .t668__title { font-size: ${n2i(name[7],'18')}px!important; } .t668__text { font-size: ${n2i(name[8],'14')}px!important; } } </style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>ВАЖНО:</b> Включите в настройках блока галочку "Аккордеон. Отображать только одну раскрытую карточку"<br><br>
Как это работает:<br><br>

1. Загружаем изображение для иконки;<br>
2. Кастомизируйте блок, используя настройки: скругление, цвет фона активной вкладки, цвет текста активной вкладки, размер текста в мобильной версии;<br>
3. Настраиваем тень: позиционирование по X и Y, blur, strech и цвет;<br>
4. Нажимаем кнопку "Сохранить и закрыть";<br><br>
</div>`
});


/*
nolimBlocks.push({
name: "",
cod: "NLM034",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3438-3834-4536-b636-353833356334/Frame_34.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "Как оптимизировать загрузку Яндекс карты",
modsettings: `[
{
    "id": "1",
    "title": "Ссылка из конструктора",
    "type": "input",
    "placeholder": "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6d9c246fca15ae034f5446161634d83f026b748d4debe5db165774acebbb7b46&amp;width=419&amp;height=323&amp;lang=ru_RU&amp;scroll=true",
    "value": ""
},
{
    "id": "2",
    "title": "Размер прелоадера (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "3",
    "title": "Размер бордера (px)",
    "type": "number",
    "placeholder": "1",
    "value": ""
},
{
    "id": "4",
    "title": "Цвет прелоадера",
    "type": "color",
    "value": ""
},
{
    "id": "5",
    "title": "Цвет фона прелоадера",
    "type": "color",
    "value": ""
},
{
    "id": "6",
    "title": "Непрозрачность",
    "type": "select",
    "options": {
        "100%": "100%",
        "95%": "95%",
        "90%": "90%",
        "80%": "80%",
        "70%": "70%",
        "60%": "60%",
        "50%": "50%",
        "40%": "40%",
        "30%": "30%",
        "20%": "20%",
        "10%": "10%"
    },
    "value": ""
}
]`,
moddefaultsettings: '["","","","","","50%"]',
modoptions: [function modcontentfunc(name) {
    
    if(name != '' && name.includes('width=') && name.includes('height=')){
        var newStr = name.split('width=')[1].split('&amp;height=')[0];
        name = name.replace(newStr,'100%');
            console.log(name);
        newStr = name.split('height=')[1].split('amp;')[0];
            console.log(newStr);
        name = name.replace(newStr,'100%&');
        
        name = name.split('src="')[1].split('"')[0];
        // name = name.join();
        // name = name.replace('<script type="text/javascript" charset="utf-8" async src="', '');
        // name = name.replace('"></script>', '');
    }
    return name;
}],
modcontent: function modcontentfunc(name, i) {
    return `

<div id="kartazero" class="wsending" style="width: 100%; height: 100%;"></div> <script> function myandexmap() { setTimeout(function(){ $('#kartazero').removeClass('wsending'); },800); var js=document.createElement('script'); let parent = document.querySelector('#kartazero'); js.src = "${nolimBlocks[i].modoptions[0](name[0])}"; parent.appendChild(js); } $(window).on('load', function() { setTimeout(myandexmap, 3000); }); </script> <style> .wsending { opacity: ${name[5]}; pointer-events:none; } .wsending:before { content: ''; box-sizing: border-box; position: absolute; top: 50%; left: 50%; width: 150px; height: 150px; margin-top: -${(name[1] / 2).toFixed(0)}px; margin-left: -${(name[1] / 2).toFixed(0)}px; border-radius: 50%; border: ${n2i(name[2],'0')}px solid ${name[3]}; border-top-color: ${name[4]}; animation: t-submit-spinner .6s linear infinite; } </style>

`;
}
});
*/


nolimBlocks.push({
name: "",
cod: "NLM035",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3466-3839-4939-b038-323461326131/Frame_35.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Формы, Прочее",
title: "Добавляем в стандартный блок BF502N кнопку закрытия",
modsettings: `[
{
    "id": "1",
    "title": "id блока BF502N",
    "type": "input",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Текст кнопки",
    "type": "input",
    "placeholder": "Закрыть",
    "value": ""
},
{
    "id": "3",
    "title": "Расположение кнопки",
    "type": "select",
    "options": {
        "Слева": "0",
        "Справа": "1"
    },
    "value": ""
},
{
    "id": "4",
    "title": "Ширина кнопки",
    "type": "select",
    "options": {
        "50%": "0",
        "Резиновая": "1"
    },
    "value": ""
},
{
    "id": "5",
    "title": "Цвет фона",
    "type": "color",
    "value": ""
},
{
    "id": "6",
    "title": "Цвет фона (при наведении)",
    "type": "color",
    "value": "" 
},
{
    "id": "7",
    "title": "Цвет текста",
    "type": "color",
    "value": ""
},
{
    "id": "8",
    "title": "Цвет текста (при наведении)",
    "type": "color",
    "value": ""
},
{
    "id": "9",
    "title": "Толщина обводки (px)",
    "type": "number",
    "placeholder": "0",
    "value": ""
},
{
    "id": "10",
    "title": "Толщина обводки при наведении (px)",
    "type": "number",
    "placeholder": "2",
    "value": ""
},
{
    "id": "11",
    "title": "Цвет обводки",
    "type": "color",
    "value": ""
},
{
    "id": "12",
    "title": "Цвет обводки при наведении",
    "type": "color",
    "value": ""
}
]`,

moddefaultsettings: '["","","","","","","","","","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> ${name[0]} .t702 .t-form__submit { display: ${name[3] == "0" ? "table" : "flex"}; } ${name[0]} .t702 .t-form .t-submit{ ${name[3] == "0" ? "width: calc(50% - 10px) !important; display: inline-block; } .wclosee{ width: calc(50% - 10px)" : "flex-grow: 2; padding-left: 15px !important; padding-right: 15px !important; } .wclosee{ padding-left: 15px !important; padding-right: 15px"} !important; text-align: center; white-space: nowrap; background-image: none; cursor: pointer; margin: 0; box-sizing: border-box; outline: none; background: transparent; position: relative; color: ${name[6]}; border: ${n2i(name[8],'0')}px solid ${name[10]}; background-color: ${name[4]}; }   ${name[0]} .t702 .t-popup__close { display:none!important; } /*ховер для кнопки*/ .wclosee:hover{ color: ${name[7]}; border: ${n2i(name[9],'0')}px solid ${name[11]}; background-color: ${name[5]}; } @media screen and (max-width: 640px) { ${name[0]} .t702 .t-form__submit { display: flex!important; flex-flow: wrap; } ${name[0]} .t702 .t-form .t-submit{ width: 100% !important; display: inline-block; order:1; margin-bottom: 10px; } .wclosee { margin-left: 0% !important; margin-right: 0% !important; width: 100%!important; order: 2; } } </style> <script> function font(){ var idb = '${name[0]}'; var fontF = $(idb + ' .t702 .t-submit').css('font-family'); $('.wclosee').css('font-family','' +fontF+ ''); var fontS = $(idb + ' .t702 .t-submit').css('font-size'); $('.wclosee').css('font-size','' +fontS+ ''); var fontW = $(idb + ' .t702 .t-submit').css('font-weight'); $('.wclosee').css('font-weight','' +fontW+ ''); var borderR = $(idb + ' .t702 .t-submit').css('border-radius'); $('.wclosee').css('border-radius','' +borderR+ ''); var heightH = $(idb + ' .t702 .t-submit').css('height'); $('.wclosee').css('height','' +heightH+ ''); } $(document).ready(function() { setTimeout(function(){ var idb = '${name[0]}'; var b = '<button type="hey" class="wclosee" style="line-height: 100% !important;">${name[1]}</button>';  $(b).insert${name[2] == "0" ? "Before" : "After"}(idb + ' .t702 .t-submit').css({'margin-${name[2] == "0" ? "right" : "left"}': '10px'}); $('.wclosee').click(function(e){ e.preventDefault(); $(idb + ' .t702 .t-popup__close').click(); }); font(); },600); }); </script> 

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">

Как это работает:<br><br>

1.  Выбираем блок формы BF502N<br>
2.  Указываем текст кнопки для закрытия, например, "Назад"<br>
3.  Выбираем расположение от основной кнопки: слева или справа<br>
4.  Указываем ширину кнопки 50% или Резиновая<br>
5.  Настраиваем стили для кнопки<br>
6.  Нажимаем кнопку "Сохранить и закрыть"<br>
7.  Публикуем страницу<br><br>

</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM036",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6234-3066-4466-b065-303739663462/Frame_36.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты, Прочее",
title: "Кастомизация индикатора прокрутки страницы",
modsettings: `[
{
    "id": "1",
    "title": "Положение:",
    "type": "select",
    "options": {
        "↑ Верх": "0",
        "↓ Низ": "1",
        "← Лево": "2",
        "→ Право": "3"
    },
    "value": "0"
},
{
    "id": "2",
    "title": "Непрозрачность",
    "type": "select",
    "options": {
        "100%": "0",
        "95%": "1",
        "90%": "2",
        "80%": "3",
        "70%": "4",
        "60%": "5",
        "50%": "6",
        "40%": "7",
        "30%": "8",
        "20%": "9",
        "10%": "10",
        "0%": "11"
    },
    "value": "0"
},
{
    "id": "3",
    "title": "Радиус скругления (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "4",
    "title": "Ширина (px)",
    "type": "number",
    "placeholder": "10",
    "value": ""
},
{
    "id": "5",
    "title": "Цвет фона прокрутки",
    "type": "color",
    "placeholder": "#000000",
    "value": ""
},
{
    "id": "6",
    "title": "Отступ (px)",
    "type": "number",
    "placeholder": "10",
    "value": ""
},
{
    "id": "7",
    "title": "Длина (%)",
    "type": "number",
    "placeholder": "70",
    "value": ""
},
{
    "id": "8",
    "title": "Мобильная версия до (px)",
    "type": "number",
    "placeholder": "960",
    "value": ""
},
{
    "id": "9",
    "title": "Видимость в мобильной версии:",
    "type": "select",
    "options": {
        "Показывать": "0",
        "Скрыть": "1"
    },
    "value": "0"
},
{
    "id": "10",
    "title": "Отступ в мобильной версии (px)",
    "type": "number",
    "placeholder": "0",
    "value": ""
}
]`,


moddefaultsettings: '["","","","","","","","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> .t602 { opacity: ${name[1] == "0" ? "100%" : name[1] == "1" ? "95%" : name[1] == "2" ? "90%" : name[1] == "3" ? "80%" : name[1] == "4" ? "70%" : name[1] == "5" ? "60%" : name[1] == "6" ? "50%" : name[1] == "7" ? "40%" : name[1] == "8" ? "30%" : name[1] == "9" ? "20%" : name[1] == "10" ? "10%" : name[1] == "11" ? "0%" : ""}; pointer-events:none; } .t602__indicator { transition: height .6s ease, width .6s ease; ${name[0] == "0" ? "top" : name[0] == "1" ? "top: unset!important; bottom" : name[0] == "2" ? "left" : "right"}: ${n2i(name[5],'15')}px; ${name[0] == "0" ? "left" : name[0] == "1" ? "left" : name[0] == "2" ? "top" : "top"}:calc(50% - ${(name[6] / 2).toFixed(0)}%)!important; ${name[0] == "0" ? "height" : name[0] == "1" ? "height" : name[0] == "2" ? "width" : "width"}: ${n2i(name[3],'10')}px!important; max-${name[0] == "0" ? "width" : name[0] == "1" ? "width" : name[0] == "2" ? "height" : "height"}: ${n2i(name[6],'100')}%; border-radius: ${n2i(name[2],'25')}px; } .myscroll { ${name[0] == "0" ? "top" : name[0] == "1" ? "bottom" : name[0] == "2" ? "left" : "right"}: ${n2i(name[5],'15')}px; ${name[0] == "0" ? "left" : name[0] == "1" ? "left" : name[0] == "2" ? "top" : "top"}:calc(50% - ${(name[6] / 2).toFixed(0)}%)!important; ${name[0] == "0" ? "width" : name[0] == "1" ? "width" : name[0] == "2" ? "height" : "height"}: ${n2i(name[6],'100')}%; background-color: ${n2i(name[4],'#cecece')}; position: fixed; z-index: 99998; border-radius: 50px; ${name[0] == "0" ? "height" : name[0] == "1" ? "height" : name[0] == "2" ? "width" : "width"}: ${n2i(name[3],'10')}px!important; max-${name[0] == "0" ? "width" : name[0] == "1" ? "width" : name[0] == "2" ? "height" : "height"}: ${n2i(name[6],'100')}%; border-radius: ${n2i(name[2],'25')}px; } @media screen and (max-width:${n2i(name[7],'960')}px){ .t602 { display: ${name[8] == "0" ? "block" : "none"}; } .t602__indicator { ${name[0] == "0" ? "top" : name[0] == "1" ? "bottom" : name[0] == "2" ? "left" : "right"}: ${n2i(name[9],'5')}px; } .myscroll { ${name[0] == "0" ? "top" : name[0] == "1" ? "bottom" : name[0] == "2" ? "left" : "right"}: ${n2i(name[9],'5')}px; } } </style> <script> function t602_setProgressBarWidth2(recid) { var t602_windowScrollTop = $(window).scrollTop() , t602_docHeight = $(document).height() , t602_winHeight = $(window).height(); t602_scrollPercent = (t602_windowScrollTop / (t602_docHeight - t602_winHeight)) * ${n2i(name[6],'100')}; $(".t602__indicator").css("${name[0] == "0" ? "width" : name[0] == "1" ? "width" : name[0] == "2" ? "height" : "height"}", t602_scrollPercent + '%'); } setInterval(function(){ t602_setProgressBarWidth = t602_setProgressBarWidth2; },500); $(document).ready(function(){ var b = '<div class="myscroll"></div>'; $(b).insertAfter('.t602__indicator') }); </script>
  
`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>ВАЖНО:</b> Включите в настройках блока галочку "Аккордеон. Отображать только одну раскрытую карточку"<br><br>
Как это работает:<br><br>

1. Создайте блок <b>T333 - обязательно поставьте его в самый низ страницы или в подвал.</b><br>
Настройте там цвет индикатора;<br>
2. Выбираем положение индикатора;<br>
3. Настраиваем стили (Прозрачность, скругление, ширина, цвет фона);<br>
4. Настраиваем длину в процентах и отступы. Если выбрать длину 100% - отступы будут равны нулю, а длина всегда 100%;<br>
5. Настраиваем показ в мобильной версии: Видимость и отступы;<br>
6. Нажимаем кнопку "Сохранить и закрыть";<br><br>
</div>`
});



nolimBlocks.push({
video: "hUk_NWa-_kw",
name: "",
cod: "NLM037",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3633-3264-4334-b965-656333383039/Frame_37.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Меню, Эффекты, Прочее",
title: "Добавляем свои иконки в кнопки меню ME602 Tilda",
modsettings: `[
    {
        "id": "1",
        "title": "В мобильной версии:",
        "type": "select",
        "options": {
            "Табы": "0",
            "Выпадающий список": "1"
        },
        "value": ""
    },
    {
        "id": "2",
        "title": "В мобильной версии текст:",
        "type": "select",
        "options": {
            "Скрыт": "0",
            "Показан": "1"
        },
        "value": ""
    },
    {
        "id": "3",
        "title": "Иконки:",
        "type": "select",
        "options": {
            "Слева": "right",
            "Справа": "left"
        },
        "value": ""
    },
    {
        "id": "4",
        "title": "Размер иконки:",
        "type": "select",
        "options": {
            "30px": "30px",
            "40px": "40px"
        },
        "value": ""
    },
    {
    "id": "5",
    "title": "+ Добавить иконку",
    "type": "groupCards",
    "options": [
        {
            "title": "Активная иконка",
            "type": "image",
            "placeholder": "",
            "value": ""
        },
        {
            "title": "Неактивная иконка",
            "type": "image",
            "placeholder": "",
            "value": ""
        }
        ],
    "limit": "14",
    "placeholder": "class",
    "value": ""
    }  
    ]`,
    moddefaultsettings: '["0","0","right","30px", [ ["",""] ] ]',
    modoptions: [function modcontentfunc(nameS,name,nameCard) {
        let linkCode = ``;

        for(let i = 0; i < nameCard.length; i++){
            if(nameCard[i][0] != ''){
                linkCode += `
                div.t395__wrapper>div:nth-child(${i+1}).t395__tab_active>div:${name == "right" ? "before" : "after"} { content: ''; background-image: url(${nameCard[i][0]}); background-repeat: no-repeat; background-size: 100%; width: ${nameS}; height: ${nameS}; display: inline-block; margin-${name}: 10px; }
                div.t395__wrapper>div:nth-child(${i+1}):not(.t395__tab_active)>div:${name == "right" ? "before" : "after"} { content: ''; background-image: url(${nameCard[i][1]}); background-repeat: no-repeat; background-size: 100%; width: ${nameS}; height: ${nameS}; display: inline-block; margin-${name}: 10px; }
                `;
            }
        }
        return linkCode
    }],
    modcontent: function modcontentfunc(name, i) {
        return `

    <style> @media screen and (max-width: 960px) { .t395__wrapper { display: ${name[0] == "0" ? "block" : "none"} !important; } .t395__wrapper_mobile { display: ${name[0] == "0" ? "none" : "block"} !important; } .t395__tab { width: 200px; } .t395__col { overflow: auto; } ${name[1] == "0" ? `.t395__title { font-size: 0px!important; } .t395__wrapper:before{ padding-${name[2]}: 0px !important; }` : ""} } .t395__title { align-items: center; justify-content: center; display: flex; } ${nolimBlocks[i].modoptions[0](name[3],name[2],name[4])} ${name[1] == "0" ? `@media screen and (max-width:960px) { div.t395__wrapper>div.t395__tab_active>div:before { margin-${name[2]}: 0px !important; } div.t395__wrapper>div:not(.t395__tab_active)>div:before { margin-${name[2]}: 0px !important; } }` : `` } </style>
    
`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>Как это работает:</b><br><br>
1. Выбираем как меню будет выглядеть в мобильной версии: табы или классический выпадающий список;<br>
2. Если выбрали вид табы, можно скрыть текст в кнопках, тогда будут отображаться только иконки;<br>
3. Выбираем расположение иконок: слева или справа от текста;<br>
4. Загружаем свои иконки "активная" и "неактивная";<br>
5. Иконки будут располагаться в порядке их загрузки;<br>
5. Нажимаем кнопку "Сохранить и закрыть";<br>

</div>`
});


nolimBlocks.push({
name: "",
cod: "NLM038",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3465-6465-4230-a164-393032393231/Frame_38.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные, Корзина и товары",
title: "Своя кнопка когда товара нет в наличии",
modsettings: `[
{
    "id": "1",
    "title": "Текст кнопки",
    "type": "input",
    "placeholder": "Консультация",
    "value": ""
},
{
    "id": "2",
    "title": "Ссылка для кнопки",
    "type": "input",
    "placeholder": "#popup:myform",
    "value": ""
},
{
    "id": "3",
    "title": "Ссылка для описания",
    "type": "input",
    "placeholder": "#offproduct",
    "value": ""
},
{
    "id": "4",
    "title": "Имя скрытого поля",
    "type": "input",
    "placeholder": "myinput",
    "value": ""
},
{
    "id": "5",
    "title": "Ссылка для названия товара",
    "type": "input",
    "placeholder": "#myproduct",
    "value": ""
}
]`,

moddefaultsettings: '["","","","",""]',
modcontent: function modcontentfunc(name) {
return `

<style> 

   [href="${n2i(name[2],'#linkDescr')}"] {
        display: none;
    } 

    [data-tooltip-hook="${n2i(name[1],'#nolimBtn')}"] {
        z-index: 999999999;
    } 

</style> 

<script>

    var logik = 0;
    var nlcolor = '';
    var nlbgcolor = '';
    var nlborder = '';
    var nlbordermain = '';

    function konscheck() {
    var btn2 = '<div class="wbtn" style="display:inline-block;"><a href="${name[1]}" class="tn-atom t-btn t-btn_sm" style=""><table style="width:100%; height:100%;"><tbody><tr><td class="js-store-prod-popup-buy-btn-txt">${name[0]}</td> </tr></tbody > </table></a> </div>';
    if (logik == 0) {
        btn1 = $('.t-store__prod-popup__btn-wrapper').html();
        logik = 1;
        nlcolor = $('.t-store__prod-popup__btn-wrapper [href="#order"]').css('color');
        nlbgcolor = $('.t-store__prod-popup__btn-wrapper [href="#order"]').css('background-color');
        nlborder = $('.t-store__prod-popup__btn-wrapper [href="#order"]').css('border-radius');
        nlbordermain = $('.t-store__prod-popup__btn-wrapper [href="#order"]').css('border');
    }
    if ($('[href="${n2i(name[2],'#linkDescr')}"]').length >= 1) {
        $('.t-store__prod-popup__btn-wrapper > .t-store__prod-popup__btn_disabled').hide();
        $('.t-store__prod-popup__btn').hide();
        $('.wbtn').remove();
        $(btn2).prependTo('.t-store__prod-popup__btn-wrapper');
        $('.wbtn a').css('color', nlcolor);
        $('.wbtn a').css('background-color', nlbgcolor);
        $('.wbtn a').css('border-radius', nlborder);
        $('.wbtn a').css('border', nlbordermain);
    } else if ($('.t-store__prod-popup__btn_disabled').length >= 1) {
        $('.t-store__prod-popup__btn-wrapper > .t-store__prod-popup__btn_disabled').hide();
        $('.wbtn').remove();
        $(btn2).prependTo('.t-store__prod-popup__btn-wrapper');
        $('.wbtn a').css('color', nlcolor);
        $('.wbtn a').css('background-color', nlbgcolor);
        $('.wbtn a').css('border-radius', nlborder);
        $('.wbtn a').css('border', nlbordermain);
    } else {
        $('.t-store__prod-popup__btn-wrapper').children().show();
        $('.wbtn').remove();
    }
    let dyeint = setInterval(function () {
        if ($('.t-popup_show').length > 0) {
            clearInterval(dyeint);
            if ($('.t-popup_show .t-store__prod-popup__btn_disabled').length >= 1 || $('.t-popup_show ${n2i(name[2],'#linkDescr')}').length >= 1) {
                $('.t-store__prod-popup__btn-wrapper > .t-store__prod-popup__btn_disabled').hide();
                $('.wbtn').remove();
                $(btn2).prependTo('.t-store__prod-popup__btn-wrapper');
                $('.wbtn a').css('color', nlcolor);
                $('.wbtn a').css('background-color', nlbgcolor);
                $('.wbtn a').css('border-radius', nlborder);
                $('.wbtn a').css('border', nlbordermain);
            } else {
                $('.wbtn').remove();
            }
        }
    }, 50);
    var nlstr = '';
    nlstr += $('.t-store__prod-popup__info .js-product-name').text() + ';';
    nlstr += $('.t-store__prod-popup__info .js-product-sku').text() + ';';
    $('.t-store__prod-popup__info select').each(function (index, elem) {
        nlstr += $(elem).val() + ';';
    });
    $('[name="${n2i(name[3],'myinput')}"]').val(nlstr);
    $('[href="${n2i(name[4],'#myproduct')}"]').text($('.t-popup_show .t-store__prod-popup__info .js-product-name, .t-store__prod-snippet__container .t-store__prod-popup__info .js-product-name').text());
    }
    $(document).ready(function () {
    var categoryCheck = setInterval(function () {
        if ($(".t-store__prod-popup__btn_disabled").length > 0) {
            var pathname = window.location.pathname;
            if (pathname.includes('tproduct')) {
                konscheck();
            }
            clearInterval(categoryCheck);
        }
    }, 100);
    $('body').on('click', '[href*="tproduct"]', function(e) {
        setTimeout(function () {
            konscheck();
        }, 0);
        let dyeint = setInterval(function () {
            if ($('.t-popup_show').length > 0) {
                clearInterval(dyeint);
                konscheck();
            }
        }, 50)
    });
    $('body').on('input select', '.t-product__option-input, .t-product__option-select', function (e) {
        e.preventDefault();
        setTimeout(function () {
            konscheck();
        }, 0)
    });
    }); 

</script>

`;
 },
 instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
 Как это работает:<br><br>

 1.  Загружаем товары в каталог. Как работать с каталогом можно ознакомиться <a href="https://blog.tilda.cc/catalog" target="_blank">тут</a><br>
 2.  Указываем текст внутри кнопки, который будет появляться если нет товара в наличие, к примеру "Консультация" или "Сообщить о поступлении"<br>
 3.  Указываем ссылку формы (попапа) через #, которая будет привязана кнопке<br>
 4.  Поле "Ссылка для описания" – заполняем в том случае, если хотим к конкретному товару добавить кнопку, к примеру, "#offproduct", такую ссылку мы должны указать в описание товара, добавив к тексту. Текст с этой ссылкой не будет виден на странице товара.<br>
 &bull; Имя переменной скрытого поля добавляем в настройки в том случае, если хотим, чтобы в заявку приходили все характеристики товара, о котором клиент хочет узнать: название товара, артикул, значение и т.д. Т.е. когда будет падать уведомление, например, в Телеграм, сразу будет понятно о каком товаре идет речь<br>
 5.  Ссылку для имени товара указываем в том случае, если хотим, чтобы в заголовке формы дублировалось название товара. Т.е. к заголовку «Узнайте, когда имя (привязываем ссылку #myproduct) и модификация будет «имя» заменять на название товара, которого нет в наличие<br>
 6.  Нажимаем кнопку "Сохранить и закрыть"<br>
 8.  Публикуем страницу<br><br>
 <b>
Важно:<br>
 &bull; Модификацию нужно устанавливать в подвал (Footer) сайта или если у товаров выбран отдельный Footer то тогда в него!<br>
&bull; Модификация работает с блоками: ST305N, ST300, ST310N, ST315N, ST320N<br>
 &bull; Модификация работает только если к блоку подключен каталог!<br>
 &bull; Вид кнопки (фон, шрифт, обводка и при наведении) будет такой же, как и в настройках кнопки "добавить в корзину"<br><br></b>
 </div>`
 });



nolimBlocks.push({
name: "",
cod: "NLM039",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3162-6565-4438-b561-353962353861/Frame_39.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Меню, Прочее",
title: "Фиксация меню ME602 слева или справа страницы",
modsettings: `[
{
    "id": "1",
    "title": "id блока",
    "type": "block",
    "placeholder": "#rec38000000",
    "value": ""
},
{
    "id": "2",
    "title": "В мобильной версии:",
    "type": "select",
    "options": {
        "Выпадающий список": "0",
        "Табы": "1"
    },
    "value": ""
},
{
    "id": "3",
    "title": "Расположение",
    "type": "select",
    "options": {
        "Слева": "0",
        "Справа": "1"
    },
    "value": ""
},
{
    "id": "4",
    "title": "border-radius (px)",
    "type": "number",
    "placeholder": "10",
    "value": ""
},
{
    "id": "5",
    "title": "border-width (px)",
    "type": "number",
    "placeholder": "1",
    "value": ""
},
{
    "id": "6",
    "title": "Цвет обводки",
    "type": "color",
    "placeholder": "",
    "value": ""
},
{
    "id": "7",
    "title": "Фиксация от (px)",
    "type": "number",
    "placeholder": "1200",
    "value": ""
}
]`,
moddefaultsettings: '["","","","10","2","","1200"]',
modcontent: function modcontentfunc(name) {
  return `

<style> @media screen and (min-width: ${name[6]}px){ ${name[0]} .t395__tab_active:after{width: 0px!important; }${name[0]} .t395 { position: fixed !important; ${name[2] == "0" ? "left" : "right"}: 0px !important; top: 50%; z-index: 99999 !important; } ${name[0]} .t395__tab:not(.t395__tab_active) {border-right: ${name[4]}px solid ${name[5]}!important;} ${name[0]} .t395__tab { width: unset!important; display: block !important; border-radius: ${name[3]}px!important; } ${name[0]} .t395__width_50 { width: 100% !important; } ${name[0]} .t395__wrapper_mobile { display: none !important; } ${name[0]} .t395__wrapper { display: block !important; } ${name[0]} .t395__col { padding: 0px !important; } } /*Переключение Табы/Список*/ @media screen and (max-width: 960px){ ${name[0]} .t395__wrapper { display: ${name[1] == "0" ? "none" : "block"} !important; } ${name[0]} .t395__wrapper_mobile { display: ${name[1] == "0" ? "block" : "none"} !important; } } </style> <script> function heightSize(){ var size = $('${name[0]} .t395__wrapper').css('height'); size = size.replace('px',''); size = size/2; $('${name[0]} .t395').css('top', 'calc(50% - '+size+'px)'); } $(window).on('load resize', heightSize); </script>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>

1.  Выбираем блок меню ME602<br>
2.  Выбираем настройку, как будут выглядеть табы в мобильной версии. <br>
3.  Выбираем расположение слева или справа<br>
4.  Настраиваем скругление, толщину и цвет бордера<br>
5.  Указываем от какого размера экрана будет работать модификация<br>
6.  Нажимаем кнопку "Сохранить и закрыть"<br>
7.  Публикуем страницу<br><br>

<b>Важно:<br>
&bull; Когда выбираете отображение "табы" для мобильной версии, то количество кнопок должно быть до трёх, тогда это будет выглядеть эстетически красиво<br>
&bull; Настраивая скругление, то настройки радиуса, размер бордера и цвет бордера должны совпадать со стандартными настройками меню;<br><br></b>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM040",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3465-3035-4561-b266-363033396533/Frame_40.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Прочее",
title: "Скрыть блоки навсегда через таймер",
modsettings: `[
{
    "id": "1",
    "title": "id блоков для скрытия",
    "type": "block",
    "placeholder": "#rec38000000",
    "value": ""
},
{
    "id": "2",
    "title": "Время для скрытия (сек)",
    "type": "number",
    "placeholder": "60",
    "value": ""
},
{
    "id": "3",
    "title": "Класс элемента с таймером",
    "type": "input",
    "placeholder": "timertext",
    "value": ""
},
{
    "id": "4",
    "title": "id блоков для показа",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
}
]`,

moddefaultsettings: '["","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> ${name[3]}{ display:none; } </style> <script> window.onload = function() { var deadline = new Date(Date.parse(new Date()) + ${name[1]} * 1000); var divs = '.${name[2]} .tn-atom'; var dis = '${name[0]}'; var disShow = '${name[3]}'; function initializeClock(endtime) { function updateClock() { var t = (Date.parse(endtime) - Date.parse(new Date()))/ 1000; $(divs).html(t); if (t < 0) { $(dis).fadeOut(); $(disShow).fadeIn(); $(divs).html('00'); clearInterval(timeinterval); } } updateClock(); const timeinterval = setInterval(updateClock, 1000); } var testtest=localStorage.getItem('${name[2]}'); if (testtest==null) { localStorage.setItem('${name[2]}',deadline); } else { deadline = testtest; } initializeClock(deadline); }; </script> 

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>

1.  Выбираем блоки, которые будут пропадать<br>
2.  Указываем время в секундах, по истечению которого блоки скроются<br>
3.  Добавляем текст в Zero Блок и указываем класс к нему, такой же как и в генераторе. В этом текстовом блоке будет идти таймер.<br>
Что бы указать класс у элемента, нажимаешь на него правой кнопкой мыши и выбираешь из списка последнюю строку "Add CSS Class Name", далее, справа в настройках указываешь тот же класс что и в генераторе;<br><br>
Советуем тексту (число таймера) указать начальное значение "00"<br>
4.  Выбираем блоки, которые будут показываться по истечению таймера<br>
Если нужно запустить код несколько раз после прошедшего времени, нужно поменять класс таймеру, тогда код запуститься заново.<br>
5.  Нажимаем кнопку "Сохранить и закрыть"<br>
6.  Публикуем страницу<br><br>

</div>`
});



function nolimRepNumb(valN) {
    var valN = valN.replace(':00','');
    valN = Number(valN);
    return valN;
};

nolimBlocks.push({
name: "",
cod: "NLM043",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6636-3636-4264-a330-663563636431/Frame_43.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Прочее",
title: "Автоматическое проставление даты для вебинара",
modsettings: `[
{
    "id": "1",
    "title": "Класс элемента",
    "type": "input",
    "placeholder": "textwebinar",
    "value": ""
},
{
    "id": "2",
    "title": "Формат даты",
    "type": "select",
    "options": {
        "ДД.ММ.ГГГГ": "0",
        "ММ.ДД.ГГГГ": "1",
        "ГГГГ.ММ.ДД": "2",
        "Вторник, 4 мая": "3"
    },
    "value": "0"
},
{
    "id": "3",
    "title": "Разделитель",
    "type": "select",
    "options": {
        "/": "/",
        ".": ".",
        "-": "-"
    },
    "value": "0"
},
{
    "id": "4",
    "title": "Время (>) показываем дату следующего дня",
    "type": "select",
    "options": {
        "01:00": "01:00",
        "02:00": "02:00",
        "03:00": "03:00",
        "04:00": "04:00",
        "05:00": "05:00",
        "06:00": "06:00",
        "07:00": "07:00",
        "08:00": "08:00",
        "09:00": "09:00",
        "10:00": "10:00",
        "11:00": "11:00",
        "12:00": "12:00",
        "13:00": "13:00",
        "14:00": "14:00",
        "15:00": "15:00",
        "16:00": "16:00",
        "17:00": "17:00",
        "18:00": "18:00",
        "19:00": "19:00",
        "20:00": "20:00",
        "21:00": "21:00",
        "22:00": "22:00",
        "23:00": "23:00"
    },
    "value": "0"
},
{
    "id": "5",
    "title": "Текст после",
    "type": "input",
    "placeholder": "| 16:00 (MCK)",
    "value": ""
}
]`,

// modoptions: [function modcontentfunc(name) {
//     return `<script> $(document).ready(function() { $("${name}").on('keyup keypress', function(e) { var keyCode = e.keyCode || e.which; if (keyCode === 13) { e.preventDefault(); return false; } }); }); </script> <style> ${name} .t-submit { display:none!important; } </style>`
// }, function modcontentfunc(name) {
//     return `<script> $(document).ready(function() { $("${name}").on('keyup keypress', function(e) { var keyCode = e.keyCode || e.which; if (keyCode === 13) { e.preventDefault(); return false; } }); }); </script>`
// }
// ],

moddefaultsettings: '["","","/","01:00",""]',
modcontent: function modcontentfunc(name) {
  return `

<script> function join(t, e, n) { return e.map(function(e) { return new Intl.DateTimeFormat("ru", e).format(t) }).join(n) }; $(function() { var day = new Date(); var nextDay = new Date(day); nextDay.setDate(day.getDate() + 1); var month = new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"); var dayOfWeek = new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"); if (day.getHours() >= ${nolimRepNumb(name[3])}) { ${name[1] == "0" ? `let e = join(nextDay, [{ day: "numeric" }, { month: "numeric" }, { year: "numeric" }], "${name[2]}");` : name[1] == "1" ? `let e = join(nextDay, [{ month: "numeric" }, { day: "numeric" }, { year: "numeric" }], "${name[2]}");` : name[1] == "2" ? `let e = join(nextDay, [{ year: "numeric" }, { month: "numeric" }, { day: "numeric" }], "${name[2]}");` : ''} $(".${name[0]} .tn-atom").text(${name[1] == "0" || name[1] == "1" || name[1] == "2" ? `e` : `dayOfWeek[day.getDay()] + ", " + day.getDate() + " " + month[day.getMonth()]`} + " ${name[4]}"); } else { ${name[1] == "0" ? `let e = join(day, [{ day: "numeric" }, { month: "numeric" }, { year: "numeric" }], "${name[2]}");` : name[1] == "1" ? `let e = join(day, [{ month: "numeric" }, { day: "numeric" }, { year: "numeric" }], "${name[2]}");` : name[1] == "2" ? `let e = join(day, [{ year: "numeric" }, { month: "numeric" }, { day: "numeric" }], "${name[2]}");` : ''} $(".${name[0]} .tn-atom").text(${name[1] == "0" || name[1] == "1" || name[1] == "2" ? `e` : `dayOfWeek[day.getDay()] + ", " + day.getDate() + " " + month[day.getMonth()]`} + " ${name[4]}"); } }); </script>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>

1. Добавляем свой текстовый элемент в Зеро Блок и указываем класс к нему такой же как и в генераторе;<br>
Что бы указать класс у элемента, нажимаешь на него правой кнопкой мыши и выбираешь из списка последнюю строку "Add CSS Class Name", далее, справа в настройках указываешь тот же класс что и в настройках ;<br><br>

2. Выбираем формат даты и разделитель;<br>
3. Указываем время, после которого будет показываться следующая дата (Завтрашнего дня);<br>
5. Прописываем текст после даты если нужно;<br>
6. Нажимаем кнопку "Сохранить и закрыть";<br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM044",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3532-3931-4430-a664-373661396263/Frame_44.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Прочее",
title: "Отключение изменение размера поля ввода в несколько строк",
modsettings: `[

]`,

moddefaultsettings: '[]',
modcontent: function modcontentfunc(name) {
  return `

<style> textarea.t-input {resize: none!important;} </style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>

1.  Устанавливаем модификацию<br>
2.  Нажимаем кнопку "Сохранить и закрыть" и Публикуем страницу<br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM045",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3234-3363-4538-b032-306537386266/Frame_45.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Прочее",
title: "Отключаем отправку формы нажатием на ENTER",
modsettings: `[
{
    "id": "1",
    "title": "id блока",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Кнопка:",
    "type": "select",
    "options": {
        "Скрыта": "0",
        "Видна, можно взаимодействовать": "1"
    },
    "value": "0"
}
]`,

modoptions: [function modcontentfunc(name) {
    return `<script> $(document).ready(function() { $("${name}").on('keyup keypress', function(e) { var keyCode = e.keyCode || e.which; if (keyCode === 13) { e.preventDefault(); return false; } }); }); </script> <style> ${name} .t-submit { display:none!important; } </style>`
}, function modcontentfunc(name) {
    return `<script> $(document).ready(function() { $("${name}").on('keyup keypress', function(e) { var keyCode = e.keyCode || e.which; if (keyCode === 13) { e.preventDefault(); return false; } }); }); </script>`
}
],

moddefaultsettings: '["",""]',
modcontent: function modcontentfunc(name, i) {
    return `

    ${name[1] == "0" ? nolimBlocks[i].modoptions[0]([name[0]]) : name[1] == "1" ? nolimBlocks[i].modoptions[1]([name[0]]) : ""}

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>

1.  Выбираем блок, в котором нужно отключить отправку при нажатии на enter<br>
2.  Можем скрыть скнопку выбрав Кнопка - "Скрыта"<br>
3.  Нажимаем кнопку "Сохранить и закрыть"<br><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM046",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6466-3239-4762-b837-373637663964/Frame_46.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные, Формы, Прочее",
title: "Перенос крестика закрытия в стандартных попап блоках",
modsettings: `[
{
    "id": "1",
    "title": "Цвет плашки в моб. версии",
    "type": "color",
    "value": ""
},
{
    "id": "2",
    "title": "Цвет крестика в моб. версии",
    "type": "color",
    "value": ""
}
]`,

moddefaultsettings: '["",""]',
modcontent: function modcontentfunc(name) {
  return `

<script> $(document).ready(function() { for (let t=0; t < $(".t702").length; t++) $(".t702:eq("+ t + ") .t-popup__close").clone().appendTo(".t702:eq("+ t + ") .t-popup__container"); for (let t=0; t < $(".t281").length; t++) $(".t281:eq("+ t + ") .t-popup__close").clone().appendTo(".t281:eq("+ t + ") .t-popup__container"); for (let t=0; t < $(".t756").length; t++) $(".t756:eq("+ t + ") .t-popup__close").clone().appendTo(".t756:eq("+ t + ") .t-popup__container"); for (let t=0; t < $(".t390").length; t++) $(".t390:eq("+ t + ") .t-popup__close").clone().appendTo(".t390:eq("+ t + ") .t-popup__container") }); </script> <style> .t702 .t-popup > .t-popup__close, .t281 .t-popup > .t-popup__close, .t756 .t-popup > .t-popup__close, .t390 .t-popup > .t-popup__close { display:none; } .t702 .t-popup__container > .t-popup__close, .t281 .t-popup__container > .t-popup__close, .t756 .t-popup__container > .t-popup__close, .t390 .t-popup__container > .t-popup__close { display: table; } @media screen and (max-width: 640px){ .t702 .t-popup > .t-popup__close, .t281 .t-popup > .t-popup__close, .t756 .t-popup > .t-popup__close { display: table!important; } .t702 .t-popup__container > .t-popup__close, .t281 .t-popup__container > .t-popup__close, .t756 .t-popup__container > .t-popup__close { display: none; } } @media screen and (max-width: 560px) {.t281 .t-popup__close, .t702 .t-popup__close, .t756 .t-popup__close{background: ${name[0]}!important;}.t281 .t-popup__close g, .t702 .t-popup__close g, .t756 .t-popup__close g, .t390 .t-popup__close g{fill: ${name[1]}!important;}}</style>


`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>

1.  Настраиваем цвет фона плашки и крестика закрытия для мобильной версии<br>
2.  Нажимаем кнопку "Сохранить и закрыть"<br>
3.  Публикуем страницу<br><br>

<b>ВАЖНО:<br>
&bull; Модификация работает с блоками BF501, BF502N, BF503, ST500<br>
&bull; Для десктопной версии, цвет фона и крестика закрытия popup нужно изменять в стандартных настройках блока<br>
&bull; После установки модификации «эффект» будет применен ко всем стандартным popup на сайте<br></b>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM047",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6532-3061-4363-a539-616336633561/Frame_47.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Формы, Прочее",
title: "Разные страницы успеха в зависимости от выбора значения в форме",
modsettings: `[
{
    "id": "1",
    "title": "id блока с формой",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Варианты ответов",
    "type": "groupCards",
    "options": [
        {
        "title": "Имя переменной",
        "type": "input",
        "placeholder": "name",
        "value": ""
        },
        {
        "title": "Значение (value)",
        "type": "input",
        "placeholder": "value",
        "value": ""
        },
        {
        "title": "Ссылка",
        "type": "input",
        "placeholder": "/thank-you",
        "value": ""
        }
    ],
    "limit": "14",
    "placeholder": "class",
    "value": "1"
}
]`,

moddefaultsettings: '["", [["","",""]] ]',
modoptions: [function modcontentfunc(name) {

    let strurl2 = [];
    let keurkl2 
    for(let i = 0; i < name[0].length; i++){
        if(name[0][i][0] != ''){
            keurkl2 = name[0][i][0]
            keurkl2 = '"'+keurkl2+'"';
            strurl2.push(keurkl2);
        }
    }; 

    return strurl2.join(",");
}, function modcontentfunc(name) {
    let strurl2 = [];
    let keurkl2 
    for(let i = 0; i < name[0].length; i++){
        if(name[0][i][0] != ''){
            keurkl2 = name[0][i][1]
            keurkl2 = '"'+keurkl2+'"';
            strurl2.push(keurkl2);
        }
    }; 

    return strurl2.join(",");
}, function modcontentfunc(name) {
    let strurl2 = [];
    let keurkl2 
    for(let i = 0; i < name[0].length; i++){
        if(name[0][i][0] != ''){
            keurkl2 = name[0][i][2]
            keurkl2 = '"'+keurkl2+'"';
            strurl2.push(keurkl2);
        }
    }; 

    return strurl2.join(",");
}
],
modcontent: function modcontentfunc(name,i) {
    return `

<script>
    function takevalues(e, c) {
        return "checkbox" == $(e + ' [name="' + c + '"]').attr("type") ? $(e + ' [name="' + c + '"]:checked').val() : $(e + ' [name="' + c + '"]').hasClass("t-radio") ? $(e + ' [name="' + c + '"]:checked').val() : $(e + ' [name="' + c + '"]').hasClass("t-checkbox") ? $(e + ' [name="' + c + '"]:checked').val() : $(e + ' [name="' + c + '"]').hasClass("t-img-select") ? $(e + ' [name="' + c + '"]:checked').val() : $(e + ' [name="' + c + '"]').val()
    }
    $(document).ready(function() {
        var e = [${nolimBlocks[i].modoptions[0]([name[1]])}],
            c = [${nolimBlocks[i].modoptions[1]([name[1]])}],
            n = [${nolimBlocks[i].modoptions[2]([name[1]])}];
        let myfrom = function($form) {
            if (0 == $("${name[0]} .t706").length)
                for (let a = 0; a < e.length; a++)
                    if (takevalues("${name[0]}", e[a]) == c[a]) {
                        if ("#" == n[a].charAt(0)) {
                            if (0 == $('[href="' + n[a] + '"]').length) {
                                var o = '<a class="nolimthankyou" href="' + n[a] + '" style="display:none;"></a>';
                                $(o).insertBefore("${name[0]} form")
                            }
                            $('[href="' + n[a] + '"]').click(), $(".t-form-success-popup").hide();
                            break
                        }
                        window.location.href = n[a];
                        break
                    }
        };
        if (typeof window.NolimSuccessFunction${name[0].replace('#rec','')} == 'undefined') {
            window.NolimSuccessFunction${name[0].replace('#rec','')} = [];
            window.NolimSuccessFunction${name[0].replace('#rec','')}[0] = myfrom
        } else {
            window.NolimSuccessFunction${name[0].replace('#rec','')}.push(myfrom)
        };
        window.mySuccessFunction${name[0].replace('#rec','')} = function($form) {
            for (var i = 0; i < window.NolimSuccessFunction${name[0].replace('#rec','')}.length; i++) {
                window.NolimSuccessFunction${name[0].replace('#rec','')}[i]($form)
            }
        };
    });
    $(window).ready(function() {
        setInterval(function() {
            $("${name[0]} form").each(function() {
                $(this).data("success-callback", "window.mySuccessFunction${name[0].replace('#rec','')}")
            })
        }, 1000);
    });
</script>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>Не работает с корзиной;<br>
Работает со стандартными попапами;</b><br><br>

Если нужен зеро попап, используем модификацию https://nolim.cc/zeropopup<br><br>

1. Указываем id блока стандартной формы, попапа или зеро блока;<br>
2. Указываем имя переменной поля и значение;<br>
3. Прописываем у каждого значения свою ссылку;<br>
4. Для попап ссылка должна начинаться с #;<br>
5. Для прямых ссылок на другие сайты, ссылка должна быть полная, например https://google.com;<br>
6. Для внутренних страниц через слэш, например /thankyoupage;<br>
6. Нажимаем кнопку "Сохранить и закрыть";<br><br>

</div>`
});


function sumName(name1,name2) {
    name1 = Number(name1);
    name2 = Number(name2);
    var sum1 = name1 + name2;
    return sum1;
};

nolimBlocks.push({
name: "",
cod: "NLM049",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6661-3961-4164-b531-373036383566/Frame_53.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты",
title: "Точки в галерее ZeroBlock в виде миниатюр",
modsettings: `[
    
{
    "id": "1",
    "title": "Пагинация",
    "type": "select",
    "options": {
        "Все картинки": "0",
        "Три активных": "1"
    },
    "value": ""
},
{
    "id": "2",
    "title": "Расположение:",
    "type": "select",
    "options": {
        "Слева": "left",
        "По центру": "center",
        "Справа": "right"
    },
    "value": ""
},
{
    "id": "3",
    "title": "Класс элемента",
    "type": "input",
    "placeholder": "customslider",
    "value": ""
},
{
    "id": "4",
    "title": "Отступ от слайдера (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
},
{
    "id": "5",
    "title": "Ширина (px)",
    "type": "number",
    "placeholder": "50",
    "value": ""
},
{
    "id": "6",
    "title": "Высота (px)",
    "type": "number",
    "placeholder": "50",
    "value": ""
},
{
    "id": "7",
    "title": "Настройки для экранов 960-1200 (px)",
    "type": "checkbox",
    "value": ""
},
{
    "id": "8",
    "title": "Отступ от слайдера (px)",
    "type": "number",
    "placeholder": "10",
    "value": ""
},
{
    "id": "9",
    "title": "Ширина (px)",
    "type": "number",
    "placeholder": "40",
    "value": ""
},
{
    "id": "10",
    "title": "Высота (px)",
    "type": "number",
    "placeholder": "40",
    "value": ""
},
{
    "id": "11",
    "title": "Настройки для экранов 640-960 (px)",
    "type": "checkbox",
    "value": ""
},
{
    "id": "12",
    "title": "Отступ от слайдера (px)",
    "type": "number",
    "placeholder": "10",
    "value": ""
},
{
    "id": "13",
    "title": "Ширина (px)",
    "type": "number",
    "placeholder": "40",
    "value": ""
},
{
    "id": "14",
    "title": "Высота (px)",
    "type": "number",
    "placeholder": "40",
    "value": ""
},
{
    "id": "15",
    "title": "Настройки для экранов 320-640 (px)",
    "type": "checkbox",
    "value": ""
},
{
    "id": "16",
    "title": "Отступ от слайдера (px)",
    "type": "number",
    "placeholder": "10",
    "value": ""
},
{
    "id": "17",
    "title": "Ширина (px)",
    "type": "number",
    "placeholder": "40",
    "value": ""
},
{
    "id": "18",
    "title": "Высота (px)",
    "type": "number",
    "placeholder": "40",
    "value": ""
}
]`,


moddefaultsettings: '["0","left","","","","","","","","","","","","","","","",""]',
modcontent: function modcontentfunc(name) {
    return `

<script> ${name[0] == "1" ? `function wslideractive(l) { var t = $(l + " .t-slds__bullet_active").attr("data-slide-bullet-for"), e = (t = Number(t)) - 1, a = t + 1; 1 == t && (e = t + 2); var d = $(l + " .t-slds__bullet:eq(-1)").attr("data-slide-bullet-for"); t == (d = Number(d)) && (e = d - 2, a = d - 1), $(l + " .t-slds__bullet").hide(), $(l + ' [data-slide-bullet-for="' + t + '"]').show(), $(l + ' [data-slide-bullet-for="' + e + '"]').show(), $(l + ' [data-slide-bullet-for="' + a + '"]').show() }` : `` } $(document).ready(function () { let sliderclass = ".${name[2]}"; let sliderint = setInterval(function () { if ($(sliderclass+' .tn-atom__slds-img').length > 0){ clearInterval(sliderint); ${name[0] == "1" ? `$(sliderclass+' .t-slds__bullet').hide(); $(sliderclass+' [data-slide-bullet-for="1"]').show(); $(sliderclass+' [data-slide-bullet-for="2"]').show(); $(sliderclass+' [data-slide-bullet-for="3"]').show(); wslideractive(sliderclass); $(sliderclass+' .t-slds__bullet').click(function(){ wslideractive(sliderclass); }); $(sliderclass+' .t-slds__arrow_wrapper').click(function(){ wslideractive(sliderclass); });` : ``} $(sliderclass).each(function (index,item) { $(item).find('.tn-atom__slds-img').each(function (index) { if ("y" === window.lazy) { let urlbg = $(this).attr('data-original'); $(this).closest('.t-slds').find('.t-slds__bullet[data-slide-bullet-for="' + index + '"]').css('background-image', 'url(' + urlbg + ')'); } else { let urlbg = $(this).css('background-image'); $(this).closest('.t-slds').find('.t-slds__bullet[data-slide-bullet-for="' + index + '"]').css('background-image', urlbg); } }); }); } },50) }); </script> <style> .${name[2]} .t-slds__bullet_body{display:none} .${name[2]} .t-slds__bullet_wrapper{bottom:-${sumName(name[3],name[5])}px!important;text-align:${name[1]}} .${name[2]} .t-slds__bullet{background-position: center;margin:0px!important;display:inline-table;width:${name[4]}px;height:${name[5]}px;background-size:cover;background-repeat:no-repeat;opacity:.5;transform:scale(.9);filter:grayscale(1);transition:all .3s ease-in-out;border-radius:0px!important} .${name[2]} .t-slds__bullet.t-slds__bullet_active{opacity:1;transform:scale(1);filter:none} ${typeof name[9] != "undefined" && name[9] != '' ? `@media only screen and (min-width:960px) and (max-width:1200px){.${name[2]} .t-slds__bullet{width:${name[8]}px;height:${name[9]}px} .${name[2]} .t-slds__bullet_wrapper{bottom:-${sumName(name[7],name[9])}px!important}}` : ``} ${typeof name[13] != "undefined" && name[13] != '' ? `@media only screen and (min-width:640px) and (max-width:960px){.${name[2]} .t-slds__bullet{width:${name[12]}px;height:${name[13]}px} .${name[2]} .t-slds__bullet_wrapper{bottom:-${sumName(name[11],name[13])}px!important}}` : ``} ${typeof name[17] != "undefined" && name[17] != '' ? `@media only screen and (min-width:320px) and (max-width:640px){.${name[2]} .t-slds__bullet{width:${name[16]}px;height:${name[17]}px} .${name[2]} .t-slds__bullet_wrapper{bottom:-${sumName(name[15],name[17])}px!important}}` : ``} </style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>ВАЖНО:</b><br>
<b>Если у вас больше одного слайдера, указывайте для каждого уникальный класс и отдельную модификацию</b>;<br><br>

1. Добавляем слайдер в Зеро Блок и указываем класс к нему такой же как и в модификации;
Что бы указать класс у элемента, нажимаешь на него правой кнопкой мыши и выбираешь из списка последнюю строку "Add CSS Class Name", далее, справа в настройках указываешь тот же класс что и в модификации;
2. Выбираем показ превью, все или три картинки;
3. Выбираем расположение: слева, центр, справа;
4. Настраиваем отступ превью от слайдера и их размер, ширину и высоту;
5. Можно настроить размер превью на разных разрешениях экрана;
6. Нажимаем кнопку "Сохранить и закрыть";<br>

</div>`
});



nolimBlocks.push({
video: "jvKKDa82Xyk",
name: "",
cod: "NLM050",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3662-3531-4233-a363-643765393362/Frame_50.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты",
title: "Линия заполнения вместо точек в галерее Zero Block",
modsettings: `[
{
    "id": "1",
    "title": "Класс элемента",
    "type": "input",
    "placeholder": "customslider",
    "value": ""
},
{
    "id": "2",
    "title": "Цвет неактивной полоски",
    "type": "color",
    "value": ""
},
{
    "id": "3",
    "title": "Высота линии (px)",
    "type": "number",
    "placeholder": "5",
    "value": ""
},
{
    "id": "4",
    "title": "Отступ от слайдера (px)",
    "type": "number",
    "placeholder": "20",
    "value": ""
}
]`,

moddefaultsettings: '["","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style>.${name[0]} .t-slds__bullet_wrapper{bottom: -${name[3]}px!important;}.${name[0]} .t-slds__bullet{margin:10px 0!important}.${name[0]} .t-slds__bullet_wrapper{display:flex!important;box-sizing:border-box}.${name[0]} .tn-atom .t-slds__bullet{width:100%}.${name[0]} .tn-atom .t-slds__bullet_body{height:${name[2]}px!important;width:inherit!important;border-radius:0}.${name[0]} .tn-atom .t-slds__bullet_active~div>div{opacity:0}.${name[0]} .tn-atom .t-slds__bullet{position:relative}.${name[0]} .tn-atom .t-slds__bullet:after{content:"";background-color:${name[1]};position:absolute;width:100%;height:1px;left:0;top:50%;margin-top:0;z-index:-1}</style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>

1.  В Зеро блоке нажимаем правой кнопкой мыши на галерею и выбираем Add CSS class name и указываем класс, например, slider<br>
2.  В галереи, настраиваем точки (dots) внутри галереи или снаружи<br>
3.  Настраиваем цвет активной точки, это значение будет отвечать за цвет активной линии<br>
4.  Вписываем класс элемента slider в настройки<br>
5.  Указываем цвет неактивной полоски<br>
6.  Указываем высоту и отступ линии от галереи<br>
7.  Нажимаем кнопку "Сохранить и закрыть"<br>
8.  Публикуем страницу<br><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM051",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3035-3133-4735-a165-346132343034/Frame_51.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные,Меню",
title: "Выпадающий “Поиск” из меню в Zero Block",
modsettings: `[
{
    "id": "1",
    "title": "id блока T838",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Класс иконки",
    "type": "input",
    "placeholder": "nolimSearchZero",
    "value": ""
},
{
    "id": "3",
    "title": "Анимация скрытия/показа блока:",
    "type": "select",
    "options": {
        "Слайдом": "0",
        "Обычная": "1"
    },
    "value": ""
}
]`,

moddefaultsettings: '["","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> ${name[0]} { width: 100%; z-index: 9995; display: none; position: fixed; } .${name[1]} { cursor: pointer; } .${name[1]}:hover { transform: scale(1.05); background-image: relative; } </style> <script> $(document).ready(function() { var t838 = "${name[0]}"; var t838nolim = $('${name[0]}.t-rec').addClass('nolim_forMenu'); var searchIcon = $(".${name[1]}"); var idM = $('.${name[1]}').parents('.t-rec'); var idMh = $('.${name[1]}').parents('.t-rec').children().children(); idMh = $(idMh).css('height'); $(t838).css('top', idMh); searchIcon.on('click', function(e) { e.preventDefault(); if ($('.nolim_forMenu').attr('nolim-search-state') == '1') { $(t838).${name[2] == "0" ? 'slideUp()' : 'fadeOut()'}; $('[nolim-search-state]').attr('nolim-search-state', '0'); } else if ($('.nolim_forMenu').attr('nolim-search-state') == '0') { $(t838).${name[2] == "0" ? "slideDown()" : "fadeIn()"}; $('[nolim-search-state]').attr('nolim-search-state', '1'); } }); $(document).on('pointerup mouseup', (function(e) { if ($(t838).has(e.target).length === 0 && $(idM).has(e.target).length === 0 && !$(t838).is(e.target)) { $(t838).${name[2] == "0" ? 'slideUp()' : 'fadeOut()'}; $('[nolim-search-state]').attr('nolim-search-state', '0'); } })); }); </script>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
1. Делаем меню в зеро блоке;<br>
2. Добавляем свою иконку поиска в меню и указываем класс к ней такой же как и в модификации;<br>
Что бы указать класс у элемента, нажимаешь на него правой кнопкой мыши и выбираешь из списка последнюю строку "Add CSS Class Name", далее, справа в настройках указываешь тот же класс что и в модификации;<br>
3. Ставим на страницу блок T838 и применяем следующие настройки:<br>
&bull; ШИРИНА БЛОКА: 12 колонок;<br>
&bull; ОТСТУП СЛЕВА: Без отступа;<br>
&bull; ОТСТУП СВЕРХУ/СНИЗУ: По желанию;<br>
&bull; СТИЛЬ ПОЛЯ ДЛЯ ВВОДА И КНОПКА: По желанию;<br>
4. В генераторе выбираем анимацию появления меню;<br>
6. Нажимаем кнопку "Сохранить и закрыть";<br>

</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM052",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3863-3763-4863-b939-643932616365/Frame_52.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Формы, Прочее",
title: "Автозаполнение полей в формах",
modsettings: `[
{
    "id": "1",
    "title": "id блока с формой",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "+ Добавить поле",
    "type": "groupCards",
    "options": [
        {
        "title": "Имя переменной",
        "type": "input",
        "placeholder": "name",
        "value": ""
        }
    ],
    "limit": "14",
    "placeholder": "class",
    "value": "1"
}
]`,

moddefaultsettings: '["", [""] ]',
modoptions: [function modcontentfunc(name) {

    let strurl2 = [];
    let keurkl2 
    for(let i = 0; i < name[0].length; i++){
        if(name[0][i][0] != ''){
        keurkl2 = name[0][i][0]

        keurkl2 = '"'+keurkl2+'"';
        strurl2.push(keurkl2);
        }
    }; 

    return strurl2.join(",");
}
],
modcontent: function modcontentfunc(name,i) {
  return `

<script>
    function takemask(a, n) {
        setTimeout(function() {
            if ($('[name="' + a + '"]').hasClass('js-phonemask-result')) {
                let take1 = $('[name="' + a + '"]').prev().attr('data-phonemask-code');
                take1 = n.replace(take1, '');
                $('[name="' + a + '"]').prev().val(take1);
                $('[name="' + a + '"]').val(take1);
                $('.t-input-phonemask').trigger('input');
            }
        }, 2500);
    };
    $(document).ready(function() {
        var e = [${nolimBlocks[i].modoptions[0]([name[1]])}];
        for (let o = 0; o < e.length; o++)
            if (null != localStorage.getItem(e[o])) {
                let n = localStorage.getItem(e[o]);
                $('[name="' + e[o] + '"]').val(n);
                takemask(e[o], n);
            } let funcAutozapoln = function(o) {
            var n = {};
            $(o.serializeArray()).each(function(e, o) {
                n[o.name] = o.value
            });
            for (let o = 0; o < e.length; o++) null != n[e[o]] && (localStorage.setItem(e[o], n[e[o]]), console.log(localStorage.getItem(e[o])))
        };
        if (typeof window.NolimSuccessFunction${name[0].replace('#rec','')} == 'undefined') {
            window.NolimSuccessFunction${name[0].replace('#rec','')} = [];
            window.NolimSuccessFunction${name[0].replace('#rec','')}[0] = funcAutozapoln
        } else {
            window.NolimSuccessFunction${name[0].replace('#rec','')}.push(funcAutozapoln)
        };
        window.mySuccessFunction${name[0].replace('#rec','')} = function($form) {
            for (var i = 0; i < window.NolimSuccessFunction${name[0].replace('#rec','')}.length; i++) {
                window.NolimSuccessFunction${name[0].replace('#rec','')}[i]($form)
            }
        };
    });
    $(window).on("load", function() {
        setInterval(function() {
            $("${name[0]} .js-form-proccess").each(function() {
                $(this).data("formsended-callback", "window.mySuccessFunction${name[0].replace('#rec','')}")
            })
        }, 1000);
    });
</script>

`;
},
instruction: ``
});


nolimBlocks.push({
name: "",
cod: "NLM053",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6661-3961-4164-b531-373036383566/Frame_53.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты, Прочее",
title: "Показать popup при скролле вверх из ZERO BLOCK",
modsettings: `[
{
    "id": "1",
    "title": "Введите id зеро блока",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "id блока после которого показать popup",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "3",
    "title": "Ссылка для кнопки закрытия popup",
    "type": "input",
    "placeholder": "#close",
    "value": ""
}

]`,


moddefaultsettings: '["","",""]',
modcontent: function modcontentfunc(name) {
  return `

<script> $(function() { var o = $("${name[1]}"), l = "${name[0]}", e = !0, s = !1; $('[href="${name[2]}"]').click(function() { $(l).fadeOut(), $("html,body").css("overflow", "visible"), $(l).css("overflow", "hidden") } ), $(l + " .t396__filter").click(function() { $(l).fadeOut(), $("html,body").css("overflow", "visible"), $(l).css("overflow", "hidden") } ), $(window).scroll(function() { var c = $(window).scrollTop() > $(o).offset().top; c && e && (e = !1), 0 == c && 0 == e && 0 == s && (s = !0, $(l).fadeIn(), $("html,body").css("overflow", "hidden"), $(l).css("overflow", "auto"), "y" === window.lazy && t_lazyload_update()) } ) } ); </script> <style> ${name[0]} .t396__filter{cursor:pointer}${name[0]}{display:none;position:fixed;left:0;top:0;right:0;bottom:0;z-index:100005} </style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>

1. Создаём в Zero блоке popup;br>
&bull; Цвет фона - прозрачный;<br>
&bull; Window container height - 100%<br>
&bull; Шейп (на фон всплывающего онка), ширина и высота - 100%<br>
&bull; Container - Window container<br>
&bull; Выравнивание X - 0, Y - 0<br>
&bull; Opacity (Прозрачность) - 35% или любое другое значение<br>
&bull; Цвет #000000<br>
&bull; Ко всем элементам, которые должны закрывать окно успешной отправки, указываем ссылку через хештег, к примеру #close<br>
2. Выбираем блок в котором сделали popup<br>
3. Выбираем блок, после которого должен показаться popup<br>
4. Указываем ссылку #close для закрытия popup<br>
5. Нажимаем кнопку "Сохранить и закрыть"<br>
6. Публикуем страницу<br><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM054",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6133-3764-4230-b630-363662323364/Frame_54.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "Горизонтальный скролл в мобильной версии для разделов",
grid: "yes",
modsettings: `[
{
    "id": "1",
    "title": "Размер шрифта (px)",
    "type": "number",
    "placeholder": "14",
    "value": ""
},
{
    "id": "2",
    "title": "Цвет текста",
    "type": "color",
    "value": ""
},
{
    "id": "3",
    "title": "Цвет фона",
    "type": "color",
    "value": ""
},
{
    "id": "4",
    "title": "Цвет border",
    "type": "color",
    "value": ""
},
{
    "id": "5",
    "title": "Радиус скругления бордюра (px)",
    "type": "number",
    "placeholder": "30",
    "value": ""
},
{
    "id": "6",
    "title": "Толщина бордюра/обводки (px)",
    "type": "number",
    "placeholder": "2",
    "value": ""
},
{
    "id": "7",
    "title": "Стили активной кнопки",
    "type": "text",
    "placeholder": "",
    "value": ""
},
{
    "id": "8",
    "title": "Цвет текста",
    "type": "color",
    "value": ""
},
{
    "id": "9",
    "title": "Цвет фона",
    "type": "color",
    "value": ""
},
{
    "id": "10",
    "title": "Толщина бордюра/обводки (px)",
    "type": "number",
    "placeholder": "1",
    "value": ""
},
{
    "id": "11",
    "title": "Цвет border",
    "type": "color",
    "value": ""
},
{
    "id": "12",
    "title": "Opacity",
    "type": "select",
    "options": {
        "100%": "0",
        "90%": "1",
        "80%": "2",
        "70%": "3",
        "60%": "4",
        "50%": "5",
        "40%": "6",
        "30%": "7",
        "20%": "8",
        "10%": "9"
    },
    "value": ""
},
{
    "id": "13",
    "title": "Ширина экрана до (px)",
    "type": "number",
    "placeholder": "640",
    "value": ""
}
]`,


moddefaultsettings: '["","","","","","","","","","","","0",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> @media screen and (max-width: ${n2i(name[12],'1200')}px) { .t-store__parts-switch-wrapper { overflow: scroll; overflow-y: hidden!important; display: flex; width: 100%; margin-bottom: 20px; padding-bottom: 20px; padding-top: 12px; } .t-store__parts-switch-btn { display: flex; white-space: nowrap; align-items: center; font-size: ${n2i(name[0],'14')}px; color: ${name[1]}; border-radius: ${n2i(name[4],'0')}px; background-color: ${name[2]}; border: ${name[5]}px solid ${name[3]}; padding-top: 8px; padding-right: 16px; padding-bottom: 10px; padding-left: 16px; } .t-store__parts-switch-btn.t-active { color: ${name[7]}; background-color: ${name[8]}; border: ${n2i(name[9],'1')}px solid ${name[10]}!important; opacity: ${name[11] == "0" ? "100%" : name[11] == "1" ? "90%" : name[11] == "2" ? "80%" : name[11] == "3" ? "70%" : name[11] == "4" ? "60%" : name[11] == "5" ? "50%" : name[11] == "6" ? "40%" : name[11] == "7" ? "30%" : name[11] == "8" ? "20%" : name[11] == "9" ? "10%" : ''}!important; } } </style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>
1. Загружаем товары в каталог. Как работать с каталогом можно ознакомиться <a href="https://blog.tilda.cc/catalog" target="_blank">тут</a> <br>
2. Настраиваем стили для активного и неактивного раздела <br>
3. Нажимаем кнопку "Сохранить и закрыть"<br>
4. Публикуем страницу<br><br>
<b>ВАЖНО: <br>
&bull; Модификация работает с блоками: ST300, ST305N, ST310N, ST315N, ST320N<br>
&bull; Модификация работает только если к блоку подключен каталог!</b><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM055",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6662-3635-4635-b766-333562626235/Frame_55.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Эффекты, Прочее",
title: "Делаем кастомный курсор в Zero Block",
modsettings: `[
{
    "id": "1",
    "title": "Добавить курсор",
    "type": "groupCards",
    "options": [
        {
        "title": "Впишите класс",
        "type": "input",
        "placeholder": "cursorCls",
        "value": ""
        },
        {
        "title": "Координата X",
        "type": "input",
        "placeholder": "10",
        "value": ""
        },
        {
        "title": "Координата Y",
        "type": "input",
        "placeholder": "10",
        "value": ""
        },
        {
        "title": "Вставьте иконку на курсор при наведении",
        "type": "image",
        "placeholder": "",
        "value": ""
        }
    ],
    "limit": "14",
    "placeholder": "class",
    "value": "1"
}
]`,
moddefaultsettings: '[ [["","","",""]] ]',
modoptions: [function modcontentfunc(nameCard) {
    let linkCode = ``;

    for(let i = 0; i < nameCard.length; i++){
        if(nameCard[i][0] != ''){
            console.log(nameCard);
            linkCode += `.${nameCard[i][0]} .tn-atom{cursor:url(${nameCard[i][3]}) ${nameCard[i][1]} ${nameCard[i][2]}, pointer!important;}
            `;
        }
    }
    return linkCode
}
],
modcontent: function modcontentfunc(name, i) {
  return `

<style>
    ${nolimBlocks[i].modoptions[0](name[0])}
</style>
`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Максимальное количество иконок: 15<br>
Стороны изображения для курсора не должны превышать 128px.<br><br>

1. Добавляем свой элемент в Зеро Блок и указываем ему класс, такой же, как и в модификации;<br>
2. Загружаем свою иконку курсора в SVG, что бы не было пикселизации;<br>
3. Указываем координаты, если в курсоре присутствует "палец" или любой другой элемент, который является "указателем". От верхней точки "Указатели" до краев (верхнего и левого) области мышки меряем расстояние в пикселях и прописываем в координаты. Y - вертикальный отступ (до верхнего края), X - горизонтальный отступ (до левого края);<br>
6. Нажимаем кнопку "Сохранить и закрыть";<br>

</div>`
});



nolimBlocks.push({
video: "59VfHtStUb8",
name: "",
cod: "NLM056",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3562-6238-4138-b936-336634393336/Frame_56.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные, Формы, Корзина и товары",
title: "Своё окно успешной отправки формы в Zero Block",
modsettings: `[
{
    "id": "1",
    "title": "Введите id зеро блока",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Введите id блока с формой",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "3",
    "title": "Ссылка для кнопки закрытия",
    "type": "input",
    "placeholder": "#close",
    "value": ""
}
]`,
moddefaultsettings: '["","",""]',
modcontent: function modcontentfunc(name) {
  return `

<script> $(document).ready(function() { var o = "${name[0]}"; $('[href="${name[2]}"]').click(function() { 
    $('.t-body').removeClass('t-body_success-popup-showed'); 
    $('.t-body').removeClass('t-body_scroll-locked');
    $('.t-body').removeClass('nolimPopUp');
    $("${name[0]}").fadeOut(), $("html").css("overflow", "visible"), $("${name[0]}").css("overflow", "hidden"), "yes" == window.tcart_success && location.reload() }), $("${name[0]}" + " .t396__filter").click(function() { $('.t-body').removeClass('t-body_success-popup-showed'); $('.t-body').removeClass('t-body_scroll-locked'); $("${name[0]}").fadeOut(), $('.t-body').removeClass('nolimPopUp'); $("${name[0]}").css("overflow", "hidden"), "yes" == window.tcart_success && location.reload() });

var funcZeroSuccess = function($form) { $("${name[0]}").fadeIn(), $('.t-body').addClass('nolimPopUp'); $("${name[0]}").css("overflow", "auto"), "y" === window.lazy && t_lazyload_update(), $("${name[1]} .t706").hide(), $('.t-form-success-popup').hide(); setTimeout(function() { $('${name[1]} .t-popup__close').trigger('click'); $('.nolim_popup_close').click(); }, 100); $('${name[1]} .js-successbox').hide(); $('${name[1]} .t653 .js-successbox').show(); typeof t_slds_updateSlider != "undefined" && t_slds_updateSlider('${name[0].replace('#rec','')}'); };

    if(typeof window.NolimSuccessFunction${name[1].replace('#rec','')} == "undefined") {
        window.NolimSuccessFunction${name[1].replace('#rec','')} = [];
        window.NolimSuccessFunction${name[1].replace('#rec','')}[0] = funcZeroSuccess
    } else {
        window.NolimSuccessFunction${name[1].replace('#rec','')}.push(funcZeroSuccess)
    };

    window.mySuccessFunction${name[1].replace('#rec','')} = function ($form) {
        for (var i = 0; i < window.NolimSuccessFunction${name[1].replace('#rec','')}.length; i++) {
            window.NolimSuccessFunction${name[1].replace('#rec','')}[i]($form)
        }
    };

setInterval(function(){ $("${name[1]} .js-form-proccess").each(function() { $(this).data("success-callback", 'window.mySuccessFunction${name[1].replace('#rec','')}') }) },1000); }); 

</script> <style> ${name[0]} .t396__filter{cursor:pointer}${name[0]}{display:none;position:fixed;left:0;top:0;right:0;bottom:0;z-index:100005;} ${name[1]} .t281__input-wrapper, ${name[1]} .t274__wrapper{ opacity: 1 !important; max-height: unset !important; .nolimPopUp{ height: 100vh; min-height: 100vh; overflow: hidden; } </style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>
1. Создаём в Zero блоке окно успешной отправки формы<br>
&bull; Цвет фона - прозрачный<br>
&bull; Window container height - 100%<br>
&bull; Шейп (на фон всплывающего онка), ширина и высота - 100%<br>
&bull; Container - Window container<br>
&bull; Выравнивание X - 0, Y - 0<br>
&bull; Opacity (Прозрачность) - 35% или любое другое значение<br>
&bull; Цвет #000000<br>
&bull; Ко всем элементам, которые должны закрывать окно успешной отправки, указываем ссылку через хештег, к примеру #close<br>
2. Выбираем блок в котором сделали popup<br>
3. Указываем ссылку #close для закрытия popup<br>
4. Нажимаем кнопку "Сохранить и закрыть"<br><br>
5. Публикуем страницу<br><br>

<b>ВАЖНО: <br>
&bull; Модификация не работает с блоком NLM001<br>
&bull; Если на странице несколько форм, но окно успешной отправки должно быть таким же, для этого нужно будет установить еще один блок NLM056 и выбрать блок второй формы
&bull; Рекомендуем использовать эту модификацию с формами в Зеро блоке, если Вы используете для стандартного, тогда цвет стандартной плашки успешной отправки советуем сделать однородной с фоном формы, и цвет текста тоже</b><br><br>
</div>`
});



nolimBlocks.push({
video: "9Gtz2-X08hA",
name: "",
cod: "NLM057",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3064-3137-4234-a161-313262623565/Frame_57.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные, Корзина и товары, Прочее",
title: "Выровнять кнопки в карточке товара по всей ширине",
modsettings: `[
{
    "id": "1",
    "title": "Выбор варианта",
    "type": "select",
    "options": {
        "Вариант 1 (Подробней о товаре, Добавить в корзину, кнопки плюс/минус)": "0",
        "Вариант 2 (Добавить в корзину, Подробней о товаре, кнопки плюс/минус)": "1",
        "Вариант 3 (Две кнопки по 100%)": "2",
        "Вариант 4 (Две кнопки по 50% в 1 ряд)": "3"
    },
    "value": ""
},
{
    "id": "2",
    "title": "Отображение кнопок в мобайле (до 960рх)",
    "type": "select",
    "options": {
        "Все кнопки 100%": "0",
        "Стандарт (как в десктопе)": "1"
    },
    "value": ""
}
]`,

modoptions: [function modcontentfunc(name) {
    return `<style> [data-product-inv="0"] .t-store__card__btn { width: 100%; } a.js-store-prod-btn.t-store__card__btn.t-btn.t-btn_sm { width: 100%; } .t-store__card__btns-wrapper--quantity { display: block !important; } .t-store__card .t-store__prod__quantity { width: calc(50% - 2px) !important; } a.js-store-prod-btn2.t-store__card__btn.t-store__card__btn_second.t-btn{ width: calc(50% - 2px) !important; } .t-store__prod__quantity-input { width: 100%; } .t-store__card__btn { padding-left: 5px; padding-right: 5px; } @media screen and (min-width: 960px) and (max-width: 1220px) { .t-store__prod__quantity__minus-wrapper, .t-store__prod__quantity__plus-wrapper { min-width: 20px; width: 20px; height: 20px; margin: 0 1px; } }  @media screen and (max-width: 960px) { .t-store__card .t-store__prod__quantity { width: 100% !important; } a.js-store-prod-btn.t-store__card__btn.t-btn{ width: 100% !important; } a.js-store-prod-btn2.t-store__card__btn.t-store__card__btn_second.t-btn { width: 100%!important; } .t-store__card__btns-wrapper--quantity { display: block !important; } }  </style> `
}, function modcontentfunc(name) {
    return `<style> [data-product-inv="0"] .t-store__card__btn { width: 100%; } a.js-store-prod-btn.t-store__card__btn.t-btn.t-btn_sm { width: 100%; } .t-store__card__btns-wrapper--quantity { display: block !important; } .t-store__card .t-store__prod__quantity { width: calc(50% - 2px) !important; } a.js-store-prod-btn2.t-store__card__btn.t-store__card__btn_second.t-btn{ width: calc(50% - 2px) !important; } .t-store__prod__quantity-input { width: 100%; } .t-store__card__btn { padding-left: 5px; padding-right: 5px; } @media screen and (min-width: 960px) and (max-width: 1220px) { .t-store__prod__quantity__minus-wrapper, .t-store__prod__quantity__plus-wrapper { min-width: 20px; width: 20px; height: 20px; margin: 0 1px; } }  </style> `
}, function modcontentfunc(name) {
    return `<style> [data-product-inv="0"] .t-store__card__btn { width: 100%; } a.js-store-prod-btn.t-store__card__btn.t-btn{ width: calc(50% - 2px) !important; } .t-store__card__btns-wrapper.js-store-buttons-wrapper.t-store__card__btns-wrapper--quantity { width: 100% !important; } .t-store__card .t-store__prod__quantity { width: calc(50% - 2px) !important; } .t-store__prod__quantity-input { width: 100%; } .t-store__card__btn { padding-left: 5px; padding-right: 5px; } @media screen and (min-width: 960px) and (max-width: 1220px) { .t-store__prod__quantity__minus-wrapper, .t-store__prod__quantity__plus-wrapper { min-width: 20px; width: 20px; height: 20px; margin: 0 1px; } }  @media screen and (max-width: 960px) { .t-store__card .t-store__prod__quantity { width: 100% !important; } a.js-store-prod-btn.t-store__card__btn.t-btn{ width: 100% !important; } a.js-store-prod-btn2.t-store__card__btn.t-store__card__btn_second.t-btn{ width: 100%!important; } .t-store__card__btns-wrapper--quantity { display: block !important; } }  </style> `
}, function modcontentfunc(name) {
    return `<style> [data-product-inv="0"] .t-store__card__btn { width: 100%; } a.js-store-prod-btn.t-store__card__btn.t-btn{ width: calc(50% - 2px) !important; } .t-store__card__btns-wrapper.js-store-buttons-wrapper.t-store__card__btns-wrapper--quantity { width: 100% !important; } .t-store__card .t-store__prod__quantity { width: calc(50% - 2px) !important; } .t-store__prod__quantity-input { width: 100%; } .t-store__card__btn { padding-left: 5px; padding-right: 5px; } @media screen and (min-width: 960px) and (max-width: 1220px) { .t-store__prod__quantity__minus-wrapper, .t-store__prod__quantity__plus-wrapper { min-width: 20px; width: 20px; height: 20px; margin: 0 1px; } } </style> `
}, function modcontentfunc(name) {
    return `<style> [data-product-inv="0"] .t-store__card__btn { width: 100%; } a.js-store-prod-btn2.t-store__card__btn.t-store__card__btn_second.t-btn{ width: 100% !important; } a.js-store-prod-btn.t-store__card__btn.t-btn{ width: 100% !important; } </style> `
}, function modcontentfunc(name) {
    return `<style> [data-product-inv="0"] .t-store__card__btn { width: 100%; } .t-store__card__btn { padding-left: 5px; padding-right: 5px; } a.js-store-prod-btn2.t-store__card__btn.t-store__card__btn_second.t-btn{ width: 50%; } a.js-store-prod-btn.t-store__card__btn.t-btn{ width: 50%; } .t-store__card__btn{ width: calc(50% - 4px) !important; } @media screen and (max-width: 670px){ .t-store__card__btn:nth-child(2) { margin-top: 0px !important; } }  @media screen and (max-width: 960px) { a.js-store-prod-btn.t-store__card__btn.t-btn{ width: 100% !important; } a.js-store-prod-btn2.t-store__card__btn.t-store__card__btn_second.t-btn{ width: 100% !important; } } </style> `
}, function modcontentfunc(name) {
    return `<style> [data-product-inv="0"] .t-store__card__btn { width: 100%; } .t-store__card__btn { padding-left: 5px; padding-right: 5px; } a.js-store-prod-btn2.t-store__card__btn.t-store__card__btn_second.t-btn{ width: 50%; } a.js-store-prod-btn.t-store__card__btn.t-btn{ width: 50%; } .t-store__card__btn{ width: calc(50% - 4px) !important; } @media screen and (max-width: 670px){ .t-store__card__btn:nth-child(2) { margin-top: 0px !important; } } </style> `
}
],

moddefaultsettings: '["0","0"]',
modcontent: function modcontentfunc(name, i) {
  return `

${name[0] == "0" && name[1] == "0" ? nolimBlocks[i].modoptions[0]() : ''}
${name[0] == "0" && name[1] == "1" ? nolimBlocks[i].modoptions[1]() : ''}
${name[0] == "1" && name[1] == "0" ? nolimBlocks[i].modoptions[2]() : ''}
${name[0] == "1" && name[1] == "1" ? nolimBlocks[i].modoptions[3]() : ''}
${name[0] == "2" ? nolimBlocks[i].modoptions[4]() : ''}
${name[0] == "3" && name[1] == "0" ? nolimBlocks[i].modoptions[5]() : ''}
${name[0] == "3" && name[1] == "1" ? nolimBlocks[i].modoptions[6]() : ''}

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>
1. Загружаем товары в каталог. Как работать с каталогом можно ознакомиться <a href="https://blog.tilda.cc/catalog" target="_blank">тут</a> <br>
 
2. В первом выпадающем списке выбираем вариант расположения кнопок в карточке товара:<br>
&bull; Вариант 1 (Подробней о товаре, Добавить в корзину, кнопки плюс/минус) <br>
&bull; Вариант 2 (Добавить в корзину, Подробней о товаре, кнопки плюс/минус) <br>
&bull; Вариант 3 (Две кнопки по 100%)<br>
&bull; Вариант 4 (Две кнопки по 50% в 1 ряд) <br>
3. Во втором выпадающем списке выбираем вариант, как кнопки будут выглядеть в мобильной версии<br>
4. Нажимаем кнопку "Сохранить и закрыть"<br>
5. Публикуем страницу<br><br>

<b>ВАЖНО: <br>
&bull; Модификация работает с блоками: ST300, ST320N, ST310N, ST315N, ST305N<br>
&bull; Порядок кнопок должен совпадать в настройках блока и в генераторе! <br>
&bull; Модификация работает только если к блоку подключен каталог!</b><br><br>
</div>`
});


/*
nolimBlocks.push({
name: "",
cod: "NLM058",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild6364-3664-4436-b262-636132363835/Frame_58.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "5 карточек в ряд для товаров",
modsettings: `[
{
    "id": "1",
    "title": "Введите id ST305N",
    "type": "block",
    "placeholder": "#rec3800000",
    "value": ""
}
]`,
moddefaultsettings: '[""]',
modcontent: function modcontentfunc(name) {
  return `

<script> function t_store_process2(t, e, r, o, s, i) { var a = $("#rec" + e) , n = a.find(".js-store-grid-cont") , l = "973" === a.attr("data-record-type"); s && (n = a.find(".js-store-relevants-grid-cont")); var _ = t_store_get_horizSeparator_html(r) , d = {} , c = n.find(".t-store__card").length; if (0 === t.length) { var p = t_store_get_emptyMsg_html(r); return n.append(p), void a.find(".js-store-empty-part-msg").fadeIn(200) } var u = "" , f = 4 , h = s ? f : 5; if (s && r.relevants_slider && (t.length > f || $(window).width() <= 960) || !s && l) { var v = "" , m = "300"; "fast" === r.slider_opts.anim_speed && (v = "t-slds_animated-fast"), "slow" === r.slider_opts.anim_speed && (v = "t-slds_animated-slow", m = "500"), u += '<div class="t-slds" style="visibility: hidden;">', u += '<div class="t-slds__main t-container">', u += '<div class="t-slds__container">', u += '<div class="t-slds__items-wrapper ' + v + '" data-slider-items-in-row="' + (!s && l ? h : f) + '" data-slider-transition="' + m + '" data-slider-with-cycle="true" data-slider-cycle="yes" data-slider-correct-height="' + (!s && l ? "true" : "false") + '" data-auto-correct-mobile-width="false">', u = u.replace("[[noCycleClass]]", r.slider_opts.cycle ? "" : "t-slds__nocycle").replace("[[isCycled]]", r.slider_opts.cycle ? "true" : "false") } if ($.each(t, function(o, i) { (!s && !l || s && !r.relevants_slider) && c > 0 && c % h == 0 && (u += _), u += t_store_get_productCard_html(a, i, r, s, e, o, t), d[i.uid] = i, c++ }), s && r.relevants_slider && (t.length > f || $(window).width() <= 960) || !s && l) { var g = a.find(".js-store-tpl-slider-arrows") , w = g.html(); if (u += "</div>", u += "</div>", w && !s && l && (u += w, n.removeClass("t-container").removeClass("t-store__grid-cont_mobile-grid")), !s && l) { var b = '<div class="t-slds__bullet_wrapper">'; $.each(t, function(t, e) { var r = t + 1; b += '<div class="t-slds__bullet' + (1 === r ? " t-slds__bullet_active" : "") + '" data-slide-bullet-for="' + r + '"><div class="t-slds__bullet_body" style="background-color: transparent;"></div></div>' }), b += "</div>", u += b } u += "</div>", u += "</div>", w && s && (u += w) } if (t_store_process_appendAndShowProducts(a, n, u), $.each(t, function(t, o) { var i = s ? a.find('.t-store__relevants__container .js-product.t-item[data-product-gen-uid="' + o.uid + '"]') : a.find('.js-product.t-item[data-product-gen-uid="' + o.uid + '"]'); i.data("cardSize", "small"), o = d[o.uid], "both" !== r.showStoreBtnQuantity && "list" !== r.showStoreBtnQuantity || t_store_addProductQuantity(e, i, o, r), t_store_addProductOptions(e, o, i, r), t_store_option_handleOnChange_custom(e, i, r), t_store_onFuncLoad("t_prod__initProduct", function() { t_prod__initProduct(e, i) }) }), !o && r.isFlexCols && r.isHorizOnMob && (n.find(".t-store__tail-gap").remove(), n.append('<div class="t-store__tail-gap"></div>')), "y" !== window.lazy && "yes" !== $("#allrecords").attr("data-tilda-lazy") || (r.relevants_slider ? setTimeout(function() { t_store_onFuncLoad("t_lazyload_update", function() { t_lazyload_update() }) }, 100) : t_store_onFuncLoad("t_lazyload_update", function() { t_lazyload_update() })), $(".t706__cartwin").length > 0 ? "function" == typeof tcart__addEvent__links && tcart__addEvent__links() : console.log("Warning: cart block is not added to this page"), t_store_initPopup(e, d, r, s, i), t_store_unifyCardsHeights(e, r), r.verticalAlignButtons && t_store_verticalAlignButtons(e, r), setTimeout(function() { t_store_unifyCardsHeights(e, r), r.verticalAlignButtons && t_store_verticalAlignButtons(e, r) }, 1), void 0 !== document.fonts ? void 0 !== document.fonts.ready && document.fonts.ready.then(function() { setTimeout(function() { t_store_unifyCardsHeights(e, r) }, 1e3) }) : setTimeout(function() { t_store_unifyCardsHeights(e, r) }, 1e3), r.verticalAlignButtons && ("complete" === document.readyState ? t_store_verticalAlignButtons(e, r) : $(window).on("load", function() { t_store_verticalAlignButtons(e, r) })), !r.previewmode) try { addEditFieldEvents_new(e) } catch (t) { console.log(t.message) } } $(document).ready(function(){ t_store_process = t_store_process2; setTimeout(function(){ t_store_process = t_store_process2; },100); setTimeout(function(){ t_store_process = t_store_process2; },500); setTimeout(function(){ t_store_process = t_store_process2; },1000); }); </script> <style> @media screen and (min-width: 1200px){ ${name[0]} .t-col_3 { max-width: 220px!important; } ${name[0]} .t-col { margin-left: 10px!important; margin-right: 10px!important; } } @media screen and (max-width: 1200px) and (min-width: 960px){ ${name[0]} .t-col_3 { max-width: 170px; } } @media screen and (max-width: 480px){ ${name[0]} .t-col_3 { margin-bottom: 30px; width: 50%; position: relative; } } ${name[0]} .t-store__card__imgwrapper { position: relative; width: 100%; padding-bottom: 60%; } </style>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>
1. Загрузите товары в каталог. Как работать с каталогом можно ознакомиться <a href="https://blog.tilda.cc/catalog" target="_blank">тут</a> <br>
&bull; Настройте блок ST305N на странице:<br>
-КОЛ-ВО БЛОКОВ В РЯДУ: 4<br>
-Оригинальное соотношение сторон изображений: ☑<br>
-Два товара в ряд на мобильных устройствах: ☑<br>
-Высота: Настройте в зависимости от ваших изображений<br>
2. Выбираем блок с товарами <br>
3. Нажимаем кнопку "Сохранить и закрыть"<br>
4. Публикуем страницу<br><br>

<b>ВАЖНО: <br><br>
Если нужно привязать модификацию к нескольким блокам с товарами, то нужно создать отдельный блок с модификацией для каждого блока<br>
На данный момент модификация работает только с блоком ST305N и товарами из каталога. </b> <br><br>

</div>`
});
*/


nolimBlocks.push({
video: "z8CPBLOmHOY",
name: "",
cod: "NLM060",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3665-3239-4961-b261-616131306665/Frame_60.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные,Корзина и товары, Меню",
title: "Избранное в стандартном меню",
modsettings: `[
{
    "id": "1",
    "title": "Ссылка для избранного",
    "type": "input",
    "placeholder": "#nolimWish",
    "value": ""
},
{
    "id": "2",
    "title": "Ссылка при 0 товаров в избранном",
    "type": "input",
    "placeholder": "#pusto",
    "value": ""
},
{
    "id": "3",
    "title": "Цвет фона у количества",
    "type": "color",
    "value": ""
},
{
    "id": "4",
    "title": "Цвет текста у количества",
    "type": "color",
    "value": ""
},
{
    "id": "5",
    "title": "Размер иконки избранное (px)",
    "type": "select",
    "options": {
        "30x30": "0",
        "40x40": "1"
    },
    "value": ""
},
{
    "id": "6",
    "title": "Ссылка для иконки избранного",
    "type": "image",
    "placeholder": "https://cdn-icons-png.flaticon.com/512/5553/5553419.png",
    "value": ""
}
]`,
moddefaultsettings: '["","","","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> [href="${n2i(name[0],'#nolimWish')}"] svg { background-image: url(${n2i(name[5],'https://cdn-icons-png.flaticon.com/512/5553/5553419.png')}); background-position: center center; background-size: cover; transition: all .1s ease; width: ${name[4] == "0" ? "30" : "40"}px; height: ${name[4] == "0" ? "30" : "40"}px; } [href="${n2i(name[0],'#nolimWish')}"] svg * { display: none; } [href="${n2i(name[0],'#nolimWish')}"] svg:hover { transform: scale(1.05); background-image: relative; } @media screen and (min-width: 981px) { .t1002__wishlisticon{ display:none; } .t1002__wishlisticon-counter { display:none; } } @media screen and (min-width: 981px) { [href="${n2i(name[0],'#nolimWish')}"] { position: relative; display: block !important; } } @media screen and (max-width: 980px) { [href="${n2i(name[0],'#nolimWish')}"] { display: none !important; } } [href="${n2i(name[0],'#nolimWish')}"][count]:after { content: attr(count); font-size: 12px; padding: 0px 6px 0px 6px; width: inherit; height: 15px; line-height: 16px; background-color: ${n2i(name[2],'#0059ff')}; color: ${n2i(name[3],'#ffffff')}; border-radius: 30px; position: absolute; right: -3px; top: -3px; text-align: center; display: inherit; font-family: 'arial' !important; } .blkElem { pointer-events: none; } .cartcopyanim1 { -webkit-animation: t706__pulse-anim 0.6s; animation: t706__pulse-anim 0.6s; } .cartcopy_elem .tn-atom, .cartprice_elem .tn-atom { display: none; } </style> <script> $(document).ready(function() { $('.t1002__wishlisticon-counter').clone().appendTo($('[href="${n2i(name[0],'#nolimWish')}"]')); $('[href="${n2i(name[0],'#nolimWish')}"]').click(function(e) { e.preventDefault(); if(window.twishlist.total==0) { $('[href="${n2i(name[1],'#noneLink')}"]')[0].click(); } else { twishlist__openCart(); } }); $(".t1002").on('DOMSubtreeModified', ".t1002__wishlisticon-counter", function() { let nlcount1=window.twishlist.total; if (nlcount1==0) { $('[href="${n2i(name[0],'#nolimWish')}"]').removeAttr('count'); } else { $('[href="${n2i(name[0],'#nolimWish')}"]').attr('count', nlcount1); } $('[href="${n2i(name[0],'#nolimWish')}"]').addClass('cartcopyanim1'); setTimeout(function() { $('[href="${n2i(name[0],'#nolimWish')}"]').removeClass('cartcopyanim1'); },1000); }); }); </script> <a href="${n2i(name[1],'#noneLink')}" style="display:none"></a>
  
`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
<b>
ВАЖНО:<br><br>

&bull; Работает с блоками: ME203A, ME301, ME302, ME303, ME303A, ME304, ME405;
&bull; Модификация не работает на разрешениях экрана меньше 981px, по этому в блоке избранное (ST110) советуем продублировать настройки цветов и загрузить свою иконку и туда тоже;<br><br>
</b>
Как это работает:<br><br>
1. Копируем ссылку #nolimWish из генератора и вставляем в меню на любую соцсеть;<br>
2. Создаем попап и вписываем во второе поле ссылку на него, он будет открываться при пустом избранном;<br>
3. Настраиваем цвет фона и текста у количества;<br>
4. Настраиваем размер иконки избранного:<br>
&bull; 30х30px - такая же как иконки<br>
&bull; 40х40px - больше чем иконки<br>
5. Устанавливаем блок избранного (ST110) на страницу и настраиваем его для расширений до 981px;<br>
6. Нажимаем кнопку "Сохранить и закрыть"<br><br>
</div>`
});



nolimBlocks.push({
name: "",
cod: "NLM061",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3838-3763-4064-b063-616332313866/Frame_61.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Популярные, Кнопки, Эффекты",
title: "Скрыть/показать блок при нажатии на кнопку",
modsettings: `[
{
    "id": "1",
    "title": "id блока",
    "type": "block",
    "placeholder": "#rec380000000",
    "value": ""
},
{
    "id": "2",
    "title": "Ссылка для показа/скрытия",
    "type": "input",
    "placeholder": "#blockhs",
    "value": ""
},
{
    "id": "3",
    "title": "Изначально:",
    "type": "select",
    "options": {
        "Показывать": "0",
        "Скрывать": "1"
    },
    "value": ""
},
{
    "id": "4",
    "title": "Анимация скрытия/показа блока:",
    "type": "select",
    "options": {
        "Слайдом": "0",
        "Обычное": "1"
    },
    "value": ""
}
]`,

modoptions: [function modcontentfunc(name) {
    return `<style>${name}{display: none}</style>`
}
],
moddefaultsettings: '["","","",""]',
modcontent: function modcontentfunc(name, i) {
  return `

<script> $(document).ready(function() {${name[2] == "0" ? 'let t = 1;' : (name[3] == "0" ? `let t = 0; $("${name[0]}").slideUp();` : `let t = 0; $("${name[0]}").hide();`)} $('[href="${name[1]}"]').click(function() { 0 == t ? ($("${name[0]}").${name[3] == "0" ? 'slideDown()' : 'show()'}, "y" === window.lazy && t_lazyload_update(), typeof t_slds_updateSlider != "undefined" && t_slds_updateSlider('${name[0].replace('#rec','')}'), t396_doResize('${name[0].replace('#rec','')}'), t = 1) : 1 == t && ($("${name[0]}").${name[3] == "0" ? 'slideUp()' : 'hide()'}, t = 0) }) }); </script> ${name[2] == "1" ? nolimBlocks[i].modoptions[0]([name[0]]) : '' }

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>
1. Выбираем блоки, которые нужно скрыть или показать<br>
2. Указываем ссылку для кнопки, например, #open или #close<br>
3. Выбираем изначальное состояние блока, скрытое или открытое<br>
4. Выбираем анимацию показа или скрытия блока<br>
5. Нажимаем кнопку "Сохранить и закрыть"<br>
6. Указываем у элемента ссылку #open или #close так же как в настройках<br>
7. Публикуем страницу<br><br>

<b>ВАЖНО: Если используется анимация «Слайдом» для нескольких блоков, то фоны скрываемых или появляющихся блоков должны быть одинаковыми, иначе будут видны разрывы между блоками в момент появления/скрытия </b>
</div>`
});




nolimBlocks.push({
name: "",
cod: "NLM064",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3832-6131-4661-b964-626539326433/Frame_64.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
filter: "Кнопки, Эффекты",
title: "Эффект бегущей строки для кнопки в Zero Block",
modsettings: `[
{
    "id": "1",
    "title": "Класс элемента",
    "type": "input",
    "placeholder": "buttonfloat",
    "value": ""
},
{
    "id": "2",
    "title": "Скорость анимации",
    "type": "number",
    "placeholder": "5000",
    "value": ""
}
]`,

moddefaultsettings: '["",""]',
modcontent: function modcontentfunc(name) {
  return `

<script> $(function() { var a = $(".${name[0]} .tn-atom"); a['css']({ "overflow": 'hidden' }); a['wrapInner']('<span>'); a['find']('span')['css']({ "width": '50%', "display": 'inline-block', "text-align": 'center' }); a['append'](a['find']('span')['clone']()); a['wrapInner']('<div>'); a['find']('div')['css']('width', '200%'); var b = function() { $(this)['css']('margin-left', '0%'); $(this)['animate']({"margin-left": '-100%'}, ${name[1]}, 'linear', b) }; b['call'](a['find']('div')) }) </script>

`;
},
instruction: `<div id="group_bheader" class="pe-form-group__help-content pe-form-group__help-content_top pe-form-group">
Как это работает:<br><br>
1. Вписываем класс элемента в настройки, например, button<br>
2. Указываем скорость бегущей строки, от 3 000 до 10 000<br>
3. Нажимаем кнопку "Сохранить и закрыть"<br>
4. В Зеро блоке Нажимаем правой кнопкой мыши нажимаем на "кнопку" и выберем Add CSS class name<br>
5. Привязываем класс к кнопке в Зеро Блок, button, такой же как в настройках<br>
6. Публикуем страницу<br><br>
</div>`
});


/*
nolimBlocks.push({
name: "",
cod: "NLM065",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3838-3763-4064-b063-616332313866/Frame_61.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "Избранное с количеством в меню zero блока",
modsettings: `[
{
    "id": "1",
    "title": "Ссылка для избранного",
    "type": "input",
    "placeholder": "#fav-icon",
    "value": ""
},
{
    "id": "2",
    "title": "Класс для кол-ва",
    "type": "input",
    "placeholder": "countZ",
    "value": ""
},
{
    "id": "3",
    "title": "Ссылка при 0 товаров в избранном",
    "type": "input",
    "placeholder": "#none",
    "value": ""
},
{
    "id": "4",
    "title": "Показывать количество при 0 товаров",
    "type": "select",
    "options": {
        "Нет": "0",
        "Да": "1"
    },
    "value": ""
},
{
    "id": "5",
    "title": "Показывать иконку корзины на экранах экранах меньше 980px",
    "type": "select",
    "options": {
        "Нет": "0",
        "Да": "1"
    },
    "value": ""
}
]`,

moddefaultsettings: '["","","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> [href="${name[0]}"]:hover { transform: scale(1.05); background-image: relative; } @media screen and (min-width: 981px) { [href="${name[0]}"] { position: relative; display: block !important; } }  ${name[4] == "0" ? "@media screen and (min-width: 981px) {" : ""} .t1002__wishlisticon { display: none; } .t1002__wishlisticon-counter { display: none; } ${name[4] == "0" ? "}" : ""} @media screen and (max-width: 980px) { .${name[1]} {display:none;} [href="${name[0]}"] { display: none !important; } } .blkElem { pointer-events: none; } .cartcopyanim2 { -webkit-animation: t706__pulse-anim 0.6s; animation: t706__pulse-anim 0.6s; } </style><style id="cartcopyanim2${name[1]}"> .cartcopyanim2 { -webkit-animation: unset!important; animation: unset!important; } </style> <script> $(document).ready(function() { $('.t1002__wishlisticon-counter').clone().appendTo($('[href="${name[0]}"]')); $('[href="${name[0]}"]').click(function(e) { e.preventDefault(); if (window.twishlist.total > 0) { twishlist__openCart(); } else { ${typeof name[2] != "undefined" && name[2] != '' ? `$('[href="${name[2]}"]')[0].click();` : ''} } }); ${name[3] == '0' ? `$('.${name[1]}').hide();` : ''} $(".t1002").on('DOMSubtreeModified', ".t1002__wishlisticon-counter", function() { let nlcountz = window.twishlist.total; $('.${name[1]} .tn-atom').html(nlcountz); if (nlcountz == 0) { ${name[3] == '0' ? `$('.${name[1]}').hide();` : ''} ${name[2] == '' ? `$('[href="${name[0]}"]').parent().css('pointer-events', 'none');` : ''} } else { $('[href="${name[0]}"]').parent().css('pointer-events', 'all'); ${name[3] == '0' ? `$('.${name[1]}').show();` : ''} } $('[href="${name[0]}"]').addClass('cartcopyanim2'); setTimeout(function() { $('[href="${name[0]}"]').removeClass('cartcopyanim2'); }, 600); }); setTimeout(function() { $('#cartcopyanim2${name[1]}').remove(); },1200); }); </script> ${typeof name[2] != "undefined" && name[2] != '' ? `<a href="${name[2]}" style="display:none"></a>` : ''}

`;
},

});



nolimBlocks.push({
name: "",
cod: "NLM066",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3838-3763-4064-b063-616332313866/Frame_61.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "Тень при наведении",
modsettings: `[
{
    "id": "1",
    "title": "Class shape",
    "type": "input",
    "placeholder": "boxShadowNolim",
    "value": ""
},
{
    "id": "2",
    "title": "Class кнопки",
    "type": "input",
    "placeholder": "btnShadowNolim",
    "value": ""
},
{
    "id": "3",
    "title": "Длительность анимации",
    "type": "select",
    "options": {
        "0.5": "0.5",
        "0.6": "0.6",
        "0.7": "0.7",
        "0.8": "0.8",
        "0.9": "0.9",
        "1.0": "1.0",
        "1.1": "1.1",
        "1.2": "1.2",
        "1.3": "1.3",
        "1.4": "1.4",
        "1.5": "1.5"
    },
    "value": ""
}
]`,

moddefaultsettings: '["","","0.5"]',
modcontent: function modcontentfunc(name) {
  return `

<style> .${name[0]} .tn-atom{ transition: all ${name[2]}s; } .${name[0]} .tn-atom:not(:hover){ box-shadow: unset!important; } .${name[0]}unsetShadow .tn-atom{ transition: all ${name[2]}s; } </style>  ${typeof name[1] != "undefined" && name[1] != '' ? `<script> $(document).ready(function(){ let sI = setInterval(function() { if ($('.${name[0]} .tn-atom').length > 0) { clearInterval(sI); $(".t396 .${n2i(name[1],'btnShadowNolim')}").hover(function() { $('.t396 .${name[0]}').removeClass('${name[0]}').addClass('${name[0]}unsetShadow'); }, function() { $('.t396 .${name[0]}unsetShadow').addClass('${name[0]}').removeClass('${name[0]}unsetShadow'); }); } }, 50); }); </script>` : ''}

`;
},

});



nolimBlocks.push({
name: "",
cod: "NLM067",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3838-3763-4064-b063-616332313866/Frame_61.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "Как анимировать бордер у shape в Tilda?",
modsettings: `[
{
    "id": "1",
    "title": "Class элемента",
    "type": "input",
    "placeholder": "animNolimBorder",
    "value": ""
},
{
    "id": "2",
    "title": "Ширина бордера",
    "type": "select",
    "options": {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px"
    },
    "value": ""
},
{
    "id": "3",
    "title": "Цвет бордера",
    "type": "color",
    "placeholder": "#000000",
    "value": ""
},
{
    "id": "4",
    "title": "Тип цвета",
    "type": "select",
    "options": {
        "Градиентом": "1",
        "2 отдельных цвета": "2"
    },
    "value": ""
},
{
    "id": "5",
    "title": "Цвет 1 (элемента анимации)",
    "type": "color",
    "placeholder": "#00ff00",
    "value": ""
},
{
    "id": "6",
    "title": "Цвет 2 (элемента анимации)",
    "type": "color",
    "placeholder": "#00ff00",
    "value": ""
},
{
    "id": "7",
    "title": "Направления анимации",
    "type": "select",
    "options": {
        "Против часовой стрелки": "0",
        "По часовой стрелки": "1"
    },
    "value": ""
},
{
    "id": "8",
    "title": "Длительность анимации (в секундах)",
    "type": "select",
    "options": {
        "2 сек": "2s",
        "3 сек": "3s",
        "4 сек": "4s",
        "5 сек": "5s",
        "6 сек": "6s",
        "7 сек": "7s",
        "8 сек": "8s",
        "9 сек": "9s",
        "10 сек": "10s"
    },
    "value": ""
},
{
    "id": "9",
    "title": "При наведении",
    "type": "text"
},
{
    "id": "10",
    "title": "Цвет фона",
    "type": "color",
    "placeholder": "#2767dd",
    "value": ""
},
{
    "id": "11",
    "title": "Цвет бордера",
    "type": "color",
    "placeholder": "#000000",
    "value": ""
},
{
    "id": "12",
    "title": "Цвет 1 (элемента анимации)",
    "type": "color",
    "placeholder": "#00ffff",
    "value": ""
},
{
    "id": "13",
    "title": "Цвет 2 (элемента анимации)",
    "type": "color",
    "placeholder": "#2b5197",
    "value": ""
}
]`,
moddefaultsettings: '["","1px","","1","","","0","2s","","","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style>
    @supports (inset: ${name[1]}) {
        .${n2i(name[0],'animNolimBorder')} {
            overflow: hidden;
        }

        @supports (-moz-appearance:none) and (mask-type:alpha) {
            .${n2i(name[0],'animNolimBorder')}.t-sbs-anim_started>.tn-atom__sbs-anim-wrapper {
                display: flex !important;
            }

            .${n2i(name[0],'animNolimBorder')} {
                display: flex;
            }
        }

        @media screen and (min-width: 1200px) {
            .t396 .${n2i(name[0],'animNolimBorder')}.t-sbs-anim_started {
                overflow: visible;
            }
        }

        @media screen and (max-width: 1200px) {
            .${n2i(name[0],'animNolimBorder')}.t-sbs-anim_started {
                overflow: hidden;
            }

            .${n2i(name[0],'animNolimBorder')}.t-sbs-anim_started[data-animate-mobile="y"] {
                overflow: visible;
            }
        }

        .${n2i(name[0],'animNolimBorder')}.t-sbs-anim_started>.tn-atom__sbs-anim-wrapper {
            overflow: hidden;
            border-radius: inherit;
        }

        .${n2i(name[0],'animNolimBorder')} .tn-atom::before {
            content: '';
            position: absolute;
            animation: animate ${name[7]} linear ${name[6] == "0" ? "reverse " : "" }infinite;
            overflow: hidden;
        }

        @media screen and (min-width: 1200px) {
            .${n2i(name[0],'animNolimBorder')} .tn-atom:hover {
                background: ${n2i(name[9],'#ff00ae')} !important;
            }

            .${n2i(name[0],'animNolimBorder')} .tn-atom:hover::after {
                background: ${n2i(name[8],'#2767dd')};
            }
        }

        .${n2i(name[0],'animNolimBorder')} .tn-atom::after {
            content: '';
            position: absolute;
            inset: ${name[1]};
        }

        @keyframes animate {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }
</style>
<script>
    $(document).ready(function() {
        var tn = setInterval(function() {
            if ($('.${n2i(name[0],'animNolimBorder')} .tn-atom').length > 0) {
                clearInterval(tn);
                if (CSS.supports("inset", "${name[1]}")) {
                    var bC = $('.${n2i(name[0],'animNolimBorder')} .tn-atom').css('background-color');
                    var bR = $('.${n2i(name[0],'animNolimBorder')} .tn-atom').css('borderTopLeftRadius');
                    bR = bR.replace('px', '');
                    bR = Number(bR);
                    var typeClr = ${name[3]};
                    var insetJS = ${name[1].replace('px','')};
                    var bRafter = bR - insetJS;
                    $('.${n2i(name[0],'animNolimBorder')} .tn-atom').after(\` <style> .${n2i(name[0],'animNolimBorder')}{ border-radius: \${bR}px; } .${n2i(name[0],'animNolimBorder')} .tn-atom{ background-color: ${name[2]} !important; } .${n2i(name[0],'animNolimBorder')} .tn-atom::after{ background: \${bC}; border-radius: \${bRafter}px; } </style> \`);
                    var sizeH = $('.${n2i(name[0],'animNolimBorder')}').css('height');
                    var sizeW = $('.${n2i(name[0],'animNolimBorder')}').css('width');
                    sizeH = sizeH.replace('px', '');
                    sizeH = Number(sizeH);
                    sizeW = sizeW.replace('px', '');
                    sizeW = Number(sizeW);
                    var leftSizeH = Number(sizeH / 4);
                    var leftSizeW = Number(sizeW / 4);
                    sumWH = sizeW - sizeH;
                    if (sumWH > 0 && typeClr == 1) {
                        sizeH = Number(sizeH / 2);
                        $('.${n2i(name[0],'animNolimBorder')}').after(\` <style> .${n2i(name[0],'animNolimBorder')} .tn-atom::before{ width: 300% !important; height: \${sizeH}px !important; top: \${leftSizeH}px; left: -100%; background: linear-gradient(${name[4]}, ${name[5]}); } @media screen and (min-width: 1200px){ .${n2i(name[0],'animNolimBorder')} .tn-atom:hover::before{ background: linear-gradient(${n2i(name[10],'#ff00ae')}, ${n2i(name[11],'#00ff6e')}); } } </style>\`);
                    } else if (sumWH > 0 && typeClr == 2) {
                        sizeH = Number(sizeH / 2);
                        $('.${n2i(name[0],'animNolimBorder')} .tn-atom').after(\` <style> .${n2i(name[0],'animNolimBorder')} .tn-atom::before{ width: 300% !important; height: \${sizeH}px !important; top: \${leftSizeH}px; left: -100%; background: linear-gradient(90deg, ${name[4]} 50%, ${name[5]} 50%); } @media screen and (min-width: 1200px){ .${n2i(name[0],'animNolimBorder')} .tn-atom:hover::before{ background: linear-gradient(90deg, ${n2i(name[10],'#ff00ae')} 50%, ${n2i(name[11],'#00ff6e')} 50%); } } </style>\`);
                    } else if (sumWH <= 0 && typeClr == 1) {
                        sizeW = Number(sizeW / 2);
                        $('.${n2i(name[0],'animNolimBorder')} .tn-atom').after(\` <style> .${n2i(name[0],'animNolimBorder')} .tn-atom::before{ height: 160% !important; width: \${sizeW}px !important; top: 0; bottom: 0; margin: auto; left: \${leftSizeW}px; background: linear-gradient(90deg, ${name[4]}, ${name[5]}); } @media screen and (min-width: 1200px){ .${n2i(name[0],'animNolimBorder')} .tn-atom:hover::before{ background: linear-gradient(90deg, ${n2i(name[10],'#ff00ae')}, ${n2i(name[11],'#00ff6e')}); } } </style> \`);
                    } else if (sumWH <= 0 && typeClr == 2) {
                        sizeW = Number(sizeW / 2);
                        $('.${n2i(name[0],'animNolimBorder')} .tn-atom').after(\` <style> .${n2i(name[0],'animNolimBorder')} .tn-atom::before{ height: 160% !important; width: \${sizeW}px !important; top: 0; bottom: 0; margin: auto; left: \${leftSizeW}px; background: linear-gradient(${name[4]}, ${name[5]}); } @media screen and (min-width: 1200px){ .${n2i(name[0],'animNolimBorder')} .tn-atom:hover::before{ background: linear-gradient(${n2i(name[10],'#ff00ae')}, ${n2i(name[11],'#00ff6e')}); } } </style> \`);
                    }
                } else {};
            }
        }, 50);
    });
</script>

`;
},

});



nolimBlocks.push({
name: "",
cod: "NLM068",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3178&q=80",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "Меню 2-го уровня из меню в zero block",
modsettings: `[
{
    "id": "1",
    "title": "Class для открытия меню 2-го уровня",
    "type": "input",
    "placeholder": "nolimMenu2",
    "value": ""
},
{
    "id": "2",
    "title": "Показ меню по ховеру:",
    "type": "select",
    "options": {
        "Да": "0",
        "Нет": "1"
    },
    "value": ""
},
{
    "id": "3",
    "title": "Анимация скрытия/показа блока:",
    "type": "select",
    "options": {
        "Слайдом": "0",
        "Обычная": "1"
    },
    "value": ""
}
]`,

moddefaultsettings: '["","",""]',
modcontent: function modcontentfunc(name) {
  return `

<script> $(document).ready(function() { let mynewstyle = '<style>'; let menus = ''; $('.${name[0]}').each(function(i, item) { let hr = $(item).find('a').attr('href'); $(hr).addClass('nolim_forMenu'); menus += \`\${hr},\`; mynewstyle += \`\${hr},\`; }); menus = menus.substring(0, menus.length - 1); mynewstyle = mynewstyle.substring(0, mynewstyle.length - 1); mynewstyle += \` { z-index: 9995; display: none; width: 100%;}\`; mynewstyle += \`</style>\`; $('body').after(mynewstyle); let sI = setInterval(function() { if ($('.${name[0]} .tn-atom').length > 0) { clearInterval(sI); var menu2 = menus; var href = $('.${name[0]} a'); var idM = $('.${name[0]} .tn-atom').parents('.t-rec'); var idMh = $('.${name[0]} .tn-atom').parents('.t-rec').children().children().css('height'); var idPos = $('.${name[0]} .tn-atom').parents('.t-rec').css('position'); if (idPos == 'fixed') { $(menu2).css('position', 'fixed'); $(menu2).css('top', idMh); } else if (idPos == 'static') { $(menu2).css('position', 'absolute'); $(menu2).css('margin-top', '0px'); } else if (idPos == 'absolute') { $(menu2).css('position', 'absolute'); $(menu2).css('top', idMh); } else {}; setTimeout(function(){ href.off('click').on('click', function(e) { e.preventDefault(); let id = $(e.currentTarget).attr('href'); if ($(id).css('display') == 'none') { $(menu2).${name[2] == "0" ? 'slideUp()' : 'fadeOut()'}; $(id).${name[2] == "0" ? 'slideDown()' : 'fadeIn()'}; } else { $(id).${name[2] == "0" ? 'slideUp()' : 'fadeOut()'} }; }); ${name[1] == "0" ? "href.mouseover(function(e) { e.preventDefault(); let id = $(e.currentTarget).attr('href'); if ($(id).css('display') == 'none') { $(menu2)." + (name[2] == "0" ? "slideUp()" : "fadeOut()") + "; $(id)." + (name[2] == "0" ? "slideDown()" : "fadeIn()") + "}; });" : ""} },600); $(document).on('${name[1] == "0" ? 'pointermove mousemove' : 'pointerup mouseup'}', (function(e) { if ($(menu2).has(e.target).length === 0 && $(idM).has(e.target).length === 0 && !$(menu2).is(e.target)) { $(menu2).${name[2] == "0" ? 'slideUp()' : 'fadeOut()'}; }; })); }; }, 50); }); </script>


`;
},

});



nolimBlocks.push({
name: "",
cod: "NLM069",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://static.tildacdn.com/tild3838-3763-4064-b063-616332313866/Frame_61.jpg",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "Иконка поиск в стандартное меню",
modsettings: `[
{
    "id": "1",
    "title": "id блока с поиском",
    "type": "block",
    "placeholder": "#rec000000",
    "value": ""
},
{
    "id": "2",
    "title": "Размер иконки",
    "type": "select",
    "options": {
        "30px": "30px",
        "40px": "40px"
    },
    "value": "30px"
},
{
    "id": "3",
    "title": "Ссылка поиска",
    "type": "input",
    "placeholder": "#nolimSearch",
    "value": ""
},
{
    "id": "4",
    "title": "Анимация скрытия/показа блока:",
    "type": "select",
    "options": {
        "Слайдом": "0",
        "Обычная": "1"
    },
    "value": ""
},
{
    "id": "5",
    "title": "Ссылка на иконку поиска:",
    "type": "image",
    "placeholder": "https://static.tildacdn.com/tild6261-3765-4239-a432-396532653864/search.png",
    "value": ""
}
]`,

moddefaultsettings: '["","","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> @media screen and (max-width: 980px){ ${name[0]} { display:none; } } @media screen and (min-width: 980px){ [href="${name[2]}"] svg { background-image: url(${name[4]}); background-position: center center; background-size: cover; transition: all .1s ease; width: ${name[1]}; height: ${name[1]}; } [href="${name[2]}"] svg * { display: none; } [href="${name[2]}"] svg:hover { transform: scale(1.05); background-image: relative; } ${name[0]} { width: 100%; z-index: 9995; display: none; box-shadow: 0px 5px 10px #00000010; } [href="${name[2]}"] { cursor: pointer; } } </style> <script> if ($(window).width() >= 980) { $(document).ready(function() { var t838 = "${name[0]}"; var href = $("[href='${name[2]}']"); var idM = $('[href="${name[2]}"]').parents('.t-rec'); var idMh = $('[href="${name[2]}"]').parents('.t-rec').children().children(); var idPos = $('[href="${name[2]}"]').parents('.t-rec').children().eq(1); idPos = idPos.attr('class'); idPos = $('.'+idPos).css('position'); idMh = $(idMh).css('height'); if(idPos == 'fixed'){ $(t838).css('position', 'fixed'); $(t838).css('top', idMh); }else if (idPos == 'static'){ $(t838).css('position', 'relative'); $(t838).css('margin-top', '0px'); }else if (idPos == 'absolute') { $(t838).css('position', 'absolute'); $(t838).css('top', idMh); }else {}; if($('[href="${name[2]}"]').parents('.t-rec').find('[class*="fixed"]').length > 0){ $(t838).css('position', 'fixed'); $(t838).css('top', idMh); }else if ($('[href="${name[2]}"]').parents('.t-rec').find('[class*="static"]').length > 0){ $(t838).css('position', 'static'); }else if ($('[href="${name[2]}"]').parents('.t-rec').find('[class*="relative"]').length > 0){ $(t838).css('position', 'static'); }else if ($('[href="${name[2]}"]').parents('.t-rec').find('[class*="absolute"]').length > 0){ $(t838).css('top', idMh); $(t838).css('position', 'absolute'); }else{ } href.on('click', function(e) { e.preventDefault(); if ($(t838).css('display') == 'none') { $(t838).${name[3] == "0" ? 'slideDown()' : 'fadeIn()'}; } else { $(t838).${name[3] == "0" ? 'slideUp()' : 'fadeOut()'}; } }); $(document).on('pointerup mouseup', (function(e) { if ($(t838).has(e.target).length === 0 && $(idM).has(e.target).length === 0 && !$(t838).is(e.target)) { $(t838).${name[3] == "0" ? 'slideUp()' : 'fadeOut()'}; } })); }); }; </script>

`;
},

});



nolimBlocks.push({
name: "",
cod: "NLM070",
descr: "",
descr_ru: "",
disableforplan0: "y",
icon: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2369&q=80",
icon2: "/files/tplsthumbs/other-block-02.png",
id: "131",
inlib: "y",
title: "Текст со скроллом",
modsettings: `[
{
    "id": "1",
    "title": "Class текста",
    "type": "input",
    "placeholder": "cls-text",
    "value": ""
},
{
    "id": "2",
    "title": "Высота блока с текстом (px)",
    "type": "number",
    "placeholder": "180",
    "value": ""
},
{
    "id": "3",
    "title": "Ширина scrollbara (px)",
    "type": "number",
    "placeholder": "10",
    "value": ""
},
{
    "id": "4",
    "title": "Цвет бегунка",
    "type": "color",
    "placeholder": "#none",
    "value": ""
},
{
    "id": "5",
    "title": "border - radius бегунка (px)",
    "type": "number",
    "placeholder": "5",
    "value": ""
},
{
    "id": "6",
    "title": "Толщина бордера бегунка (px)",
    "type": "number",
    "placeholder": "1",
    "value": ""
},
{
    "id": "7",
    "title": "Цвет бордера бегунка",
    "type": "color",
    "placeholder": "#000",
    "value": ""
},
{
    "id": "8",
    "title": "Цвет фона scrollbara",
    "type": "color",
    "placeholder": "#cecece",
    "value": ""
}
]`,

moddefaultsettings: '["","","","","","","",""]',
modcontent: function modcontentfunc(name) {
  return `

<style> .${name[0]} .tn-atom{ height: ${n2i(name[1],'180')}px; position: inherit; overflow: auto; } .${name[0]} .tn-atom{ scrollbar-color: ${name[3]} ${name[7]}; scrollbar-width: thin; } .${name[0]} .tn-atom::-webkit-scrollbar { width: ${name[2]}px !important; -webkit-appearance: none !important; } .${name[0]} .tn-atom::-webkit-scrollbar-track { background: ${n2i(name[7],'#F8F7F8')} !important; } .${name[0]} .tn-atom::-webkit-scrollbar-thumb { background: ${name[3]} !important; border: ${n2i(name[5],'1')}px solid ${n2i(name[6],'#000')} !important; -webkit-border-radius: ${name[4]}px !important; } </style>

`;
},

});
*/



$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    } else {
       return decodeURI(results[1]) || 0;
    }
}

  let preview = $.urlParam('previewmode'); 
  if(preview == 'yes'){
    $tpls = [];
    nolimBlocks.forEach(function(block) {
        $tpls.push(block)
    })
    $('[data-record-type="131"]').hide();
  } else {
    nolimBlocks.forEach(function(block) {
        $tpls.push(block)
    })
  }















  