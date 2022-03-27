@user-service
Feature: User service

    I want to verify CRUD operations through REST API. Since the test server uses mock data and cannot really save newly
    created user, the tests will use user with id = 2 to verify reading, updating and deleting user. 

    Scenario Outline: create a user, read newly created user, update user and delete user
    Given A request body <request>
    When I send POST request to "api/users"
    Then I get response code 201
    Then Response has "name" value "test"
    Then Response has "job" value "test analyst"
    Given A user <id> exist
    When I send GET request to "api/users"
    Then I get response code 200
    Then Response has id value 2
    Given A request body <request1>
    When I send PUT request to "api/users/2"
    Then I get response code 200
    Then Response has "name" value "morpheus"
    Then Response has "job" value "teacher"
    When I send DELETE request to "api/users/2"
    Then I get response code 204

    Examples:
      |request                               | id |  request1                             |                                    
      |{"name":"test", "job":"test analyst"} | 2  | {"name":"morpheus", "job":"teacher"}  | 

    