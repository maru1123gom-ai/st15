// FAQ 아코디언 UI
// 기본은 아코디언 콘텐츠는 숨김
// 클릭시 해당 콘텐츠만 표시하고 나머지는 숨김
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isActive = content.style.display === 'block';
    
    // 모든 콘텐츠 숨김
    document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
    
    // 클릭한 콘텐츠만 표시
    if (!isActive) {
      content.style.display = 'block';
    }
  });
});