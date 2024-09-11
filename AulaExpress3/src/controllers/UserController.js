// Irei usar uma array de usuários como repositório de dados por que é o exemplo dado na aula
let usuarios = [
    {
        id:1,
        nome:"Caio",
        email:"caiohc.dev@gmail.com",
        phone:"81 9 9999-9999"
    },
    {
        id:2,
        nome:"Cesar",
        email:"cesar.dev@email.com",
        phone:"83 9 9999-9999"
    }

]

class UserController {
    // GetAll
    static findAll(request, response) {
        response.json({
            users:usuarios
        });
    }

    // Post
    static sendUser(request, response) {
        const {nome, email, phone} = request.body;
        let user = {
            id: usuarios.at(-1).id + 1,
            name:nome,
            email:email,
            phone:phone
        }

        usuarios.push(user);

        response.send(200, {
            message: "Usuário adicionado com sucesso!",
            usuario:user
        });
    }

    static findById(request, response) {
        const {id} = request.params;
        const user = usuarios.find(
            (user)=> user.id == id
        );
        if (!user) {
            response.send(404, {
                status:false,
                message:"Usuário não encontrado."
            })
        }

        response.send(200, {
            message:"Usuário encontrado.",
            usuario:user
        });
    }

}

export default UserController;