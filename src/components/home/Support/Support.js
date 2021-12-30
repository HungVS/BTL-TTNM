import "./Support.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./res/index.js";

const Support = () => {
	return (
		<div className='page_support' style={{ paddingBottom: "100px" }}>
			{/* <h1 className='support-title'>THÔNG TIN LIÊN HỆ HUSTHOME</h1> */}
			<div
				className=' section-title'
				style={{ paddingTop: "100px", textAlign: "center" }}>
				<h2>THÔNG TIN LIÊN HỆ HUSTHOME</h2>
			</div>
			<div className='info_block'>
				<div className='container'>
					<div className='row'>
						<div className='column'>
							<h2 className='column_title'>BÁN BẤT ĐỘNG SẢN</h2>

							<div className='column_content'>
								<div className='view_element_container'>
									<select name='info_select_0' className='info_select'>
										<option hidden disabled selected value>
											Chọn căn hộ bạn muốn mua
										</option>
										<option disabled value='001'>
											HÀ NỘI
										</option>
										<option value='002'>Harmony Bách Khoa</option>
										<option value='003'>Harmony Minh Khai</option>
										<option value='004'>Harmony Lê Thanh Nghị</option>
										<option disabled></option>
										<option disabled value='005'>
											THÁI NGUYÊN
										</option>
										<option value='006'>Amadues Lương Định Của</option>
										<option value='007'>Amadues Thập Lục</option>
										<option value='008'>Amadues Phạm Văn Đồng</option>
										<option value='009'>Amadues Tiến Bộ</option>
										<option disabled></option>
										<option disabled value='010'>
											HÀ TĨNH
										</option>
										<option value='011'>Iris Ba Hoa</option>
										<option value='012'>Iris Thiên Cầm</option>
										<option value='013'>Iris Đồng Lộc</option>
									</select>
								</div>
								<div className='information'>
									<h3 className='info title'>Harmony Bách Khoa</h3>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='home' />
										<span className='label_info'>Địa chỉ dự án</span>
										<p className='parag_info'>
											Số 100 Đại Cồ Việt, phường Bách Khoa, quận Hai Bà Trưng,
											Hà Nội
										</p>
									</div>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='home' />
										<span className='label_info'>Địa chỉ giao dịch</span>
										<p className='parag_info'>
											Tầng 1, tòa nhà A5-ĐN1, đường Trần Thủ Độ, P. Hoàng Liệt,
											Q. Hoàng Mai, Hà Nội
										</p>
									</div>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='phone' />
										<span className='label_info'>Điện thoại</span>
										<p className='parag_info'>0933471824</p>
									</div>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='envelope' />
										<span className='label_info'>Thư điện tử</span>
										<p className='parag_info'>harmonygl@gmail.com</p>
									</div>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='globe' />
										<span className='label_info'>Trang web</span>
										<p className='parag_info'>https://www.husthome.com.vn</p>
									</div>
								</div>
							</div>
						</div>
						<div className='column'>
							<h2 className='column_title'>BAN QUẢN LÝ CHUNG CƯ</h2>

							<div className='column_content'>
								<div className='view_element_container'>
									<select name='info_select_1' className='info_select'>
										<option hidden disabled selected value>
											Chọn chung cư bạn muốn được tư vấn
										</option>
										<option disabled value='101'>
											PROJECT HUSTHOME Harmony (Hà Nội)
										</option>
										<option value='102'>HUSTHOME Hai Bà Trưng</option>
										<option value='103'>HUSTHOME Đại Cồ Việt</option>
										<option value='104'>HUSTHOME Trần Quốc Tuấn</option>
										<option disabled></option>
										<option disabled value='105'>
											PROJECT HUSTHOME Amadues (Thái Nguyên)
										</option>
										<option value='106'>HUSTHOME Hoàng Văn Thụ</option>
										<option value='107'>HUSTHOME Lương Ngọc Quyến</option>
										<option value='108'>HUSTHOME Trường Chinh</option>
										<option value='109'>HUSTHOME Thái Nguyên</option>
										<option disabled></option>
										<option disabled value='110'>
											PROJECT HUSTHOME Iris (Hà Tĩnh)
										</option>
										<option value='111'>HUSTHOME Bà Chiểu</option>
										<option value='112'>HUSTHOME Bình Thạnh</option>
										<option value='113'>HUSTHOME Lê Hồng Phong</option>
									</select>
								</div>
								<div className='information'>
									<h3 className='info title'>HUSTHOME Hoàng Văn Thụ</h3>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='home' />
										<span className='label_info'>Địa chỉ chung cư</span>
										<p className='parag_info'>
											4 Lương Định Của, Tổ 11, Phường Hoàng Văn Thụ, Thành phố
											Thái Nguyên, Tỉnh Thái Nguyên
										</p>
									</div>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='phone' />
										<span className='label_info'>Điện thoại</span>
										<p className='parag_info'>0973917603</p>
									</div>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='envelope' />
										<span className='label_info'>Thư điện tử</span>
										<p className='parag_info'>amadeusht@gmail.com</p>
									</div>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='globe' />
										<span className='label_info'>Trang web</span>
										<p className='parag_info'>https://www.husthome.com.vn</p>
									</div>
								</div>
							</div>
						</div>
						<div className='column'>
							<h2 className='column_title'>BAN QUẢN LÝ DỰ ÁN</h2>

							<div className='column_content'>
								<div className='view_element_container'>
									<select name='info_select_2' className='info_select'>
										<option hidden disabled selected value>
											Chọn dự án bạn muốn được tư vấn
										</option>
										<option value='201'>
											PROJECT HUSTHOME Harmony (Hà Nội)
										</option>
										<option value='205'>
											PROJECT HUSTHOME Amadues (Thái Nguyên)
										</option>
										<option value='210'>PROJECT HUSTHOME Iris (Hà Tĩnh)</option>
									</select>
								</div>
								<div className='information'>
									<h3 className='info title'>PROJECT HUSTHOME Iris</h3>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='home' />
										<span className='label_info'>Địa chỉ BQL dự án</span>
										<p className='parag_info'>
											Địa chỉ 1: 1095 Hà Huy Tập, Phường Nam Hà, Thành phố Hà
											Tĩnh, Tỉnh Hà Tĩnh
										</p>
										<p className='parag_info'>
											Địa chỉ 2: 268 đường Trần Phú, phường Thạch Linh, Thành
											phố Hà Tĩnh, Tỉnh Hà Tĩnh, Việt Nam
										</p>
									</div>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='phone' />
										<span className='label_info'>Điện thoại</span>
										<p className='parag_info'>0175844104</p>
									</div>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='envelope' />
										<span className='label_info'>Thư điện tử</span>
										<p className='parag_info'>iris.info@gmail.com</p>
									</div>

									<div className='row_mb5'>
										<FontAwesomeIcon className='iconAwesome' icon='globe' />
										<span className='label_info'>Trang web</span>
										<p className='parag_info'>
											https://www.iris.husthome.com.vn
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Support;
