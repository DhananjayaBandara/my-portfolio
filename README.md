# Personal Portfolio Website

This is a responsive, single-page portfolio website built with HTML, CSS, and JavaScript, using Bootstrap 5 for layout and components.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Contact form (using Formspree)
- Animated elements on scroll
- Clean and modern UI
- Easy to customize

## Customization

1. **Profile Information**: Update `index.html` with your personal details, education, experience, skills, projects, and certifications.
2. **Profile Image**: Replace `assets/img/profile-placeholder.svg` with your profile photo (recommended size: 400x400px).
3. **Contact Form**: 
   - Sign up for a free Formspree account at [https://formspree.io](https://formspree.io)
   - Create a new form and get your form endpoint
   - Update the form action URL in `index.html` with your Formspree endpoint
4. **Social Links**: Update the social media links in the header and contact section with your profiles.

## Deployment to GitHub Pages

1. Create a new repository named `yourusername.github.io` (replace 'yourusername' with your GitHub username)
2. Initialize the repository and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Go to your repository settings on GitHub
4. Navigate to "Pages" in the left sidebar
5. Under "Source", select the `main` branch and click "Save"
6. Your site will be live at `https://yourusername.github.io` in a few minutes

## Local Development

To run the website locally, you can use Python's built-in HTTP server:

```bash
# Python 3
python -m http.server 8000
```

Then open your browser and visit `http://localhost:8000`

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Design inspired by various portfolio templates
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
