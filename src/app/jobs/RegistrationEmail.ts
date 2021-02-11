import Mail from "../lib/Mail"

export interface UserInterface {
    name: string
    email: string
    password: string
   
}

export default{
    key: 'RegistrationMail',
    async handle({data}: any ): Promise<void>{
        const {user} = data
        await Mail.sendMail({
            from: 'Queue <queue@test.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Email',
            html: `Olá, ${user.name}`
        })
    }
}