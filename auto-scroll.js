(() => {
  const target = [].filter
    .call(document.all, node => node.offsetHeight !== undefined)
    .sort((n1, n2) => n2.offsetHeight - n1.offsetHeight)[0];
  const _to_scroll = () => {
    const cb = () =>
      window.scroll({
        top: target.offsetHeight,
        behavior: 'smooth'
      });
    cb();
    _scrollTimer = setInterval(cb, 3 * 1000);
    _scrollFlag = true;
  };
  const _stop_scroll = () => {
    clearInterval(_scrollTimer);
    _scrollFlag = false;
  };
  window._scrollFlag === undefined ? (_scrollFlag = false) : undefined;
  _scrollFlag === false ? _to_scroll() : _stop_scroll();
})();
