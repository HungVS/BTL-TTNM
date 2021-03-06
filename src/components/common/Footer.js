import { useEffect, useState } from "react";

const initialState = {
	name: "",
	email: "",
	message: "",
};
export const Footer = (props) => {
	const [{ name, email, message }, setState] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	};
	const clearState = () => setState({ ...initialState });

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(name, email, message);
	// 	emailjs
	// 		.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
	// 		.then(
	// 			(result) => {
	// 				console.log(result.text);
	// 				clearState();
	// 			},
	// 			(error) => {
	// 				console.log(error.text);
	// 			}
	// 		);
	// };
	return (
		<div>
			<div id='contact'>
				<div className='container'>
					<div className='col-md-8'>
						<div className='row'>
							<div className='section-title'>
								<h2>ĐỂ LẠI THÔNG TIN TƯ VẤN</h2>
								<p>
									Vui lòng để lại thông tin và nội dung cần tư vấn, chúng tôi sẽ
									liên hệ giải đáp các thắc mắc của bạn sớm nhất có thể
								</p>
							</div>
							<form name='sentMessage' validate>
								<div className='row'>
									<div className='col-md-6'>
										<div className='form-group'>
											<input
												type='text'
												id='name'
												name='name'
												className='form-control'
												placeholder='Họ tên'
												required
												onChange={handleChange}
											/>
											<p className='help-block text-danger'></p>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<input
												type='email'
												id='email'
												name='email'
												className='form-control'
												placeholder='Email'
												required
												onChange={handleChange}
											/>
											<p className='help-block text-danger'></p>
										</div>
									</div>
								</div>
								<div className='form-group'>
									<textarea
										name='message'
										id='message'
										className='form-control'
										rows='4'
										placeholder='Nội dung cần tư vấn '
										required
										onChange={handleChange}></textarea>
									<p className='help-block text-danger'></p>
								</div>
								<div id='success'></div>
								<button type='submit' className='btn btn-custom btn-lg'>
									GỬI THÔNG TIN
								</button>
							</form>
						</div>
					</div>
					<div
						style={{ color: "#333" }}
						className='col-md-3 col-md-offset-1 contact-info'>
						<div className='contact-item'>
							<h3>Thông tin liên hệ</h3>
							<p>
								<i className='fa fa-map-marker'></i> Địa chỉ:{" "}
								{props.data ? props.data.address : "loading"}
							</p>
						</div>
						<div className='contact-item'>
							<p>
								<i className='fa fa-phone'></i> Hotline:{" "}
								{props.data ? props.data.phone : "loading"}
							</p>
						</div>
						<div className='contact-item'>
							<p>
								<i className='fa fa-envelope-o'></i> Email:{" "}
								{props.data ? props.data.email : "loading"}
							</p>
						</div>
					</div>
					<div className='col-md-12'>
						<div className='row'>
							<div className='social'>
								<ul>
									<li>
										<a href={props.data ? props.data.facebook : "/"}>
											<i className='fa fa-facebook'></i>
										</a>
									</li>
									<li>
										<a href={props.data ? props.data.twitter : "/"}>
											<i className='fa fa-twitter'></i>
										</a>
									</li>
									<li>
										<a href={props.data ? props.data.youtube : "/"}>
											<i className='fa fa-youtube'></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div id='footer'>
				<div className='container text-center'>
					<p>
						&copy; 2020 Issaaf Kattan React Land Page Template. Design by{" "}
						<a href='http://www.templatewire.com' rel='nofollow'>
							TemplateWire
						</a>
					</p>
				</div>
			</div> */}
		</div>
	);
};
