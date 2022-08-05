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

    <h1 class="pl-60 mt-7">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        `;
	},
};

export default HomePage;
