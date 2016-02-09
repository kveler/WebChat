<?php

class ChatController extends EmmaController {

    public function userToDatabase(){

        die (var_dump ($_POST));

        $users = new UsersTable();

        $users->insert
        (
            array
            (
                "voornaam" => $_POST['user'],
                "email" => $_POST['email']
            )
        );

        Session::set("user", $_POST['user']);
    }


}