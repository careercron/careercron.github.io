(() => {
  const pi = new Date("March 14, 2023 00:00:00");

  let = time = new Date();

  const decrementTimeByASecond = () => {
    time = new Date(time.getTime() + 1000);

    const diff = pi.getTime() - time.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) document.getElementById("in").innerText = "";

    document.getElementById("time").innerText = `${
      days === 0 ? "Tomorrow" : `${days} ${days > 1 ? "days" : "day"}`
    }, ${Math.ceil((diff / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, "0")}:${Math.floor((diff / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0")}:${Math.floor((diff / 1000) % 60)
      .toString()
      .padStart(2, "0")},`;

    if (
      `${time.getMonth()} ${time.getDay()}` ===
      `${pi.getMonth()} ${pi.getDay()}`
    ) {
      !document
        .getElementById("prerelease")
        .classList.value.includes("hidden") &&
        document.getElementById("prerelease").classList.add("hidden");
      document
        .getElementById("alphaRelease")
        .classList.value.includes("hidden") &&
        document.getElementById("alphaRelease").classList.remove("hidden");
    }
  };

  decrementTimeByASecond();

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.getElementById("body").classList.value = "dark";
  }

  setInterval(() => decrementTimeByASecond(), 1000);
})();
