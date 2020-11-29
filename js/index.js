function bio_length() {
    if (document.getElementById('rad1').checked) {
        document.getElementById('about-data').innerHTML = "<strong>Aryamaan Jain</strong> is overthinking right now.";
    }
    if (document.getElementById('rad2').checked) {
        document.getElementById('about-data').innerHTML = "<strong>Aryamaan Jain</strong> is a young programmer pursuing a bachelor in Computer Science.";
    }
    if (document.getElementById('rad3').checked) {
        document.getElementById('about-data').innerHTML = "<strong>Aryamaan Jain</strong> is a young programmer pursuing a bachelor in Computer Science, exploring and overthinking everything in his way and trying to share his experience with everyone.";
    }
    if (document.getElementById('rad4').checked) {
        document.getElementById('about-data').innerHTML = "<strong>Aryamaan Jain</strong> is a engineering student pursuing a bachelor's in technology in computer science at Bennett university, He tries to explore different fields and share his expirence with everyone. He usually work on projects or do competitive coding and he is a anime fan,  so you can suggest his some good animes.";
    }
    if (document.getElementById('rad5').checked) {
        document.getElementById('about-data').innerHTML = "<strong>Aryamaan Jain</strong> is a engineering student pursuing a bachelor's in technology in computer science at Bennett university. As these are his beginning years He is widely open to learning new things, He tries to explore different fields and share his expirence with everyone. You can find him wokring on a project, doing compititive coding or watching anime and series, you can suggest him some good watch and, you can also call him <strong> Striker</strong>, Wubba lubba dub dub everyone.";
    }
}

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "alcom.mmt@gmail.com",
        Password: "nozmtpwwroptqkxn",
        To: 'striker.aryu56@gmail.com',
        From: document.getElementById('email').value,
        Subject: document.getElementById('name').value,
        Body: document.getElementById('message').value,
    })
}