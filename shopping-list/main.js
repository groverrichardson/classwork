function main(){
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const value = $('#js-shopping-list-form').find('input[name="shopping-list-entry"]').val();
        $(this).parent("div").find(".shopping-list").append(`<li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
        $(this).find('input[name="shopping-list-entry"]').val('')
    })
    $("ul").on("click", "li", function(){
        if ($(event.target).text() === "check") {
            $(this).find('.shopping-item').toggleClass("shopping-item__checked");
        }
        if ($(event.target).text() === "delete") {
            $(this).remove();
        }
    })
}

$(main);