import "./News.css";
import "./components/FontAwesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import realesate1 from "./image/realestate1.jpg";
import hoangthanh from "./image/hoangthanhthanglong.jpg";
import kiket from "./image/kiket.jpg";
import canhomoi from "./image/canhomoi.jpg";
import noithat from "./image/noithat.jpg";
import genz from "./image/genz.jpg";
import NewsRead from "./NewsRead";
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

const News = () => {
	return (
		<div className='page_news'>
			{/* <h1 className='page_news_title'>TIN TỨC HUSTHOME</h1> */}
			<div
				className='section-title'
				style={{ marginTop: "100px", textAlign: "center" }}>
				<h2>TIN TỨC MỚI NHẤT</h2>
				{/* <p>
					Chúng tôi cung cấp thông tin nhanh và chính xác nhất, mang đến cho
					khách hàng những giá trị kiến thức chính xác
				</p> */}
			</div>
			<div className='news_block'>
				<div className='news_container'>
					<div className='row'>
						<div
							id='news_market'
							className='news_column'
							style={{ textAlign: "center" }}>
							<div className='news_right_column'>
								<h2 className='news_column_title'>TIN TỨC THỊ TRƯỜNG</h2>
								<hr />
								<ul>
									<li className='list_market'>
										<Link to='/news-detail'>
											<div id='market_image' className='market_column'>
												<img className='illustration' src={hoangthanh} />
											</div>
											<div id='market_content' className='market_column'>
												<h4 className='market_news_title'>
													Thủ đô ngàn năm văn hiến! Những công trình vĩ đại thời
													xưa
												</h4>
												<p className='market_news_description'>
													Khác với phong cách kiến trúc lúc thịnh lúc suy, kiến
													trúc Đông Dương (Indochine) đã khẳng định sức sống
													trường tồn khi chiếm trọn cảm tình của người Việt và
													ghi dấu án qua những công trình mang tính biểu tượng
													...
												</p>
												<FontAwesomeIcon
													className='market_news_time'
													icon='clock'
												/>
												17/12/2021
												<hr />
											</div>
										</Link>
									</li>
									<li>
										<Link to='/news-detail'>
											<div id='market_image' className='market_column'>
												<img className='illustration' src={noithat} />
											</div>
											<div id='market_content' className='market_column'>
												<h4 className='market_news_title'>
													HUSTHOME cập nhật tính năng mới, trải nghiệm các căn
													hộ HUSTHOME ngay tại nhà
												</h4>
												<p className='market_news_description'>
													Với sự đột phá về công nghệ lượng tử cùng với sức mạnh
													của nền tảng công nghệ HTML8 siêu vượt trội, các nhà
													phát triển của HUSTHOME đã tạo ra một chức năng hoàn
													toàn mới cho các quý khách hàng có thể ...
												</p>
												<FontAwesomeIcon
													className='market_news_time'
													icon='clock'
												/>
												15/12/2021 <hr />
											</div>
										</Link>
									</li>
									<li>
										<Link to='/news-detail'>
											<div id='market_image' className='market_column'>
												<img className='illustration' src={kiket} />
											</div>
											<div id='market_content' className='market_column'>
												<h4 className='market_news_title'>
													HUSTHOME ký kết hợp tác toàn diện với Mitsubishi
													Corporation
												</h4>
												<p className='market_news_description'>
													Ngày 21/12/2021, Công ty CP HUSTHOME và Tập đoàn
													Mitsubishi Corporation (Nhật Bản) đã ký kết biên bản
													ghi nhớ hợp tác toàn diện trên 3 lĩnh vực: Phát triển
													đô thị & Kinh doanh Bất động sản ...
												</p>
												<FontAwesomeIcon
													className='market_news_time'
													icon='clock'
												/>
												14/12/2021 <hr />
											</div>
										</Link>
									</li>
									<li>
										<Link to='/news-detail'>
											<div id='market_image' className='market_column'>
												<img className='illustration' src={genz} />
											</div>
											<div id='market_content' className='market_column'>
												<h4 className='market_news_title'>
													[Live] Talk show Người tiên phong: GenZ - Phá vỡ giới
													hạn - Đột phá tiên phong
												</h4>
												<p className='market_news_description'>
													Người tiêu dùng tiên phong dẫn đầu xu hướng sống xanh,
													có mã xanh GreenCode đã được chúng tôi khắc hoạ trong
													số thứ 4. Khai thác chủ đề "Gen Z – Phá vỡ giới hạn -
													Đột phá tiên phong", tập 5 ...
												</p>
												<FontAwesomeIcon
													className='market_news_time'
													icon='clock'
												/>
												14/12/2021 <hr />
											</div>
										</Link>
									</li>
									<li>
										<Link to='/news-detail'>
											<div id='market_image' className='market_column'>
												<img className='illustration' src={canhomoi} />
											</div>
											<div id='market_content' className='market_column'>
												<h4 className='market_news_title'>
													HUSTHOME Tower được vinh danh "Trung tâm thông minh
													nhất" tại IBcon Digie Awards
												</h4>
												<p className='market_news_description'>
													Đầu tháng 11/2021, tại Scottsdale, Arizona (Mỹ), tòa
													nhà HUSTHOME Tower (thuộc đại đô thị HUSTHOME Irus, Hà
													Tĩnh) đã xuất sắc vượt qua hàng loạt tòa nhà trên thế
													giới để trở ...
												</p>
												<FontAwesomeIcon
													className='market_news_time'
													icon='clock'
												/>
												13/12/2021 <hr />
											</div>
										</Link>
									</li>
								</ul>
								<button className='market_button'>XEM THÊM TIN KHÁC</button>
							</div>
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

export default News;
