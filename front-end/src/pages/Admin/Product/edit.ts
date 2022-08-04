import { upload } from '../../../api/image';
import { get, update } from '../../../api/product';
import AdminHeader from '../../../components/Header/Admin';
import Sidebar from '../../../components/Sidebar';
import Product from '../../../model/product';

const EditProductPage = {
	render: async (id) => {
		const product = await get(id);
		const products: Product[] = product.data;
		return /*html*/ `
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow">
                <h3 class="font-bold">Cập nhật sản phẩm</h3>
                <div class="grid grid-cols-3 gap-8">
                <div class="">
                    <div class="flex flex-col justify-center items-center border rounded-md h-[250px]">
                    <label htmlFor="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clip-rule="evenodd" />
                        </svg>
                        <input id="input-file" type="file" class="hidden" accept="image/jpg, image/jpeg, image/png" />
                    </label>

                    <div class="mt-4">Sửa ảnh</div>
                    <img id="preview-image" src="${products.imageUrl}" />
                    </div>
                    <label for="">Mô tả ngắn</label>
                    <textarea class="w-full border" id="shortDescription">${
						products.shortDescription
					}</textarea>
                </div>
                <div class="col-span-2">
                    <div>Thông tin sản phẩm</div>
                    <div class="flex flex-col mt-4">
                        <label for="">Tên sản phẩm:</label>
                        <input id="name" type="text" placeholder="Tên sản phẩm" value="${
							products.name
						}" class="w-full border rounded-sm h-10">
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="flex flex-col">
                            <label for="">Giá gốc:</label>
                            <input id="originalPrice" type="text" placeholder="Giá gốc" value="${
								products.originalPrice
							}" class="w-full border rounded-sm h-10">
                        </div>
                        <div class="flex flex-col">
                            <label for="">Giá khuyến mãi:</label>
                            <input type="text" id="saleOffPrice" placeholder="Giá khuyến mãi" value="${
								products.saleOffPrice
							}" class="w-full border rounded-sm h-10">
                        </div>
                    </div>
                    <div class="flex flex-col mt-4">
                        <label for="">Danh mục:</label>
                        <select name="" id="category" class="w-full border rounded-sm h-10">
                            <option>${products.category}</option>
                            <option value="iphone">Iphone</option>
                            <option value="samsung">Samsung</option>
                            <option value="xiaomi">Xiaomi</option>
                            <option value="oppo">Oppo</option>
                        </select>
                    </div>
                    <div class="flex flex-col mt-4">
                        <label for="">Đặc điểm nổi bật</label>
                        <textarea class="w-full border" id="feature">${
							products.feature
						}</textarea>
                    </div>
                    <div class="flex flex-col mt-4">
                        <label for="">Mô tả dài</label>
                        <textarea class="w-full border" id="description">${
							products.description
						}</textarea>
                    </div>
                    <button class="border rounded-md bg-blue-400 mt-3 text-white" id="edit-product-btn">Cập nhật</button>
                </div>
                
                </div>
            </div>
        </div>
        `;
	},
	afterRender: async (id) => {
		const editProductBtn = document.querySelector('#edit-product-btn');
		const inputFile = document.querySelector('#input-file');
		const previewImage = document.querySelector('#preview-image');

		editProductBtn?.addEventListener('click', async () => {
			const product = {
				id: id,
				name: document.querySelector('#name')?.value,
				originalPrice: document.querySelector('#originalPrice')?.value,
				imageUrl: previewImage?.src,
				saleOffPrice: document.querySelector('#saleOffPrice')?.value,
				category: document.querySelector('#category')?.value,
				feature: document.querySelector('#feature')?.value,
				description: document.querySelector('#description')?.value,
				shortDescription:
					document.querySelector('#shortDescription')?.value,
			};

			try {
				const data = await update(product);
				alert('Cập nhật thành công');
				location.href = '/admin';
			} catch (err) {
				console.log(err);
			}
		});

		inputFile?.addEventListener('change', async (e) => {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = async () => {
				try {
					const res = await upload(reader.result);
					const data = res.data;
					previewImage.src = data.url;
				} catch (err) {
					console.log(err);
				}
			};
		});
	},
};

export default EditProductPage;
