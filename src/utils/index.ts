/**
 * 获取当前操作系统
 * @returns {string} 操作系统名
 */
export function getOperatingSystem(): string {
  const userAgent = navigator.userAgent + navigator.vendor + window.opera;
  let os = "";

  if (/android/i.test(userAgent)) {
    os = "android";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    os = "iphone";
  } else if (/Mac/.test(userAgent)) {
    os = "macos";
  } else if (/Windows/.test(userAgent)) {
    os = "windows";
  }

  return os;
}

/**
 * 根据当前操作系统显示对应的下载按钮
 * @param {string} os 操作系统名
 */
export function showDownloadButton(os: string) {
  const buttons: HTMLElement[] = Array.from(document.getElementsByClassName("part1_download")).map(element => element as HTMLElement);
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains(os)) {
      buttons[i].style.display = "flex";
    }
  }
}