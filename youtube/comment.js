const showHideComments = () => {
  const cssDiscussionId = 'watch-discussion';
  const element = document.getElementById(cssDiscussionId);

  const areCommentsHidden = element && element.style.display === 'none';
  element.style.display = areCommentsHidden ? 'block' : 'none';
};

showHideComments();
