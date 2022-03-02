package coursework.Quiz.repositories;

import org.springframework.data.repository.CrudRepository;

import coursework.Quiz.entities.UserRole;

public interface RoleRepo extends CrudRepository<UserRole, Long>{
    
}
