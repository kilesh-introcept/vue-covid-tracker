

<template>
    <div class="bg-white px-10 md:px-16 py-10 flex flex-col justify-center items-center gap-4 min-w-[500px] shadow rounded ">
       <div class="flex flex-col justify-center items-center border-b-2 w-full">
           <div class="h-20 shadow-md rounded-full w-20 bg-primary-default"></div>
           <div class="text-center">
               <p class="font-bold p-4">Introcept Employee<br>Portal</p>
            </div>
       </div>
       <div class = "grid gap-2 w-full">
           <p class="font-bold">Login to your Account</p>
           <CustomInput type="text"  label = "Email" v-model="auth.email"/>
           <CustomInput type="password"  label = "Password" v-model="auth.password"/>
           <button class="btn btn-primary">Login</button>
           <p class="text-center text-primary-dark hover:underline underline-offset-4 cursor-pointer text-sm mt-2 font-semibold">Forgot Password?</p>
           <p v-if="auth.email!== ''">{{auth}}</p>
       </div>

    </div> 
</template>

<script>
import CustomInput from "@/components/form/customInput.vue";
export default {
    name: "AuthForm",
    components: {
        CustomInput
    },
    data() {
        return {
            auth: {
                email: "",
                password: ""
            }
        
        }
    },
    created() {
        console.log("AuthForm created");
    },
   
}
</script>
