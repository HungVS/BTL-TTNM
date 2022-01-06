import "./News.css";
import "./NewsRead.css";
import "./components/FontAwesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import realesate1 from "./image/realestate1.jpg";
import maudon from "./image/maudon.jpg";
import maudon_1 from "./image/maudon_1.jpg";
import maudon1 from "./image/maudon1.jpg";
import maudon2 from "./image/maudon2.jpg";
import { Link } from "react-router-dom";
import { faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";

const NewsRead = () => {
	return (
		<div className='page_news_read'>
			{/* <h1 className='page_news_title'>TIN TỨC HUSTHOME</h1> */}
			<div
				className='section-title'
				style={{ textAlign: "center", marginTop: "100px" }}>
				<h2>TIN TỨC HUSTHOME</h2>
			</div>
			<div className='news_read_block'>
				<div className='news_read_container'>
					<div className='row'>
						<div id='news_read_market' className='news_column'>
							<h2 className='news_read_column_title'>
								<FontAwesomeIcon id='icon_paper' icon={faNewspaper} />
								HUSTHOME cập nhật tính năng mới, trải nghiệm các căn hộ HUSTHOME
								ngay tại nhà
							</h2>
							<hr />
							<h4 className='news_read_column_desciption'>
								Với sự đột phá về công nghệ lượng tử cùng với sức mạnh của nền
								tảng công nghệ HTML8 siêu vượt trội, các nhà phát triển của
								HUSTHOME đã tạo ra một chức năng hoàn toàn mới cho các quý khách
								hàng có thể tham gia các tour tham quan căn hộ, tham quan khuôn
								viên dự án cũng như cảnh quan xung quanh của dự án ngay trên
								trang web thông qua chức năng Virtual Tour.
							</h4>
							<img
								style={{ margin: "10px auto" }}
								className='news_read_illustration'
								src={maudon1}
							/>
							<p className='news_read_column_content_paragrapgh'>
								Phân khu Mẫu Đơn gồm 231 căn gồm biệt thự đơn lập, song lập và
								liền kề nhà vườn. Với quy hoạch đóng, cả phân khu như một hòn
								đảo biệt lập khi được bao quanh bởi hệ thống kênh đào được ví
								như “hàng rào xanh” mang tới không gian sống trong lành, thoáng
								đãng cho gia chủ. Bên cạnh đó, theo quan niệm phương Đông, đây
								cũng là yếu tố mang tới phong thuỷ vượng khí cho gia chủ. Thêm
								một yếu tố phong thủy đắt giá khác là vị trí kế cận dòng sông Mã
								khoáng đạt, tạo nên giá trị khác biệt không dự án bất động sản
								nào có được.
							</p>
							<p className='news_read_column_content_paragrapgh'>
								Là phân khu thấp tầng cuối cùng của dự án Vinhomes Star City
								được mở bán, Mẫu Đơn được thừa hưởng ngay vào nhịp sống sôi
								động, tại vị trí “trung tâm” của thành phố Thanh Hóa đang chuyển
								mình mạnh mẽ. Đặc biệt, cư dân có thể sử dụng ngay hệ thống tiện
								ích thời thượng để bắt đầu một cuộc sống thượng lưu, đẳng cấp
								như hồ bơi Hoàng Gia rộng 607.5m2; những tiện ích thể thao, cảnh
								quan độc đáo. Không gian sống “đo ni đóng giày” của toàn khu đô
								thị cũng sẽ mang tới những trải nghiệm khác biệt chưa từng có
								với hồ bơi 4 mùa, hàng chục điểm nướng BQQ, sân chơi trẻ em, sân
								thể thao….
							</p>
							<img
								style={{ margin: "10px auto" }}
								className='news_read_illustration'
								src={maudon2}
							/>
							<p className='news_read_column_content_paragrapgh'>
								Cũng như các phân khu đã mở bán trước đó, Mẫu Đơn thừa hưởng ưu
								thế vàng của cả đại đô thị Vinhomes Star City nhờ sở hữu vị trí
								trái tim thành phố Thanh Hoá với những giao lộ chiến lược như
								Đại lộ Lê Lợi, Đại lộ Hùng Vương, Đại lộ vàng Nam Sông Mã, quốc
								lộ 1A. Đặc biệt, phân khu Mẫu Đơn lại nằm giữa “trái tim của
								thành phố ngôi sao”, cùng chung tọa độ với trung tâm chính trị,
								hành chính mới của xứ Thanh. Vị trí này cũng dễ dàng kết nối tới
								đại lộ vàng Nam Sông Mã để di chuyển vào trung tâm thành phố
								Thanh Hóa, tạo thêm sự đắt giá cho phân khu.
							</p>
							<p className='news_read_column_content_paragrapgh'>
								2 phân khu gần nhất của Vinhomes Star City mở bán là Phong Lan
								và Hướng Dương đều đã tạo ra hiện tượng bán hàng với tỉ lệ hấp
								thụ lên đến 99%. Sở hữu hàng loạt lợi thế đắt giá, Mẫu Đơn được
								giới đầu tư đánh giá là sẽ tiếp tục thiết lập kỷ lục mới, tạo
								thêm sự sôi động hiếm có cho thị trường trong giai đoạn “bình
								thường mới” sau đại dịch. Hơn nữa, với đà cất cánh của kinh tế
								Thanh Hóa trên lộ trình trở thành cực tăng trưởng mới, phân khu
								Mẫu Đơn hứa hẹn tiềm năng tăng giá mạnh mẽ, như xu hướng đã diễn
								ra với các phân khu thấp tầng của Vinhomes trên khắp cả nước như
								Vinhomes Riverside, Vinhomes Ocean Park,…
							</p>
							<img
								style={{ margin: "10px auto" }}
								className='news_read_illustration'
								src={maudon_1}
							/>
							<p className='news_read_column_content_paragrapgh'>
								Được kiến tạo theo mô hình “Đô thị trong lòng đô thị”, phân khu
								Mẫu Đơn mang đến cho cư dân tại xứ Thanh cuộc sống lý tưởng
								“All-in-one – Tất cả trong một”, sử dụng các dịch vụ hàng đầu
								trong hệ sinh thái tiện ích đồng bộ của tập đoàn Vingroup. Đặc
								biệt, hệ thống quản lý tiêu chuẩn Vinhomes, với hệ thống an ninh
								đảm bảo 24/7 với bốt an ninh barrier kiểm soát nghiêm ngặt khách
								ra vào, đem lại sự riêng tư, an tâm tuyệt đối cho chủ nhân. Nhu
								cầu học tập và chăm sóc sức khỏe sẽ được đảm bảo với phòng khám
								đa khoa quốc tế Vinmec, trường Phổ thông liên cấp Vinschool.
								Chưa kể, Vincom Thanh Hoá & Vinpearl Hotel Thanh Hoá chỉ cách
								vài phút di chuyển, mọi nhu cầu vui chơi, giải trí, nghỉ dưỡng
								sẽ đều được đáp ứng mà không phải đi quá xa khỏi nơi mình sống.
							</p>
							<span className='news_read_link'>
								--- Tham gia Tour Tham quan ảo{" "}
								<Link className='news_read_href' to='/vrt/overview'>
									tại đây
								</Link>
							</span>
							<br />
							<span className='news_read_link'>
								--- Xem thông tin về dự án mới nhất của tập đoàn{" "}
								<Link className='news_read_href' to='/project'>
									tại đây
								</Link>
							</span>
						</div>
						<div className='news_column'>
							<div id='news_promotion'>
								<h2 className='news_column_title'>TIN KHUYẾN MÃI</h2>
								<div id='news_promotion_content'>
									<ul>
										<li>
											<Link className="news_promotion_link" to='/news-detail'>
												<FontAwesomeIcon icon='newspaper' />
												&nbsp;HUSTHOME ngày hội siêu khuyến mãi, giảm giá cực
												shock cho khách hàng thân thiết!!! (17/04/2087) <br />
												<br />
											</Link>
										</li>
										<li>
											<Link className="news_promotion_link" to='/news-detail'>
												<FontAwesomeIcon icon='newspaper' />
												&nbsp;Novel Tràn ngập hạnh phúc! HUSTHOME kí kết thành
												công với VINGROUP, tặng voucher VINFAST cho 2000 khách
												hàng (29/12/2077)
												<br />
												<br />
											</Link>
										</li>
										<li>
											<Link className="news_promotion_link" to='/news-detail'>
												<FontAwesomeIcon icon='newspaper' />
												&nbsp;Ưu đãi đặc biệt cho khách hàng giao dịch qua ứng
												dụng HHPay Online (21/12/2112) <br />
												<br />
											</Link>
										</li>
										<li>
											<Link className="news_promotion_link" to='/news-detail'>
												<FontAwesomeIcon icon='newspaper' />
												&nbsp;Tri ân khách hàng năm 2077, tặng xe ô tô 6 bánh
												cho người tiêu dùng sản phẩm trên 66 năm (10/08/2022)
												<br />
												<br />
											</Link>
										</li>
										<li>
											<Link className="news_promotion_link" to='/news-detail'>
												<FontAwesomeIcon icon='newspaper' />
												&nbsp;Kỉ niệm 50 năm thành lập, HUSTHOME "chơi lớn" tặng
												Voucher giảm giá cho khách hàng (09/08/2022)
												<br />
												<br />
											</Link>
										</li>
										<li>
											<Link className="news_promotion_link" to='/news-detail'>
												<FontAwesomeIcon icon='newspaper' />
												&nbsp;Xuân đến lộc về! HUSTHOME tưng bừng khuyến mãi
												mừng xuân 2022, tổ chức tour du lịch tri ân khách hàng
												năm 2021 (01/08/2022)
												<br />
												<br />
											</Link>
										</li>
										<li>
											<Link className="news_promotion_link" to='/news-detail'>
												<FontAwesomeIcon icon='newspaper' />
												&nbsp;Ưu đãi thuê nhà HUSTHOME trong mùa dịch COVID từ
												HUSTHOME Serviced Residences Telas và nhà tài trợ
												(16/06/2022)
												<br />
												<br />
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div id='news_latestproject'>
								<h2 className='news_column_title'>DỰ ÁN MỚI NHẤT</h2>
								<div id='news_latestproject_content'>
									<Link to='/detail-project'>
										<img
											style={{
												width: "100%",
												boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
												borderRadius: "5px",
											}}
											id='news_latestproject_image'
											src={realesate1}
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsRead;
