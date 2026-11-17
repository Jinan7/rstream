'use server'
import { signup as apiSignup } from "../lib/api"
export default async function signup(formData ) {  
    
    let name = formData.get('name')
    let email = formData.get('email')
    let password = formData.get('password')

    let response = await apiSignup({name:name,email:email,password:password})
    
    console.log(response.headers)
}