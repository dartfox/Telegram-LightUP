// ==UserScript==
// @name         Telegramm LightUP
// @namespace    https://github.com/dartfox/Telegram-LightUP/raw/master/Telegramm.LightUP.user.js
// @version      alfa 0.1.2001603012050
// @description  Light telegram messages from custom user
// @author       Dartfox
// @match        https://web.telegram.org/
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
var author_list_Khaki=[
        'Nick1','Nick2'
];


setInterval(function(){
    $.each(author_list_Khaki,function(i,v){
      jQuery(".im_history_messages_peer .im_message_author:contains('"+v+"')").closest('.im_message_outer_wrap').each(function(){
        if(!$(this).is('.khaki')) {
           $(this).addClass('khaki').css('background-color','khaki')
        }
      });
    });

},1000);
