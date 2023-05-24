function getCookieValue(cookieName) {
  return document.cookie.split("; ").reduce((acc, cookie) => {
    const [name, value] = cookie.split("=");
    if (name === cookieName) {
      return value;
    }
    return acc;
  }, "");
}

export function checkCookieAndExecuteAction(
  cookieName,
  actionCallback,
  timeout
) {
  return new Promise((resolve, reject) => {
    const startTimestamp = Date.now();

    function checkCookie() {
      const cookieValue = getCookieValue(cookieName);

      if (cookieValue) {
        actionCallback();
        resolve();
      } else if (Date.now() - startTimestamp >= timeout) {
        handleTimeout();
        reject(new Error("Cookie setting timed out"));
      } else {
        setTimeout(checkCookie, 100);
      }
    }

    function handleTimeout() {
      // Handle the timeout event
      console.log("Cookie setting timed out");
      // Perform any necessary action or display an error message
    }

    checkCookie();
  });
}
