function openProfilePage() {
    window.open("https://example.com", "_blank");
  }
  
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
  }
  
  document.getElementById("box1").addEventListener("click", function() {
    togglePopup("popup1");
  });
  
  document.getElementById("box2").addEventListener("click", function() {
    togglePopup("popup2");
  });
  
  document.getElementById("box3").addEventListener("click", function() {
    togglePopup("popup3");
  });
  
  document.getElementById("box4").addEventListener("click", function() {
    togglePopup("popup4");
  });
  
  function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  }
  