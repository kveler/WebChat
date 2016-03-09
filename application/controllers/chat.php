<?php

class ChatController extends EmmaController {

    public function userToDatabase(){

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