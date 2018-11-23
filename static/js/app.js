$(document).ready(function () {
    //material js
    $('.sidenav-hover').sidenav();
    $('.dropdown-trigger').dropdown({
        coverTrigger: false,
        constrainWidth: false,
        alignment: 'right',
        container: true
    });
    // checkbox onchange event for action
    // checkbox onchange event for action
    $('body').on('change','.table #check-action',function () {
        $('.check-action').prop("checked", $(this).prop("checked"));
        var item = $('.check-action:checked').map(function () {
            return $(this).val();
        }).get().join();
        items = item.length;
        if (items > 1){
            $('.action').hide();
            $('.actions').show();
            $('#edit').addClass('disabled');
        }
        if (items == 0){
            $('.action').show();
            $('.actions').hide();
        }

    })
    $('body').on('change','.table .check-action',function () {
        $(this).prop("checked");
        var id = $('.check-action');
        man = id.length;
        var item = $("input:checkbox.check-action:checked").map(function () {
            return $(this).val();
        }).get().join();
        items = item.length;
        if (items == 1 || items > 1){
            $('.action').hide();
            $('.actions').show();
        }
        if (items == 0){
            $('.action').show();
            $('.actions').hide();
            $('#check-action').prop('checked',false);
        }
        if (items > 1){
           $('#edit').addClass('disabled');
        }
        if (items == 1){
            $('#edit').removeClass('disabled');
        }
    })
    $('.modal').modal();
    $('.datepicker').datepicker({
        showClearBtn: true,
        yearRange: 11,
    });
});