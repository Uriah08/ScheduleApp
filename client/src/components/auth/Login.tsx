import AuthLayout from './AuthLayout'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from '@/schema'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom'

const Login = () => {

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values)
    }
  
    return (
        <AuthLayout>
            <div className="flex flex-col p-3">
                <h1 className="font-bold text-2xl mt-3 text-zinc-800">Sign in</h1>
                <p className="text-gray-600 text-xs mt-1">Welcome back! Please sign in to continue</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-8">
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='text-zinc-500'>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Cvsu08" {...field} className="!text-xs"/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='text-zinc-500'>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Your password" {...field} type='password' className="!text-xs"/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className='flex flex-col w-full'>
                            <Button className='bg-[#1a6b15] w-full hover:bg-[#145811] cursor-pointer mt-5'>Sign in</Button>
                            <Link to="/register" className='text-xs text-end mt-1 cursor-pointer hover:underline'>Don&apos;t have an account?</Link>
                        </div>
                    </form>
                </Form>
            </div>
        </AuthLayout>
    )
}

export default Login;