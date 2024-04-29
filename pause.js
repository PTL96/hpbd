// Lấy đối tượng audio
var backgroundMusic = document.getElementById("backgroundMusic");

// Phát hoặc tạm dừng âm thanh khi nhấp vào một nút hoặc thực hiện hành động khác
document.getElementById("playButton").addEventListener("click", function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});
