const UserHeader = {
    render: () => {
        return (
            /*html*/`
                <div class="flex bg-red-800 justify-center">
					<a href="/admin"><img class="w-[64px] p-2 " src="/images/logo.png"/></a>
					<label class="relative block mt-2 justify-center pl-10">
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-40 pr-40 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search"/>
                </label>
                <div class="mt-2 pl-20 text-white ">
                <h5>Gọi mua hàng</h5>
                <a href="">1800.2097</a>
                </div>
                <div class="w-[7%] block">
                <div class="float-left pt-3 pl-5"><i class="fa-solid fa-location-dot fa-xl"></i></div>
                <div class="pl-12 text-white"><a href="">Cửa hàng gần bạn</a></div>
                </div>
                <div class ="w-[7%] block">
                <div class="float-left pt-3 pl-5">
                <i class="fa-solid fa-truck fa-xl"></i>
                </div>
                <div class="pl-12 text-white"><a href=""> Tra cứu đơn hàng</a></div>
                </div>
                <div class ="w-[7%] block">
                <div class="float-left pt-3 pl-5">
                <i class="fa-solid fa-cart-plus fa-xl"></i>
                </div>
                <div class="pl-12 text-white"><a href="">Tra cứu đơn hàng</a></div>
                </div>
                <div class="mt-4 mr-5 text-white pl-40">
                    <a href="/Signin" class=" underline hover:decoration-2">Đăng Nhập</a>/
                    <a href="/Signup" class=" underline hover:decoration-2">Đăng Ký</a>
                </div>
                </div>
            `
        )
    }
}

export default UserHeader