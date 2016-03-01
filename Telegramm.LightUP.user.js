// ==UserScript==
// @name         Telegramm LightUP
// @namespace    http://dartfox.ru
// @version      a0.1
// @description  Light telegram messages from custom user
// @author       Dartfox
// @match        https://web.telegram.org/
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
var author_list=[
        'MakcEXPLO Е14 Мsk [RU]'
];
setInterval(function(){
    $.each(author_list,function(i,v){
      jQuery(".im_history_messages_peer .im_message_author:contains('"+v+"')").closest('.im_message_outer_wrap').each(function(){
        if(!$(this).is('.yellow')) {
           $(this).addClass('yellow').css('background-color','yellow')
        }
      });
    });
},1000);