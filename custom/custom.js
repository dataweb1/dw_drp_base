(function ($) {
  Drupal.dw_drp_base_custom = Drupal.dw_drp_base_custom || {};

  Drupal.behaviors.dw_drp_base_custom = {
    attach: function (context) {
      addUiButton();
    }
  };

  $(window).on({
    'dialog:aftercreate': function afterCreateDialog() {
      $('.ui-dialog-titlebar-close').each(function() {
        if (!$(this).hasClass('ui-button')) {
          $(this).addClass('ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close');
          $(this).html('<span class="ui-button-icon ui-icon ui-icon-closethick"></span><span class="ui-button-icon-space"> </span>Close');
        }
      });
      addUiButton();
    }
  });

  function addUiButton() {
    $('form .button, .ui-dialog-buttonset .button').each(function() {
      if (!$(this).hasClass('ui-button') &&
          !$(this).hasClass('no-ui-button') &&
          !$(this).hasClass('media-library-item__remove')) {
        $(this).addClass('ui-button');
      }
    });
  }

})(jQuery);
