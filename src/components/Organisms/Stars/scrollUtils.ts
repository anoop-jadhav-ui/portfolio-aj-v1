interface SettingProps {
  delay: number;
}

const checkScrollSpeed = (settings?: SettingProps) => {
  let _settings = settings || { delay: 50 };

  let lastPos: number;
  let newPos: number;
  let timer: NodeJS.Timeout;
  let delta: number;
  let delay = _settings?.delay;

  const clear = () => {
    lastPos = -1;
    delta = 0;
  };

  clear();

  return () => {
    newPos = window.scrollY;
    if (lastPos !== -1) {
      delta = newPos - lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);

    return delta;
  };
};

export { checkScrollSpeed };
