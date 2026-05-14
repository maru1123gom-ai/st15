(function () {
  /**
   * DOM 준비 상태 확인 도우미
   * Cafe24 Smart Design 환경에서 defer 없이도 안전하게 실행되도록 처리합니다.
   */
  function runWhenReady(callback) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      window.setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  runWhenReady(function () {
    /**
     * Swiper 인스턴스 초기화
     * autoplay, navigation, pagination을 설정합니다.
     */
    var swiper1 = new Swiper('.swiper1', {
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        addIcons: false,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    });

    /**
     * 재생/정지 토글 버튼 상태 변경 함수
     */
    function updatePlayButton(isPlaying) {
      if (!playToggleButton) {
        return;
      }

      if (isPlaying) {
        playToggleButton.classList.add('is-playing');
        playToggleButton.classList.remove('is-paused');
        playToggleButton.setAttribute('aria-label', '슬라이드 자동 정지');
      } else {
        playToggleButton.classList.remove('is-playing');
        playToggleButton.classList.add('is-paused');
        playToggleButton.setAttribute('aria-label', '슬라이드 자동 재생');
      }
    }

    /**
     * play/pause 토글 로직
     */
    function toggleAutoplay() {
      var isPlaying = playToggleButton.classList.contains('is-playing');
      if (isPlaying) {
        swiper1.autoplay.stop();
        updatePlayButton(false);
      } else {
        swiper1.autoplay.start();
        updatePlayButton(true);
      }
    }

    var playToggleButton = document.querySelector('.swiper-button-play-toggle');
    if (!playToggleButton) {
      return;
    }

    // 기본 상태를 자동 재생으로 설정
    updatePlayButton(true);
    playToggleButton.addEventListener('click', toggleAutoplay);
  });
})();
