package coursework.Quiz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NavController {
    @GetMapping("/")
    public String HomePage() {
        return "html/index";
    }
    @GetMapping("/about")
    public String AboutPage() {
        return "html/aboutus";
    }
    @GetMapping("/help")
    public String Help() {
        return "html/help";
    }
}
