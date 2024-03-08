let homeBtn = document.querySelector(".home-btn");
let abtBtn = document.querySelector(".about-btn");
let dldBtn_outer = document.querySelector(".downloadBtn");
let file_name = document.querySelector(".file-name");
let about_nav = document.querySelector(".about-nav");
let contact_btn = document.querySelector(".contact-btn");
let links = document.querySelectorAll(".links a");
let chnl_link = document.querySelectorAll(".chnl-link a");
let abt_chnl = document.querySelector(".abt-chnl");
let contact = document.querySelectorAll(".contact a");
let footer = document.querySelector("footer");
let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBox = document.querySelector(".searchBox");
let signupLink = document.querySelector("#signupLink");
let signinLink = document.querySelector("#signinLink");
let createPassword = document.getElementById("createPassword");
let confirmPassword = document.getElementById("confirmPassword");
let signupForm = document.getElementById("signupForm");
let body = document.querySelector("body");

let timer = 0;

if (document.getElementById("heading").classList.contains("title")) {
    document.querySelector(".title").textContent = "TG-INDEX";
}

// adding under in home btn at first
homeBtn.classList.add("active");

// when clicking about
abtBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block";
    about_nav.style.animation = "strtLoad 1s ease 0s forwards";
});

// when clicking home
homeBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "flex";
    file_name.style.display = "block";
    footer.style.display = "block";
    window.location.href = "#main";
    about_nav.style.animation = "strtLoad 1s ease 0s forwards";
    about_nav.style.display = "none";
});

abt_chnl.addEventListener("click", () => {
    timer = 1;
    chnl_link.forEach((i) => {
        i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite `;
        timer += 0.3;
    });
    timer = 0;
});

function bot_btn_clicked() {
    var about_btn = document.querySelector(".about-btn");
    timer = 1;
    bot_links.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block";
    about_nav.style.animation = "strtLoad 1s ease 0s forwards";
    var links = document.querySelectorAll(".nryt a");
    links.forEach(function (link) {
        link.classList.remove("active");
    });
    about_btn.classList.add("active");
    var links = document.querySelectorAll(".about-nav a");
    links.forEach(function (link) {
        link.classList.remove("active");
    });
    let wlcm = document.querySelector(".wlcm");
    wlcm.classList.add("active");
    var links = document.querySelectorAll(".about-nav a");
    links.forEach(function (link) {
        link.classList.remove("active");
    });
    bot_btn.classList.add("active");
}

footer_btn_clicked = () => {
    timer = 1;
    contact.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });

    timer = 0;
    var about_btn = document.querySelector(".about-btn");
    timer = 1;
    bot_links.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block";
    about_nav.style.animation = "strtLoad 1s ease 0s forwards";
    var links = document.querySelectorAll(".nryt a");
    links.forEach(function (link) {
        link.classList.remove("active");
    });
    about_btn.classList.add("active");
    var links = document.querySelectorAll(".about-nav a");
    links.forEach(function (link) {
        link.classList.remove("active");
    });
    let wlcm = document.querySelector(".wlcm");
    wlcm.classList.add("active");
    var links = document.querySelectorAll(".about-nav a");
    links.forEach(function (link) {
        link.classList.remove("active");
    });
    contact_btn.classList.add("active");
};

contact_btn.addEventListener("click", () => {
    timer = 1;
    contact.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });

    timer = 0;
});

// btn animations
let dldBtn = document.querySelectorAll(".downloadBtn button");
dldBtn.forEach((i) => {
    i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite`;
    timer += 0.3;
    i.style.setProperty("--beforestyl", `button_shine ${2 + Math.random() * 7}s ease  ${Math.random() * 10}s infinite`);
});

timer = 0;
links.forEach((i) => {
    i.style.animation = `linksBtnAn 2s ease ${timer}s infinite`;
    timer += 0.3;
    i.style.setProperty("--beforestyl", `button_shine ${2 + Math.random() * 7}s ease ${Math.random() * 10}s infinite`);
});

timer = 0;

function toggleWidth(element) {
    var links = document.querySelectorAll(".about-nav a");
    links.forEach(function (link) {
        link.classList.remove("active");
    });

    element.classList.add("active");
}

function toggleWidthnav(element) {
    var links = document.querySelectorAll(".nryt a");
    links.forEach(function (link) {
        link.classList.remove("active");
    });

    element.classList.add("active");
    var links = document.querySelectorAll(".about-nav a");
    links.forEach(function (link) {
        link.classList.remove("active");
    });
    let wlcm = document.querySelector(".wlcm");
    wlcm.classList.add("active");
}

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    Shery.mouseFollower();
    Shery.makeMagnet(".magnet");
}

// file name showing
var div = document.getElementById("myDiv");
var text = div.textContent;
if (text.length > 300) {
    div.textContent = text.slice(0, 300) + "....";
}

// video player
const controls = [
    "play-large",
    "rewind",
    "play",
    "fast-forward",
    "progress",
    "current-time",
    "duration",
    //"mute",
    //"volume",
    "captions",
    "settings",
    "pip",
    "airplay",
    // "download",
    "fullscreen",
];
document.addEventListener("DOMContentLoaded", () => {
    const player = Plyr.setup(".player", { controls });
});

// disabling right click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "u") ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
    ) {
        e.preventDefault();
    }
});

const videolink = window.location.href;
const streamlink = videolink.replace("/watch/", "/dl/");

function vlc_player() {
    const openstreamlink = streamlink;
    const openVlc = `vlc://${openstreamlink}`;
    window.location.href = openVlc;
}

function mx_player() {
    const openstreamlink = streamlink;
    const openMx = `intent:${openstreamlink}#Intent;package=com.mxtech.videoplayer.ad;end`;
    window.location.href = openMx;
}

function n_player() {
    const openstreamlink = streamlink;
    const openNplayer = `nplayer-${openstreamlink}`;
    window.location.href = openNplayer;
}

function streamDownload() {
    const openstreamlink = streamlink;
    window.location.href = openstreamlink;
}

function copyStreamLink() {
    const linkToCopy = streamlink.toLowerCase();

    if (!navigator.clipboard) {
        navigator.clipboard = {
            writeText: function (text) {
                return new Promise((resolve, reject) => {
                    try {
                        const textArea = document.createElement("textarea");
                        textArea.value = text;
                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();
                        document.execCommand("copy");
                        document.body.removeChild(textArea);
                        resolve();
                    } catch (err) {
                        reject(err);
                    }
                });
            },
        };
    }

    navigator.clipboard
        .writeText(linkToCopy)
        .then(() => {
            console.log("Stream link copied to clipboard!");
            alert("Stream link copied successfully!");
        })
        .catch((err) => {
            console.error("Failed to copy link: ", err);
            alert("Failed to copy link. Please try manually.");
        });
}

searchBtn.onclick = function () {
    searchBox.classList.add("active");
    closeBtn.classList.add("active");
    searchBtn.classList.add("active");
};
closeBtn.onclick = function () {
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
    clearSearchBox();
};
searchBtn.addEventListener("click", function () {
    console.log("Search query:clicked");
    searchFiles();
});

function searchFiles() {
    var searchBox = document.querySelector(".searchBox");
    if (searchBox.classList.contains("active")) {
        var query = document.getElementById("search-box").value;
        console.log("Search query:", query);
        if (query.trim() !== "") {
            window.location.href = "/search?query=" + encodeURIComponent(query);
        }
    }
}

function clearSearchBox() {
    document.getElementById("search-box").value = "";
}

window.onload = clearSearchBox;

window.addEventListener("DOMContentLoaded", () => {
    const errorPopup = document.getElementById("errorPopup");
    const errorMessage = "{{ error_message }}"; // Fetch error message from server or wherever

    if (errorMessage) {
        errorPopup.textContent = errorMessage;
        errorPopup.style.display = "block"; // Show pop-up
        setTimeout(() => {
            errorPopup.style.display = "none"; // Hide pop-up after 3 seconds
        }, 3000); // 3000 milliseconds = 3 seconds
    }

    signupLink.onclick = function () {
        body.classList.add("signup");
    };
    signinLink.onclick = function () {
        body.classList.remove("signup");
    };

    signupForm.addEventListener("submit", function (event) {
        if (createPassword.value !== confirmPassword.value) {
            event.preventDefault(); // Prevent form submission
            showError("Passwords do not match");
        }
    });

    function showError(message) {
        errorPopup.textContent = message;
        errorPopup.style.display = "block"; // Show pop-up
        setTimeout(() => {
            errorPopup.style.display = "none"; // Hide pop-up after 3 seconds
        }, 3000); // 3000 milliseconds = 3 seconds
    }
});

function getRandomColor() {
    var minBrightness = 64; // Minimum brightness for the color (0-255)
    var maxBrightness = 192; // Maximum brightness for the color (0-255)
    var letters = "0123456789ABCDEF";
    var color = "#";
    var brightness = 0;

    while (brightness < minBrightness || brightness > maxBrightness) {
        color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        // Calculate the brightness of the color
        var r = parseInt(color.substr(1, 2), 16);
        var g = parseInt(color.substr(3, 2), 16);
        var b = parseInt(color.substr(5, 2), 16);
        brightness = (r * 299 + g * 587 + b * 114) / 1000;
    }

    return color;
}

var containers = document.getElementsByClassName("text-container");
for (var i = 0; i < containers.length; i++) {
    containers[i].style.backgroundColor = getRandomColor();
}

// Function to toggle visibility based on img src
function toggleContainers() {
    var imageContainers = document.querySelectorAll(".image-container");
    var textContainers = document.querySelectorAll(".text-container");

    imageContainers.forEach(function (container, index) {
        var imgSrc = container.querySelector("img").getAttribute("src");
        if (imgSrc.includes("http")) {
            // container.style.display = 'block';
            textContainers[index].style.display = "none";
        } else {
            container.style.display = "none";
            // textContainers[index].style.display = 'block';
        }
    });
}

// Run the toggleContainers function once the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    toggleContainers();
});

document.addEventListener("DOMContentLoaded", function () {
    const selectAllCheckbox = document.getElementById("selectAll");
    const fileCheckboxes = document.querySelectorAll(".fileCheckbox");
    const copyButton = document.getElementById("copySelected");
    const downloadButton = document.getElementById("downloadSelected");
    // Update the rows variable when the table pagination changes
    document.querySelectorAll(".pagination-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            setTimeout(() => {
                rows = document.querySelectorAll(".file-name tbody tr");
                filterRows();
            }, 100);
        });
    });
    selectAllCheckbox.addEventListener("change", function () {
        fileCheckboxes.forEach((checkbox) => {
            checkbox.checked = selectAllCheckbox.checked;
        });
        updateButtonState();
    });

    fileCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            updateButtonState();
        });
    });

    function updateButtonState() {
        const checkedCount = document.querySelectorAll(".fileCheckbox:checked").length;
        if (checkedCount === 0) {
            copyButton.disabled = true;
            downloadButton.disabled = true;
            copyButton.style.opacity = 0.5;
            downloadButton.style.opacity = 0.5;
        } else {
            copyButton.disabled = false;
            downloadButton.disabled = false;
            copyButton.style.opacity = 1;
            downloadButton.style.opacity = 1;
        }
        if (checkedCount === fileCheckboxes.length) {
            selectAllCheckbox.checked = true;
        } else if (checkedCount === 0) {
            selectAllCheckbox.checked = false;
            selectAllCheckbox.indeterminate = false;
        } else {
            selectAllCheckbox.indeterminate = true;
        }
    }

    copyButton.addEventListener("click", function () {
        const urls = Array.from(document.querySelectorAll(".fileCheckbox:checked"))
            .map((checkbox) => checkbox.getAttribute("data-url"))
            .join("\n");
        navigator.clipboard.writeText(urls);
        alert("URLs copied to clipboard:\n" + urls);
    });

    downloadButton.addEventListener("click", function () {
        const urls = Array.from(document.querySelectorAll(".fileCheckbox:checked"))
            .map((checkbox) => checkbox.getAttribute("dl-url"));
        urls.forEach((url) => {
            const a = document.createElement("a");
            a.href = url;
            a.download = "";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });

    const singlecopyButtons = document.querySelectorAll(".copy-url");

    singlecopyButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const url = this.closest("tr").querySelector(".filename a").getAttribute("href");
            navigator.clipboard.writeText(url);
            alert("URL copied to clipboard: " + url);
        });
    });

    const singledownloadButtons = document.querySelectorAll(".download-url");

    singledownloadButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const url = this.getAttribute("data-url");
            const a = document.createElement("a");
            a.href = url;
            a.download = ""; // This is required for some browsers to initiate the download
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });

    // Disable buttons and reduce opacity on page load
    updateButtonState();
});
