// Collapse Navbar on click
document.addEventListener('DOMContentLoaded', function() {
    var navToggler = document.querySelector('.navbar-toggler');
    var navbarNav = document.querySelector('.navbar-nav');
    navbarNav.addEventListener('click', function() {
        if (navToggler.classList.contains('collapsed')) {
            navToggler.click();
        }
    });
});
 function updateLiveTime() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const currentTime = `${hours}:${minutes}:${seconds}`;

            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
            const date = String(now.getDate()).padStart(2, '0');
            const year = now.getFullYear();
            const currentDate = `${date}-${month}-${year}`;

            document.getElementById('liveTime').textContent = `${currentDate} ${currentTime}`;
        }

        // Update the time every second
        setInterval(updateLiveTime, 1000);

        // Initial call to display the time immediately on load
        updateLiveTime();



        const certifications = [{
            title: "Google Cloud Data Analytics Certificate",
            authority: "Google Cloud",
            badge: "https://res.cloudinary.com/dvlgixtg8/image/upload/v1718902525/zbeomxgkxnxeqtfb0ohr.png",
            link: "https://www.credly.com/badges/97a889b4-6069-4118-9b29-3f7de7a3cc23",
            download: "https://www.credly.com/badges/97a889b4-6069-4118-9b29-3f7de7a3cc23"
        },
        {
            title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
            authority: "Oracle",
            badge: "oci-removebg-preview.png",
            link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B10032C2F707BD514D547D772A9983B3BBAE0554318278F137B99606886BC7FC",
            download: "ProjectFiles\\Oracle Cloud Infrastructure 2024 Generative AI Certified Professional.pdf"
        },
        {
            title: "Microsoft Certified: Azure AI Fundamentals",
            authority: "Microsoft ",
            badge: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
            link: "https://learn.microsoft.com/en-us/users/anuragsrivatsav-6772/credentials/b42af8fa0151a887?ref=https%3A%2F%2Fwww.linkedin.com%2F",
            download: "ProjectFiles\\2110080013_MICROSOFT CERTIFIEDAZURE FUNDAMENTALS(AI-900).pdf"
        },
        {
            title: "TensorFlow Developer Certificate",
            authority: "TensorFlow",
            badge: "https://templates.images.credential.net/16589346213183572350230433330388.png",
            link: "https://www.credential.net/d81c83e2-673f-475f-a6dc-bf5ffafc81b7#gs.ak34mm",
            download: "ProjectFiles\\2110080013_Google Tensor Flow Developer Certificate.pdf"
        },
        {
            title: "Oracle Cloud Infrastructure 2023 Certified Architect Associate",
            authority: "Oracle",
            badge: "https://images.credly.com/images/9819ade4-8c28-4f2e-8c19-eac82857b71f/1072-21_Oracle_Cloud_Infrastructure_Architect.png",
            link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B10032C2F707BD514D547D772A9983B33C5B29DDB470072B0A3CDB447E72BBE0",
            download: "ProjectFiles\\2110080013_ORACLE CLOUD INFRASTRUCTURE 2023 CERTIFIED ARCHITECT ASSOCIATE.pdf"
        },
        {
            title: "Google AI Essentials",
            authority: "Coursera",
            badge: "https://images.credly.com/size/680x680/images/ea3eec65-ddad-4242-9c59-1defac0fa2d9/image.png",
            link: "https://www.credly.com/badges/2e2258c6-8d4b-4be0-ba97-8dfaea5f5116",
            download: "ProjectFiles\\Google Ai Essentials.pdf"
        },
        {
            title: "Advanced Automation Certification Professional ",
            authority: "Automation Anywhere",
            badge: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/116606363",
            link: "https://certificates.automationanywhere.com/a02047c5-a380-4ebb-a15e-44da8fd0a097",
            download: "ProjectFiles\\AICTE_Alteryx certificate.pdf"
        },
        {
            title: "CS50’s Introduction to Programming with Python",
            authority: "Harward University",
            badge: "https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png",
            link: "https://certificates.cs50.io/c54c3ae3-1816-42b1-b3db-316da4b49055.pdf",
            download: "ProjectFiles\\CS50P.pdf"
        },
        {
            title: "Alteryx Designer Core Certification",
            authority: "Alteryx",
            badge: "https://images.credly.com/size/680x680/images/14744318-8d6a-49c3-971d-6a4a0f524925/Certification_Designer_Core.png",
            link: "ProjectFiles\\Alteryx_Designer_Core_Certification_Badge20240808-7-yklird.pdf",
            download: "ProjectFiles\\Alteryx_Designer_Core_Certification_Badge20240808-7-yklird.pdf"
        },
        {
            title: "No SQL - MongoDB",
            authority: "IBM",
            badge: "https://cdn-icons-png.freepik.com/512/5969/5969147.png",
            link: "https://courses.etrain.skillsnetwork.site/certificates/8a07367606c641cfa29e468a11de8179",
            download: "ProjectFiles\\mongodb4.pdf"
        }
    ];

    const certContainer = document.getElementById('cert-container');

    certifications.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.classList.add('certification');

        certDiv.innerHTML = `
            <img src="${cert.badge}" alt="Certification Badge">
            <div class="cert-info" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
                <h3>${cert.title}</h3>
                <p>Issued by: ${cert.authority}</p>
                <a href="${cert.link}" target="_blank"><i class="fas fa-eye"></i>View Certification</a>
                <a href="${cert.download}" download><i class="fas fa-download"></i>Download Certification</a>
            </div>
        `;

        certContainer.appendChild(certDiv);
    });

    AOS.init({
        duration: 1000,   // Animation duration (in ms)
        once: false,       // If true, animation will happen once when it comes into view
        offset: 100,      // Distance from the top of the screen before it triggers the animation
        easing: 'ease-in-out',  // Easing effect
    });

 
