document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------
    // BUTTON ELEMENTS
    // --------------------------------

    const enterButton = document.getElementById("enterButton");
    const enterBtn = document.getElementById("enterBtn");
    const designButton = document.getElementById("designButton");
    const anomalyButton = document.getElementById("anomalyButton");
    const worksButton = document.getElementById("worksButton");
    const finalEnterButton = document.getElementById("finalEnterButton");

    // --------------------------------
    // SECTION ELEMENTS
    // --------------------------------

    const scanSection = document.getElementById("scan");
    const designSection = document.getElementById("design");
    const worksSection = document.getElementById("works");
    const experienceSection = document.getElementById("experience");

    // --------------------------------
    // HELPER FUNCTION
    // --------------------------------

    function scrollToSection(section) {
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

    // --------------------------------
    // NAVIGATION BUTTONS
    // --------------------------------

    if (enterButton) {
        enterButton.addEventListener("click", function () {
            scrollToSection(scanSection);
        });
    }

    if (enterBtn) {
        enterBtn.addEventListener("click", function (event) {

            event.preventDefault();

            const glitchTransition =
                document.getElementById("glitchTransition");

            if (glitchTransition) {
                glitchTransition.classList.add("active");
            }

            setTimeout(function () {
                scrollToSection(experienceSection);
            }, 350);

            setTimeout(function () {
                if (glitchTransition) {
                    glitchTransition.classList.remove("active");
                }
            }, 1200);

        });
    }

    if (designButton) {
        designButton.addEventListener("click", function () {
            scrollToSection(designSection);
        });
    }

    if (anomalyButton) {
        anomalyButton.addEventListener("click", function () {
            scrollToSection(scanSection);
        });
    }

    if (worksButton) {
        worksButton.addEventListener("click", function () {
            scrollToSection(worksSection);
        });
    }

    if (finalEnterButton) {
        finalEnterButton.addEventListener("click", function () {
            scrollToSection(scanSection);
        });
    }

    // --------------------------------
    // SCAN SYSTEM
    // --------------------------------

    const scanButton = document.getElementById("scanButton");
    const investigateButton =
        document.getElementById("investigateButton");
    const status = document.getElementById("status");
    const scanPanel = document.getElementById("scanPanel");
    const scanMessage = document.getElementById("scanMessage");
    const progressBar = document.getElementById("progressBar");
    const scanPercent = document.getElementById("scanPercent");
    const anomalyResult = document.getElementById("anomalyResult");

    if (
        scanButton &&
        investigateButton &&
        status &&
        scanPanel &&
        scanMessage &&
        progressBar &&
        scanPercent &&
        anomalyResult
    ) {

        scanPanel.style.display = "none";
        investigateButton.style.display = "none";

        scanButton.addEventListener("click", function () {

            let progress = 0;

            scanButton.disabled = true;
            scanButton.textContent = "Scanning...";

            status.textContent = "SYSTEM STATUS: SCANNING...";
            scanPanel.style.display = "block";
            scanMessage.textContent =
                "INITIALIZING REALITY SCAN...";

            progressBar.style.width = "0%";
            scanPercent.textContent = "0%";
            anomalyResult.textContent = "";
            investigateButton.style.display = "none";

            const scan = setInterval(function () {

                progress += 5;

                progressBar.style.width = progress + "%";
                scanPercent.textContent = progress + "%";

                if (progress === 25) {
                    scanMessage.textContent =
                        "SEARCHING FOR DISTORTIONS...";
                }

                if (progress === 50) {
                    scanMessage.textContent =
                        "ANALYZING ENVIRONMENT...";
                }

                if (progress === 75) {
                    scanMessage.textContent =
                        "UNIDENTIFIED SIGNAL DETECTED...";
                }

                if (progress >= 100) {

                    clearInterval(scan);

                    status.textContent =
                        "SYSTEM STATUS: ANOMALY DETECTED";

                    scanMessage.textContent =
                        "SCAN COMPLETE.";

                    anomalyResult.textContent =
                        "An unexpected signal exists beyond the visible layer.";

                    investigateButton.style.display =
                        "inline-block";

                    scanButton.disabled = false;
                    scanButton.textContent =
                        "Scan Complete ↗";
                }

            }, 100);

        });

        investigateButton.addEventListener("click", function () {

            const result = document.createElement("p");

            result.className = "investigation-result";

            result.textContent =
                "You have crossed the boundary. " +
                "The system is no longer observing reality... " +
                "It is observing you.";

            investigateButton.replaceWith(result);

        });

    }

    // --------------------------------
    // SCROLL REVEAL ANIMATION
    // --------------------------------

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealOnScroll = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        revealOnScroll.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {
            revealOnScroll.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("active");
        });

    }

});