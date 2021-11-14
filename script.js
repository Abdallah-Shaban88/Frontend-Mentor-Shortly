      const menuBtn = document.querySelector(".menu-burger i"),
        navMenu = document.querySelector(".nav-links"),
        shortenInput = document.querySelector(".shorten-input"),
        shortenBtn = document.querySelector(".shorten-btn"),
        shortedLinks = document.querySelector(".shorted-links")

      menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });
      document.addEventListener("click", (e) => {
        e.target.className == "fa fa-bars"
          ? console.log("123")
          : navMenu.classList.remove("active");
      });
      
      document.querySelector('form').addEventListener('submit', e => {
          e.preventDefault()
          shortingURL(shortenInput.value)
        });
        
        //   shortenBtn.addEventListener("click", e => {
            //     e.preventDefault;
            
            //   });
            
            async function shortingURL(targetLink) {
                console.log(targetLink);
                let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${targetLink}/very/long/link.html`)
        let data = await response.json();
        renderUrl(targetLink, data.result.full_short_link) 
        const copyBtn = Array.from(document.querySelectorAll('.shorted-link button'))
        console.log(copyBtn);
        copyBtn.map( btn => {
            btn.addEventListener('click', (e) => {
                const text = e.target.previousElementSibling;
                btn.textContent = 'copied!';
                btn.style.backgroundColor = "hsl(257, 27%, 26%)";
                navigator.clipboard.writeText(text.textContent);
            })
        })
      }
    function renderUrl(targetLink,shortenUrl) {
      shortedLinks.innerHTML += `<div class="shorted-link">
          <a href="${targetLink}">${targetLink}</a>
          <a href="${shortenUrl}" class='shorten-url'>${shortenUrl}</a>
          <button>copy</button>
        </div>`
    }