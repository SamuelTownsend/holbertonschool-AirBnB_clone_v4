$(document).ready(function() {
    const checkFor = {};
    $(document).on('change', "input[type='checkbox']", function() {
        if (this.checked) {
            checkFor[$(this).data('id')] = $(this).data('name');

        } else {
            delete checkFor[$(this).data('id')];
        }
        const AmList = []
        for (const idx in checkFor) {
            AmList.push(checkFor[idx]);
        }
        $('.amenities h4').text(amList.join(', '))
    })
})