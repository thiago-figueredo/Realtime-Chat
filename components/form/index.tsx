import { Form, Input, Button } from "./style"

export default function FormComponent() {
  const signInUser = () => {

  }

  return <Form onSubmit={ signInUser }>
    <Input 
      type="text" 
      id="user-name"
      placeholder="Username" 
      maxLength={ 50 } 
    /> 

    <Input 
      id="user-password"
      type="password" 
      placeholder="Password" 
      maxLength={ 50 }
    /> 
    <Button type="submit">Sign in</Button>
  </Form>
}