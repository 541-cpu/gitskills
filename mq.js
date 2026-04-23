document.addEventListener('DOMContentLoaded', function() {
  // 给所有问题链接绑定点击事件
  document.querySelectorAll('.question a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // 阻止a标签跳转
      // 找到当前问题所在的 .q-item
      const item = this.closest('.q-item');
      // 找到对应的答案元素
      const answer = item.querySelector('.answer');
      // 切换显示/隐藏状态
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
});