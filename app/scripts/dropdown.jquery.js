/**
 * DROPDOWN
 *
 * sample usage:
 *
 *  <div class="acts-as-dropdown">
 *    <button data-dropdown-trigger class="is-active">toggle</button>
 *
 *    <ul data-dropdown>
 *      <li>one</li>
 *      <li>two</li>
 *      <li>three</li>
 *    </ul>
 *  </div>
 *
 *  <script>
 *    $('.acts-as-dropdown').dropdown();
 *  </script>
 *
 */

(function($){
  $.fn.dropdown = function(){
    this.each(function(index, elem){;
      init(elem);
    });

    function init(element){
      var trigger = $('[data-dropdown-trigger]', element),
          body    = $('[data-dropdown]', element),
          open    = true;

      $(element).css('position', 'relative');

      trigger.css('cursor', 'pointer');
      body.hide();
      open = false;

      trigger.click(function(e){
        $(this).toggleClass('is-active');

        if (!open) {
          body.show();
          open = true;
          setTimeout(function(){
            $(document).one('click.dropdown', closeDropdown);
            $(document).one('keydown.dropdown', function(event){
              if ( event.keyCode === 27 ) {
                closeDropdown();
              }
            });
          }, 0);
        }
      });

      function closeDropdown(){
        open = false;
        body.hide();
        trigger.removeClass('is-active');
      }

//      function outsideClickHandler(event){
//        if ( !body.is(event.target) && !body.find(event.target).length ) {
//          open = false;
//          body.hide();
//          trigger.removeClass('is-active');
//        }
//      }
    }

    return this;
  }
})(jQuery);