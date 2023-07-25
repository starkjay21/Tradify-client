export const Testimonials = () => {
    const Testimonial = [{
        "name": "Sidhartha Mandal",
        "img": "https://res.cloudinary.com/dme9vltjf/image/upload/v1690041062/WhatsApp_Image_2023-07-22_at_21.19.39_1_u8m4rh.jpg",
        "text": "\"Thanks to Tradify, selling my bed table was a breeze! The platform's seamless interface and large pool of potential buyers made the process quick and effortless.\""
    },
        {
            "name": "Ishika Poddar",
            "img": "https://res.cloudinary.com/dme9vltjf/image/upload/v1690041093/WhatsApp_Image_2023-07-22_at_16.39.06_1_ploetp.jpg",
            "text": "\"Tradify is a game-changer! Within minutes of listing my old bicycle for sale, I found a buyer hassle-free. Highly recommended for anyone looking to buy or sell items quickly and efficiently!\""
        },
        {
            "name": "Manmohan Mandhan",
            "img": "https://res.cloudinary.com/dme9vltjf/image/upload/v1690041062/WhatsApp_Image_2023-07-22_at_16.00.13_1_utmhzf.jpg",
            "text": "\"Sold my gaming chair effortlessly with Tradify! Easy listing and quick connections with buyers. Highly recommended!\""
        }]

    return (
        <div className="testimonial-section">
            <h1>Hear from Our Clients...</h1>
            <div className="testimonials">
                {Testimonial.map(({name, img, text}) => (
                    <div className="testimonial-card">
                        <div className="testimonial-img">
                            <img src={img} alt="testimonial image"/>
                        </div>
                        <div className="testimonial-text">
                            <p>{text}</p>
                        </div>
                        <h3>{name}</h3>
                    </div>
                ))
                }
            </div>
        </div>
    )
}