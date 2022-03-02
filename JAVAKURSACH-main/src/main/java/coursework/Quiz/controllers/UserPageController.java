package coursework.Quiz.controllers;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import coursework.Quiz.entities.Client;

@Controller
public class UserPageController {
    @GetMapping("/userPage")
    public String UserPage(Model model) {
        model.addAttribute("client", (Client)SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        return "html/userPage";
    }
}
