document.getElementById("profileBtn").addEventListener("click", function () {
      document.getElementById("description").textContent =
        "I’m a dedicated and detail-oriented individual with a strong foundation in web development and IT. I have hands-on experience in front-end design, responsive layouts, and modern web technologies. I'm passionate about learning, building real-world projects, and growing as a developer.";
    document.getElementById("nameTitle").style.display = "none";
    document.getElementById("mainImg").src = "assets/profile.jpg";
    document.getElementById("profileContainer").style.display = "block";
  });

AOS.init();
