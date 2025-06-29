# Get an Intervention - Assessment Website

This project is a responsive, multi-section website for "Get an Intervention Inc." It features a hero section with a contact form, informational sections, testimonials carousel, services overview, video section, and a thank you page for form submissions.

## Features

- **Responsive Design:** Works on desktop and mobile devices.
- **Hero Section:** Includes navigation and a contact form.
- **About Section:** Information about the organization's mission.
- **Testimonials Carousel:** Rotating client testimonials (uses Owl Carousel).
- **Organize Services Section:** Overview of services with tooltips.
- **Video Section:** Embedded video with play/pause functionality.
- **Thank You Page:** Confirmation page after form submission.
- **Footer:** Links to Privacy Policy, Terms of Use, and Site Map.

## Folder Structure

```
e:\assessment\
│
├── css/
│   ├── stylesheet.css
│   └── responsive.css
├── img/
│   └── ... (images and icons)
├── js/
│   ├── main.js
│   ├── country_list.js
│   └── owl.carousel.min.js
├── video/
│   └── video.mp4
├── fonts/
│   └── ... (Montserrat font files)
├── index.html
└── thankyou.html
```

## Getting Started

1. **Clone or Download** this repository to your local machine.
2. **Open `index.html`** in your browser to view the homepage.
3. **Form Submission:** The contact form can be set up to redirect to `thankyou.html` after successful validation (see `main.js` for logic).
4. **Customize Content:** Replace placeholder text, images, and video with your own content as needed.

## Dependencies

- [Bootstrap 5](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)
- [Google Fonts: Montserrat](https://fonts.google.com/specimen/Montserrat)

All dependencies are loaded via CDN or included in the `js/` and `css/` folders.

## Customization

- **Colors and Fonts:** Adjust in `css/stylesheet.css` under the `:root` and font-face sections.
- **Images and Video:** Replace files in the `img/` and `video/` folders.
- **Form Validation:** Customize validation logic in `js/main.js`.

## Credits

- Development by Baisali Pradhan.
- Images and icons are property of their respective owners or sourced from free resources.

## License

This project is for assessment and demonstration purposes. For production use, ensure all assets and dependencies comply with your intended license.

---

**Contact:**  
For questions or support,please contact [baishalypradhan03@gmail.com].