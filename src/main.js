$(document).ready(function(){
    if ($('.item-actions .item-actions-line .write-message, .item-actions .item-actions-line .item-phone').length > 0) {
        var $button = $('<div class="item-actions-line"><div><button class="button button-origin write-message-btn js-item-tooltip-trigger button-origin_full-width button-origin_large-extra">SmmBox</button></div></div>');
        $button.find('button').click(function() {
            SmmBox.ClearAttaches();

            SmmBox.AddAttach('text', {
                text: $('.title-info-title-text').text().trim() + "\r\n\r\n"
            });

            var description = $('.item-description-text').text().trim();
            if (description === '') {
                description = $('.item-description-html').text().trim()
            }
            SmmBox.AddAttach('text', {
                text: description
            });

            $('.gallery-list .gallery-list-item-link').each(function(index, item) {
                var m = /url\("(.*?)"\)/i.exec($(item).css('background-image'));
                if (m !== undefined && m.length > 1) {
                    SmmBox.AddAttach('photo', {
                        thumbnail: m[1],
                        original: m[1].replace(/\/\d{1,3}x\d{1,3}\//i, '/640x480/')
                    });
                }
            });

            SmmBox.AddAttach('link', {
                url: location.href
            }).ShowWindow();
        });
        $('.item-actions').append($button);
    }
});

