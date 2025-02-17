import { Button } from '@/components/ui/button';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NavLink } from 'react-router-dom';
import { useModelAuth } from '../model.auth';

export function SignUp() {
  const { data, actions } = useModelAuth();
  return (
    <section className="h-screen flex flex-col  items-center w-full">
      <div className=" border rounded-md p-5 flex ">
        <div className="">
          <div className="text-center mb-10">
            <h1 className="text-5xl mb-5">Criar cadastro </h1>
            <h2 className="text-xl text-slate-500">Bem vindo!</h2>
            <h3 className="text-sm text-slate-600">
              Preencha os campos abaixo para criar sua conta
            </h3>
          </div>
          <Form {...data.formSignin}>
            <form
              onSubmit={data.formSignin.handleSubmit(actions.onSubmit)}
              className="space-y-8 w-96 relative"
            >
              <FormField
                control={data.formSignin.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="Insira o E-mail" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={data.formSignin.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira sua senha"
                        type="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col  space-y-3 w-full">
                <Button type="submit" className="float-right " disabled>
                  Registrar
                </Button>
                <NavLink to="signup" className="text-center">
                  Voltar para pagina de login
                </NavLink>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
