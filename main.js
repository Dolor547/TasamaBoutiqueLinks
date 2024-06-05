async function sharePage() {
    const shareData = {
        title: "Tasama Boutique",
        text: "Second Hand & Vintage Boutiqoue",
        url: "https://developer.mozilla.org",
      };

    try {
        await navigator.share(shareData);
        resultPara.textContent = "Tasama Boutique shared successfully";
      } catch (err) {
        resultPara.textContent = `Error: ${err}`;
      }
}