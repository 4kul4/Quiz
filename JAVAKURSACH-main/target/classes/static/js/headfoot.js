window.onload = (function() {
    var header_text = "<nav class=\"navbar navbar-expand-lg navbar-light\"> " + 
        "<div class=\"container-fluid\">" +
            "<a href=\"/\" class=\"navbar-brand ms-5\">" +
                "<img src=\"../images/logo.png\" class=\"logo img-fluid\">" +
            "</a>" + 
            "<button type=\"button\" class=\"navbar-toggler justify-content-center me-4\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarContent\" area-controls=\"navbarContent\" area-expanded=\"false\">" +
                "<span class=\"navbar-toggler-icon\"></span>" + 
            "</button>" + 
            "<div class=\"collapse navbar-collapse justify-content-end me-4\" id=\"navbarContent\">" +
                "<ul class=\"navbar-nav\">" +
                    "<li class=\"nav-item ms-4\">" +
                    "<a href=\"/help\" class=\"nav-link\">Quiz</a>" +
                    "</li>" +
                    "<li class=\"nav-item ms-4\">" +
                        "<a href=\"/\" class=\"nav-link\">Отзывы</a>" +
                    "</li>" +
                    "<li class=\"nav-item ms-4\">" +
                        "<a href=\"about\" class=\"nav-link\">Контакты</a>" +
                    "</li>" +
                    "<li class\"nav-item ps-5\">" + 
                        "<a href=\"/userPage\" class=\"nav-link\"><img src=\"../images/user.svg\"</a>" +
                    "</li>" +
                "</ul>" +
            "</div>" +
        "</div>" +
    "</nav>";
    document.getElementsByClassName('head')[0].innerHTML = header_text;

})