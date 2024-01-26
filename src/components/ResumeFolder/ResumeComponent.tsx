import React from "react";
import './Resume.css';
import 'tailwindcss/tailwind.css';

const ResumeComponent: React.FC = () => {

    return (
        <div className="bg-white text-black">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl md:text-5xl font-bold">Pedro Castaneda</h1>
                <p className="text-sm md:text-base">Santa Rosa, CA 707-508-5284 · <a href="mailto:pedro@pedroc.dev" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noreferrer">pedro@pedroc.dev</a> · <a href="https://www.linkedin.com/in/pedro-castaneda-developer/" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com/rooted92" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noreferrer">Github</a> · <a href="https://pedroc.dev/" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noreferrer">pedroc.dev</a></p>

                <h2 className="text-2xl font-semibold mt-6">WEB DEVELOPER</h2>
                <p className="mt-2">Skilled in PHP, C#, and JavaScript with experience in React.js, Bootstrap, and WordPress. Seeking to enhance user experiences and drive growth at a forward-thinking company through impactful website creation.</p>

                <h3 className="text-xl font-semibold mt-6">KEY COMPETENCIES</h3>
                <ul className="list-disc pl-5 mt-2">
                    <li><strong>Web Development:</strong> Proficient in HTML, CSS, PHP, and JavaScript.</li>
                    <li><strong>Frameworks & Libraries:</strong> Skilled in using React.js and Bootstrap for dynamic and adaptable web design.</li>
                    <li><strong>CMS:</strong> Experienced with WordPress and PHP for theme development and customization.</li>
                    <li><strong>Version Control:</strong> Skilled in Git, GitHub, and GitHub Actions for collaborative development and CI/CD.</li>
                    <li><strong>Cross-Browser Compatibility:</strong> Utilizing Browserstack to ensure uniform functionality across browsers.</li>
                    <li><strong>Team Collaboration:</strong> Effective in team settings, aligning technical solutions with design visions.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">EXPERIENCE</h3>
                <div className="mt-2">
                    <h4 className="text-lg font-semibold">Trinchero Family Estates</h4>
                    <h4 className=" text-base font-bold">Web Developer</h4>
                    <p className="italic">PHP, Javascript, OOP, WordPress, Theme/Plugin Development, CLI</p>
                    <p className="mb-4 font-bold">June 2023 - December 2023</p>
                    <ul className="list-disc pl-5">
                        <li>Partnered with Level Access to correct 40+ web accessibility issues using CSS and JavaScript, boosting WCAG 2.1 AA compliance from 82% to 97%.</li>
                        <li>Piloted webpage for sutterhome.com using WordPress and PHP, developing a custom function to convert form data into CSV and streamline order processing.</li>
                        <li>Contributed to updating TFE brand websites to Commerce7 version two, an e-commerce platform for wineries, resolving styling and functionality issues using CSS, JavaScript, and PHP.</li>
                        <li>Debugging website updates with cross-functional teams during staging and post-launch phases.</li>
                        <li>Collaborated with web designers to transform wireframes into a functional webpage for sutterhome.com.</li>
                        <li>Updated in-house TFE Legal plugin by adding a new settings field utilizing PHP and WordPress functions and managing version control through GitHub.</li>
                        <li>Implemented and tested WP Engine's GitHub Action for automated site deployment to specified branches and created a templatized workflow for easy distribution across all repositories.</li>
                        <li>Wrote and updated documentation for web development processes.</li>
                    </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6">PROJECTS</h3>
                <div className="mt-2">
                    <h4 className="text-lg font-semibold">Star Wars API Website</h4>
                    <p className="italic">HTML, CSS, Javascript</p>
                    <p className="mb-2">Created an interactive site integrating data from the Star Wars API, showcasing the ability to build engaging and responsive user interfaces and consuming RESTful APIs.</p>
                    <ul className="list-disc pl-5">
                        <li><strong className="font-semibold">Asynchronous Programming:</strong> Utilizing async functions and the await keyword for handling asynchronous operations when fetching data from the Star Wars API.</li>
                        <li><strong className="font-semibold">DOM Manipulation:</strong> Dynamically updating HTML content based on API responses and user interactions including enabling and disabling form elements.</li>
                    </ul>

                    <h4 className="text-lg font-semibold mt-4">Pokedex Application</h4>
                    <p className="italic">React.js, Typescript, Tailwind CSS</p>
                    <p className="mb-2">Developed an interactive web application leveraging the Pokemon API, with a focus on data handling and implementing data persistence through React's local storage capabilities.</p>
                    <ul className="list-disc pl-5">
                        <li><strong className="font-semibold">React Development:</strong> Utilizing React.js functional components and React-Bootstrap for building user interfaces.</li>
                        <li><strong className="font-semibold">State Management:</strong> Managing multiple pieces of state efficiently, including form inputs, API data, loading, and error states.</li>
                    </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6">EDUCATION</h3>
                <div className="mt-2">
                    <h4 className="text-lg font-semibold">CodeStack Academy · Stockton, CA</h4>
                    <p className="mb-4">Certification - Software Engineer, September 2023</p>
                </div>

            </div>
        </div>

    );
};

export default ResumeComponent;