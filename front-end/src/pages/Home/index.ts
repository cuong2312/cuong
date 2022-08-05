import { getAll, get } from '../../api/product';
import Product from '../../model/product';
import Sidebar from '../../components/Sidebar';
import UserHeader from '../../components/Header/User';
const HomePage = {
    render: async () => {
        const res = await getAll();
        const data: Product[] = res.data;
        console.log(data);
        return /*html*/ `
        ${UserHeader.render()}
    <div class="flex mt-4 divide-x pl-60">
        <div class="w-[250px]  ">
            ${Sidebar.render()}
        </div> 
        <div class="grow px-10">
            <img src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/1080-470-mn.png" class="w-3/4 h-full">
        </div>
    </div>

    <h1 class="pl-60 mt-8 text-3xl">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
    <div class="m-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    ${data.map(item => /*html*/ `
        <div class="group relative">
            <img src="${item.imageUrl}" alt="" class="w-80 h-80 object-center object-cover">
            <h1 class="text-black text-xl pt-3 ">
                <a href="#">${item.name}</a>
            </h1>
            <div class="float-left"><a class="text-xl font-medium text-red-600 ">${item.saleOffPrice}</a></div>
            <div class="float-none"><a class="text-lg  text-gray-500 pl-4">${item.originalPrice}</a></div>
      
            <button class=" text-sm text-black bg-gray-200">${item.feature}</button>
            <br>
            <div>  
            <div class="float-left"> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>          
            <p>32 Đánh giá</p>
            </div>
        </div>

        `).join("")}
</div>

`
    },
};

export default HomePage;
