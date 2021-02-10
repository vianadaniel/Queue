import Mail from "../lib/Mail"

export interface UserInterface {
    name: string
    email: string
    password: string
   
}

export default{
    key: 'RegistrationMail',
    async handle(user: UserInterface): Promise<void>{
        
        await Mail.sendMail({
            from: 'Queue <queue@test.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Email',
            html: `Olá, ${user.name}`
        })
    }
}