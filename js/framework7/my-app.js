// Initialize your app
var myApp = new Framework7({
    domCache:true,
    tapHold:true
});

// Export selectors engine
var $$ = Dom7;

// Add view

$$('.nset').on('taphold', function () {
  var buttons = [
        {
            text: 'Edit Options',
            label: true
        },
        {
            text: 'Add cards',
            bold: true
        },
        {
            text: 'Edit cards',
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});

var mainView = myApp.addView('.view-main', {
});


$$(document).on('ajaxStart', function (e)
{
    //mostrar loading
    myApp.showPreloader('Loading...');
});


myApp.onPageInit('home', function (page) {
    console.log("heat");
    $$('.nset').on('taphold', function () {
  var buttons = [
        {
            text: 'Edit Options',
            label: true
        },
        {
            text: 'Add cards',
            bold: true
        },
        {
            text: 'Edit cards',
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});
});

/*
// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});



// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}
*/
