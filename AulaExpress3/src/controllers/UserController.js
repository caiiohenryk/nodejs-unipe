class UserController {
    static teste(request, response){
        response.send({
            message:"Testee"
        });
    }
}

export default UserController;