import React from "react";


const Login = () => {
    return (
        <div>
            <div className="xl:container min-h-screen xl:max-w-full bg-teal-100">
                <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-content-center gap-2 xl:min-h-screen xl:text-red-500 xs:text-blue-500 xss:text-blue-500">
                    <div className="xl:col-span-2 py-10">
                        <h1>Halaman Login</h1>
                    </div>
                    <div className="form_login py-5">
                        <p>Silahkan login</p>
                    </div>
                    <div className="text_login py-5">
                        Admin Masuk Portfolio
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Login;