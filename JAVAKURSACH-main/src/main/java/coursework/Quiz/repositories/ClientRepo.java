package coursework.Quiz.repositories;

import org.springframework.data.repository.CrudRepository;

import coursework.Quiz.entities.Client;

public interface ClientRepo extends CrudRepository<Client, Long> {
    Client findByUsername(String username);
    Client findById(int id);
}
